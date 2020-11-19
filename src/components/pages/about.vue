<template >
  <div id="app" >
<div class="loader animated fadeOut">
<div class=" loader-inner"></div>
</div>
<main class="app animated fadeIn">
 <div>
      <nav class="navbar navbar-expand-sm fixed-top " id="nav">
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
  <div class="breadcrumb-option mt-5">
        <div class="container">
            <div class="row p-0 m-0">
                <div class="col-lg-12">
                    <div class="breadcrumb__links">
                        <a href="#"><i class="fa fa-home"></i> Home</a>
                        <span>About us</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
   <section class="skills spad">
        <div class="container">
            <div class="row p-0 m-0">
                <div class="col-lg-6 p-0">
                    <div class="skills__content">
                        <div class="section-title">
                            <h2>Pharm. Alexandra Rud</h2>
                            <h1>Our skill</h1>
                        </div>
                        <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt officiis repellat eos nobis tempora fugit amet?</p>
                    </div>
                </div>
                <div class="col-lg-6 p-0">
                    <div class="skills__video set-bg" data-setbg="img/skill-video.jpg">
                        <a href="https://www.youtube.com/watch?v=S19UcWdOA-I?autoplay=1" class="play-btn video-popup"><i class="fa fa-play"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Skills Section End -->

    <!-- About Section Begin -->
    <section class="about about--page spad mt-5 pt-5 pb-5">
        <div class="container">
            <div class="row p-0 m-0">
                <div class="col-lg-6">
                    <div class="about__pic" data-aos="fade-up" data-aos-duration="700">
                        <img src="~@/assets/doc2.jpg" alt="" width="100%" height="400px">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about__text mt-5">
                        <div class="section-title">
                            <h2>CAPTION(If any)</h2>
                        </div>
                        <p class="mt-5 text-secondary">At vero eos et accusamus et iusto odi odgnissimos ducimus qui blanditiis praesentium volup
                            tatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi quod
                            justo pro an.</p>
                        <img src="img/about/signature.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Section End -->

    <!-- About Pic Begin -->
    <div class="about-pic">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 p-0">
                            <img src="img/about/ap-1.jpg" alt="">
                            <img src="img/about/ap-2.jpg" alt="">
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-8 p-0">
                            <img src="img/about/ap-3.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-8 col-md-8 col-sm-8 p-0">
                            <img src="img/about/ap-4.jpg" alt="">
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 p-0">
                            <img src="img/about/ap-5.jpg" alt="">
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 p-0">
                            <img src="img/about/ap-6.jpg" alt="">
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-8 p-0">
                            <img src="img/about/ap-7.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About Pic End -->

    <!-- About Services Section Begin -->
    <section class="about-services spad">
        <div class="container">
            <div class="row m-0 p-0">
                <div class="col-lg-12">
                    <div class="section-title center-title">
                        <h2>WHERE DO WE WORK</h2>
                        <h1>Best work categories</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
                    <div class="about__services__item">
                        <div class="about__services__item__pic1 set-bg" data-setbg="img/services/as-1.jpg">
                            <div class="icon">
                                <img src="img/services/as-icon-1.png" alt="">
                            </div>
                        </div>
                        <div class="about__services__item__text">
                            <h4>Type of work</h4>
                            <p  class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
                    <div class="about__services__item">
                        <div class="about__services__item__pic2 set-bg" data-setbg="~@/assets/health7.jpg">
                            <div class="icon">
                                <img src="img/services/as-icon-2.png" alt="">
                            </div>
                        </div>
                        <div class="about__services__item__text">
                            <h4>Type of work</h4>
                            <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
                    <div class="about__services__item">
                        <div class="about__services__item__pic3 set-bg" data-setbg="img/services/as-3.jpg">
                            <div class="icon">
                                <img src="img/services/as-icon-3.png" alt="">
                            </div>
                        </div>
                        <div class="about__services__item__text">
                            <h4>Type of work</h4>
                            <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Services Section End -->
     <div class="site-section pb-5 mt-5">
    <div class="container" data-aos="fade-up">
      <div class="row p-0 m-0">
        <div class="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
          <h2 class="mb-5">Our Doctors</h2>
          <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati fuga itaque deserunt
            officia, error reiciendis ab quod?</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4 mb-5 mb-lg-5">
          <div class="team-member">
  
            <img src="~@/assets/doc5.jpg" alt="Image" >
  
            <div class="text">
  
              <h2 class="mb-2 font-weight-light h4">Megan Smith</h2>
              <span class="d-block mb-2 text-white-opacity-05">Pharmacist</span>
              <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>
              <p>
                <a href="#" class="text-white p-2"><span class="icon-facebook"></span></a>
                <a href="#" class="text-white p-2"><span class="icon-twitter"></span></a>
                <a href="#" class="text-white p-2"><span class="icon-linkedin"></span></a>
              </p>
            </div>
  
          </div>
        </div>
  
        <div class="col-md-6 col-lg-4 mb-5 mb-lg-5">
          <div class="team-member">
  
            <img src="~@/assets/health6.png" alt="Image" >
  
            <div class="text">
  
              <h2 class="mb-2 font-weight-light h4">Brooke Cagle</h2>
              <span class="d-block mb-2 text-white-opacity-05">Pharmacist</span>
              <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>
              <p>
                <a href="#" class="text-white p-2"><span class="icon-facebook"></span></a>
                <a href="#" class="text-white p-2"><span class="icon-twitter"></span></a>
                <a href="#" class="text-white p-2"><span class="icon-linkedin"></span></a>
              </p>
            </div>
  
          </div>
        </div>
  
        <div class="col-md-6 col-lg-4 mb-5 mb-lg-5">
          <div class="team-member">
  
            <img src="~@/assets/doc3.jpg" alt="Image" >
  
            <div class="text">
  
              <h2 class="mb-2 font-weight-light h4">Philip Martin</h2>
              <span class="d-block mb-2 text-white-opacity-05">Pharmicist</span>
              <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>
              <p>
                <a href="#" class="text-white p-2"><span class="icon-facebook"></span></a>
                <a href="#" class="text-white p-2"><span class="icon-twitter"></span></a>
                <a href="#" class="text-white p-2"><span class="icon-linkedin"></span></a>
              </p>
            </div>
  
          </div>
        </div>
  
        <div class="col-md-6 col-lg-4 mb-5 mb-lg-5">
          <div class="team-member">
  
            <img src="~@/assets/pharmacist5.jpg" alt="Image" >
  
            <div class="text">
  
              <h2 class="mb-2 font-weight-light h4">Steven Ericson</h2>
              <span class="d-block mb-2 text-white-opacity-05">Pharmicist</span>
              <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>
              <p>
                <a href="#" class="text-white p-2"><span class="icon-facebook"></span></a>
                <a href="#" class="text-white p-2"><span class="icon-twitter"></span></a>
                <a href="#" class="text-white p-2"><span class="icon-linkedin"></span></a>
              </p>
            </div>
  
          </div>
        </div>
  
        <div class="col-md-6 col-lg-4 mb-5 mb-lg-5">
          <div class="team-member">
  
            <img src="~@/assets/pharm8.jpg" alt="Image" >
  
            <div class="text">
  
              <h2 class="mb-2 font-weight-light h4">Nathan Dumlao</h2>
              <span class="d-block mb-2 text-white-opacity-05">Dentist</span>
              <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>
              <p>
                <a href="#" class="text-white p-2"><span class="icon-facebook"></span></a>
                <a href="#" class="text-white p-2"><span class="icon-twitter"></span></a>
                <a href="#" class="text-white p-2"><span class="icon-linkedin"></span></a>
              </p>
            </div>
  
          </div>
        </div>
  
        <div class="col-md-6 col-lg-4 mb-5 mb-lg-5">
          <div class="team-member">
  
            <img src="~@/assets/pharm6.jpg" alt="Image" >
  
            <div class="text">
  
              <h2 class="mb-2 font-weight-light h4">Brooke Cagle</h2>
              <span class="d-block mb-2 text-white-opacity-05">Pharmacist</span>
              <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>
              <p>
                <a href="#" class="text-white p-2"><span class="icon-facebook"></span></a>
                <a href="#" class="text-white p-2"><span class="icon-twitter"></span></a>
                <a href="#" class="text-white p-2"><span class="icon-linkedin"></span></a>
              </p>
            </div>
  
          </div>
        </div>
  
  
      </div>
    </div>
  </div>
    <!-- Footer Section Begin -->
    <footer class="footer footer--normal spad set-bg mt-5 " data-aos="fadeIn">
        <div class="container">
            <div class="row m-0 p-0 container">
                <div class="col-lg-3 col-md-6 col-12">
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
                <div class="col-lg-4 offset-lg-1 col-md-6 col-12">
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
                <div class="col-lg-3 offset-lg-1 col-md-6 col-12">
                    <div class="footer__newslatter">
                        <h4>Stay With us</h4>
                        <form action="#">
                            <input type="text" placeholder="Email">
                            <button type="submit">subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer Section End -->
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
     return {}
   
}
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
.about-services {
	padding-bottom: 50px;
}

