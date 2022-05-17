import faker from "faker"
import { List } from "react-virtualized"

const records = createRecord(100000)

function App() {
  return (
    <List
      width={400}
      height={100}
      rowCount={records.length}
      rowHeight={44}
      rowRenderer={rowRenderer}
    />
  )
}

export default App

function createRecord(count) {
  let records = []
  for (let i = 0; i < count; i++) {
    records.push({
      username: faker.internet.userName(),
      email: faker.internet.email()
    })
  }
  return records
}

function rowRenderer({ index, key, style }) {
  return (
    <div key={key} style={style}>
      <div>
        <b>username: </b>
        {records[index].username}
      </div>
      <div>
        <b>email: </b>
        {records[index].email}
      </div>
    </div>
  )
}
