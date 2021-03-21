
const bar='345'

const obj={
    foo:123,
    // bar:bar,
    bar,
    methon(){
        console.log('12212')
    },
    //随机属性名
    [Math.random()]:123
}
console.log(obj);
obj.methon()
