const Home = () => import(/* webpackChunkName: "welcome-view" */ '@/views/Home')
const Rules = () => import(/* webpackChunkName: "welcome-view" */ '@/views/Rules')
const Profile = () => import(/* webpackChunkName: "welcome-view" */ '@/views/Profile')
const Login = () => import(/* webpackChunkName: "welcome-view" */ '@/views/Login')
const Register = () => import(/* webpackChunkName: "welcome-view" */ '@/views/Register')
const News = () => import(/* webpackChunkName: "welcome-view" */ '@/views/News')
const TeamPlayerTable = () => import(/* webpackChunkName: "welcome-view" */ '@/views/TeamPlayerTable')
const TeamPlayers = () => import(/* webpackChunkName: "welcome-view" */ '@/views/TeamPlayers')

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
		path: '/profile',
		name: 'Profile',
		component: Profile
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/register',
		component: Register
	},
	{
		path: '/news',
		component: News
	},
	{
		path: '/templayer',
		component: TeamPlayerTable
	},
	{
		path: '/team',
		component: TeamPlayers
	}
]
