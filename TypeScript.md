###TypeScript

#### #0 TypeSript 쓰는 이유

js(동적언어): 런타임에 타입 결정 vs ts: 컴파일 타임에 타입 결정/오류 발견

#### #1 기본 타입

```typescript
let car:string='bmw';
let age:number=30;
let isAdult:boolean=true;
let a:number[]=[1,2,3];
let a2:Array<number>=[1,2,3];

let week1:string[]=['mon','tue'];
let week2:Array<string>=['mon','tue'];

//튜플
let b:[string,number];
b=['z',1]
b[0].toLowerCase();

//void,never
function sayHello():void{
    console.log('hello');
}

function showError():never{
    throw new Error();
}

function infLoop():never{
    while(true){
    }
}

//enum
enum Os{
    Window=4,
    Ios=10,
    Android
}
console.log(Os[10])

let myOs:Os;
myOs = Os.Window

//null,undefined
let c:null=null;
let d:undefined=undefined;
```

#### #2 인터페이스

property를 정의해서 객체를 표현하고자 할 때

```typescript
type Score='A'|'B'|'C'|'F'
interface User{
    name:string;
    age:number;
    gender?:string;//옵션
    readonly birthYear:number;//읽기전용
    [grade:number]:Score;

}

let user:User={
    name:'xx',
    age:30,
    birthYear:2000,
    1:'A',
    2:'B',

}
user.age=10
user.gender="male"

interface Add{
    (num1:number,num2:number):number;
}
const add:Add=function(x,y){
    return x+y
}
add(10,20);

interface IsAdult{
    (age:number):boolean;
}

const a:IsAdult=(age)=>{
    return age>19;
}
//implements
interface Car{
    color:string;
    wheels:number;
    start():void;
}
interface Toy{
    name:string;
}
interface ToyCar extends Car,Toy{
    price:number;
}
class Bmw implements Car{
    color;
    wheels=4;
    constructor(c:string){
        this.color=c;
    }
    start(){
        console.log('go..');
    }

}
const b=new Bmw('green');
console.log(b)
b.start();

//extends
interface Benz extends Car{
    door:number;
    stop():void;
}

const benz:Benz={
    door:5,
    stop(){
        console.log('stop');
    },
    color:'black',
    wheels:4,
    start(){
        console.log('gp...')
    }

}
```

#### #3함수

```typescript
function add(num1:number,num2:number):number{
    return num1+num2;
}
function hello(name?:string){
    return 'Hello, ${name||world}';
}
function hello2(name="world"){
    return 'Hello, ${name}';
}
function hello3(name:string,age?:number):string{
    if(age!==undefined){
        return 'Hello, ${name}. u r ${age}.';
    }else{
        return 'Hello,${name}';
    }
}
function hello4(age:number|undefined,name:string):string{
    if(age!==undefined){
        return 'Hello, ${name}. u r ${age}.';
    }else{
        return 'Hello,${name}';
    }
}
console.log(hello3('Sam'))
console.log(hello3('Sam',30))
const result=hello();
const result2=hello('Sam');

function add2(...nums:number[]){
    return nums.reduce((result,num)=>result+num,0)
}

interface User{
    name:string;
}
const Sam:User={name:'Sam'}

function showName(this:User,age:number,gender:'m'|'f'){
    console.log(this.name,age,gender)
}
const a=showName.bind(Sam);
a(30,'m');

interface User2{
    name:string;
    age:number;
}

//객체이거나 문자열을 반환할 때는 오버로드를 사용한다
function join(name:string,age:number):User2;
function join(name:string,age:string):string;
function join(name:string,age:number|string):User2|string{
    if(typeof age==="number"){
        return{
            name,
            age,
        };
    }else{
        return "나이는 숫자로 입력ㄷ해주세요.";
    }
}
const sam:User2=join("Sam",30);
const jane:string=join("Jane","30");
```

#### #4 리터럴, 유니온/교차 타입

