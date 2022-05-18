import { fromJS, is } from "immutable"

const m1 = fromJS({ a: { b: { c: 1 } } })
const m2 = fromJS({ a: { b: { c: 1 } } })

console.log(is(m1, m2))
