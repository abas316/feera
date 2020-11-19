<template>
  <div id="app">
<div class="loader animated fadeOut">
<div class=" loader-inner"></div>
</div>
<main class="app animated fadeIn">
<div>
      <nav class="navbar navbar-expand-sm fixed-top" id="nav">
       <a class="navbar-brand" href="#">
         <span style="font-family:Jokerman;font-weight:900;" class="ml-3 pt-3"><i class="fas fa-first-aid    "></i> Feera</span>
        </a>
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
   <div class="breadcrumb-option mt-5">
        <div class="container">
            <div class="row m-0 p-0">
                <div class="col-lg-12">
                    <div class="breadcrumb__links mt-3 pb-0">
                        <a href="#"><i class="fa fa-home"></i> Home</a>
                        <span>Products</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="discography spad">
        <div class="container">
            <div class="row m-0 p-0">
                <div class="col-lg-12">
                    <div class="section-title center-title">
                        <h2>Latest Medicines</h2>
                        <h1>Products</h1>
                    </div>
                </div>
            </div>
            <div class="row m-0 p-0">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="discography__item">
                        <div class="discography__item__pic">
                            <img src="~@/assets/drug8.jpg" alt="">
                        </div>
                        <div class="discography__item__text">
                            <span>$ 52.00</span>
                            <h4>EDM Party Electro House</h4>
                            
                            <button class="btn">Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="discography__item">
                        <div class="discography__item__pic">
                            <img src="~@/assets/drug6.jpg" alt="">
                        </div>
                        <div class="discography__item__text">
                            <span>$ 52.00</span>
                            <h4>EDM Party Electro House</h4>
                            
                            <button class="btn">Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="discography__item">
                        <div class="discography__item__pic">
                            <img src="~@/assets/pills3.jpg" alt="">
                        </div>
                        <div class="discography__item__text">
                            <span>$ 52.00</span>
                            <h4>EDM Party Electro House</h4>
                            
                            <button class="btn">Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="discography__item">
                        <div class="discography__item__pic">
                            <img src="~@/assets/pills4.jpg" alt="">
                        </div>
                        <div class="discography__item__text">
                            <span>$ 52.00</span>
                            <h4>EDM Party Electro House</h4>
                            
                            <button class="btn">Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="discography__item">
                        <div class="discography__item__pic">
                            <img src="~@/assets/pharmacist5.jpg" alt="">
                        </div>
                        <div class="discography__item__text">
                            <span>$ 52.00</span>
                            <h4>EDM Party Electro House</h4>
                            
                            <button class="btn">Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="discography__item">
                        <div class="discography__item__pic">
                            <img src="~@/assets/pharma services2.jpg" alt="">
                        </div>
                        <div class="discography__item__text">
                            <span>$ 52.00</span>
                            <h4>EDM Party Electro House</h4>
                            
                            <button class="btn">Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="pagination__links">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">Next</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <footer class="footer footer--normal spad set-bg "  data-aos="fadeIn">
        <div class="container">
            <div class="row p-0 m-0">
                <div class="col-lg-3 col-md-4 col-12">
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
                <div class="col-lg-4 offset-lg-1 col-md-4 col-12">
                    <div class="footer__social">
                        <h2>PharmacyName</h2>
                        <div class="footer__social__links">
                            <a href="#">
                             <img src="~@/assets/icon_facebook.png" alt="" width="10px">
                            </a>
                            <a href="#">
                             <img src="~@/assets/icon_twitter.png" alt="" width="15px">
                            </a>
                            <a href="#">
                             <img src="~@/assets/icon_linkedin.png" alt="" width="15px">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-1 col-md-4 col-12">
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

// import songs from '@/components/pages/songs'
export default {
  name: '',
  components: {
      
  },
  
  
}
  

  

</script>

<style scoped> 
.fa-bars{
  font-size: 1.8rem;
}
  .app{
    animation-delay: 2s;
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
.discography {
	padding-bottom: 40px;
	padding-top: 50px;
	overflow: hidden;
}

.discography .section-title {
	margin-bottom: 90px;
}

.discography__item {
	margin-bottom: 45px;
	-webkit-box-shadow: 0px 5px 10px rgba(22, 41, 124, 0.1);
	box-shadow: 0px 5px 10px rgba(22, 41, 124, 0.1);
  transition: all ease .5s;
}
.discography__item:hover {
	transform: scale(1.01);
  cursor: pointer;
}

.discography__item__pic img {
  border-radius: 40px;
	width: 100%;
  height: 310px;
}

.discography__item__text {
	padding: 25px 30px 35px;
	text-align: center;
}
.discography__item__text button{
  color: #fff;
 background: linear-gradient(to right, rgba(127, 0, 173, 0.9), rgba(93, 0, 206, 0.9));
  box-shadow: 0 4px 24px 0 rgba(103,151,255,.1), 0 12px 64px 0 rgba(103,151,255,.1);
  border-radius: 10px;
  transition: all ease .4s;
}
.discography__item__text button:hover{
  transform: scale(1.02);
}

.discography__item__text span {
	font-size: 18px;
	color: #28a7ff;
	font-weight: 700;
}

.discography__item__text h4 {
	font-size: 22px;
	text-transform: uppercase;
	color: #111111;
	margin-top: 10px;
	margin-bottom: 25px;
}

.discography__item__text a {
	display: inline-block;
	margin-right: 10px;
}
.discography__item__text a img {
	width: 130px;
  height: 45px;
}

.discography__item__text a:last-child {
	margin-right: 0;
}

.pagination__links {
	text-align: center;
	padding-top: 10px;
}

.pagination__links.blog__pagination {
	text-align: left;
}

.pagination__links a {
	display: inline-block;
	font-size: 15px;
	color: #111111;
	text-transform: uppercase;
	letter-spacing: 2px;
	background: #f2f2f2;
	-webkit-transition: all, 0.3s;
	-o-transition: all, 0.3s;
	transition: all, 0.3s;
	margin-right: 6px;
	margin-bottom: 5px;
	padding: 14px 22px 12px;
}

.pagination__links a:last-child {
	margin-right: 0;
}

.pagination__links a:hover {
  text-decoration: none;
	background: #28a7ff;
	color: #ffffff;
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

</style>