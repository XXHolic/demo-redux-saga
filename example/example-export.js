var Example = function() {
  var name;
  this.setName = function(sname) {
    name = sname;
  };
  this.sayHello = function() {
      console.info('hellow,'+name);
  };
}

module.exports = Example;


