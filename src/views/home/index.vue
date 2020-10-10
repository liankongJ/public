<template>
<div>
  <div>
    {{name}}
    {{cname}}
  </div>
  <div>
    <button @click="clickBus">vue线程</button>
  </div>
  <hello-world></hello-world>
</div>
</template>

<script>
import {
  mapMutations,
  mapState
} from 'vuex';
import helloWorld from '@/components/HelloWorld.vue';
import SourceMirror from './resource/SourceMirror';

export default {
  components: {
    helloWorld
  },
  data() {
    return {};
  },
  computed: {
    // 获取vuex值
    ...mapState('app', ['name']),
    ...mapState('comp', ['cname'])
  },
  created() {
    // 获取vuex值
    this.setName('设置vuex值');
  },
  methods: {
    ...mapMutations('app', ['setName']),
    clickBus() {
      this.bus.$emit('changeIncidet', '调用线程事件');
    }
  },
  mounted() {
    const params = {
      name: 'admin',
      passWord: 'admin'
    };
    SourceMirror.login(params).then(res => {
      if (res.data.code == 200 && res.data.data) {}
    });
  }
};
</script>
