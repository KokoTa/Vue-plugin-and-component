<template>
  <ul class="tree">
    <li
      v-for="node in visibleNodes"
      :key="node.key"
      class="tree-node"
      :style="{ 'padding-left': `${node.level * 16}px` }"
    >
      <i
        v-if="node.children"
        class="tree-node-arrow"
        :class="{ expanded: status[node.key].expanded }"
        @click="changeExpanded(node.key)"
      >
      </i>
      {{ node.label }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: Array,
    expandedKeys: { // 默认展开的节点
      type: Array,
      default: () => [],
    },
  },
  computed: {
    // 将 data 转为一维数组，用 v-for 进行循环渲染
    // 计算属性不能有副作用
    nodes() {
      const nodes = this.getNodes(this.data);
      return nodes;
    },
    // 这里为什么只显示可视节点？
    // 按照用 nodes 来渲染并根据 v-show 来控制显示和隐藏的逻辑来看，实际上是把所有节点都渲染了，如果数量巨大，渲染速度将变慢
    // 直接显示可见元素可以减少渲染的节点
    // PS：这里由于 status 发生了改变，导致 visibleNodes 也发生了改变
    visibleNodes() {
      return this.nodes.filter(node => this.status[node.key].visible);
    },
  },
  data() {
    return {
      status: [] // 保存是否可视、是否已展开的状态，key 为节点的 key，有 visible 和 expanded 两个属性
    }
  },
  methods: {
    // 递归，返回一个所有节点的一维数组，渲染时按顺序渲染
    getNodes(data, level = 0, parent = null) {
      let nodes = [];

      data.forEach((item) => {
        const node = { ...item, level, parent };
        nodes.push(node);

        if (item.children) {
          const children = this.getNodes(item.children, level + 1, node); // 返回一个一维数组
          node.children = children.filter(child => child.level === level + 1); // 添加子节点（过滤掉孙子、曾孙等节点，只保留儿子节点）
          nodes = [...nodes, ...children]; // 一维数组接龙
        }
      });

      return nodes;
    },
    // 遍历 nodes，计算每个节点的状态
    getStatus(nodes) {
      const status = {};
      nodes.forEach((node) => {
        const parentStatus = status[node.parent && node.parent.key] || {}; // 是否存在父节点
        status[node.key] = {
          expanded: this.expandedKeys.includes(node.key), // 是否展开（计算属性更新是因为这里的 expandedKeys 发生了改变）
          visible: node.level === 0 || (parentStatus.expanded && parentStatus.visible), // 是否可视
        };
      });
      return status;
    },
    // 展开或关闭
    changeExpanded(key) {
      /**
       * 只判断该节点及其子节点
       */
      const node = this.nodes.find(n => n.key === key); // 找到该节点
      const newExpanded = !this.status[key].expanded; // 新的展开状态

      // 递归该节点的后代节点，更新节点状态
      const updateVisible = (n, visible) => {
        n.children.forEach((child) => {
          this.status[child.key].visible = visible && this.status[n.key].expanded;
          if (child.children) updateVisible(child, visible);
        });
      };

      this.status[key].expanded = newExpanded;
      updateVisible(node, newExpanded);

      /**
       * 计算展开和关闭时间
       */
      console.time('expanded change');

      this.$nextTick(() => {
        console.timeEnd('expanded change');
      });
    },
  },

  /**
   * 计算渲染时间
   */
  beforeCreate() {
    console.time('first rendering');
  },
  mounted() {
    console.timeEnd('first rendering');
  },

  watch: {
    nodes: {
      // 获取 nodes 的同时获取节点状态
      handler() {
        this.status = this.getStatus(this.nodes);
      },
      // 立即初始化 status，默认情况下第一次渲染不会触发 watch
      immediate: true,
    },
    // 当 expandedKeys 改变时重新获取节点状态
    expandedKeys() {
      this.status = this.getStatus(this.nodes);
    }
  }
};
</script>

<style lang="scss">
.tree-node-arrow {
  display: inline-block;
  height: 10px;
  width: 10px;
  background: red;
  margin-left: 20px;
}
.expanded {
  background: blue;
}
</style>