.about-services .section-title {
	margin-bottom: 60px;
}

.about__services__item {
	-webkit-transition: all, 0.3s;
	-o-transition: all, 0.3s;
	transition: all, 0.3s;
  cursor: pointer;
}

.about__services__item:hover {
  transform: scale(1.06);
	-webkit-box-shadow: 0px 3px 30px rgba(22, 41, 124, 0.1);
	box-shadow: 0px 3px 30px rgba(22, 41, 124, 0.1);
}

.about__services__item__pic1,.about__services__item__pic2,.about__services__item__pic3 {
	height: 240px;
	position: relative;
}
.about__services__item__pic1{
  transition: all ease .3s;
	box-shadow: 0px 3px 30px rgba(22, 41, 124, 0.1);
 background-image: url('~@/assets/doc6.jpg');
 background-position: center;
 width: 100%;
 height: 300px;
 background-repeat: no-repeat;
 background-size: cover;
 border-radius: 8px;
}
.about__services__item__pic2{
  transition: all ease .3s;
  box-shadow: 0px 3px 30px rgba(22, 41, 124, 0.1);
 background-image: url('~@/assets/medical dev3.jpg');
 background-position: center;
 width: 100%;
 height: 300px;
 background-repeat: no-repeat;
 background-size: cover;
  border-radius: 8px;
}
.about__services__item__pic3{
  transition: all ease .3s;
  box-shadow: 0px 3px 30px rgba(22, 41, 124, 0.1);
 background-image: url('~@/assets/medical dev4.png');
 background-position: center;
 width: 100%;
 height: 300px;
 background-repeat: no-repeat;
 background-size: cover;
  border-radius: 8px;
}

