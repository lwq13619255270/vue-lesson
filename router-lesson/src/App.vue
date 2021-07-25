<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link :to="{path:'/home'}">Home</router-link> |
      <router-link :to="{name:'About'}">About</router-link>
      <router-link to="/user">user</router-link> -->
      <el-container>
        <el-header>
          <el-menu
            :default-active="'/home'"
            :router="true"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="/home">首页</el-menu-item>
            <el-menu-item index="/about">关于详情</el-menu-item>
            <el-menu-item index="/user">用户中心</el-menu-item>
            >
          </el-menu>
        </el-header>
        <el-main>
           <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </div>
    <!-- <router-view /> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  min-height: calc(100vh - 120px);
}
</style>