```typescript
const userName1="Bob"; //변하지 않는것->문자열 리터럴 타입
let userName2:string|number ="Tom"; //변하는것
userName2=3;

type Job= "police"|"developer"|"teacher";

interface User{
    name:string;
    job:Job;
}

const user:User={
    name:'Bob',
    job:'developer',
}

interface HightSchoolStudent{
    name:number|string;
    grade:1|2|3;
}

//Union types
interface Car{
    name:"car";
    color:string;
    start():void;
}

interface Mobile{
    name:"mobile";
    color:string;
    call():void;
}

function getGift(gift:Car|Mobile){
    console.log(gift.color);
    if(gift.name==="car"){
        gift.start(); 
    }else{
        gift.call();
    }
}

//Intersection types
interface Car2{
    name:string;
    start():void;
}

interface Toy{
    name:string;
    color:string;
    price:number;
}

const toyCar: Toy & Car2={
    name:'타요',
    start(){},
    color:'blue',
    price:1000,
}
```

#### #5 클래스

```typescript
//접근 제한자(Access modifier)-public,private,protected
//public : 자식 클래스,클래스 인스턴스 모두 접근 가능
//protected : 자식 클래스에서 접근 가능 
//private : 자식에서 사용 불가능, 해당 클래스 내부에서만 접근 가능(#)
//readonly : 변경 불가능
//추상화 :  이름만 선언 상속받는쪽에서 구체적 기능 구현
abstract class Car{
    // color:string;
    readonly name:string="car";
    static wheels=4;
    constructor(public color:string,name:string){
        this.color=color;
        this.name=name
    }start(){
        console.log("start");
        console.log(this.name)
        console.log(Car.wheels)
    }
    abstract dosomething():void;
}
// const car= new Car("red")
class Bmw extends Car{
    constructor(color:string,name:string){
        super(color,name);
    }
    showName(){
        console.log(super.name);
    }
    dosomething(){
        alert(3);
    }
}
const z4 =new Bmw("black","zzzz4");
console.log(Car.wheels)
console.log(z4.name);
```

#### #6 제네릭 

```typescript
function getSize<T>(arr:T[]):number{
    return arr.length
}
const arr1=[1,2,3];
getSize<number>(arr1);

const arr2=["a","b","c"];
getSize<string>(arr2);

const arr3=[false,true,true];
getSize<boolean>(arr3);

interface Mobile<T>{
    name:string;
    price:number;
    option:T;
}

const m1:Mobile<{color:string;coupon:boolean}>={
    name:'s21',
    price:1000,
    option:{
        color:"red",
        coupon:false,
    },
}

const m2:Mobile<string>={
    name:'s20',
    price:900,
    option:"good",
}

interface User{
    name:string;
    age:number;
}

interface Car{
    name:string;
    color:string;
}

interface Book{
    price:number;
}

const user:User={name:"a",age:10};
const car:Car={name:"bmw",color:"red"};
const book:Book={price:4000};

function showName<T extends {name:string}>(data:T):string{
    return data.name;
}

showName(user);
showName(car);
showName(book);//name이 없어서 error
```

#### #7 유틸리티 타입

```typescript
interface User{
    id:number;
    name:string;
    age:number;
    gender:"m"|"f"
}

//keyof
type UserKey=keyof User;
const uk:UserKey="id";

//Partial<T> 선택적 프로퍼티
let admin:Partial<User>={
    id:1,
    name:'Bob',
}

//Required<T> 모든 프로퍼티 필수
let admin1:Required<User>={
    id:1,
    name:'Bob',
    age:10,
    gender:'m',
}

//Readonly<T> 읽기 전용
let admin2:Readonly<User>={
    id:1,
    name:'Bob',
    age:11,
    gender:'m',
}
admin2.id=4 //읽기전용-> 변경불가능하기 때문에 에러

//Record<K,T>
type Grade="1"|"2"|"3"|"4"
type Score="A"|"B"|"C"|"D"|"F"
const score:Record<Grade,Score>={
    1:"A",
    2:"B",
    3:"C",
    4:"D",
}

interface User2{
    id:number;
    name:string;
    age:number;
}

function isValid(user:User2){
    const result:Record<keyof User2,boolean>={
        id:user.id>0,
        name:user.name!=="",
        age:user.age>0,
    }
    return result;
}

//Pick<T,K>
const admin3:Pick<User,"id"|"name">={
    id:0,
    name:"bob"
}

//Omit<T,K>
const admin4:Omit<User,"age"|"gender">={
    id:0,
    name:'bob'
}

//Exclude<T1,T2> vs omit --> omit은 프로퍼티로 제거, exclud는 타입으로 제거

type T1=string|number|boolean;
type T2=Exclude<T1,number|string>

//NoNullable<Type> null 과 undefined 제외

type T3= string|null|undefined|void;
type T4= NonNullable<T1>;
```



