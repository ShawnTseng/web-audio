<template>
  <div>
    <span class="container" v-for="page in pageList" :key="page.name">
      <router-link :to="{ name: page.name }">{{ page.text }}</router-link>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageList: [],
    };
  },
  created() {
    this.pageList = [
      { text: 'Chapter1', name: 'chapter1' },
      { text: 'Chapter2', name: 'chapter2' },
    ];
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
}
</style>
