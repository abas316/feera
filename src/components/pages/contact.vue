<template>
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
						<router-link id="pages" to="/services" class="dropdown-item" href="#">Services</router-link>
                       <router-link  to="/about" class="dropdown-item" href="#">About us</router-link>
                       <router-link  to="/contact" class="dropdown-item" href="#">Contact us</router-link>
                       <router-link  to="/blog" class="dropdown-item" href="#">Blog</router-link>
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
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__links">
                        <a href="#"><i class="fa fa-home"></i> Home</a>
                        <span>Contact us</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->

    <!-- Map Begin -->
    <div class="map container animted">
        <div class="container">
             <div class="countdown__text animated fadeInUp">
                   <h1>CONTACT US</h1>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>  
                   </div>  
        </div>
    </div>
    <!-- Map End -->

    <!-- Contact Section Begin -->
    <section class="contact spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="contact__address">
                        <div class="section-title">
                            <h2>Contact info</h2>
                        </div>
                        <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore.</p>
                        <ul>
                            <li>
                                <i class="fa fa-map-marker"></i>
                                <h5>Address</h5>
                                <p>Los Angeles Gournadi, 1230 Bariasl</p>
                            </li>
                            <li>
                                <i class="fa fa-phone"></i>
                                <h5>Hotline</h5>
                                <span>1-677-124-44227</span>
                                <span>1-688-356-66889</span>
                            </li>
                            <li>
                                <i class="fa fa-envelope"></i>
                                <h5>Email</h5>
                                <p>Support@gamail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="contact__form">
                        <div class="section-title">
                            <h2>Get in touch</h2>
                        </div>
                        <p class="text-secondary">Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <form action="#">
                            <div class="input__list">
                                <input type="text" placeholder="Name">
                                <input type="text" placeholder="Email">
                                <input type="text" placeholder="Website">
                            </div>
                            <textarea placeholder="Comment"></textarea>
                            <button type="submit" class="site-btn">SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Section End -->

    <!-- Footer Section Begin -->
    <footer class="footer footer--normal spad set-bg"  data-aos="fadeIn" data-setbg="img/footer-bg.png">
        <div class="container">
            <div class="row">
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
                            <button type="submit">Subscribe</button>
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
	var nav = document.getElementById("nav")
    const offset = window.pageYOffset;
    if(offset > 75){
    nav.classList.add('scroll')
    }else{
        nav.classList.remove('scroll')
    }
})

window.addEventListener('load',function(){
	const loader = document.getElementsByClassName("loader")
	loader.className += " hidden"
})
export default {
  
  name: 'App',
  components: {
  },
  computed: {
    username() {
      return this.$route.params.username
    }
    
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  },
  data(){
    return{
      display:true,

    }
  },
 
  
}
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
.hero {
	padding-top: 400px;
	padding-bottom: 295px;
	position: relative;
}

.hero__text {
	text-align: center;
}

.hero__text span {
	color: #ffffff;
	text-transform: uppercase;
	letter-spacing: 6px;
}

.hero__text h1 {
	font-size: 110px;
	font-family: "Rockville Solid Regular";
	color: #ffffff;
	margin-bottom: 20px;
	margin-top: 22px;
}

.hero__text p {
	color: #ffffff;
	margin-bottom: 20px;
}

.hero__text .play-btn {
	font-size: 26px;
	color: #28a7ff;
	height: 90px;
	width: 90px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.3);
	display: inline-block;
	line-height: 90px;
	text-align: center;
	position: relative;
	z-index: 1;
}

.hero__text .play-btn i {
	position: relative;
	top: 2px;
	left: 2px;
}

.hero__text .play-btn:after {
	position: absolute;
	left: 15px;
	top: 15px;
	height: 60px;
	width: 60px;
	background: #ffffff;
	border-radius: 50%;
	content: "";
	z-index: -1;
}

.linear__icon {
	position: absolute;
	left: 50%;
	bottom: 0;
	margin-left: -16px;
	-webkit-animation: mymove 0.5s infinite alternate;
	animation: mymove 0.5s infinite alternate;
}

.linear__icon i {
	font-size: 50px;
	color: #28a7ff;
}

@-webkit-keyframes mymove {
	0% {
		bottom: 0;
	}
	100% {
		bottom: -10px;
	}
}

@keyframes mymove {
	0% {
		bottom: 0;
	}
	100% {
		bottom: -10px;
	}
}



/*---------------------
  Footer
-----------------------*/

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

/*---------------------
  Breadcrumb
-----------------------*/

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








