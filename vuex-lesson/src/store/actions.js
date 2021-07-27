export default {
    // 通过dispatch派发的actions
    change_room({commit}, payload) {
        setTimeout(() => {
            commit('change_room', payload)
        }, 2000)
    }
}