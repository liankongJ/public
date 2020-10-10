<template>
<div>
  about
  <button @click="back">返回</button>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.push({
        name: 'Home'
      });
    }
  }
};
</script>
