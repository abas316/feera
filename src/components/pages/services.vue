<template >
  <div id="app" >
  <div class="loader animated fadeOut">
<div class=" loader-inner"></div>
</div>
<main class="app animated fadeIn">
<div>
      <nav class="navbar navbar-expand-sm fixed-top" id="nav">
       <router-link to="/" class="navbar-brand" href="#">
         <span style="font-family:Jokerman;font-weight:900;" class="ml-3 pt-3"><i class="fas fa-first-aid    "></i> Feera</span>
        </router-link>
          <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
             <i class="fas fa-bars    "></i>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
              <li class="nav-item active mr-4">
                <router-link to="/" class="nav-link" href="#">Home<span class="sr-only">(current)</span></router-link>
              </li>
              <li class="mr-5 pr-5">
                <a href="" class="nav-link">
                  <div class="dropdown">
                    <a style="text-decoration:none;" class=" dropdown-toggle" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                          Pages
                        </a>
                    <ul class="dropdown-menu my-dropdown mt-2" aria-labelledby="triggerId">
                       <router-link to="/services" class="dropdown-item" href="#">Services</router-link>
                       <router-link to="/about" class="dropdown-item" href="#">About us</router-link>
                       <router-link to="/contact" class="dropdown-item" href="#">Contact us</router-link>
                       <router-link to="/blog" class="dropdown-item" href="#">Blog</router-link>
                         <router-link to="/products" class="dropdown-item" href="#">Our products</router-link>
                    </ul>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
  </div>
   <div class="breadcrumb-option mt-5 pb-4">
        <div class="container">
            <div class="row m-0 p-0">
                <div class="col-lg-12">
                    <div class="breadcrumb__links mt-3 pb-0">
                        <a href="#"><i class="fa fa-home"></i> Home</a>
                        <span>Services</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="countdown countdown--page spad set-bg" data-setbg="img/countdown-bg.jpg">
        <div class="container">
            <div class="row m-0 p-0">
                <div class="col-lg-12">
                   <div class="countdown__text animated fadeInUp">
                   <h1>OUR SERVICES</h1>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>  
                   </div>                 
                    <div class="buy__tickets">
                        <a href="#" class="primary-btn animated fadeIn mt-5">Buy tickets</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Countdown Section End -->

    <!-- Tours Section Begin -->
    <section class="tours spad">
        <div class="container">
            <div class="row m-0 p-0">
                <div class="col-lg-6 order-lg-1">
                    <div class="tours__item__text">
                        <h2>Name Of Service</h2>
                        <div class="tours__text__widget">
                            <ul>
                                <li>
                                    <i class="fa fa-clock-o"></i>
                                    <span>Time(If any)</span>
                                    <span>Year Of Invention(If any)</span>
                                </li>
                                <li>
                                    <i class="fa fa-map-marker"></i>
                                    Name Of Place, City, Country
                                </li>
                            </ul>
                            <div class="price">$ 35.00</div>
                        </div>
                        <div class="tours__text__desc ">
                            <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora pariatur magni nemo culpa consequatur fuga ab ea eveniet. Corporis reiciendis quaerat sunt consequuntur aut.</p>
                            <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum voluptatem possimus, doloremque nesciunt error quis perspiciatis, quam minus aspernatur totam similique rerum reiciendis.</p>
                        </div>
                        <a href="#" class="primary-btn border-btn buy__tickets">Buy tickets</a>
                    </div>
                </div>
                <div class="col-lg-6 order-lg-2">
                    <div class="tours__item__pic " data-aos="zoom-In">
                        <img src="~@/assets/pharma services2.jpg" alt="">
                    </div>
                </div>
                <div class="col-lg-6 order-lg-4">
                    <div class="tours__item__text tours__item__text--right">
                        <h2>Name Of Service</h2>
                        <div class="tours__text__widget">
                            <ul>
                                <li>
                                    <i class="fa fa-clock-o"></i>
                                    <span>Time(If any)</span>
                                    <span> Year Of Invention(If any)</span>
                                </li>
                                <li>
                                    <i class="fa fa-map-marker"></i>
                                    Name of place, City, Country
                                </li>
                            </ul>
                            <div class="price" id="second">$ 35.00</div>
                        </div>
                        <div class="tours__text__desc">
                            <p class="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ut nesciunt praesentium corrupti iusto nostrum nobis sed dicta cumque doloremque delectus quas autem officiis</p>
                            <p class="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque rerum ipsam blanditiis et quaerat, voluptate maiores facilis repellendus distinctio est, possimus, dicta odit. Incidunt, fugiat.</p>
                        </div>
                        <a href="#" class="primary-btn border-btn buy__tickets">Buy tickets</a>
                    </div>
                </div>
                <div class="col-lg-6 order-lg-3">
                    <div class="tours__item__pic tours__item__pic--left">
                        <img src="~@/assets/medical dev1.jpg" alt="" data-aos="zoom-In">
                    </div>
                </div>
                <div class="col-lg-6 order-lg-5">
                    <div class="tours__item__text">
                        <h2>Name Of Service</h2>
                        <div class="tours__text__widget">
                            <ul>
                                <li>
                                    <i class="fa fa-clock-o"></i>
                                    <span>Time(If any)</span>
                                    <span>Year Of Invention(If any)</span>
                                </li>
                                <li>
                                    <i class="fa fa-map-marker"></i>
                                    Name of place, City, Country
                                </li>
                            </ul>
                            <div class="price">$ 35.00</div>
                        </div>
                        <div class="tours__text__desc">
                            <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus deserunt nam, iure voluptatibus fuga suscipit illum velit perspiciatis eos impedit nisi labore quis error.</p>
                            <p class="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eius voluptatibus officia ratione quam rerum, repudiandae sit numquam nisi, quidem reprehenderit sed perspiciatis placeat?</p>
                        </div>
                        <a href="#" class="primary-btn border-btn  buy__tickets">Buy tickets</a>
                    </div>
                </div>
                <div class="col-lg-6 order-lg-6">
                    <div class="tours__item__pic tours__item__pic--last">
                        <img src="~@/assets/bp7.jpg" alt="" data-aos="zoom-In">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Tours Section End -->

    <!-- Footer Section Begin -->
    <footer class="footer footer--normal spad set-bg"  data-aos="fadeIn"  data-setbg="img/footer-bg.png">
        <div class="container">
            <div class="row p-0 m-0">
                <div class="col-lg-3 col-md-6">
                    <div class="footer__address">
                        <ul>
                            <li>
                                <i class="fa fa-phone"></i>
                                <p>Phone</p>
                                <h6>1-677-124-44227</h6>
                            </li>
                            <li>
                                <i class="fa fa-envelope"></i>
                                <p>Email</p>
                                <h6>PharmacyName@gmail.com</h6>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 offset-lg-1 col-md-6">
                    <div class="footer__social">
                        <h2>PharmacyName</h2>
                        <div class="footer__social__links">
                            <a href="#">
                             <img src="~@/assets/icon_facebook.png" alt="" width="20%">
                            </a>
                            <a href="#">
                             <img src="~@/assets/icon_twitter.png" alt="" width="35%">
                            </a>
                            <a href="#">
                             <img src="~@/assets/icon_linkedin.png" alt="" width="35%">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-1 col-md-6">
                    <div class="footer__newslatter">
                        <h4>Stay With us</h4>
                        <form action="#">
                            <input type="text" placeholder="Email">
                            <button type="submit" >subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</main>
  </div>
