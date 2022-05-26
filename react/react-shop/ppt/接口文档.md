## 拉钩新选接口文档 1.0

本地测试地址：http://localhost/api

线上测试地址：http://fullstack.net.cn/api

### 1. 身份验证

#### 1.1 用户注册

| 请求地址 | 请求方式 |
| -------- | -------- |
| /signup  | POST     |

```json
{
    "name": "段誉",
    "email": "duanyu@163.com",
    "password": "123456"
}
```

```json
{
  "role": 0,
  "history": [],
  "_id": "5fab5fd13a2a5429fcd53719",
  "name": "段誉",
  "email": "duanyu@163.com",
  "createdAt": "2020-11-11T03:51:45.805Z",
  "updatedAt": "2020-11-11T03:51:45.805Z",
  "__v": 0
}
```

#### 1.2 用户登录

| 请求地址 | 请求方式 |
| -------- | -------- |
| /signin  | POST     |

```json
{
    "email": "qiaofeng@163.com",
    "password": "123456"
}
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "5f9d6f70f75ae3c81541bcba",
    "name": "乔峰",
    "email": "qiaofeng@163.com",
    "role": 1
  }
}
```

#### 1.3 用户退出

| 请求地址 | 请求方式 |
| -------- | -------- |
| /signout | GET      |

```json
{
  "message": "退出成功"
}
```

### 2.  分类管理

#### 2.1 创建分类

| 请求地址                 | 请求方式 |
| ------------------------ | -------- |
| /category/create/:userId | POST     |

```json
{
    "name": "Node"
}
```

```json
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOWFiNzFjOGNmNjUwOTZhNjA4MmZjMiIsImlhdCI6MTYwNDAzNTYyN30.3-3xaofu_rRflEEJuHvofsuWsTQzsc1NuKtMLb2YuKI"
```

```json
{
  "data": {
    "_id": "5f9ed47ef75ae3c81541bcbe",
    "name": "Angular",
    "createdAt": "2020-11-01T15:30:06.382Z",
    "updatedAt": "2020-11-01T15:30:06.382Z",
    "__v": 0
  }
}
```

#### 2.2 根据分类 ID 获取分类信息

| 请求地址              | 请求方式 |
| --------------------- | -------- |
| /category/:categoryId | GET      |

```json
{
    "_id": "5fa11a0bfbe98b811e09d1ea",
    "name": "Node",
    "createdAt": "2020-11-03T08:51:23.925Z",
    "updatedAt": "2020-11-03T08:51:23.925Z",
    "__v": 0
}
```

#### 2.3 根据分类ID更新分类

| 请求地址                      | 请求方式 |
| ----------------------------- | -------- |
| /category/:categoryId/:userId | PUT      |

```json
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOWFiNzFjOGNmNjUwOTZhNjA4MmZjMiIsImlhdCI6MTYwNDAzNTYyN30.3-3xaofu_rRflEEJuHvofsuWsTQzsc1NuKtMLb2YuKI"
```

```json
{
    "_id": "5fa11a0bfbe98b811e09d1ea",
    "name": "PHP Test",
    "createdAt": "2020-11-03T08:51:23.925Z",
    "updatedAt": "2020-11-11T06:00:15.110Z",
    "__v": 0
}
```

#### 2.4 根据 ID 删除分类

| 请求地址                      | 请求方式 |
| ----------------------------- | -------- |
| /category/:categoryId/:userId | DELETE   |

```json
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOWFiNzFjOGNmNjUwOTZhNjA4MmZjMiIsImlhdCI6MTYwNDAzNTYyN30.3-3xaofu_rRflEEJuHvofsuWsTQzsc1NuKtMLb2YuKI"
```

```json
{
   "message": "抱歉. 不能删除 PHP Test 分类. 此分类中还有 4 条相关产品"
}
```

#### 2.5  获取分类列表

| 请求地址    | 请求方式 |
| ----------- | -------- |
| /categories | GET      |

```json
[
    {
        "_id": "5fa11a0bfbe98b811e09d1ea",
        "name": "PHP Test",
        "createdAt": "2020-11-03T08:51:23.925Z",
        "updatedAt": "2020-11-11T06:00:15.110Z",
        "__v": 0
    }
]
```



### 3. 产品管理

#### 3.1 创建产品

| 请求地址                | 请求方式 |
| ----------------------- | -------- |
| /product/create/:userId | POST     |

