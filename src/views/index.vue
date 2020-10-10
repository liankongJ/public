<template>
<div>
  {{name}}
</div>
</template>

<script>
import {
  mapMutations,
  mapState
} from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState('app', ['name'])
  },
  created() {
    this.setName('高军');
  },
  methods: {
    ...mapMutations('app', ['setName'])
  }
};
</script>
