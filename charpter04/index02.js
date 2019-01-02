//二进制缓冲区申请256个字节空间，初始化，编码
var parent = Buffer.alloc(256, 'I master JavaScript!', 'utf-8');
//截取缓冲区
var child = parent.slice(2, 8);
console.log('child', child.toString());
//修改父缓冲区中第2到第8个字节
parent[2] = 'excel'.charCodeAt(0);
parent[3] = 'excel'.charCodeAt(1);
parent[4] = 'excel'.charCodeAt(2);
parent[5] = 'excel'.charCodeAt(3);
parent[6] = 'excel'.charCodeAt(4);
parent[7] = 32;
//子缓冲区也受到了影响
console.log('child', child.toString());

//这说明什么？slice()操作，parent和child公用同一块内存。
//child并不是克隆或者复制parent的一部分而是共用一部分。