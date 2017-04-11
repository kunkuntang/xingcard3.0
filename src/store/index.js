import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

const state = {
  data: {},
  departList: [],
  title: '',
  contactList: [],
  curIdx: 0,
  isShowBar: false,
  isShowToast: false,
  isLoading: false
}

const mutations = {
  updateData (state, reqData) {
    state.data = reqData
    state.departList = reqData.departments.map((depart) => depart.name)
    state.title = reqData.department_belong
    state.contactList = reqData.departments[0].members
  },
  updateCurIdx (state, idx) {
    state.curIdx = idx
  },
  changeTitle (state, idx) {
    state.title = state.data.departments[idx].name
  },
  toggleBar (state) {
    state.isShowBar = !state.isShowBar
  },
  showToast (state) {
    state.isShowToast = true
  },
  hideToast (state) {
    state.isShowToast = false
  },
  closeLoading (state) {
    state.isLoading = false
  },
  openLoading (state) {
    state.isLoading = true
  },
  updateContactList (state, newList) {
    state.contactList = newList
  }
}

const getters = {
  pageTitle: (state) => state.title
}

const actions = {
  changeDepart ({commit, state}, idx) {
    let tempData = state.data.departments[idx].members
    commit('toggleBar')
    commit('changeTitle', idx)
    commit('updateContactList', tempData)
  },
  searchContact ({commit, state}, keyword) {
    let tempData = []
    state.data.departments.map((depart) => {
      depart.members.map((contact) => {
        if (contact.username.indexOf(keyword) !== -1) {
          tempData.push(contact)
        }
      })
    })
    commit('updateContactList', tempData)
  }
}

const store = new vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store

