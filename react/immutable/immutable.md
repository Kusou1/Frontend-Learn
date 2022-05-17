### ImmutableJS

#### 1. Javascript 中存在的问题

1. 引用数据类型带来的数据突变

   在 JavaScript 中, 对象属于引用数据类型, 将一个对象赋值给另一个对象时, 实际上是将对象的引用地址赋值给了另一个对象, 此时两个对象变量同时指向了内存中的同一个对象, 通过两个对象变量对对象进行的任何操作, 都会影响另一方.

   ```javascript
   var p1 = { name: '张三' };
   var p2 = p1;
   p2.name = '李四';
   console.log(p2.name); // '李四'
   console.log(p1.name); // '李四'
   ```

   由于数据突变带来的不可预测, JavaScript 中的这项特性非常容易导致改 A 坏 B 的问题.

2. 深度拷贝的性能问题

   由于在 JavaScript 中引用数据类型的操作会带来副作用, 所以为了避免产生副作用, 通常都会对原始对象进行深度拷贝, 在拷贝对象的基础上再进行其他操作. 但是深拷贝是有性能问题的, 其一是每次深拷贝都要把整个对象递归的复制一份, 其二是在内存中多出了很多重复的相同的数据.

   ```javascript
   var p1 = { name: '张三', skill: ['编程', '驾驶'] }
   var p2 = deepClone(p1);
   p2.name = '李四';
   ```

   比如上例中, 将 p1 进行了深拷贝, p1 和 p2 就变成了两个完全独立对象, 虽然解决了 name 属性值互不影响的问题, 但同时在内存中也多出了一份完全相同的 skill 属性.

   理解状态应该是两个对象中 name 属性是独立的, skill 属性是共享的. 

   ```javascript
   let skill = ['编程', '驾驶']
   let p1 = {name: "张三", skill}
   let p2 = {name: "李四", skill}
   ```

#### 2. Immutable.js 概述

1. 不可变数据

   Immutable 意为不可变数据, 不可变数据并不表示数据冻结不能操作, 而是每次操作不可变数据后, 都会产生一个新的不可变数据, 无论这个操作是增加, 删除还是修改, 都不会影响到原有的不可变数据. 原有数据依然可用, 不会发生变化. 不可变数据可以防止数据突变带来的不可预测性.

   比如现在有一个不可变数据 {a: 1, b: 2}, 然后通过不可变数据提供的方法将对象中的 a 改为 2, 方法会返回一个新的不可变数据, 值为 {a: 2, b: 2}, 在返回值中仍然包含除 a 以外的属性, 不会发生数据突变. 此外原有数据仍然可用.

   这和深拷贝有区别吗? 

2. 数据结构共享

   不可变数据中采用了数据结构共享. 在操作后返回的新的不可变数据中, 发生变化的数据是独立的, 其他没有发生变化的属性是共享的. 数据结构共享解决了深拷贝带来的性能问题.

下载: `npm install immutable`

官网: https://immutable-js.github.io/immutable-js/

#### 3. Immutable.js 数据结构

在 Immutable.js 中提供了多种数据类型, 但常用的有两种, 即 List 和 Map.

List 对应 JavaScript 中的数组.

Map 对应 JavaScript 中的对象.

```javascript
import { List, Map } from "immutable"

const l1 = List(["a", "b", "c"])
const m1 = Map({a: 1, b: 2})
```

#### 4. 辅助方法

##### 4.1 设置数据

```javascript
import { setIn } from 'immutable';

// 1.你要设置哪个数据
// 2.你要设置数据中的哪个属性
// 3.你要将属性设置成什么值
setIn(state, ['todos'], action.payload);
```

##### 4.2 获取数据

```javascript
import { getIn } from 'immutable';

getIn(state, ['todos'])
```

##### 4.3 合并数据

```javascript
import { mergeDeep } from 'immutable';

mergeDeep(state, {todos: action.payload});
```

##### 4.4 删除数据

```javascript
import { removeIn } from 'immutable';

removeIn(state, ['todos', index]);
```

##### 4.5 更新数据

```javascript
import { updateIn } from 'immutable';

updateIn(state, ['todos', index], todo => action.payload)

// 更新数据的第三个参数回调函数中要返回一个新的数据
```

##### 4.6 fromJS

将 JavaScript 数据类型转换为不可变数据类型, 数组转为 List, 对象转为 Map. 

Map 方法在创建数据时不支持深层嵌套. fromJS 方法支持深层嵌套.

```javascript
const m1 = Map({ a: { b: { c: 1 } } })
const m2 = fromJS({ a: { b: { c: 1 } } })
const m3 = m1.getIn(["a", "b"])
const m4 = m2.getIn(["a", "b"])
console.log(m3)
console.log(m4)
```

##### 4.7 is

判断两个不可变数据是否相同.

```javascript
import { is, fromJS } from "immutable"

const m1 = fromJS({ a: { b: { c: 1 } } })
const m2 = fromJS({ a: { b: { c: 1 } } })

console.log(is(m1, m2)) // true
```

#### 5. 实例方法

[Map](https://immutable-js.github.io/immutable-js/docs/#/Map) [List](https://immutable-js.github.io/immutable-js/docs/#/List)

#### 6. Immutable && React

1. 性能优化

   在 React 中, 当调用 setState 方法更新数据时, 即时传入的数据和以前的数据一样, React 也会执行 diff 的过程, 因为 JavaScript 中对象与对象的比较采用的是引用地址, 所以即使两个对象长的一样, 其实也是不相等的. 所以会走 diff 的过程. 为了解决这个问题, React 提供了 PureComponent, 但是 PureComponent 采用的也是浅层比较, 当数据结构比较复杂时, 依然会存在无效的 diff 操作.

   由于 immutable 的数据结构不变和数据结构共享特性, 能够快速进行数据比较.

   ```react
   import React from "react"
   import { fromJS, is } from "immutable"
   
   export default class App extends React.Component {
     constructor() {
       super()
       this.state = {
         employee: fromJS({
           name: "张三",
           age: 20
         })
       }
       this.updateEmployee = this.updateEmployee.bind(this)
     }
     updateEmployee() {
       this.setState({
         employee: fromJS({
           name: "张三",
           age: 20
         })
       })
     }
     shouldComponentUpdate(nextProps, nextState) {
       return !is(this.state.employee, nextState.employee)
     }
     render() {
       console.log("render")
       return <button onClick={this.updateEmployee}>按钮</button>
     }
   }
   ```

2. 防止状态突变

   ```react
   import React from "react"
   import { fromJS } from "immutable"
   
   export default class App extends React.Component {
     constructor() {
       super()
       this.state = {
         employee: fromJS({
           name: "张三",
           age: 20
         })
       }
       this.updateEmployee = this.updateEmployee.bind(this)
     }
     updateEmployee() {
       this.setState({
         employee: this.state.employee.set("age", 40)
       })
     }
   
     render() {
       return (
         <button onClick={this.updateEmployee}>
           {this.state.employee.getIn(["name"])}
           {this.state.employee.getIn(["age"])}
         </button>
       )
     }
   }
   ```

   