```json
// 注意: 此接口参数需要为 formData 类型
{
  name: "Node与Express开发",
  description:"向全栈开发进军 熟悉JavaScript的前端和后端工程师会拥有全新的Web开发视角",
	price: 54.50,
	category:	"5f9ba4bf9c64502887e23b35"
	quantity: 3500
	shipping:	false
	photo: file
}
```

```json
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOWFiNzFjOGNmNjUwOTZhNjA4MmZjMiIsImlhdCI6MTYwNDAzNTYyN30.3-3xaofu_rRflEEJuHvofsuWsTQzsc1NuKtMLb2YuKI"
```

```json
{
    "sold": 0,
    "_id": "5fab79243a2a5429fcd5371b",
    "name": "Node与Express开发",
    "description": "向全栈开发进军 熟悉JavaScript的前端和后端工程师会拥有全新的Web开发视角",
    "price": 54.5,
    "category": "5f9ba4bf9c64502887e23b35",
    "quantity": 3500,
    "shipping": false,
    "createdAt": "2020-11-11T05:39:48.091Z",
    "updatedAt": "2020-11-11T05:39:48.091Z",
    "__v": 0
}
```

#### 3.2 根据产品ID获取产品信息

| 请求地址            | 请求方式 |
| ------------------- | -------- |
| /product/:productId | GET      |

```json
{
  "sold": 0,
  "_id": "5fa2c38ad6b0014c93906a93",
  "name": "React学习手册",
  "description": "这是一本React应用程序常见问题和解决方案的绝佳指南,让你充分感受React在实际项目中的神奇魅力。",
  "price": 35.1,
  "category": {
    "_id": "5fa11a1afbe98b811e09d1ec",
    "name": "React",
    "createdAt": "2020-11-03T08:51:38.004Z",
    "updatedAt": "2020-11-03T08:51:38.004Z",
    "__v": 0
  },
  "shipping": true,
  "quantity": 3333,
  "createdAt": "2020-11-04T15:06:50.260Z",
  "updatedAt": "2020-11-04T15:06:50.260Z",
  "__v": 0
}
```

#### 3.3 根据产品ID删除产品

| 请求地址                    | 请求方式 |
| --------------------------- | -------- |
| /product/:productId/:userId | DELETE   |

```json
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOWFiNzFjOGNmNjUwOTZhNjA4MmZjMiIsImlhdCI6MTYwNDAzNTYyN30.3-3xaofu_rRflEEJuHvofsuWsTQzsc1NuKtMLb2YuKI"
```

```json
{
  "deletedProduct": {
    "sold": 0,
    "_id": "5fab79243a2a5429fcd5371b",
    "name": "Node与Express开发 test",
    "description": "向全栈开发进军 熟悉JavaScript的前端和后端工程师会拥有全新的Web开发视角",
    "price": 54.5,
    "category": null,
    "quantity": 3500,
    "shipping": false,
    "createdAt": "2020-11-11T05:39:48.091Z",
    "updatedAt": "2020-11-11T05:39:48.091Z",
    "__v": 0
  },
  "message": "产品删除成功"
}
```

#### 3.4 根据 ID 更新产品

| 请求地址                    | 请求方式 |
| --------------------------- | -------- |
| /product/:productId/:userId | PUT      |

```json
// 注意: 此接口参数需要为 formData 类型
{
  "price": 112
}
```

```json
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOWFiNzFjOGNmNjUwOTZhNjA4MmZjMiIsImlhdCI6MTYwNDAzNTYyN30.3-3xaofu_rRflEEJuHvofsuWsTQzsc1NuKtMLb2YuKI"
```

```json
{
  "photo": {
    "data": {
      "type": "Buffer",
      "data": [...]
   		},
  },
	"sold": 0,
  "_id": "5f9bd274fb45a644631c1ddd",
  "name": "深入浅出node.js",
  "description": "图灵程序设计丛书深入讲解Node的图书 讲述基于JavaScript运行时所建立的平台原理 与mongodb结合操作的具体案例 响应式设计别具匠心",
  "price": 400,
  "category": {
    "_id": "5fa11a0bfbe98b811e09d1ea",
    "name": "Node",
    "createdAt": "2020-11-03T08:51:23.925Z",
    "updatedAt": "2020-11-03T08:51:23.925Z",
    "__v": 0
  },
  "quantity": 12000,
  "shipping": false,
  "createdAt": "2020-10-30T08:44:36.498Z",
  "updatedAt": "2020-11-11T05:51:59.064Z",
  "__v": 0
}
```

#### 3.5 获取商品列表

