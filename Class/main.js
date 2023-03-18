/* 1. 기본원리. prototype */
/**************************************/
//const fruits = ['Apple','Banana', 'Cherry' ];
const fruits = new Array("Apple", "Banana", "Cherry");
console.log(fruits);
console.log(fruits.length);
console.log(fruits.includes("Banana"));
console.log(fruits.includes("Orange"));
//length 나 includes 를 prototype 메서드, prototype 속성이라고 이야기한다

Array.prototype.phantasia = function () {
  console.log(this);
};
fruits.phantasia(); //인위적으로 메소드를 만들었다.

const arr = [];
arr.phantasia();

const phantasia = {
  firstName: "John",
  lastName: "Conner",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
const neo = {
  firstName: "Neo",
  lastName: "Anderson",
};
console.log(phantasia.getFullName());
console.log(phantasia.getFullName.call(neo)); //neo 객체의 데이터를 접근하기 위해 call 사용
//하지만 무수히 많은 객체 데이터를 이렇게 일일이 접근할 수는 없는 법.
//그러므로

function User(first, last) {
  //함수이름 첫글자는 무조건 대문자로
  this.firstName = first;
  this.lastName = last;
}

//꼭 일반함수로 만들어줘야함.호출위치에 따른 this 키워드를 사용해야 하기 때문에
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const userA = new User("Daniel", "Henny"); //new 키워드와 함께 호출, 생성자 함수 방식
const userB = new User("Cristine", "Litter");
console.log(userA);
console.log(userB);
console.log(userA.getFullName());
console.log(userB.getFullName());
//기본적인 원리를 알아야한다.
//하지만 이런 prototype 기법을,
//ES6에서 클래스를 도입하여 조금 더 고도화된 기법을 적용할 수 있게 되었다.

/* 2. 클래스. ES6 Classes */
/**************************************/
class UserCl {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const userD = new UserCl("Daniel", "Henny");
const userF = new UserCl("Cristine", "Litter");
console.log(userD);
console.log(userF);
console.log(userD.getFullName());
console.log(userF.getFullName());

//위 방식을 조금 더 편리하게 하려면,
//Getter, Setter
class UserClGS {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  //함수 데이터에 get 키워드를 붙인다.
  //get 키워드를 이용하여 속성처럼 사용할 수 있게 한다.
  //Getter
  get fullName() {
    //소문자 시작
    console.log("Getting full name!");
    return `${this.firstName} ${this.lastName}`; //return 값이 속성의 값이 됨
  }
  //Setter
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
}
const userG = new UserClGS("Daniel", "Henny");
const userH = new UserClGS("Cristine", "Litter");
console.log(userG.fullName); //괄호 안붙는거에 주의
console.log(userH.fullName); //Getter 호출 : 값을 조회할때
userH.fullName = "Sarah Conner"; //Setter 호출 : 값을 할당할때
console.log(userH.fullName);

//정적 메소드
//mdn 이나 콘솔에 찍었을때, prototype 안에 있는 메소드를 prototype 메소드,
//Array.isArray() 같은 경우 , prototype 이 붙지 않는다. 고로 정적 메소드이다
//클래스 자체에서 만들어서 사용한다고 생각
class UserStat {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    // 프로토 타입 메서드
    return `${this.firstName} ${this.lastName}`;
  }
  static isUser(user) {
    //정적 메서드, 클래스 차원에서 바로 호출 가능
    if (user.firstName && user.lastName) {
      return true;
    }
    return false;
  }
}
const userI = new UserStat("Daniel", "Henny"); //userI 는 인스턴스라고 부른다
const userJ = new UserStat("Cristine", "Litter");
const userK = new UserStat("Hone");
console.log(userI.getFullName());
console.log(userJ.getFullName());
//console.log(User.getFullName()); //에러
console.log(UserStat.isUser(userJ)); //true
console.log(UserStat.isUser(userK)); //false
//console.log(userJ.isUser()); // 에러, 인스턴스에 대해 사용불가

//상속(Inheritance)
//운송수단
class Vehicle {
  constructor(acceleration = 1) {
    this.speed = 0;
    this.acceleration = acceleration;
  }
  accelerate() {
    this.speed += this.acceleration;
  }
  decelerate() {
    if (this.speed <= 0) {
      console.log("정지!");
      return;
    }
    this.speed -= this.acceleration;
  }
}

class Bicycle extends Vehicle {
  //extends 키워드 : 상속
  constructor(price = 100, acceleration) {
    super(acceleration); //부모 생성자 호출. 반드시 있어야함.
    this.price = price;
    this.wheel = 2;
  }
}

const bicycle = new Bicycle(300, 2);
bicycle.accelerate();
bicycle.accelerate();
console.log(bicycle);
//키워드 앞에 있는 Data가 뒤에있는 클래스의 인스턴스인지 확인
console.log(bicycle instanceof Bicycle);
console.log(bicycle instanceof Vehicle);

class Car extends Bicycle {
  constructor(license, price, acceleration) {
    super(price, acceleration);
    this.license = license;
    this.wheel = 4;
  }
  accelerate() {
    //오버라이딩
    if (!this.license) {
      console.error("무면허!");
      return;
    }
    this.speed += this.acceleration;
    console.log("가속", this.speed);
  }
}

const carA = new Car(true, 7000, 10);
const carB = new Car(false, 4000, 6);
carA.accelerate();
carA.accelerate();
//carB.accelerate(); //에러, console.error
console.log(carA);
console.log(carB);
console.log(carA instanceof Vehicle); //true
console.log(carA instanceof Bicycle); //true
console.log(carB instanceof Car); //true

class Boat extends Vehicle {
  constructor(price, acceleration) {
    super(acceleration);
    this.price = price;
    this.motor = 1;
  }
}

const boat = new Boat(10000, 5);
console.log(boat);
console.log(boat instanceof Boat);
console.log(boat instanceof Vehicle);
console.log(boat instanceof Bicycle); //false
console.log(boat instanceof Car); //false

//자바스크립트에서 클래스를 쓸때는 InstanceOf 라는 키워드를 사용할 수 있다.

class A {
  constructor() {}
}
class B extends A {
  constructor() {
    super();
  }
}
class C extends B {
  constructor() {
    super();
  }
}

//'생성자 함수를 호출해서 나온 결과 변수 a 는 인스턴스다' 라는 표현
const a = new A();
const b = new B();
const c = new C();

console.log(a instanceof A); //true
console.log(a instanceof B); //false
console.log(a instanceof C); //false

console.log(b instanceof A); //true
console.log(b instanceof B); //true, B라는 클래스는 A라는 클래스를 상속해서 만들어졌기 때문
console.log(b instanceof C); //false

console.log(c instanceof A); //true, C라는 클래스는 A 클래스의 인스턴스면서
console.log(c instanceof B); //true, C라는 클래스는 B 클래스의 인스턴스면서
console.log(c instanceof C); //true, C라는 클래스는 C 클래스의 인스턴스다.

console.log(c.constructor === A); //false
console.log(c.constructor === B); //false
console.log(c.constructor === C); //true
//c라는 인스턴스가 어느 클래스에서 만들어졌는가 확인할때 유용

const fruitsCL = ["Apple", "Banana"]; //리터럴 방식
const fruitsC = new Array("Apple", "Banana");
console.log(fruitsCL.constructor === Array); //true
console.log(fruitsC.constructor === Array); //true
console.log(fruitsCL instanceof Array); //true
