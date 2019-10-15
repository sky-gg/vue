<template>
  <transition name="fade">
    <div
      v-if="isShow"
      class="common-toast"
    >
      <span :class="'content '+type">{{ msg }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      msg: '',
      isShow: true,
      type: 'info'
    }
  },
  methods: {
    showToast() {
      this.isShow = true
    },
    hideToast() {
      this.isShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.common-toast {
  text-align: center;
  margin-bottom: 15px;
  .content {
    padding: 5px 10px;
    border-radius: 5% 5% 5% 5%;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 20px;
  }

  .success {
    background: #67c23a;
  }
  .info {
    background: #909399;
  }
  .error {
    background: #f56c6c;
  }
}
.fade-enter-active,
.fade-leave-active {
  animation-name: fadeOutUp;
}
.fade-enter,
.fade-leave-to {
  animation-name: fadeInDown;
}
@keyframes fadeOutUp {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
