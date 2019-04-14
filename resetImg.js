/**
 * 4/14 使用js动态挂载onerror事件需要注意的几点
 *       需在img加载之前挂载上onerror事件，所以需要和懒加载配合
 *       无法监听onerror事件，因为该事件不会冒泡
 * 
 */

class ResetImg {
  constructor() {
    //这一步的目的是缓存重新加载图片 
    this.errImg = new Image();
    this.errImg.src = 'img/0dcc7918976b1b9f523a093cae001bf5.jpg';
    //errImg.onerror = resetImg(errImg, 'img/0dcc7918976b1b9f523a093cae001bf5.jpg', 3, true);
    this.imgArr = document.getElementsByTagName("img");
    this.init();
  }
  init() {
    this.bindingDom();
  }
  bindingDom() {
    if (this.imgArr.length > 0) {
      for (var i = 0; i < this.imgArr.length; i++) {
        this.imgArr[i].onerror = () => {
          // this.imgArr[i]['data-src'] = this.imgArr[i].src;
          console.log('图片错误');
          this.src = 'img/e1755a3b3d74f6fb9a43d07d83f25e2e.jpg'
          // this.imgArr[i].src = this.errImg.src;
          this.onerror = null;
          // this.imgArr[i].onclick = function (ev) {
          //   var e = ev || event;
          //   console.log('点击重新加载图片');
          // }
        }
      }
    }
  }

}

new ResetImg();