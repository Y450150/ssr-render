import Koa from 'koa'
import path from 'path'
import { readFileSync } from 'fs'
import { createBundleRenderer, createRenderer } from 'vue-server-renderer'
import { createApp } from '../client/main'
import Route from './routes'

const app = new Koa()
console.log(__dirname)
const renderer = createRenderer({
    template:readFileSync(path.join(__dirname, '../index.html'), "utf-8")
})

Route.get("/", ctx => {
    const app = createApp()
    renderer.renderToString(app, (err, html) => {
      ctx.res.end(html);
    });
  });

app.use(Route.routes()).use(Route.allowedMethods())

app.listen(3000, ()=>{ 
    console.log("服务端啦 http://127.0.0.1:3000")
})