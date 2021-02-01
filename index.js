// 생성자

function Person(name, gender) {// 객체를 생산하는 함수 -> 클래스와 같은 개념
    this.name = name;
    this.gender = gender;
    this.sayHello = function() {
      console.log(this.name + ' said "hello"');
    }
  }


  var zero = new Person('Zero', 'm');// 자바스크립트의 생성자

  zero.sayHello();//Zero said "hello"

  // 프로토타입 - 메소드 추가

  Person.prototype.sayBye = function() {
    console.log(this.name + ' said "Bye"');

  };

  var k = new Person('Kyeongeun', 'f');

  k.sayBye();//Kyeongeun said "Bye"

  
//상속
function Vihicle(name, speed) {
  this.name = name;
  this.speed = speed;
}

Vihicle.prototype.drive = function () {// vihicle 의 메소드
  console.log(this.name + ' runs at ' + this.speed)
};

function Sedan(name, speed, maxSpeed) {
  Vihicle.apply(this, arguments)
  this.maxSpeed = maxSpeed;
}

Sedan.prototype = Object.create(Vihicle.prototype);// Sedan의 메소드 = Vihicle의 메소드

// Sedan.prototype.constructor = Sedan; //

Sedan.prototype.boost = function () {
  console.log(this.name + ' Maximum speed is '+ this.maxSpeed);
};

var sonata = new Sedan('sonata', 100, 200); //세단종류의 소나타 객체 생성
sonata.drive(); // sonata runs at 100
sonata.boost(); // sonata Maximum speed is 200




