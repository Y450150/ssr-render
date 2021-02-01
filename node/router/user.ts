import Route from 'koa-router'

const route = Route()

route.get('/', (ctx,next)=>{
    ctx.body = "USER"
})

export default route