import Vue from 'vue'
import Vuex from 'vuex'

import me from './assets/me.jpeg'
import you from './assets/you.jpg'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chatStyle: true,
    sequence: '',
    chatHistory: [{
      'type': 'me',
      'className': 'chat-card-1',
      'seg': 'hello',
      'img': me
    }, {
      'type': 'you',
      'className': 'chat-card-2',
      'seg': 'goodbye',
      'img': you
    }]
  },
  mutations: {
    toggle (state) {
      state.chatStyle = !state.chatStyle
    },
    writeSome (state) {
      if (state.sequence.trim().length > 0) {
        state.chatHistory.push({
          'type': 'me',
          'className': 'chat-card-1',
          'seg': state.sequence,
          'img': me
        })
        state.sequence = ''
      }
    }
  },
  actions: {}
})