| 请求地址                                      | 请求方式 |
| --------------------------------------------- | -------- |
| /products?sortBy=createdAt&order=asc&limit=10 | GET      |

```json
[
    {
        "sold": 0,
        "_id": "5f9bd274fb45a644631c1ddd",
        "name": "深入浅出node.js",
        "description": "图灵程序设计丛书深入讲解Node的图书 讲述基于JavaScript运行时所建立的平台原理 与mongodb结合操作的具体案例 响应式设计别具匠心",
        "price": 400,
        "category": {
            "_id": "5fa11a0bfbe98b811e09d1ea",
            "name": "PHP Test",
            "createdAt": "2020-11-03T08:51:23.925Z",
            "updatedAt": "2020-11-11T06:00:15.110Z",
            "__v": 0
        },
        "quantity": 12000,
        "shipping": false,
        "createdAt": "2020-10-30T08:44:36.498Z",
        "updatedAt": "2020-11-11T05:51:59.064Z",
        "__v": 0
    }
]
```

#### 3.6 根据产品ID获取相关产品

| 请求地址                     | 请求方式 |
| ---------------------------- | -------- |
| /products/related/:productId | GET      |

```json
[
    {
        "sold": 0,
        "_id": "5f9bd274fb45a644631c1ddd",
        "name": "深入浅出node.js",
        "description": "图灵程序设计丛书深入讲解Node的图书 讲述基于JavaScript运行时所建立的平台原理 与mongodb结合操作的具体案例 响应式设计别具匠心",
        "price": 400,
        "category": {
            "_id": "5fa11a0bfbe98b811e09d1ea",
            "name": "PHP Test",
            "createdAt": "2020-11-03T08:51:23.925Z",
            "updatedAt": "2020-11-11T06:00:15.110Z",
            "__v": 0
        },
        "quantity": 12000,
        "shipping": false,
        "createdAt": "2020-10-30T08:44:36.498Z",
        "updatedAt": "2020-11-11T05:51:59.064Z",
        "__v": 0
    }
]
```

#### 3.7 获取产品列表中使用到的分类信息

| 请求地址             | 请求方式 |
| -------------------- | -------- |
| /products/categories | GET      |

```json
[
    "5fa11a0bfbe98b811e09d1ea",
    "5fa11a10fbe98b811e09d1eb",
    "5fa11a1afbe98b811e09d1ec",
    "5fa2c32ed6b0014c93906a92",
    "5fa2c4ddd6b0014c93906a97"
]
```

#### 3.8 商品过滤

| 请求地址         | 请求方式 |
| ---------------- | -------- |
| /products/filter | POST     |

```json
{
    "order": "desc",
    "limit": 10,
    "sortBy": "_id",
    "skip": 0,
    "filters": {
        "category": ["5fa11a0bfbe98b811e09d1ea"],
        "price": [50, 100]
    }
}
```

```json
{
    "size": 2,
    "data": [
        {
            "sold": 0,
            "_id": "5f9c09058a0fd7511cf70877",
            "name": "Node与Express开发",
            "description": "向全栈开发进军 熟悉JavaScript的前端和后端工程师会拥有全新的Web开发视角",
            "price": 54.5,
            "category": {
                "_id": "5fa11a0bfbe98b811e09d1ea",
                "name": "PHP Test",
                "createdAt": "2020-11-03T08:51:23.925Z",
                "updatedAt": "2020-11-11T06:00:15.110Z",
                "__v": 0
            },
            "quantity": 3500,
            "shipping": false,
            "createdAt": "2020-10-30T12:37:25.122Z",
            "updatedAt": "2020-10-30T12:37:25.122Z",
            "__v": 0
        }
    ]
}
```

#### 3.9 根据商品ID获取商品封面

| 请求地址                  | 请求方式 |
| ------------------------- | -------- |
| /product/photo/:productId | GET      |

<img src="images/1.jpg" />

#### 3.10 产品搜索

| 请求地址                                                     | 请求方式 |
| ------------------------------------------------------------ | -------- |
| /products/search?search=node&category=5fa11a0bfbe98b811e09d1ea | GET      |

```json
[
  {
    "sold": 0,
    "_id": "5f9bd274fb45a644631c1ddd",
    "name": "深入浅出node.js",
    "description": "图灵程序设计丛书深入讲解Node的图书 讲述基于JavaScript运行时所建立的平台原理 与mongodb结合操作的具体案例 响应式设计别具匠心",
    "price": 400,
    "category": "5fa11a0bfbe98b811e09d1ea",
    "quantity": 12000,
    "shipping": false,
    "createdAt": "2020-10-30T08:44:36.498Z",
    "updatedAt": "2020-11-11T05:51:59.064Z",
    "__v": 0
  }
]
```