</template>

<script>

window.addEventListener('scroll',function(){
    const offset = window.pageYOffset;
     var nav = document.getElementById("nav")
    if(offset > 75){
       nav.classList.add('scroll')
    }else{
        nav.classList.remove('scroll')
    }
})

export default {
  name: 'App',
  components: {
      
      
  },
  
  data(){
     return {
      
     }
},
 methods: {
  
}}
</script>

<style scoped>
.fa-bars{
  font-size: 1.8rem;
}
.app{
    animation-delay: 1.8s;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: fit-content;
}
.navbar{
    background: rgba(139, 154, 163, 0.5);
    padding-top: 13px;
    padding-bottom: 13px;
    transition: all ease .5s;
}
.scroll{
    color: grey;
    background-color:  #fff;
    padding-top: 5px;
    padding-bottom: 5px;
   box-shadow: 0 4px 24px 0 rgba(103,151,255,.1), 0 12px 64px 0 rgba(103,151,255,.1);
}
.scroll .fa-first-aid{
    color: #28a7ff;
}
.scroll a{
    color: grey !important;
}
.scroll  .nav-brand{
    color: grey;
}
.navbar ,a {
   color: #fff;
}
.her h1{
	font-size: 70px;
	font-weight: 600;
	color: #646464;
	margin-top: 22%;
}
.dropdown-item:nth-of-type(1){
  animation-delay: 0s;
}
.dropdown-item:nth-of-type(2){
  animation-delay: 0.1s;
}
.dropdown-item:nth-of-type(3){
  animation-delay: 0.2s;
}
.dropdown-item:nth-of-type(4){
  animation-delay: 0.3s;
}
.dropdown-item:nth-of-type(5){
  animation-delay: 0.4s;
}
.navbar li{
      text-transform: uppercase;
    font-weight: 400;
  margin: 0px 10px;
}
.my-dropdown{
  background-color: transparent !important;
}

