let lagouContainer = null;

// 在应用入口文件中导出微前端应用所需的生命周期函数，生命周期函数必须返回 Promise
export async function bootstrap() {
  console.log("应用正在启动");
}

export async function mount() {
  console.log("应用正在挂载");
  lagouContainer = document.createElement("div");
  lagouContainer.id = "lagouContainer";
  lagouContainer.innerHTML = "Hello Lagou";
  document.body.appendChild(lagouContainer);
}

export async function unmount() {
  console.log("应用正在卸载");
  document.body.removeChild(lagouContainer);
}
