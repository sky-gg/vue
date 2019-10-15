import ToastConfig from './Toast.vue'
const ToastConstructor = Vue.extend(ToastConfig)

let instance
const Toast = function(options) {
  if (instance) return
  let duration = 2000
  if (typeof options === 'string') {
    options = {
      msg: options
    }
  } else {
    duration = options.duration ? options.duration : 2000
  }
  instance = new ToastConstructor({
    data: options
  })
  instance.showToast()
  setTimeout(() => {
    instance.hideToast()
    instance = null
  }, duration)
  instance.$mount()
  document.body.appendChild(instance.$el)
  return instance
}
export default Toast
