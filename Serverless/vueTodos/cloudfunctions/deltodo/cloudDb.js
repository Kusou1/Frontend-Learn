const cloud = require("@cloudbase/node-sdk");

const cloudDb = cloud.init({
    env: 'test-2gmsdnvd04b10a9f',
    secretId: 'AKIDtc9RUK1gWCeEfsxrb8VowqZ5OUP7ey4z',
    secretKey: 'mKfokSyION9TbVCerqa6MOBj26wYcS3P',
    region: 'ap-guangzhou'
})

const app = cloudDb.database()
module.exports = app