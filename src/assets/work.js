// 
import Vue from 'vue'
const news = {
  // 
  newsuserControllerdelete: function newsuserControllerdelete(ip, postdata) {
    return Vue.http.post(ip, postdata).then(response => {
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  }
}
export default news
