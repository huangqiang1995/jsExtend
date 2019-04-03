Object.prototype.clone = function (obj) {
  if (typeof obj !== 'object') {
    return obj
  } else {
    if (obj instanceof Array) {
      var arr = []
      obj.forEach(item => {
        arr.push(item)
        if (typeof obj === 'object') {
          Object.clone(item)
        }
      })
      return arr
    }
    if (obj instanceof Object) {
      var cloneObj = {}
      Object.keys(obj).forEach(item => {
        cloneObj[item] = obj[item]
        if (typeof obj === 'object') {
          Object.clone(obj[item])
        }
      })
    }
  }
}