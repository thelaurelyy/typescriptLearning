
### 一、TypeScript简介与环境配置



### 二、QA

### 1、type、class、interface关键字在定义对象类型时的差异性 ？

    - class: 由于ts的宗旨是兼容js，运行时需要擦除所有的类型信息，
             经过编译之后，在运行时，type / interface 会被完全消除，
             而class经过编译之后在运行时依然存在。因此，如果要声明的类型只是纯粹的
             类型信息，只需要声明interface即可。
    - type: 更倾向于组合
    - interface: 更倾向于继承  
                在面向对象的语言中，术语interface经常被用来定义一个不包含数据和逻辑代码但是用来签名定义了行为的抽象类型。

[class 和 interface讲解](https://www.cnblogs.com/hlandzpy/p/13213656.html)

[单例模式讲解](https://www.jianshu.com/p/6571e0c78e0d)

### 2、元组和数组的区别 ？

    - 元祖可以存储不同类型元素集合
    - 数组一般用于保存相同类型元素集合
    
### 3、接口和类的约束: implements、接口间的继承: extends
![implements 和 extends](./继承与实现.png)

### 4、为什么 类不能继承接口，类只能实现接口？

### 5、阅读中文手册笔记

#### 1、注意：在使用拓展运算符展开对象的时候，展开对象的实例会丢失其方法；但是展开对象不会！这是由于，拓展运算符仅包含对象自身的可枚举属性。

```typescript
    class C {
      p = 12;
      m() {
      }
    }
    let c = new C();
    let clone = { ...c };
    clone.p; // ok
    clone.m(); // error!
```

```typescript
    const C = {
        p: 12,
        m() {
            console.log('print test...')
        }
    }
    let clone = { ...C };
    clone.p; // ok
    clone.m(); // ok
```

#### 2、接口

TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 

在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

可索引的类型：可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。

TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。
```typescript
    class Animal {
        name: string;
    }
    class Dog extends Animal {
        breed: string;
    }
    
    // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
    interface NotOkay {
        [x: number]: Animal;
        [x: string]: Dog;
    }
```

字符串索引签名能够很好的描述dictionary模式，并且它们也会确保所有属性与其返回值类型相匹配。 

类具有两个类型：静态部分的类型和实例的类型

#### 3、类

派生类通常被称作`子类`，基类通常被称作 `超类`

派生类的构造函数  与  super()

`protected 和 private 关键字：构造函数也可以被标记成 protected。这意味着这个类不能在包含它的类外被实例化，但是能被继承。`

`readonly修饰符，你可以使用readonly修饰符降属性设置为只读的。只读属性必须在声明时或构造函数里被初始化。`

##### 参数属性

参数属性可以方便地让我们在一个地方定义并初始化一个成员。 下面的例子是对之前 Octopus类的修改版，使用了参数属性：

```typescript
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}
```

参数属性通过给构造函数参数前面添加一个访问限定符来声明。 使用 private限定一个参数属性会声明并初始化一个私有成员；
对于 public和 protected来说也是一样。

##### 存取器   get  、set

首先，存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。 
其次，只带有 get不带有 set的存取器自动被推断为 readonly。

##### 静态属性

我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。每个实例想要访问这个属性的时候，都要在 origin前面加上类名。 

##### 抽象类




#### 4、函数

 - 捕获变量的机制
 - 函数类型包括：参数类型和返回值类型。
 - 参数名只是为了增加可读性，只要参数类型是匹配的，那么就认为它是有效的函数类型而不在乎参数名是否正确。
 - 可选参数必须跟在必选参数后面。
 - 在所有必须参数后面的带默认初始化参数，都是可选的，与可选参数一样，在调用函数的时候可以忽略。
 - 带默认值的参数不一定要放在必须参数后面，只是如果它出现在必须参数前面，用户必须明确的传入undefined值来获取默认值。
 
 - 顶级的非方法式调用会将this视为window。注意：在严格模式下，this视为undefined而不是window。
 - 箭头函数能保存函数创建时的this值，而不是调用时的值。
 
 - JavaScript本身是个动态语言

#### 5、泛型

 - 除了泛型接口，我们还可以创建泛型类。注意：无法创建泛型枚举和泛型命名空间。
 - 与接口一样，直接把泛型类型放在类后面，可以帮助我们确认类的所有属性都在使用相同的类型；
 - 我们在类那节说过，类有两部分：静态部分和实例部分。泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。

#### 6、typescript支持数字和基于字符串的枚举

 - 数字枚举初始化首参，其余成员会自增长；完全不初始化，则从0开始自增长；
 - 不带初始化器的枚举，要么放在第一位的位置；要么放在使用了数字常量或者其他他常量初始化了的枚举后面；
 - 异构枚举，从技术的角度说，枚举可以混合字符串和数字成员，但是不推荐这么做；
 - 常数枚举表达式 / 需计算的枚举成员
 - 不会为字符串成员生成反向映射
 - 外部枚举用来描述已经存在的枚举类型的形状。

#### 7、类型推论和类型兼容性

 - 比较两个对象：x要兼容y   =>    y是否能赋值给x     =>   y至少要有与x相同的属性 
 
```typescript
    interface Named {
        name: string;
    }
    
    let x: Named;
    // y's inferred type is { name: string; location: string; }
    let y = { name: 'Alice', location: 'Seattle' };
    x = y;
```

 - 比较两个函数：y要兼容x    =>   x要赋值给y    =>    x的每个参数必须能在y里找到对应类型的参数
 
 ```typescript
    let x = (a: number) => 0;
    let y = (b: number, s: string) => 0;
    
    y = x; // OK
    x = y; // Error
```

 - 类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型。

```typescript
    let x = () => ({name: 'Alice'});
    let y = () => ({name: 'Alice', location: 'Seattle'});
    
    x = y; // OK
    y = x; // Error, because x() lacks a location property
```

 - 函数参数双向协变
 - 类的私有成员和受保护成员会影响兼容性。当检查类实例的兼容时，如果目标类型包含一个私有成员，那么源类型必须包含来自同一个类的这个私有成员。 
   同样地，这条规则也适用于包含受保护成员实例的类型检查。 这允许子类赋值给父类，但是不能赋值给其它有同样类型的类。
   
#### 8、高级类型
   
 - 交叉类型（intersection types）:多个类型合并为一个类型，这个类型的对象同时拥有了这三种类型的成员  eg. Person & Loggable & Serializable
 - 联合类型（union types）:一个值可以是几种类型之一                 eg. number | string | boolean
 - 类型保护和区分类型（type Guards and Differentiating Types)
    
```typescript
    // 类型谓词
    function isFish(pet: Fish | Bird): pet is Fish {
        return (<Fish>pet).swim !== undefined;
    }

    // 'swim' 和 'fly' 调用都没有问题了    
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
```

 - typeof / instanceof

 - 按照JavaScript语义，typescript会把null和undefined区别对待。string|null 和 string|undefined，和 string|undefined|null 是不同的类型。
 
 - 使用类型断言手动去除 null  或  undefined ，语法是添加 !后缀；       
```typescript
    function broken(name: string | null): string {
      function postfix(epithet: string) {
        return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
      }
      name = name || "Bob";
      return postfix("great");
    }
    
    function fixed(name: string | null): string {
      function postfix(epithet: string) {
        return name!.charAt(0) + '.  the ' + epithet; // ok
      }
      name = name || "Bob";
      return postfix("great");
    }
```

 - 可辨识联合（Discriminated Unions）
 - 完整性检查
 - 多态的this类型
 - 索引类型（Index Types）：
    - 索引类型查询操作符（对于任何类型 T， keyof T的结果为 T上已知的公共属性名的联合。）
    - 索引访问操作符（ 在这里，类型语法反映了表达式语法。 这意味着 person['name']具有类型 Person['name'] — 在我们的例子里则为 string类型。 然而，就像索引类型查询一样，你可以在普通的上下文里使用 T[K]，这正是它的强大所在。 你只要确保类型变量 K extends keyof T就可以了。）
    
```typescript
    function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
      return names.map(n => o[n]);
    }
    
    interface Person {
        name: string;
        age: number;
    }
    let person: Person = {
        name: 'Jarid',
        age: 35
    };
    let strings: string[] = pluck(person, ['name']); // ok, string[]
```

#### 8、模块

"内部模块"现在称做"命名空间"，"外部模块"现在则简称为"模块"。
也就是说 moduleX {} 相当于现在推荐的写法 namespace {}

如果需要对导出的部分重命名，则可以使用：
```typescript
    export { ZipCodeValidator as mainValidator };
```

可以对导入内容重命名
```typescript
    import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
    let myValidator = new ZCV();
```

可以将整个模块导入到一个变量，并通过它来访问模块的导出部分
```typescript
    import * as validator from "./ZipCodeValidator";
    let myValidator = new validator.ZipCodeValidator();
```

注意：每个模块都可以有一个default 导出。并且一个模块只能够有一个default导出。


