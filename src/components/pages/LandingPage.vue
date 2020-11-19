<template>
  <div id="app">
<div class="loader animated fadeOut">
<div class=" loader-inner"></div>
</div>
<main class="app animated fadeIn">
<div>
      <nav class="navbar navbar-expand-sm fixed-top" id="nav">
       <router-link to="/" class="navbar-brand" href="#">
        <h3>LOGO</h3>
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
    <section class="hero spad set-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="hero__text animated fadeInUp">
                        <span>New treatment</span>
                        <h1>Feel Healthier</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor
                            incididunt ut labore et dolore magna aliqua.</p>
                        <div class="linear__icon">
                            <i class="fa fa-angle-double-down"></i>
                        </div>   
                        <a href="#" class="play-btn video-popup">
                         <button class="btn signUp pl-5 pr-5 pt-3 pb-3 text-white">SignUp</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->

    <!-- About Section Begin -->
    <section class="about spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-7" data-aos="fadeDown">
                    <div class="about__pic">
                        <img src="~@/assets/pharm8.jpg" alt="">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="about__text ml-4">
                        <div class="section-title mt-5">
                            <h2>Dr. Alexandra Rud</h2>
                            <h1>About me(CEO)</h1>
                        </div>
                        <p class="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ut in fugiat quis doloremque! Eius aut consectetur illo, corporis libero unde iure! Voluptas nam voluptatibus ipsam sapiente a itaque distinctio omnis ipsa in? Odit exercitationem vitae maiores! Accusantium, quaerat magnam.</p>
                        <a id="ct" href="#" class="primary-btn">CONTACT ME</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Section End -->

    <!-- Services Section Begin -->
    <section class="services mt-5 pt-5 pb-5">
        <div class="container-fluid">
            <div class="row" data-aos="fadeIn">
                <div class="col-lg-6 p-0">
                    <div class="services__left set-bg">
                        <a href="https://www.youtube.com/watch?v=JGwWNGJdvx8" class="play-btn video-popup"><i class="fa fa-play"></i></a>
                    </div>
                </div>
                <div class="col-lg-6 p-0">
                    <div class="row services__list">
                        <div class="col-lg-6 p-0 order-lg-1 col-md-6 order-md-1">
                            <div class="service__item deep-bg">
                                <i class="fas fa-first-aid    "></i>
                                <h4>First-aid</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 p-0 order-lg-2 col-md-6 order-md-2">
                            <div class="service__item">
                               <i class="fas fa-hospital    "></i>
                                <h4>Illness treatment</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 p-0 order-lg-4 col-md-6 order-md-4">
                            <div class="service__item deep-bg">
                               <i class="fas fa-pills    "></i>
                                <h4>Drugs prescription</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 p-0 order-lg-3 col-md-6 order-md-3">
                            <div class="service__item">
                                <i class="fas fa-ambulance    "></i>
                                <h4>Emergency</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="promo parallax-one pad mt-5 pb-5">
				<div class="container">
					<!-- promo element -->
					<div class="promo-element">
						<!-- heading -->
						<h3>Medicine A Science...</h3>
						<!-- paragraph -->
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptates doloremque debitis ducimus nemo ab soluta odio non. Quis, magni! Earum dolor voluptatum aliquam tenetur.</p>
						<!-- link -->
						<a class="promo-link" href="#"><i class="fa fa-play"></i></a>
					</div>
				</div>
			</div>

            <div class="meet parallax-four pad pb-5" id="meet" data-aos="fadeIn">
				<div class="container">
					<!-- default heading -->
					<div class="default-heading-shadow text-center">
						<h1 class="pt-5">We Are Avaialable In Your Continent</h1>
						
						<div style="font-family:Jokerman;" class="mt-5">
						<span >Europe, </span>
						<span>Africa,</span>
						<span> Asia,</span>
						<span> America</span>
						</div>
						
					</div>
					<!-- meet location image -->
					<div class="meet-map">
						<img class="img-responsive img-map" src="~@/assets/map.png" alt="" />
						<!-- map marker for India  -->
						<a href="#" class="map-marker india " data-toggle="tooltip" data-placement="top" title="India"><img class="img-responsive" src="~@/assets/map-marker.png" alt="" /></a>
						<!-- map marker for United States  -->
						<a href="#" class="map-marker usa " data-toggle="tooltip" data-placement="top" title="United States"><img class="img-responsive" src="~@/assets/map-marker.png" alt="" /></a>
						<!-- map marker for South Africa  -->
						<a href="#" class="map-marker sa " data-toggle="tooltip" data-placement="top" title="South Africa"><img class="img-responsive" src="~@/assets/map-marker.png" alt="" /></a>
						<!-- map marker for Russia  -->
						<a href="#" class="map-marker russia " data-toggle="tooltip" data-placement="top" title="Russia"><img class="img-responsive" src="~@/assets/map-marker.png" alt="" /></a>
						<!-- map marker for Brazil  -->
						<a href="#" class="map-marker brazil " data-toggle="tooltip" data-placement="top" title="Brazil"><img class="img-responsive" src="~@/assets/map-marker.png" alt="" /></a>
					</div>
				</div>
			</div>

