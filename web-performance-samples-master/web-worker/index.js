// 将一个大型任务拆分为多个微任务
const taskList = splitTask(BigTask)

// 微任务处理逻辑，入参为每次任务起始时间戳
function processTaskList (taskStartTime) {
  let taskFinishTime
  do {
    // 从任务栈中推出要处理的下一个任务
    const nextTask = taskList.pop()
    // 处理下一个任务
    processTask(nextTask)
    // 执行任务完成的时间，如果时间够 3 毫秒就继续执行
    taskFinishTime = window.performance.now()
  } while (taskFinishTime - taskStartTime < 3)

  // 如果任务堆栈不为空则继续
  if (taskList.length > 0) {
    requestAnimationFrame(processTaskList)
  }
}

requestAnimationFrame(processTaskList)
