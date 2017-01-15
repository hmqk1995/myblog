var qiniu = require("qiniu");

qiniu.conf.ACCESS_KEY = 'pg4ESUeV48J-3pD_mGXYAVGcRgAL5-FuISQEWcgg';
qiniu.conf.SECRET_KEY = 'jmCbtenYIsowHsPqs0noOAsX5kUoBAOrPn-bmz6P';

bucket = 'hmqk1995';

key = '1.jpg';

function uptoken(bucket, key) {
  var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
  return putPolicy.token();
}

token = uptoken(bucket, key);

filePath = './photos/1.jpg'

function uploadFile(uptoken, key, localFile) {
  var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
      if(!err) {
        // 上传成功， 处理返回值
        console.log(ret.hash, ret.key, ret.persistentId);
      } else {
        // 上传失败， 处理返回代码
        console.log(err);
      }
  });
}

uploadFile(token, key, filePath);
