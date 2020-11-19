import contact from './components/pages/contact'
import products from './components/pages/products'
import About from './components/pages/about'
import services from './components/pages/services'
import blog from './components/pages/blog'
import LandingPage from './components/pages/LandingPage'


export default [
    {path:'/contact', component:contact},
    {path:'/products', component:products},
    {path:'/about', component:About},
    {path:'/services', component:services},
    {path:'/blog', component:blog},
    {path:'/', component:LandingPage}
]