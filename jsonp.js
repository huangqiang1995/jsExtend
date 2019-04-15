class Jsonp {
  constructor() {}
  get(url, data, callback) {
    var sc = document.createElement('script');
    var head = document.getElementsByTagName('head')[0];
    var callbackRandom = 'jsonpsuccess_' + parseInt(Math.random() * 100);
    console.log(callbackRandom);
    var urlDataArr = [];
    var urlData = '';
    sc.type = 'text/javascript';
    for (const key in data) {
      urlDataArr.push(key + '=' + data[key]);
    }
    urlData = urlDataArr.join('&');
    if (urlData.length > 0 && urlData != null) {
      sc.src = url + '?' + urlData + "&callback=" + callbackRandom;
    } else {
      sc.src = url + "?&callback=" + callbackRandom;
    }
    head.appendChild(sc);
    window[callbackRandom] = function (res) {
      callback(res);
      delete window[callbackRandom];
      head.removeChild(sc);
    }
  }
}

new Jsonp().get('http://suggest.taobao.com/sug?code=utf-8', {
  q: '水杯'
}, function (data) {
  console.log(data);
})