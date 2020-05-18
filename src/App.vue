<template>
<router-view></router-view>
</template>

<script>
export default {
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title || 'Welcome to Library';
      },
      immediate: true,
    },
  },
};
</script>

<style>

</style>
