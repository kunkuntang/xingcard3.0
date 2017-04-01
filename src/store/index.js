import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

import data from '@/mock/data'

const state = {
  departList: data.departments.map((depart) => depart.name),
  title: data.department_belong,
  contactList: data.departments[0].members,
  curIdx: 0,
  isShowBar: false
}

const mutations = {
  changeTitle (state, idx) {
    state.title = data.departments[idx].name
  },
  toggleBar (state) {
    state.isShowBar = !state.isShowBar
  },
  updateContactList (state, newList) {
    state.contactList = newList
  }
}

const getters = {
  pageTitle: (state) => state.title
}

const actions = {
  changeDepart ({commit}, idx) {
    let tempData = data.departments[idx].members
    commit('toggleBar')
    commit('changeTitle', idx)
    commit('updateContactList', tempData)
  },
  searchContact ({commit}, keyword) {
    let tempData = []
    data.departments.map((depart) => {
      depart.members.map((contact) => {
        console.log(contact.username)
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

