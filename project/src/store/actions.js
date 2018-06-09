import types from './types'

// 搜索全部组织架构
export const getUser = ({ commit }, data) => {
  /**
     * @param 可以打印argument  形参第一位 可以打印出当前的state  和commin  以及根store  详情可以查看官方的vuex文本
     * commit  详解
     *  commit 定义里更改mutions的事件类型 actions 不能直接操作mutinons  以及state
     *  比如通过types 定义事件类型 大写 然后通过事件类型 映射到mutinons里面具体的事件 然后更改state
     */
  commit(types.GET_USER)
}
