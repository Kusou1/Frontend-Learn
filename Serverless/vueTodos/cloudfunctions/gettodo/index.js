const cloud = require("./cloudDb");

exports.main = async (event, context) => {
  const backdb = await cloud.collection("todo").get();

  return backdb
};
