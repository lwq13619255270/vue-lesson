export default {
    namespaced: true, // 命名空间
    state: {
        userName: "你猜"
    },
    getters: {
        getUserName: (state) => {
            return "测试" + state.userName;
        }
    },
    mutations: {
        change_user( state, payload) {
            state.userName = payload
        }
    },
    actions: {
        
    }
}