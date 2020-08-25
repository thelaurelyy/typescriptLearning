function jspang() {
    let web: string = 'Hello World';
    console.log(web);
}
jspang();

// --------------------------自定义静态类型

interface Person {
    username: string;
    age: number;
}

const yy : Person = {
    username: 'laurel',
    age: 18
}


// ----------------------------基础静态类型和对象类型

// 基础静态类型：null、undefined、symbol、boolean、void、number、string

// 对象类型：对象类型、数组类型、类类型、函数类型
const school: {
    name: string;
    years: number;
} = {
    name: '国立大学',
    years: 120
}

const student: String[] = ['小红', '韩梅梅', '李雷']

class Teacher { }
const qin: Teacher = new Teacher();

const grade: () => string = () => { return '满分'; }


// -------------------------------类型注解和类型推断

// type annotation 类型注解
let count: number;
count = 1;

// type inference 类型推断
let countInference = 123;

// typescript 重要宗旨：每个变量、每个对象的属性类型都应该是固定的，
// 如果代码能够推断就让它推断，否则就需要进行注释；


// --------------------------------函数的参数类型定义和返回值类型定义

function getTotal(a: number, b: number): number {
    return a + b;
}
const total = getTotal(1, 2);
console.log('total', total);

// 返回值类型： 常规类型、void、never

// 参数类型定义，注意参数结构的情形
function add({a, b}: {a: number, b: number}): number {
    return a + b;
}

// ------------------------------数组类型的定义

// 数组简单类型的定义
const arr: (number | string)[] = [1, '2', 3];

// 数组对象类型的定义：类型别名 type、类 class
type Lady = {
    name: string;
    age: number;
}
const ladies: Lady[] = [
    {
        name: '韩梅梅',
        age: 18
    },
    {
        name: '王蕾',
        age: 16
    }
];

class Madam {
    name: string;
    age: number
}
const madams: Madam[] = [];

interface Girl {
    name: string;
    age: number
}
const girls: Girl[] = [];

// ------------------------------元祖的使用和类型约束
// 元祖不常使用，在处理csv文件时可能会用到
// 元祖用来固定数组中每个元素类型的位置


// ------------------------------interface 接口

interface Girl {
    name : string;
    age  : number;
    weight : number;
}
const screenResume=( girl:Girl)=>{
    girl.age<24 && girl.weight>=90 && console.log(girl.name+'进入面试')
    girl.age>24 || girl.weight<90  && console.log(girl.name+'你被淘汰')
}

const getResume=( girl:Girl)=>{
    console.log(girl.name+'年龄是：'+girl.age)
    console.log(girl.name+'体重是：'+girl.weight)
}
const girl={
    name:'大脚',
    age:18,
    weight:94
}

screenResume(girl)
getResume(girl)

// -------------------------------接口和类型别名的区别

// 1、类型别名可以直接给出类型，但是接口必须代表对象
type oneGirl = string;

interface Girl {
    name : string;
    age  : number;
    weight : number;
    height ?: number;
}

// 2、接口中定义的属性值允许可选，关键字是'？'

// 3、允许加入任意值
// 4、接口中的方法
interface Family {
    father: string;
    mother: string;
    grandfather: string;
    grandmother: string;
    [propname: string]: any;
    say(): string;
}
const family = {
    father: 'King',
    mother: 'queen',
    grandfather: 'King',
    grandmother: 'queen',
    daughter: 'princess',
    say() {
        return 'We are family !~'
    }
}
const getInfo = (family: Family) => {
    console.log('father', family.father);
    console.log('mother', family.mother);
    console.log('daughter', family.daughter);
}
getInfo(family);

// -------------------------------接口和类的约束: implements
class normalFamily implements Family {
    father = '大陆';
    mother = '小花';
    grandmother = '';
    grandfather = ''
    daughter = 'me';
    say(): string {
        return ''
    }
}
// --------------------------------接口间的继承: extends
interface Teacher extends Girl{
    teach(): string;
}
const girlNew = {
    name: '大脚',
    age: 18,
    weight: 96,
    sex: '女',
    say(){
        return '好好学习！~'
    },
    teach() {
        return '我是一个老师！'
    }
}
const getResume2 = ( girl:Teacher) => {
    console.log(girl.name+'年龄是：'+girl.age)
}
getResume2(girlNew)












