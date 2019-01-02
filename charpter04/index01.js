/**
 * 为什么需要二进制缓冲区
 * 因为node的应用场景一般是网络，
 * 比如和数据库通信，数据在网络中传输都是基于二进制的。
 * node是基于js，但是js擅长操作字符串，操作二进制很低效。
 * 传统的方法是将二进制字节解析成ASSCII码。人家说很低效，
 * 我没有尝试过，那就很低效吧。最新的解决方案是二进制缓冲区。
 */

 /**
  * 缓冲区的长度是以字节为计量单位
  */

var buffer1 = new Buffer('Hello World!');
//console.log(buffer1);
//将二进制数据转换成字符数据
//console.log(buffer1.toString());
//修改缓冲区中第五个字节的值
buffer1[5] = 54;
//console.log(buffer1.toString());
//由于一个字节占8位，因此一个字节可以表示的数据的范围是[0, 255]
//如果你给一个字节赋值超过255，那么实际得到的数是对256取模。

//指定缓冲区占用1024个字节
//索引的范围是[0, 1023]
var buffer2 = new Buffer(1024);
console.log(buffer2[1022]);
console.log(buffer2[1023]);
//超出缓冲区的范围获取到的值是undefined
console.log(buffer2[1024]);
//超出缓冲区的赋值行为视为无效。
buffer2[1024] = 43;
console.log(buffer2[1024]);

//缓冲区十分类似于数组
var buffer3 = new Buffer(12);
var length = buffer3.length;
for(var i = 0; i < length; i++) {
  buffer3[i] = i;
}
console.log(buffer3);
console.log(buffer3.toString());