.dropdown-menu{
  border: none;
}
.dropdown-item:hover{
        transition: all ease .2s;
   margin-top: 4px;
  padding: 12px 40px 12px 20px;
  border-radius: 5px;
  transform-origin: center;
  animation:rotate 1.5s ease 1;
  background-color: grey;
  color: #fff !important;
}
.dropdown-item{

  padding: 12px 40px 12px 20px;
   margin-top: 4px;
  padding: 12px 40px 12px 20px;
  border-radius: 5px;
  transform-origin: center;
  animation:rotate 1.5s ease 1;
  background-color: #28a7ff;
  color: #fff !important;
}
@keyframes rotate{
  0%{
    transform: perspective(600px) rotateY(90deg);
    transform-origin: center;
  }
  100%{
    transform: perspective(600px) rotateY(0deg);
    transform-origin: center;
  }
}
.tours {
	padding-top: 150px;
	padding-bottom: 60px;
}

.tours__item__text {
	padding-right: 30px;
	margin-bottom: 100px;
}

.tours__item__text.tours__item__text--right {
	padding-left: 30px;
	padding-right: 0;
}

.tours__item__text h2 {
	font-size: 42px;
	color: #111111;
	text-transform: uppercase;
	margin-bottom: 24px;
}

.tours__item__text .tours__text__widget {
	overflow: hidden;
	border-bottom: 2px solid #f2f2f2;
	padding-bottom: 38px;
}

.tours__item__text .tours__text__widget ul {
	float: left;
}

.tours__item__text .tours__text__widget ul li {
	list-style: none;
	font-size: 15px;
	color: #111111;
	padding-left: 35px;
	position: relative;
	margin-bottom: 10px;
}

.tours__item__text .tours__text__widget ul li:last-child {
	margin-bottom: 0;
}

.tours__item__text .tours__text__widget ul li i {
	color: #28a7ff;
	position: absolute;
	left: 0;
	top: 3px;
}

.tours__item__text .tours__text__widget ul li span {
	display: inline-block;
	padding-right: 8px;
	position: relative;
	margin-right: 5px;
}

.tours__item__text .tours__text__widget ul li span:last-child {
	padding-right: 0;
	margin-right: 0;
}

.tours__item__text .tours__text__widget ul li span:last-child:after {
	display: none;
}

.tours__item__text .tours__text__widget ul li span:after {
	position: absolute;
	right: 0;
	top: 0;
	content: "|";
}

.tours__item__text .tours__text__widget .price {
	font-size: 18px;
	color: #ffffff;
	font-weight: 700;
	display: inline-block;
	padding: 14px 25px 12px 30px;
	background: #28a7ff;
	float: right;
}

.tours__item__text .tours__text__desc {
	padding-top: 40px;
	margin-bottom: 65px;
}

.tours__item__text .tours__text__desc p {
	color: #111111;
	margin-bottom: 20px;
}

.tours__item__text .tours__text__desc p:last-child {
	margin-bottom: 0;
}

.tours__item__pic {
	position: relative;
	z-index: 1;
	padding-right: 50px;
	margin-bottom: 110px;
	padding-left: 30px;
}

.tours__item__pic.tours__item__pic--left {
	padding-left: 50px;
	padding-right: 0;
}

.tours__item__pic.tours__item__pic--left:after {
	left: 0;
}

.tours__item__pic.tours__item__pic--last {
	margin-bottom: 0;
}

.tours__item__pic:after {
	position: absolute;
	left: 50px;
	top: -50px;
	width: calc(100% - 50px);
	height: 100%;
	border: 20px solid rgba(9, 53, 247, 0.1);
	content: "";
	z-index: -1;
}

