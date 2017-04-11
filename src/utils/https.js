import axios from 'axios'

const post = function (url, loginKey, callback) {
  axios.post(url, {
    key: 82015,
    name: loginKey
  },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      transformRequest: [function (data) {
        /* global $ */
        data = $.param(data)
        return data
      }]
    }).then(callback)
}

export default post
