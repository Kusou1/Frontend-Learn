// const app = require('./cloudDb')
const cloud = require('./cloudDb');
async function addTodo(event){

  if (event.title == undefined) {
    return;
  }
  var todo = {
    title: event.title,
    createTime: Date.now(),
    done: false,
  };

  var baskdata = await cloud.collection("todo").add(todo);

  return baskdata
}
exports.main = async (event, context) => {
  let res = await addTodo(event)
  return res
};
