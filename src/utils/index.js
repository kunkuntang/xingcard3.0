import axios from 'axios'

const axiosPost = (url, loginKey, callback) => {
  axios.post(url, {
    key: 82015,
    name: loginKey
  }, {}).then(callback)
}

const getCookies = (cookieKey) => {
  let strCookie = document.cookie
  let arrCookie = strCookie.split('; ')
  for (let i = 0; i < arrCookie.length; i++) {
    let arr = arrCookie[i].split('=')
    if (arr[0] === cookieKey) {
      // 'www.xingkong.us'
      return arr[1]
    }
  }
  return false
}

const setCookies = (expireDays, value) => {
  let date = new Date()
  date.setTime(date.getTime() + expireDays * 24 * 3600 * 1000)
  document.cookie = 'www.xingkong.us=' + value + '; expires=' + date.toGMTString()
}

const addEvent = (obj, eventType, callback, useCapture) => {
  if (obj.addEventListener) {
    obj.addEventListener(eventType, callback, useCapture || false)
  } else if (obj.attachEvent) {
    obj.attachEvent('on' + eventType, callback)
  }
}

const removeEvent = (obj, eventType, callback) => {
  if (obj.removeEventListener) {
    obj.removeEventListener(eventType, callback)
  } else if (obj.detachEvent) {
    obj.detachEvent('on' + eventType, callback)
  }
}

export default {
  setCookies: setCookies,
  getCookies: getCookies,
  axiosPost: axiosPost,
  addEvent: addEvent,
  removeEvent: removeEvent
}
