import MD5 from "@/common/md5.js";
const uploadFile = async file => {
	// let uploadUrl = 'http://47.115.83.135/api/v2'
	let uploadUrl = 'http://ts.lagou.uieee.com/api/v2'
	// 第一步 获取 hash 值
	let hash = await new Promise((resolve, reject) => {
		uni.getFileInfo({
			filePath: file.path,
			success: (result) => {
				resolve(result.digest);
			},
		});
	});

	// console.log(MD5.md5(hash))

	// 第二步 请求获取基础文件信息
	let check = await uni.request({
	 url: uploadUrl+'/files/uploaded/'+MD5.md5(hash),
	 method: 'GET',
	 header: {
	   "content-type": "application/json",
	   Accept: "application/json",
	   Authorization: "Bearer " + uni.getStorageSync("token"),
	 }
	})
	// 如果返回的状态码是404，那说明没有上传过，继续后面的上传流程
	// 如果返回的是200,那就从body里取出 id，这个id就可以直接使用，后面的上传流程就可以终止了
	console.log(check[1].statusCode)

	// 第三步 将文件以buffer流方式存入系统
	let ufile = await uni.uploadFile({
		url: uploadUrl + '/files',
		method: "POST",
		header: {
			'content-type': 'multipart/form-data',
			Authorization: "Bearer " + uni.getStorageSync("token"),
		},
		name: 'file',
		file: uni.getFileSystemManager().readFileSync(file.path),
		filePath: file.path
	});

	// console.log(JSON.parse(ufile[1].data))
	return JSON.parse(ufile[1].data)
};
export default uploadFile;