<div class="download mt-5 container pt-5 pb-5" data-aos="fade">
      <div class="container">
        <div class="row mx-auto">
          <h2 class="text-dark col-sm-12 text-center">You Can Download Our Mobile-App</h2>
		<div class="row mx-auto">
		<a href="#" class="col-sm-6 text-center py-4 social-icon d-block"><img src="~@/assets/appStore.jpg" alt="" width="100%"></a>
        <a href="#" class="col-sm-6 text-center py-4 social-icon d-block"><img src="~@/assets/googlePlay.jpg" alt="" width="100%"></a>
		</div>
        </div>
      </div>
    </div>
    <footer class="footer footer--normal spad set-bg">
		<hr class="pb-5">
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
                        <h2 class="text-dark">PharmacyName</h2>
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
                        <h4 class="text-dark">Stay With us</h4>
                        <form action="#">
                            <input class="bg-primary text-white" type="text" placeholder="Email">
                            <button class="border border-primary" type="submit" >subscribe</button>
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

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
window.addEventListener('scroll',function(){
span.onclick = function() {
    modal.style.display = "none";
   
}
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

    if (event.target == modal) {
        modal.style.display = "none";
    }
}
export default {
  name: '',
  components: {
      
  },
  
  
}
  

  

</script>

<style scoped> 
.signUp{
    transition: all ease .3s;
    margin-top: 70px;
    border-radius: 90px;
background: linear-gradient(120deg,rgba(143,66,236,0) 0%,#28a7ff 100%);
background-color: #b142ec;
  box-shadow: 0 4px 24px 0 rgba(103,151,255,.1), 0 12px 64px 0 rgba(103,151,255,.1);
}
@media screen and (max-width: 520px) {
    .signUp{margin-top: 120px;}
}
.signUp:hover{
    transform: scale(1.05);
}
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
.my-dropdown{
  background-color: transparent !important;
}

.dropdown-menu{
  border: none;
}
.dropdown-item:hover{
        transition: all ease .3s;
   margin-top: 4px;
  padding: 12px 40px 12px 20px;
  border-radius: 5px;
  transform-origin: center;
  animation:rotate 1.5s ease 1;
  background-color: grey;
  color: white !important;
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
	margin-top: 10% !important;
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
	color: #000;
	height: 50px;
	width: 50px;
	background: #28a7ff;
	border-radius: 50%;
	line-height: 50px;
	text-align: center;
	position: absolute;
	left: 0;
	top: 0;
}

.footer__address ul li p {
	color: #000;
	opacity: 0.7;
	margin-bottom: 8px;
}

.footer__address ul li h6 {
	font-size: 15px;
	font-weight: 700;
	color: grey;
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
	color: #28a7ff;
	font-weight: 700;
	margin-bottom: 25px;
}

.footer__social .footer__social__links a {
	font-size: 18px;
	color: #28a7ff;
	height: 50px;
	width: 50px;
	background: #28a7ff;
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
	color: #000;
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
.hero {
    background-image:linear-gradient(to right,rgba(0, 0, 0,0.8),rgba(88, 187, 226, 0.5)), url('~@/assets/doc2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
	padding-top: 240px;
	padding-bottom: 250px;
	position: relative;
}

.hero__text {
	text-align: center;
    animation-delay: 2s;
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
	
}

.hero__text p {
	color: #ffffff;
	
}



.linear__icon {
	position: absolute;
	left: 50%;
    top: 68%;
	margin-left: -16px;
	animation: mymove 0.5s infinite alternate;
}

.linear__icon i {
	font-size: 50px;
	color: #28a7ff;
}

@keyframes mymove {
	0% {
		top: 68%;
	}
	100% {
		top: 63%;
	}
}
@media screen and (max-width:990px ){
    @keyframes mymove {
	0% {
		top: 75%;
	}
	100% {
		top: 73%;
	}
}
}
@media screen and (max-width:500px ){
    @keyframes mymove {
	0% {
		top: 85%;
	}
	100% {
		top: 83%;
	}
}
}
@media screen and (max-width:490px ){
    @keyframes mymove {
	0% {
		top: 75%;
	}
	100% {
		top: 73%;
	}
}
}
.about{
	margin-top: 10%;
}

.about-pic .container-fluid {
	padding-right: 0;
}

.about__pic img {
    border-radius: 8px;
    box-shadow: 0 8px 60px 0 rgba(103,151,255,.11), 0 12px 90px 0 rgba(103,151,255,.11);
    height: 450px;
	width: 100%;
	margin-bottom: 10px;

}
.services {
	overflow: hidden;
}

.services__left {
    background-image: url('~@/assets/doc3.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
	height: 640px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
}

.services__left .play-btn {
	font-size: 26px;
	color: #ffffff;
	height: 90px;
	width: 90px;
	border-radius: 50%;
	background: -webkit-gradient(linear, left top, right top, from(rgba(127, 0, 173, 0.3)), to(rgba(93, 0, 206, 0.3)));
	background: -o-linear-gradient(left, rgba(127, 0, 173, 0.3), rgba(93, 0, 206, 0.3));
	background: linear-gradient(to right, rgba(127, 0, 173, 0.3), rgba(93, 0, 206, 0.3));
	display: inline-block;
	line-height: 90px;
	text-align: center;
	position: relative;
	z-index: 1;
}

.services__left .play-btn i {
	position: relative;
	top: 2px;
	left: 2px;
}

.services__left .play-btn:after {
	position: absolute;
	left: 15px;
	top: 15px;
	height: 60px;
	width: 60px;
	background: -webkit-gradient(linear, left top, right top, from(#7E00AD), to(#5C00CE));
	background: -o-linear-gradient(left, #7E00AD, #5C00CE);
	background: linear-gradient(to right, #7E00AD, #5C00CE);
	border-radius: 50%;
	content: "";
	z-index: -1;
}

.services__list {
	margin: 0;
}

.service__item {
	background: #28a7ff;
	height: 320px;
	padding: 70px 40px 40px 70px;
}

.service__item.deep-bg {
	background: #1b88d1;
}

.service__item h4 {
	font-size: 26px;
	color: #ffffff;
	font-weight: 700;
	margin-top: 25px;
	margin-bottom: 10px;
}

.service__item p {
	color: #ffffff;
	margin-bottom: 0;
}
.service__item i{
    color: #fff;
    font-size: 30px;
}
.about-pic {
	overflow: hidden;
}

.about-pic .container-fluid {
	padding-right: 0;
}

.about-pic img {
	min-width: 100%;
	margin-bottom: 10px;
	padding-right: 10px;
}
.promo .promo-element {
	text-align: center;
}

.promo .promo-element h3{
	padding-top:6%;
	font-size: 40px;
	line-height: 52px;
	color: #fff;
}

.promo .promo-element p {
	font-size: 32px;
	line-height: 44px;
	font-weight: 300;
	color: #fff;	
}
.promo{
    height: 560px;
}
@media screen and (max-width: 1000px){
    .promo .promo-element p {
	font-size: 16px;
	line-height: 44px;
	font-weight: 200;
	color: #fff;	
}
    .promo .promo-element .promo-link {
	display: block;
    font-size: 13px;
	color: #ffffff;
	height: 45px;
	width: 45px;
	border-radius: 50%;
	background: -webkit-gradient(linear, left top, right top, from(rgba(127, 0, 173, 0.3)), to(rgba(93, 0, 206, 0.3)));
	background: -o-linear-gradient(left, rgba(127, 0, 173, 0.3), rgba(93, 0, 206, 0.3));
	background: linear-gradient(to right, rgba(127, 0, 173, 0.3), rgba(93, 0, 206, 0.3));
	display: inline-block;
	line-height: 90px;
	text-align: center;
	position: relative;
	z-index: 1;
}
.promo .promo-element .promo-link::after {
	position: absolute;
	left: 15px;
	top: 15px;
	height: 30px;
	width: 30px;
	background: -webkit-gradient(linear, left top, right top, from(#7E00AD), to(#5C00CE));
	background: -o-linear-gradient(left, #7E00AD, #5C00CE);
	background: linear-gradient(to right, #7E00AD, #5C00CE);
	border-radius: 50%;
	content: "";
	z-index: -1;
}
}
.promo .promo-element .promo-link {
	display: block;
    font-size: 26px;
	color: #ffffff;
	height: 90px;
	width: 90px;
	border-radius: 50%;
	background: -webkit-gradient(linear, left top, right top, from(rgba(127, 0, 173, 0.3)), to(rgba(93, 0, 206, 0.3)));
	background: -o-linear-gradient(left, rgba(127, 0, 173, 0.3), rgba(93, 0, 206, 0.3));
	background: linear-gradient(to right, rgba(127, 0, 173, 0.3), rgba(93, 0, 206, 0.3));
	display: inline-block;
	line-height: 90px;
	text-align: center;
	position: relative;
	z-index: 1;
}
.promo .promo-element .promo-link::after {
	position: absolute;
	left: 15px;
	top: 15px;
	height: 60px;
	width: 60px;
	background: -webkit-gradient(linear, left top, right top, from(#7E00AD), to(#5C00CE));
	background: -o-linear-gradient(left, #7E00AD, #5C00CE);
	background: linear-gradient(to right, #7E00AD, #5C00CE);
	border-radius: 50%;
	content: "";
	z-index: -1;
}

.parallax-one{
background: url('~@/assets/pills2.jpg') fixed 50%;
}
.meet {
    margin-top: 7%;
    transition: all ease .5s;
	background: #fff ;
 box-shadow: 0 4px 24px 0 rgba(103,151,255,.1), 0 12px 64px 0 rgba(103,151,255,.1);
}
.meet .meet-item {
	max-width: 300px;
	margin: 0 auto;
	text-align: center;
}

.meet .meet-item img {
	width: 100%;
	max-width: 300px;
	margin: 0 auto;
}

.meet .meet-map {
	position: relative;
	margin-top: 70px;
}

.meet .default-heading-2 hr {
	max-width: 90px;
	margin: 0 auto;
	margin-top: 25px;
	border-top: 2px solid #fff;
}

.meet .meet-map .img-map {
	width: 100%;
	max-width: 1080px;
	margin: 0 auto;
}

.meet .tooltip {
	font-family: 'Source Sans Pro', sans-serif;
	font-size: 15px;
	letter-spacing: 0.05em;
}

.meet .tooltip .tooltip-inner {
	padding: 4px 8px;
	border-radius: 2px;
	opacity: 1;
}

.meet .meet-map .map-marker {
	display: block;
	position: absolute;
	margin: 0;
	padding: 0;
	text-align: center;
}

.meet-map .map-marker.india {top: 45%;	left: 67%;}
.meet-map .map-marker.usa {top: 35%;	left: 20%;}
.meet-map .map-marker.sa {top: 68%;	left: 52%;}
.meet-map .map-marker.russia {top: 18%;	left: 73%;}
.meet-map .map-marker.brazil {top: 64%;	left: 30%;}

/* The Modal (background) */
.modal {
    transition: all ease .4s;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
     transition: all ease .4s;
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
    color: #aaa;
     transition: all ease .4s;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
     transition: all ease .4s;
    color: black;
    text-decoration: none;
    cursor: pointer;
}
#ct{
--breakpoint-xs: 0;
--breakpoint-sm: 576px;
--breakpoint-md: 768px;
--breakpoint-lg: 992px;
--breakpoint-xl: 1200px;
--font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
--font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
font-weight: 400;
line-height: 1.5;
text-align: left;
font-family: "Now Regular";
-webkit-font-smoothing: antialiased;
box-sizing: border-box;
text-decoration: none;
display: inline-block;
font-size: 15px;
text-transform: uppercase;
padding: 14px 25px 12px;
color: #ffffff;
background: #28a7ff;
letter-spacing: 2px;
}
.download{
	box-shadow: 0 4px 24px 0 rgba(103,151,255,.1), 0 12px 64px 0 rgba(103,151,255,.1);
	border-radius: 50px;
}
</style>