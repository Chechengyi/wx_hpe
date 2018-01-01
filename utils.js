var path = 'http://127.0.0.1:3000'

// var root = path + '/magazines/get1'

var root = {}
// 获取杂志目录
root.getMagazine = path + '/magazines/get1'
// 获取文章目录
root.getDocList = path + '/doclist/1'
// 获取杂志名称
root.getMagazine_info = path + '/magazines/name'
// 获取文章信息
root.getDoc = path + '/doclist/getdoc'


module.exports = root