.blog__option__btn.blog__option__btn--next .blog__option__btn__item .blog__option__btn__pic {
	float: right;
	margin-right: 0;
	margin-left: 30px;
}

.blog__option__btn .option__btn__name {
	font-size: 15px;
	color: #444444;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 25px;
}

.blog__option__btn .option__btn__name i {
	font-size: 18px;
	font-weight: 700;
	margin-right: 6px;
}

.blog__option__btn__pic {
	float: left;
	margin-right: 26px;
}

.blog__option__btn__text {
	overflow: hidden;
}

.blog__option__btn__text h6 {
	color: #111111;
	font-weight: 700;
	line-height: 21px;
}

.blog__option__btn__text span {
	color: #888888;
	font-size: 13px;
}

.blog__details__services {
	margin-bottom: 30px;
}

.blog__details__services__title,
.blog__details__form__title {
	text-align: center;
	margin-bottom: 30px;
}

.blog__details__services__title h4,
.blog__details__form__title h4 {
	color: #111111;
	font-weight: 700;
	position: relative;
	padding-bottom: 20px;
	font-size: 26px;
}

.blog__details__services__title h4::before,
.blog__details__form__title h4::before {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	height: 5px;
	width: 70px;
	background: #e1e1e1;
	content: "";
	margin: 0 auto;
}

.blog__details__services__item {
	-webkit-box-shadow: 0px 5px 15px rgba(0, 61, 85, 0.07);
	box-shadow: 0px 5px 15px rgba(0, 61, 85, 0.07);
	margin-bottom: 30px;
}

.blog__details__services__item__pic img {
	min-width: 100%;
}

.blog__details__services__item__text {
	padding: 15px 20px 10px;
}

.blog__details__services__item__text h6 a {
	font-size: 17px;
	color: #111111;
	font-weight: 700;
	line-height: 22px;
}

.blog__details__services__item__text span {
	color: #888888;
	font-size: 13px;
}

.blog__details__form form .input__list,
.contact__form form .input__list {
	margin-right: -20px;
	overflow: hidden;
}

.blog__details__form form .input__list input,
.contact__form form .input__list input {
	height: 50px;
	font-size: 13px;
	color: #666666;
	padding-left: 20px;
	border: 1px solid #e1e1e1;
	width: calc(33.33% - 20px);
	margin-bottom: 20px;
	margin-right: 16px;
}

.blog__details__form form .input__list input::-webkit-input-placeholder,
.contact__form form .input__list input::-webkit-input-placeholder {
	color: #666666;
}

.blog__details__form form .input__list input::-moz-placeholder,
.contact__form form .input__list input::-moz-placeholder {
	color: #666666;
}

.blog__details__form form .input__list input:-ms-input-placeholder,
.contact__form form .input__list input:-ms-input-placeholder {
	color: #666666;
}

.blog__details__form form .input__list input::-ms-input-placeholder,
.contact__form form .input__list input::-ms-input-placeholder {
	color: #666666;
}

.blog__details__form form .input__list input::placeholder,
.contact__form form .input__list input::placeholder {
	color: #666666;
}

.blog__details__form form textarea,
.contact__form form textarea {
	height: 120px;
	font-size: 13px;
	color: #666666;
	padding-left: 20px;
	padding-top: 12px;
	border: 1px solid #e1e1e1;
	width: 100%;
	margin-bottom: 14px;
	resize: none;
}

.blog__details__form form textarea::-webkit-input-placeholder,
.contact__form form textarea::-webkit-input-placeholder {
	color: #666666;
}

.blog__details__form form textarea::-moz-placeholder,
.contact__form form textarea::-moz-placeholder {
	color: #666666;
}

.blog__details__form form textarea:-ms-input-placeholder,
.contact__form form textarea:-ms-input-placeholder {
	color: #666666;
}

.blog__details__form form textarea::-ms-input-placeholder,
.contact__form form textarea::-ms-input-placeholder {
	color: #666666;
}

.blog__details__form form textarea::placeholder,
.contact__form form textarea::placeholder {
	color: #666666;
}

/*---------------------
  Map
-----------------------*/

