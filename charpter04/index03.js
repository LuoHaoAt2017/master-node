//复制缓冲区

var buffer1 = Buffer.alloc(128, 'I master React!', 'utf-8');

var buffer2 = Buffer.alloc(64);

buffer1.copy(buffer2, 0, 2, 8);

console.log(buffer2.toString());

buffer1[2] = 'excel'.charCodeAt(0);
buffer1[3] = 'excel'.charCodeAt(1);
buffer1[4] = 'excel'.charCodeAt(2);
buffer1[5] = 'excel'.charCodeAt(3);
buffer1[6] = 'excel'.charCodeAt(4);
buffer1[7] = 32;
//子缓冲区没有受到影响
console.log('buffer1', buffer1.toString());
console.log('buffer2', buffer2.toString());
