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

```

#### #5 클래스

```typescript

```

#### #6 제네릭 

```typescript

```

#### #7 유틸리티 타입

```typescript

```



