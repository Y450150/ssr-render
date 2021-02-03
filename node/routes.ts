import Route from 'koa-router'
import User from './router/user'

const route = Route()

route.use('/user', User.routes(), User.allowedMethods())

export default route
