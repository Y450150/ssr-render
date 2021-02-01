import Koa from 'koa'
import Route from './routes'
const app = new Koa()

app.use(Route.routes()).use(Route.allowedMethods())

app.listen(3000, ()=>{ 
    console.log("服务端啦 http://127.0.0.1:3000")
})