.tours__item__pic img {
    box-shadow: 0 4px 24px 0 rgba(103,151,255,.1), 0 12px 64px 0 rgba(103,151,255,.1);
    height: 400px;
	width: 100%;
}
@media screen and (max-width: 900px) {
    .tours__item__pic img {
    height: 300px;
	width: 100%;
}
}
.countdown {
    display: block;
    margin: auto;
	padding-bottom: 560px;
    background-size: cover;
    background-image:linear-gradient(to right, rgba(16, 16, 29,0.1),rgba(56, 125, 153,0.9)), url('~@/assets/pharma services1.jpg');
    background-position: center;
    width: 95%;
    height: 600px;
    background-repeat: no-repeat;
}

.countdown.countdown--page {
	padding-top: 150px;
	padding-bottom: 150px;
}

.countdown__text {
    animation-delay: 2s;
	text-align: center;
	margin-bottom: 36px;
}
 @media screen and (max-width:600px){
    .countdown__text h1 {
	font-size: 50px !important;
	color: #ffffff;
	font-family: "Rockville Solid Regular";
	color: #ffffff;
	margin-bottom: 25px;
}
.countdown__text h4 {
	font-size: 20px !important;
	font-family: "Now Regular";
	color: #ffffff;
	text-transform: uppercase;
	letter-spacing: 4px;
}
  }
.countdown__text h1 {
	font-size: 90px;
	color: #ffffff;
	font-family: "Rockville Solid Regular";
	color: #ffffff;
	margin-bottom: 25px;
}

.countdown__text h4 {
	font-size: 26px;
	font-family: "Now Regular";
	color: #ffffff;
	text-transform: uppercase;
	letter-spacing: 4px;
}

.countdown__timer {
	text-align: center;
	margin-bottom: 30px;
}

.countdown__item {
	display: inline-block;
	margin-right: 80px;
	margin-bottom: 30px;
}

.countdown__item:last-child {
	margin-right: 0;
}

.countdown__item span {
	font-size: 90px;
	font-family: "Rajdhani", sans-serif;
	font-weight: 700;
	color: #ffffff;
	display: block;
	line-height: 100px;
}

.countdown__item p {
	color: #ffffff;
	letter-spacing: 4px;
	text-transform: uppercase;
	margin-bottom: 0;
}

.buy__tickets {
	text-align: center;
}
.footer {
	background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
	padding-top: 10px;
	padding-bottom: 60px;
	margin-top: -147px;
	height: fit-content;
}

.footer.footer--normal {
	margin-top: 0;
}

.footer__address {
	margin-bottom: 50px;
}

.footer__address ul li {
	list-style: none;
	padding-left: 70px;
	position: relative;
	margin-bottom: 30px;
}

.footer__address ul li:last-child {
	margin-bottom: 0;
}

.footer__address ul li i {
	font-size: 18px;
	color: #28a7ff;
	height: 50px;
	width: 50px;
	background: #ffffff;
	border-radius: 50%;
	line-height: 50px;
	text-align: center;
	position: absolute;
	left: 0;
	top: 0;
}

.footer__address ul li p {
	color: #ffffff;
	opacity: 0.7;
	margin-bottom: 8px;
}

.footer__address ul li h6 {
	font-size: 15px;
	font-weight: 700;
	color: #ffffff;
}

.footer__social {
	text-align: center;
	position: relative;
	margin-bottom: 50px;
}

.footer__social::before {
	position: absolute;
	left: -4px;
	top: 3px;
	width: 1px;
	height: 130px;
	background: rgba(255, 255, 255, 0.2);
	content: "";
}

.footer__social::after {
	position: absolute;
	right: -5px;
	top: 3px;
	width: 1px;
	height: 130px;
	background: rgba(255, 255, 255, 0.2);
	content: "";
}

.footer__social h2 {
	color: #ffffff;
	font-weight: 700;
	margin-bottom: 25px;
}

.footer__social .footer__social__links a {
	font-size: 18px;
	color: #28a7ff;
	height: 50px;
	width: 50px;
	background: #ffffff;
	border-radius: 50%;
	line-height: 50px;
	text-align: center;
	display: inline-block;
	margin-right: 10px;
}

.footer__social .footer__social__links a:last-child {
	margin-right: 0;
}

