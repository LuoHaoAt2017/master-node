var number = process.env.number;
var words = process.env.words;
console.log('words: ', words);

console.log('number type: ', typeof number);
number = parseInt(number, 10);
console.log('number type: ', typeof number);

/**
 * 所有的环境变量都是以字符串的形式在操作系统之间传递
 */