//ES中能够表示有结构的数据类型越来越多

//ES提供了统一的Iterable接口，意思就是可迭代的接口

//在本身就可以被for...of的数据类型的实例的原型链下，都会本身自带一个Symbol.iterator的迭代接口
//迭代器接口里有一个Array iterator，下的next方法类似链表，内部维护了一个数据指针,返回两个值{value:"",done:false}
//done表示是否被遍历完了

// const set = new Set(['foo', 'bar', 'baz'])

// const iterator = set[Symbol.iterator]()

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//实现可迭代接口,给对象挂载interator方法,返回一个迭代器对象
const obj = {
    store: ['foo', 'bar', 'baz'],
    [Symbol.iterator]: function () {
        let index = 0;
        const self = this
        return {
            next: function () {
                const result = {
                    value: self.store[index],
                    done: index >= self.store.length
                }
                index++
                return result
            }
        }
    }
}

for (const item of obj) {
    console.log('循环体', item);
}


//设计模式之迭代器模式

// 假定现在我们需要协同开发一个协同清单应用

// 我的代码=============================

const todos = {
    life: ['吃饭', '睡觉', '打豆豆'],
    learn: ['语文', '数学', '外语'],
    work: ['喝茶'],
    each: function (callback) {
        const all = [].concat(this.life, this.learn, this.work)
        for (const item of all) {
            callback(item)
        }
    },

    [Symbol.iterator]: function () {
        const all = [...this.life, ...this.work, ...this.learn]
        let index = 0
        return {
            next: function () {
                return {
                    value: all[index],
                    done: index++ >= all.length
                }
            }
        }
    }
}

//你的代码===========================

// for(const item of todos.life){
//     console.log(item);
// }
// for (const item of todos.learn) {
//     console.log(item);
// }
// for (const item of todos.life) {
//     console.log(item);
// }
//如果要去遍历，前一方的数据更改将会造成另一方的数据也要去更改，是非常耦合的，但如何前一方能够提供一个统一的遍历接口那就不用关心对象内部的结构是什么样的

// todos.each(function (item) {
//     console.log(item);
// })

for(const item of todos){
    console.log(item);
}