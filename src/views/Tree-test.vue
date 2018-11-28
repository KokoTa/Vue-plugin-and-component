<template>
  <tree :data="data" :expanded-keys="expandedKeys"></tree>
</template>

<script>
import Tree from '@/components/Tree-test'

export default {
  components: {
    Tree
  },
  data() {
    return {
      // 4 层，每层 2 个，即共有 2 + 4 + 8 + 16 = 30 个节点
      // data: this.getRandomData(3, 2),
      data: this.getRandomData(3, 10),
      expandedKeys: ['1'],
    };
  },
  methods: {
    getRandomData(layers, count, parent) {
      return Array.from({ length: count }, (v, i) => {
        const key = (parent ? `${parent.key}-` : '') + (i + 1);
        const node = {
          key,
          label: `节点 ${key}`,
        };
        if (layers > 1) {
          node.children = this.getRandomData(layers - 1, count, node);
        }
        return node;
      });
    },
  },
};
</script>