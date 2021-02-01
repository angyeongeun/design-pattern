//생성자

function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    this.sayHello = function() {
      console.log(this.name + ' said "hello"');
    }
  }


  var zero = new Person('Zero', 'm');// 자바스크립트의 생성자

  zero.sayHello();//Zero said "hello"

  //프로토타입

  Person.prototype.sayBye = function() {
    console.log(this.name + ' said "Bye"');

  };

  var k = new Person('Kyeongeun', 'f');

  k.sayBye();//Kyeongeun said "Bye"