### 4. 用户管理

#### 4.1 根据用户ID获取用户信息

| 请求地址      | 请求方式 |
| ------------- | -------- |
| /user/:userId | GET      |

```json
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOWFiNzFjOGNmNjUwOTZhNjA4MmZjMiIsImlhdCI6MTYwNDAzNTYyN30.3-3xaofu_rRflEEJuHvofsuWsTQzsc1NuKtMLb2YuKI"
```

```json
{
    "role": 1,
    "history": [
        {
            "_id": "5fa2c64dd6b0014c93906a9b",
            "name": "JavaScript DOM编程艺术",
            "description": "图灵程序设计丛书，畅销书升级版 详解开发Web应用的基石 W3C的DOM标准 国际知名web设计师 倡导Web标准的领军人物执笔 揭示了前端开发的真谛",
            "category": "5fa2c4ddd6b0014c93906a97",
            "quantity": 1,
            "transaction_id": 2.02011092200146e+27,
            "amount": 38.6
        }
    ],
    "_id": "5f9d6f70f75ae3c81541bcba",
    "name": "乔峰",
    "email": "qiaofeng@163.com",
    "createdAt": "2020-10-31T14:06:41.002Z",
    "updatedAt": "2020-11-11T03:23:18.562Z",
    "__v": 0
}
```

#### 4.2 更新用户信息

| 请求地址      | 请求方式 |
| ------------- | -------- |
| /user/:userId | PUT      |

```json
{
  "name": "",
  "email": "",
  "password": ""
}
```

```json
{
    "role": 1,
    "history": [
        {
            "_id": "5fa2c64dd6b0014c93906a9b",
            "name": "JavaScript DOM编程艺术",
            "description": "图灵程序设计丛书，畅销书升级版 详解开发Web应用的基石 W3C的DOM标准 国际知名web设计师 倡导Web标准的领军人物执笔 揭示了前端开发的真谛",
            "category": "5fa2c4ddd6b0014c93906a97",
            "quantity": 1,
            "transaction_id": 2.02011092200146e+27,
            "amount": 38.6
        }
    ],
    "_id": "5f9d6f70f75ae3c81541bcba",
    "name": "乔峰1",
    "email": "qiaofeng@163.com",
    "createdAt": "2020-10-31T14:06:41.002Z",
    "updatedAt": "2020-11-11T06:28:26.708Z",
    "__v": 0
}
```

#### 4.3 获取用户历史订单

| 请求地址                | 请求方式 |
| ----------------------- | -------- |
| /orders/by/user/:userId | GET      |

```json
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOWFiNzFjOGNmNjUwOTZhNjA4MmZjMiIsImlhdCI6MTYwNDAzNTYyN30.3-3xaofu_rRflEEJuHvofsuWsTQzsc1NuKtMLb2YuKI"
```

```json
[
    {
        "status": "Shipping",
        "_id": "5fa8cc8c64a54f7274578c36",
        "trade_no": "2.02011092200146e+27",
        "amount": 101.9,
        "address": "北京市海淀区创业大街",
        "products": [
            {
                "_id": "5fa8cc8c64a54f7274578c37",
                "count": 1,
                "product": {
                    "sold": 1,
                    "_id": "5fa2c58ed6b0014c93906a99",
                    "name": "JavaScript权威指南（第6版）",
                    "description": "JS经典犀牛书,JavaScript高级程序设计从入门到精通,快速掌握JavaScript语言精髓与编程实践，前端开发,web开发,HTML网站实战工具书优选之作",
                    "price": 101.9,
                    "category": "5fa2c4ddd6b0014c93906a97",
                    "shipping": true,
                    "quantity": 33121,
                    "createdAt": "2020-11-04T15:15:26.699Z",
                    "updatedAt": "2020-11-04T15:15:26.699Z",
                    "__v": 0
                }
            }
        ],
        "user": {
            "_id": "5f9d6f70f75ae3c81541bcba",
            "name": "乔峰1"
        },
        "createdAt": "2020-11-09T04:58:52.234Z",
        "updatedAt": "2020-11-11T06:40:57.735Z",
        "__v": 0
    }
]
```

### 5. 支付

#### 5.1 Alipay

| 请求地址                           | 请求方式 |
| ---------------------------------- | -------- |
| http://fullstack.net.cn/api/alipay | GET      |

