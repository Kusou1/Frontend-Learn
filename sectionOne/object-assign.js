const source1={
    a:123,
    b:123
}

const source2={
    b:789,
    d:789
}

const target={
    a:456,
    c:456
}

const result=Object.assign(target,source1,source2)

console.log(result)