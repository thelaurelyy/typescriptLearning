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
