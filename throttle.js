function throttle(fn, mustRun = 500) {
  var previos = null;
  var that = this;
  var arg = arguments;
  return function () {
    var now = new Date();
    if (!previos) {
      previos = now;
    }
    const remaining = now - previous;
    if (mustRun && remaining >= mustRun) {
      fn.apply(that, arg);
      previos = now;
    }
  }
}