.about__services__item__pic .icon {
	height: 50px;
	width: 50px;
	background: #28a7ff;
	border-radius: 50%;
	line-height: 50px;
	text-align: center;
	position: absolute;
	left: 0;
	right: 0;
	margin: 0 auto;
	bottom: -25px;
}

.about__services__item__text {
	text-align: center;
	padding: 50px 10px 30px;
}

.about__services__item__text h4 {
	font-size: 26px;
	color: #111111;
	font-weight: 700;
	margin-bottom: 12px;
}

.about__services__item__text p {
	margin-bottom: 0;
}
.about__pic img{
  box-shadow: 0 8px 60px 0 rgba(103,151,255,.11), 0 12px 90px 0 rgba(103,151,255,.11);
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
.skills {
	padding-bottom: 0;
	padding-top: 80px;
}

.skills__content {
	background: #28a7ff;
	height: 500px;
	padding: 100px 70px 60px;
}

.skills__content .section-title h2 {
	color: #ffffff;
}

.skills__content .section-title h1 {
	color: #ffffff;
	opacity: 0.1;
	text-align: center;
}

.skills__content p {
	color: #ffffff;
	margin-bottom: 32px;
}

.skill__bar__item {
	margin-bottom: 20px;
}

.skill__bar__item p {
	font-size: 15px;
	font-weight: 500;
	color: #ffffff;
	margin-bottom: 10px;
}

.skill__bar__item .barfiller {
	width: 100%;
	height: 5px;
	background: rgba(255, 255, 255, 0.2);
	border: none;
	margin-bottom: 0;
	-webkit-box-shadow: none;
	box-shadow: none;
}

.skill__bar__item .barfiller .tip {
	margin-top: -32px;
	padding: 0;
	font-size: 15px;
	color: #fff;
	background: transparent;
}

.skill__bar__item .barfiller .tip:after {
	display: none;
}

.skills__video {
  background-image: url('~@/assets/health6.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
	height: 500px;
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

.skills__video .play-btn {
	font-size: 26px;
	color: #28a7ff;
	height: 90px;
	width: 90px;
	border-radius: 50%;
	background: rgba(117, 31, 221, 0.3);
	display: inline-block;
	line-height: 90px;
	text-align: center;
	position: relative;
	z-index: 1;
}

.skills__video .play-btn i {
	position: relative;
	top: 2px;
	left: 2px;
}

.skills__video .play-btn:after {
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
.site-section-heading h2 {
  font-size: 2rem;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: #000; }

.site-section-heading.w-border h2 {
  position: relative;
  padding-bottom: 20px;
  display: inline-block; }
  .site-section-heading.w-border h2:after {
    position: absolute;
    content: "";
    width: 70px;
    left: 0;
    bottom: 0;
    height: 2px;
    background: #e3207b; }

.site-section-heading.w-border.text-center h2:after {
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%); }

.backgroundimg, .site-block-retro .col1, .site-block-retro .col2 > a {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative; }

.site-block-retro .col1, .site-block-retro .col2 {
  width: 48%; }
  @media (max-width: 767.98px) {
    .site-block-retro .col1, .site-block-retro .col2 {
      width: 100%; } }

@media (max-width: 767.98px) {
  .site-block-retro .col1 {
    height: 300px;
    margin-bottom: 8%; } }

.site-block-retro .col2 > a {
  display: block;
  height: 300px; }
  .site-block-retro .col2 > a:first-child {
    margin-bottom: 8%; }

.pill {
  border-radius: 30px; }

.team-member {
  cursor: pointer;
  position: relative;
  float: left;
  width: 100%;
  overflow: hidden; }
  .team-member img {
    border-radius: 8px;
    width: 450px;
    height: 300px;
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1); }
  .team-member:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(34, 127, 155, 0.8);
    z-index: 2;
    height: 100%;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease; }
  .team-member .text {
    top: 50%;
    text-align: center;
    position: absolute;
    padding: 20px;
    -webkit-transform: translateY(-30%);
    -ms-transform: translateY(-30%);
    transform: translateY(-30%);
    -webkit-transition: .5s all ease;
    -o-transition: .5s all ease;
    transition: .5s all ease;
    opacity: 0;
    visibility: hidden;
    color: #fff; }
  .team-member:hover:before, .team-member:focus:before, .team-member:active:before {
    opacity: 1;
    visibility: visible; }
  .team-member:hover img, .team-member:focus img, .team-member:active img {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1); }
  .team-member:hover .text, .team-member:focus .text, .team-member:active .text {
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition-delay: .2s;
    -o-transition-delay: .2s;
    transition-delay: .2s;
    opacity: 1;
    visibility: visible;
    z-index: 4; }
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