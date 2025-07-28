const { serveNcmApi } = require('../server')

export default async function handler(req, res) {
  // EdgeOne Pages 环境配置
  process.env.NODE_ENV = 'production'
  
  // 初始化服务
  const app = await serveNcmApi({
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  })

  // 将请求转发给 Express 应用
  return new Promise((resolve, reject) => {
    app.handle(req, res, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
