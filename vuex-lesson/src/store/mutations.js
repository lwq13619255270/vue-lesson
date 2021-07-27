export default {
    // 放的commit提交的mutation
    /**
     * 修改room
     * @param {*} state 
     * @param {*} payload 修改的值 
     */
    change_room( state, payload) {
        state.room = payload
    }
}