.footer__newslatter {
	margin-bottom: 50px;
}

.footer__newslatter h4 {
	font-size: 26px;
	color: #ffffff;
	font-weight: 700;
	margin-bottom: 30px;
}

.footer__newslatter form {
	position: relative;
}

.footer__newslatter form input {
	height: 50px;
	font-size: 15px;
	color: #ffffff;
	width: 100%;
	background: transparent;
	border: 1px solid rgba(255, 255, 255, 0.2);
	padding-left: 20px;
}

.footer__newslatter form input::-webkit-input-placeholder {
	color: #ffffff;
}

.footer__newslatter form input::-moz-placeholder {
	color: #ffffff;
}

.footer__newslatter form input:-ms-input-placeholder {
	color: #ffffff;
}

.footer__newslatter form input::-ms-input-placeholder {
	color: #ffffff;
}

.footer__newslatter form input::placeholder {
	color: #ffffff;
}

.footer__newslatter form button {
	font-size: 18px;
	color: #28a7ff;
	position: absolute;
	right: 0;
	top: 0;
	height: 100%;
	padding: 0 16px;
	background: #ffffff;
	border: none;
}

.footer__copyright__text {
	text-align: center;
}

.footer__copyright__text p {
	color: #999999;
}

.footer__copyright__text a {
	color: #999999;
	text-decoration: underline;
}

.footer__copyright__text a:hover {
	color: #28a7ff;
}

.footer__copyright__text i {
	color: #c11;
}
 .breadcrumb-option {
	padding-top: 35px;
}

.breadcrumb__links a {
	font-size: 15px;
	color: #111111;
	margin-right: 18px;
	display: inline-block;
	position: relative;
}

.breadcrumb__links a:after {
	position: absolute;
	right: -14px;
	top: 0;
	content: "|";
	color: #888888;
}

.breadcrumb__links a i {
	margin-right: 5px;
}

.breadcrumb__links span {
	font-size: 15px;
	color: #888888;
	display: inline-block;
}
.buy__tickets a{
    -webkit-tap-highlight-color: transparent;
--breakpoint-xs: 0;
--breakpoint-sm: 576px;
--breakpoint-md: 768px;
--breakpoint-lg: 992px;
--breakpoint-xl: 1200px;
--font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
--font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
font-weight: 400;
line-height: 1.5;
font-family: "Now Regular";
-webkit-font-smoothing: antialiased;
text-align: center;
box-sizing: border-box;
text-decoration: none;
display: inline-block;
font-size: 15px;
text-transform: uppercase;
padding: 14px 25px 12px;
color: #ffffff;
background: #27a8ff;
letter-spacing: 2px;
animation-duration: 2s;
}
.loader{
  -webkit-tap-highlight-color: transparent;

font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #212529;
text-align: left;
font-family: "Now Regular";
-webkit-font-smoothing: antialiased;
box-sizing: border-box;
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
z-index: 999999;
background: #000;
animation-name: stay;
animation-duration: 2s;
animation-iteration-count: 9s;
animation-fill-mode: forwards;
}
@keyframes stay{
  0%{
    background: #000;
  }
  100%{
    visibility: hidden;
  }
}
.loader-inner{
  -webkit-tap-highlight-color: transparent;

font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: white;
text-align: left;
font-family: "Now Regular";
-webkit-font-smoothing: antialiased;
box-sizing: border-box;
width: 40px;
height: 40px;
position: absolute;
top: 50%;
left: 50%;
margin-top: -13px;
margin-left: -13px;
border-radius: 60px;
animation-name: loader;
animation-duration: 1.3s;
animation-iteration-count: infinite;
animation-fill-mode: forwards;
}
@keyframes loader {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
		border: 4px solid #f44336;
		border-left-color: transparent;
	}
	50% {
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg);
		border: 4px solid #673ab7;
		border-left-color: transparent;
	}
	100% {
   
		visibility: hidden;
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
		border: 4px solid #f44336;
		border-left-color: transparent;
	}
}
.primary-btn {
	display: inline-block;
	font-size: 15px;
	text-transform: uppercase;
	padding: 14px 25px 12px;
	color: #ffffff;
	background: #28a7ff;
	letter-spacing: 2px;
}

.primary-btn.border-btn {
	background: transparent;
	border: 2px solid #28a7ff;
	color: #111111;
}

</style>