//es6
class LazyImg {
  constructor(el) {
    this.imgArr = [];
    if (el) {
      this.imgArr = Array.from(document.querySelectorAll(el));
    }
    this.init();
  }
  init() {
    this.traversal(); //首先执行一次便利判断首屏需要加载的图片
    this.listenScroll(); //然后监听滚动条事件
  }
  listenScroll() {
    window.addEventListener('scroll', this.throttle(() => {
      this.traversal();
    }))
  }
  traversal() { // traversal是遍历的意思  
    this.imgArr.forEach((item, index) => {
      this.judegEl(item, index);
    })
  }
  judegEl(el, index) {
    const elTop = el.getBoundingClientRect().top;
    let typeTop = window.innerHeight;
    typeTop >= elTop && this.loadImg(el, index);
  }
  loadImg(el, index) {
    el.src = el.dataset.src;
    this.imgArr.splice(index, 1);
  }
  throttle(fn, mustRun = 100) {
    let previous = null;
    let that = this;
    let arg = arguments;
    return function () {
      const now = new Date();
      if (!previous) {
        previous = now;
      }
      const remaining = now - previous;
      if (mustRun && remaining >= mustRun) {
        fn.apply(that, arg);
        previous = now;
      }
    }
  }
}

new LazyImg('img')