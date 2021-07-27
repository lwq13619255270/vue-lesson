<template>
  <div id="app">
    <!-- 写法一 -->
    {{ $store.state.lesson }}
    {{ $store.state.room }}
    {{userName}}
    <!-- 写法二：  -->
    {{ lesson }} {{ room }}

    <!-- getter -->
    {{getName}}
    {{getUserName}}
    <button @click="change()">改变值</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    // lesson() {
    //   return this.$store.state.lesson
    // },
    // room() {
    //   return this.$store.state.room
    // },

    // 使用vuex的辅助方法mapState(包装的方法)简写上面的两个值
    ...mapState(["lessson", "room"]), // 获取state中的数据 
    ...mapGetters(['getName']),
    // ...mapState({u: state=>state.lesson})  // 更改state中的数据变量名
    // 获取子模块
    ...mapState('user', ['userName']) ,
    ...mapGetters('user', ['getUserName'])
  },
  methods: {
    ...mapMutations(['change_room']),
    ...mapMutations('user', ['change_user']),
    ...mapActions(['change_room']),
    change() {
      // 同步 change_room 提交mutation类型
      // this.$store.commit('change_room', '302');  // 普通方法执行
      // this.$store.commit('user/change_user', '修改后的子模块名称');  // 普通方法执行
      // 使用辅助方法执行 
      // this.change_room('302');
      // this.change_user('修改后的子模块名称:');

      // 异步修改
      // this.$store.dispatch('change_room', '4444')  // 普通方法修改
      // 使用辅助方法
      this.change_room('4444')
    }
  }
};
</script>