.map {
	background-image:linear-gradient(to left, rgba(16, 16, 29,0.1),rgba(56, 125, 153,0.9)),  url('~@/assets/doc2.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	height: 585px;
	margin-top: 60px;
}
@media screen and (max-width: 600px) {
	.map img{
		width: 100%;
	}
}

.map iframe {
	width: 100%;
}

/*---------------------
  Contact
-----------------------*/

.contact {
	padding-top: 70px;
	padding-bottom: 50px;
	/* border: 2px solid #000; */
	box-shadow: 1px 1px 1px 1px #999
}

.contact__address .section-title {
	margin-bottom: 10px;
}

.contact__address .section-title h2 {
	text-transform: none;
}

.contact__address p {
	margin-bottom: 34px;
}

.contact__address ul li {
	list-style: none;
	padding-left: 100px;
	position: relative;
	margin-bottom: 30px;
}

.contact__address ul li:last-child {
	margin-bottom: 0;
}

.contact__address ul li i {
	font-size: 30px;
	height: 70px;
	width: 70px;
	background: #f5f5f5;
	border-radius: 50%;
	line-height: 70px;
	text-align: center;
	color: #28a7ff;
	position: absolute;
	left: 0;
	top: -4px;
}

.contact__address ul li h5 {
	font-size: 20px;
	color: #111111;
	font-weight: 700;
	margin-bottom: 10px;
}

.contact__address ul li p {
	margin-bottom: 0;
}

.contact__address ul li span {
	font-size: 15px;
	color: #111111;
	display: inline-block;
	margin-right: 25px;
	position: relative;
}

.contact__address ul li span:after {
	position: absolute;
	right: -20px;
	top: -1px;
	content: ".";
	font-size: 39px;
	line-height: 0;
	border-radius: 50%;
}

.contact__address ul li span:last-child {
	margin-right: 0;
}

.contact__address ul li span:last-child:after {
	display: none;
}

.contact__form .section-title {
	margin-bottom: 10px;
}

.contact__form .section-title h2 {
	text-transform: none;
}

.contact__form p {
	margin-bottom: 34px;
}

/*--------------------------------- Responsive Media Quaries -----------------------------*/

@media only screen and (min-width: 1200px) {
	.container {
		max-width: 1170px;
	}
}

/* Medium Device = 1200px */

@media only screen and (min-width: 992px) and (max-width: 1199px) {
	.header__menu ul li {
		margin-right: 18px;
	}
	.header__menu {
		margin-right: 30px;
	}
	.service__item {
		padding: 40px 30px 30px 40px;
	}
	.skills__content {
		padding: 60px 40px 40px;
	}
	.discography__item__text a {
		margin-right: 0;
		text-align: center;
		margin-bottom: 10px;
	}
}

/* Tablet Device = 768px */

@media only screen and (min-width: 768px) and (max-width: 991px) {
	.header__right__social {
		display: none;
	}
	.header__menu {
		margin-right: 0;
	}
	.header__menu ul li {
		margin-right: 15px;
	}
	.event .section-title:after {
		width: 560px;
	}
	.track__all {
		text-align: left;
		margin-bottom: 60px;
	}
	.track__content {
		margin-bottom: 120px;
	}
	.track__pic img {
		height: auto;
	}
	.footer {
		height: auto;
	}
	.about.about--page .about__text {
		padding-top: 30px;
	}
	.discography__item__text a {
		margin-right: 0;
		text-align: center;
		margin-bottom: 10px;
	}
	.blog__sidebar {
		padding-top: 50px;
	}
	.contact__address {
		margin-bottom: 40px;
	}
	.footer__social::before {
		display: none;
	}
	.footer__social::after {
		display: none;
	}
	.tours__item__pic {
		margin-bottom: 50px;
	}
	.tours__item__text {
		padding-right: 0;
	}
	.countdown {
		padding-bottom: 776px;
	}
	.footer {
		margin-top: -740px;
		background-position: top 0 left 19%;
	}
}

/* Wide Mobile = 480px */

@media only screen and (max-width: 767px) {
	.hero {
		padding-top: 190px;
		padding-bottom: 200px;
	}
	.event .section-title:after {
		display: none;
	}
	.track__all {
		text-align: left;
		margin-bottom: 60px;
	}
	.track__content {
		margin-bottom: 120px;
	}
	.track .p-0 {
		padding: 0 15px !important;
	}
	.track__pic img {
		height: auto;
	}
	.discography__item__text a {
		margin-right: 0;
		text-align: center;
		margin-bottom: 10px;
	}
	.blog__sidebar {
		padding-top: 50px;
	}
	.contact__address {
		margin-bottom: 40px;
	}
	.footer {
		height: auto;
	}
	.footer__social::before {
		display: none;
	}
	.footer__social::after {
		display: none;
	}
	.player_bars {
		width: 240px;
		margin-right: 20px;
	}
	.jp-seek-bar>div {
		width: 140px;
	}
	.countdown__item {
		margin-right: 0;
		margin-bottom: 30px;
		width: 50%;
		float: left;
	}
	.footer__social {
		text-align: left;
	}
	.skills__content {
		height: auto;
	}
	.about.about--page .about__text {
		padding-top: 30px;
	}
	.tours__item__pic {
		margin-bottom: 50px;
	}
	.blog__large__widget ul {
		text-align: center;
	}
	.blog__large__widget .right__widget {
		text-align: center;
	}
	.blog__option__btn {
		margin-bottom: 30px;
	}
	.blog__details__form form .input__list,
	.contact__form form .input__list {
		margin-right: 0;
		overflow: visible;
	}
	.blog__details__form form .input__list input,
	.contact__form form .input__list input {
		width: 100%;
		margin-right: 0;
	}
	.header__nav {
		display: none;
	}
	.header .container {
		position: relative;
	}
	.slicknav_btn {
		position: absolute;
		right: 15px;
		top: 25px;
		margin: 0;
		border-radius: 0;
		padding: 12px 15px;
		float: none;
		background: #28a7ff;
	}
	.slicknav_nav {
		position: absolute;
		left: 0;
		top: 90px;
		background: #222;
		width: 100%;
	}
	.slicknav_menu {
		background: transparent;
		padding: 0;
		display: block;
	}
	.slicknav_nav ul {
		margin: 0;
		padding: 5px 0;
	}
	.slicknav_nav .slicknav_row,
	.slicknav_nav a {
		padding: 10px 28px;
		margin: 0;
	}
	.slicknav_nav a:hover {
		border-radius: 0;
		background: #28a7ff;
		color: #ffffff;
	}
	.slicknav_nav .slicknav_row:hover {
		border-radius: 0;
		background: #28a7ff;
		color: #ffffff;
	}
	.service__item {
		height: auto;
	}
	.tours__item__text {
		padding-right: 0;
	}
	.countdown {
		padding-bottom: 940px;
	}
	.footer {
		margin-top: -940px;
		background-position: top 0 left 19%;
	}
}

/* Small Device = 320px */

@media only screen and (max-width: 479px) {
	.section-title h1 {
		top: -40px;
		font-size: 79px;
		line-height: 0.8;
	}
	.hero__text h1 {
		font-size: 70px;
	}
	.videos {
		padding-bottom: 0;
	}
	.countdown__text h1 {
		font-size: 50px;
	}
	.single_player_container h4 {
		font-size: 16px;
	}
	.player_bars {
		width: 150px;
		margin-right: 10px;
	}
	.player_controls_box {
		margin-right: 10px;
	}
	.jp-volume-controls {
		width: 68px;
		padding-left: 23px;
	}
	.jp-volume-bar {
		width: 42px;
	}
	.jp-seek-bar>div {
		width: 55px;
	}
	.service__item {
		height: auto;
		padding: 40px 40px 40px 40px;
	}
	.skills__content {
		height: auto;
		padding: 80px 25px 40px;
	}
	.tours__item__text .tours__text__widget ul {
		float: none;
		margin-bottom: 30px;
	}
	.tours__item__text .tours__text__widget .price {
		float: none;
	}
	.tours__item__pic {
		padding-left: 0;
	}
	.tours__item__text.tours__item__text--right {
		padding-left: 0;
	}
	.blog__large__text {
		padding: 30px 20px 0;
	}
	.blog__large__widget {
		margin: 0;
	}
	.blog__details__tags a {
		margin-bottom: 10px;
	}
	.countdown {
		padding-bottom: 980px;
	}
	.footer {
		margin-top: -970px;
		background-position: top 0 left 19%;
	}
}
.countdown__text {
	animation-delay: 2.2s;
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
	padding-top: 13%;
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
.site-btn{
	-webkit-tap-highlight-color: transparent;

--breakpoint-xs: 0;
--breakpoint-sm: 576px;
--breakpoint-md: 768px;
--breakpoint-lg: 992px;
--breakpoint-xl: 1200px;
--font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
--font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
-webkit-font-smoothing: antialiased;
box-sizing: border-box;
border-radius: 0;
margin: 0;
font-family: inherit;
line-height: inherit;
overflow: visible;
-webkit-appearance: button;
font-size: 15px;
color: #ffffff;
background: #28a7ff;
font-weight: 700;
letter-spacing: 2px;
border: none;
text-transform: uppercase;
display: inline-block;
padding: 14px 30px;
width: 100%;
cursor: pointer;
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