```react
{
  	// 支付宝接口要求的必填参数
    "totalAmount": 0.01,
    "subject": "订单标题",
    "body": "订单描述",
     // 服务器端要求的必填参数
    "products": [{product: "5fab79243a2a5429fcd5371b", count: 1}],
		"address": "收货地址",
    "userId": "5fa2c64dd6b0014c93906a9b"
}
```

```json
{
  result: "支付地址"
}
```

### 6. 订单管理

#### 6.1 获取订单列表

| 请求地址            | 请求方式 |
| ------------------- | -------- |
| /order/list/:userId | GET      |

```json
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOWFiNzFjOGNmNjUwOTZhNjA4MmZjMiIsImlhdCI6MTYwNDAzNTYyN30.3-3xaofu_rRflEEJuHvofsuWsTQzsc1NuKtMLb2YuKI"
```

```json
[
  {
    "status": "Cancelled",
    "_id": "5fa8cc8c64a54f7274578c36",
    "trade_no": "2.02011092200146e+27",
    "amount": 101.9,
    "address": "北京市海淀区创业大街",
    "products": [
      {
        "_id": "5fa8cc8c64a54f7274578c37",
        "count": 1,
        "product": {
          "_id": "5fa2c58ed6b0014c93906a99",
          "name": "JavaScript权威指南（第6版）",
          "price": 101.9
        }
      }
    ],
    "user": {
      "_id": "5f9d6f70f75ae3c81541bcba",
      "name": "乔峰1"
    },
    "createdAt": "2020-11-09T04:58:52.234Z",
    "updatedAt": "2020-11-09T09:36:43.397Z",
    "__v": 0
  }
]
```

#### 6.2 修改订单状态

| 请求地址              | 请求方式 |
| --------------------- | -------- |
| /order/status/:userId | PUT      |

```json
{
    "orderId":"5fa8cc8c64a54f7274578c36",
    "status":"Shipping"
}
```

```json
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOWFiNzFjOGNmNjUwOTZhNjA4MmZjMiIsImlhdCI6MTYwNDAzNTYyN30.3-3xaofu_rRflEEJuHvofsuWsTQzsc1NuKtMLb2YuKI"
```

```json
{
    "n": 1,
    "nModified": 1,
    "ok": 1
}
```



```html
<table>
  <thead className="ant-table-thead">
    <tr>
      <th className="ant-table-cell">商品封面</th>
      <th className="ant-table-cell">商品名称</th>
      <th className="ant-table-cell">商品价格</th>
      <th className="ant-table-cell">商品分类</th>
      <th className="ant-table-cell">商品数量</th>
      <th className="ant-table-cell">操作</th>
    </tr>
  </thead>
  <tbody className="ant-table-tbody">
    <tr className="ant-table-row">
      <td className="ant-table-cell"></td>
      <td className="ant-table-cell"></td>
      <td className="ant-table-cell"></td>
      <td className="ant-table-cell"></td>
      <td className="ant-table-cell"></td>
      <td className="ant-table-cell"></td>
    </tr>
  </tbody>
</table>
```

```react
<table style={{ width: "100%" }}>
  <thead className="ant-table-thead">
    <tr>
      <th className="ant-table-cell">订单状态</th>
      <th className="ant-table-cell">订单号</th>
      <th className="ant-table-cell">总价</th>
      <th className="ant-table-cell">创建时间</th>
      <th className="ant-table-cell">邮寄地址</th>
      <th className="ant-table-cell">客户姓名</th>
    </tr>
  </thead>
  <tbody className="ant-table-tbody">
    <tr className="ant-table-row">
      <td className="ant-table-cell"></td>
      <td className="ant-table-cell"></td>
      <td className="ant-table-cell"></td>
      <td className="ant-table-cell"></td>
      <td className="ant-table-cell"></td>
      <td className="ant-table-cell"></td>
    </tr>
  </tbody>
</table>
```

```react
<table style={{ width: "100%" }}>
  <thead className="ant-table-thead">
    <tr>
      <th className="ant-table-cell">商品名称</th>
      <th className="ant-table-cell">商品价格</th>
      <th className="ant-table-cell">商品数量</th>
      <th className="ant-table-cell">商品ID</th>
    </tr>
  </thead>
  <tbody className="ant-table-tbody">
    <tr className="ant-table-row">
        <td className="ant-table-cell"></td>
        <td className="ant-table-cell"></td>
        <td className="ant-table-cell"></td>
        <td className="ant-table-cell"></td>
      </tr>
  </tbody>
</table>
```







