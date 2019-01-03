var util = require('util');
var events = require('events');

function King(name, dynasty) {
  this.name = name;
  this.events = [];
  this.dynasty = dynasty;
}

util.inherits(King, events.EventEmitter);

var feng = new King('风高祖', '风朝');

feng.on('create_navy', function createNavy() {
  console.log('组建海军');
});

feng.on('create_navy', function createBlueSeaNavy() {
  console.log('组建远洋海军');
});

feng.once('create_navy', function createInvincibleFleet() {
  console.log('组建无敌舰队');
});

feng.on('create_artillery', function createArtillery() {
  console.log('组建炮兵');
});

feng.on('encourage_business', function encourageBusiness() {
  console.log('鼓励商业发展');
});

feng.on('establish_sciences', function establishAcademySciences() {
  console.log('组建科学院');
});

var counter = 0;
var id = setInterval(function() {
  counter++;
  if (counter === 5) {
    feng.emit('create_navy');
  } else if (counter === 10) {
    feng.emit('create_artillery');
  } else if (counter === 15) {
    feng.emit('encourage_business');
  } else if (counter === 20) {
    feng.emit('establish_sciences');
  } else if (counter === 25) {
    clearInterval(id);
  }
}, 1000);
