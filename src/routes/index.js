const Home = () => import(/* webpackChunkName: "welcome-view" */ '@/views/Home')
const Rules = () => import(/* webpackChunkName: "welcome-view" */ '@/views/Rules')
const User = () => import(/* webpackChunkName: "welcome-view" */ '@/views/User')
const Login = () => import(/* webpackChunkName: "welcome-view" */ '@/views/Login')
const Register = () => import(/* webpackChunkName: "welcome-view" */ '@/views/Register')

export default [
	{
		path: '/',
		component: Home
	},
	{
		path: '/rules',
		component: Rules
	},
	{
		path: '/user',
		component: User
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/register',
		component: Register
	}
]
