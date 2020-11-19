<template>
<div id="app" >
<div class="loader animated fadeOut">
<div class=" loader-inner"></div>
</div>
 <main class="app animated fadeIn">
  <div class="pb-5">
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
   <div class="breadcrumb-option pt-5">
        <div class="container">
            <div class="row m-0 p-0">
                <div class="col-lg-12">
                    <div class="breadcrumb__links">
                        <a href="#"><i class="fa fa-home"></i> Home</a>
                        <span>Blog</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->

    <!-- Blog Section Begin -->
    <section class="blog spad mt-3">
        <div class="container">
            <div class="row m-0 p-0">
                <div class="col-lg-8">
                    <div class="section-title">
                        <h2>Latest posts</h2>
                        <h1>Medical blog</h1>
                    </div>
                    <div class="blog__large">
                        <div class="blog__large__pic set-bg" data-setbg="img/blog/large-item.jpg">
                            <a href="#"><i class="fa fa-share-alt"></i></a>
                        </div>
                        <div class="blog__large__text">
                            <span>Music festival</span>
                            <h4>Guidelines for medical event organisers: medicine intake harm reduction - December
                                2019</h4>
                            <p class="text-secondary">Lorem ipsum dolor consectetur adipiscing eiusmod tempor incididunt ut labore et dolore
                            </p>
                            <div class="blog__large__widget">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <ul>
                                            <li>By <span>Erna O’Conner</span></li>
                                            <li>Dec 17, 2019</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <ul class="right__widget">
                                            <li>230 Views</li>
                                            <li>18 Comments</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row m-0 p-0">
                        <div class="col-lg-6 col-md-6 col-sm-6" data-aos="fadeIn">
                            <div class="blog__item">
                                <div class="blog__item__pic">
                                    <img src="~@/assets/doc1.jpg" alt="">
                                </div>
                                <div class="blog__item__text">
                                    <span>Medical Tourism</span>
                                    <h5>World Medical Toursim | Free Events & Checkups in Chicago</h5>
                                    <ul>
                                        <li>By <span>Erna O’Conner</span></li>
                                        <li>Dec 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6"  data-aos="fadeInDown">
                            <div class="blog__item">
                                <div class="blog__item__pic">
                                    <img src="~@/assets/bp5.jpg" alt="">
                                </div>
                                <div class="blog__item__text">
                                    <span>Medical Tourism</span>
                                    <h5>How ROQU Media and The Manual London staged Saudi…</h5>
                                    <ul>
                                        <li>By <span>Erna O’Conner</span></li>
                                        <li>Dec 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6"  data-aos="fadeInUp">
                            <div class="blog__item">
                                <div class="blog__item__pic">
                                    <img src="~@/assets/pills2.jpg" alt="">
                                </div>
                                <div class="blog__item__text">
                                    <span>Medical Tourism</span>
                                    <h5>2019 Medical event, Port Macquarie</h5>
                                    <ul>
                                        <li>By <span>Erna O’Conner</span></li>
                                        <li>Dec 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6"  data-aos="fadeInUp">
                            <div class="blog__item">
                                <div class="blog__item__pic">
                                    <img src="~@/assets/medical dev2.jpg" alt="">
                                </div>
                                <div class="blog__item__text">
                                    <span>Medical Toursim</span>
                                    <h5>Taylor Swift to Headline Glaston Medical Tourism</h5>
                                    <ul>
                                        <li>By <span>Erna O’Conner</span></li>
                                        <li>Dec 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6"  data-aos="fadeInUp">
                            <div class="blog__item">
                                <div class="blog__item__pic">
                                    <img src="~@/assets/pills4.jpg" alt="">
                                </div>
                                <div class="blog__item__text">
                                    <span>Medical Tourism</span>
                                    <h5>24-hour Mediacl Inner-City returns</h5>
                                    <ul>
                                        <li>By <span>Erna O’Conner</span></li>
                                        <li>Dec 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6"  data-aos="fadeInUp">
                            <div class="blog__item">
                                <div class="blog__item__pic">
                                    <img src="~@/assets/doc6.jpg" alt="">
                                </div>
                                <div class="blog__item__text">
                                    <span>Medical Toursiam</span>
                                    <h5>Lost Paradise Tour cancelled amid bushfire danger</h5>
                                    <ul>
                                        <li>By <span>Erna O’Conner</span></li>
                                        <li>Dec 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 p-0 m-0">
                            <div class="pagination__links blog__pagination">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog__sidebar">
                        <div class="blog__sidebar__item">
                            <div class="blog__sidebar__title">
                                <h4>Subscribe newsletter</h4>
                            </div>
                            <p class="text-secondary">Ipsum dolor sit amet, adipiscing elit, sed eiusmod </p>
                            <form action="#">
                                <input type="text" placeholder="Name">
                                <input type="text" placeholder="Email">
                                <button type="submit" class="site-btn">Subscribe</button>
                            </form>
                        </div>
                        <div class="blog__sidebar__item">
                            <div class="blog__sidebar__title">
                                <h4>Social media</h4>
                            </div>
                            <div class="blog__sidebar__social">
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
                        <div class="blog__sidebar__item">
                            <div class="blog__sidebar__title">
                                <h4>Recent posts</h4>
                            </div>
                            <a href="#" class="recent__item">
                                <div class="recent__item__pic">
                                    <img src="~@/assets/bp4.jpg" alt="">
                                </div>
                                <div class="recent__item__text">
                                    <h6>2020 Bendigo Blues and Roots Medical Tour</h6>
                                    <span>Dec 17, 2019</span>
                                </div>
                            </a>
                            <a href="#" class="recent__item">
                                <div class="recent__item__pic">
                                    <img src="~@/assets/doc5.jpg" alt="">
                                </div>
                                <div class="recent__item__text">
                                    <h6>2020 Bendigo Blues and Roots Medical Tour</h6>
                                    <span>Dec 17, 2019</span>
                                </div>
                            </a>
                            <a href="#" class="recent__item">
                                <div class="recent__item__pic">
                                    <img src="~@/assets/health7.jpg" alt="">
                                </div>
                                <div class="recent__item__text">
                                    <h6>2020 Bendigo Blues and Roots Medical Tour</h6>
                                    <span>Dec 17, 2019</span>
                                </div>
                            </a>
                            <a href="#" class="recent__item">
                                <div class="recent__item__pic">
                                    <img src="~@/assets/lab test4.jpg" alt="">
                                </div>
                                <div class="recent__item__text">
                                    <h6>2020 Bendigo Blues and Roots Medical Tour</h6>
                                    <span>Dec 17, 2019</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Blog Section End -->

    <!-- Footer Section Begin -->
    <footer class="footer footer--normal spad set-bg"  data-aos="fadeIn">
        <div class="container">
            <div class="row m-0 p-0 container">
                <div class="col-lg-3 col-md-6 container">
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
                                <h6>Name@gmail.com</h6>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 offset-lg-1 col-md-6 container">
                    <div class="footer__social">
                        <h2>Pharmacy-name</h2>
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
                <div class="col-lg-3 offset-lg-1 col-md-6 container">
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
  data(){
    return{
   
    }
  },
  methods:{
   
  }
}
</script>

<style scoped>
.fa-bars{
  font-size: 1.8rem;
}
.navbar{
    background: rgba(139, 154, 163, 0.5);
    padding-top: 13px;
    padding-bottom: 13px;
    transition: all ease .5s;
}
.app{
    animation-delay: 1.8s;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: fit-content;
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
    transition: all ease .3s;
  background-color: grey;
  color: #fff !important;
}
.dropdown-item{
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
  .blog {
	padding-bottom: 60px;
}

.blog .section-title {
	margin-bottom: 80px;
}

.blog__large {
	margin-bottom: 45px;
	-webkit-box-shadow: 0px 3px 10px rgba(22, 41, 124, 0.1);
	box-shadow: 0px 3px 10px rgba(22, 41, 124, 0.1);
	margin-bottom: 50px;
}

.blog__large__pic {
  background-image: url('~@/assets/health8.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
	height: 370px;
	position: relative;
}

.blog__large__pic a {
	font-size: 16px;
	height: 40px;
	width: 40px;
	background: rgba(245, 245, 245, 0.3);
	border-radius: 50%;
	color: #ffffff;
	line-height: 40px;
	text-align: center;
	display: inline-block;
	position: absolute;
	right: 12px;
	bottom: 12px;
}

.blog__large__text {
	background: #ffffff;
	text-align: center;
	padding: 30px 40px 0;
}

.blog__large__text span {
	font-size: 13px;
	text-transform: uppercase;
	color: #37a8ff;
}

.blog__large__text h4 {
	color: #111111;
	font-weight: 700;
	line-height: 31px;
	margin-top: 5px;
	margin-bottom: 15px;
}

.blog__large__text p {
	margin-bottom: 40px;
}

.blog__large__widget {
	border-top: 1px solid #f2f2f2;
	padding: 15px 0 20px;
	text-align: left;
	margin: 0 30px;
}

.blog__large__widget .right__widget {
	text-align: right;
}

.blog__large__widget ul li {
	font-size: 13px;
	color: #888888;
	display: inline-block;
	list-style: none;
	margin-right: 20px;
	position: relative;
}

.blog__large__widget ul li span {
	color: #111111;
}

.blog__large__widget ul li:after {
	position: absolute;
	right: -14px;
	top: -2px;
	content: "|";
}

.blog__large__widget ul li:last-child {
	margin-right: 0;
}

.blog__large__widget ul li:last-child:after {
	display: none;
}

.blog__item {
	-webkit-box-shadow: 0px 3px 10px rgba(22, 41, 124, 0.1);
	box-shadow: 0px 3px 10px rgba(22, 41, 124, 0.1);
	margin-bottom: 50px;
}

.blog__item__pic img {
	width: 100%;
  height: 230px;
}

.blog__item__text {
	text-align: center;
	background: #ffffff;
	padding: 20px 20px 25px;
}

.blog__item__text span {
	font-size: 13px;
	text-transform: uppercase;
	color: #37a8ff;
}

.blog__item__text h5 {
	color: #111111;
	font-weight: 700;
	line-height: 26px;
	font-size: 20px;
	margin-top: 10px;
	margin-bottom: 12px;
}

.blog__item__text ul li {
	font-size: 13px;
	color: #888888;
	display: inline-block;
	list-style: none;
	margin-right: 20px;
	position: relative;
}

.blog__item__text ul li span {
	color: #111111;
}

.blog__item__text ul li:after {
	position: absolute;
	right: -14px;
	top: -2px;
	content: "|";
}

.blog__item__text ul li:last-child {
	margin-right: 0;
}

.blog__item__text ul li:last-child:after {
	display: none;
}

/*---------------------
  Blog Sidebar
-----------------------*/

.blog__sidebar__item {
	text-align: center;
	margin-bottom: 65px;
}

.blog__sidebar__item:last-child {
	margin-bottom: 0;
}

.blog__sidebar__item form input {
	height: 50px;
	font-size: 15px;
	color: #444444;
	padding-left: 20px;
	border: 1px solid #e1e1e1;
	width: 100%;
	margin-bottom: 20px;
}

.blog__sidebar__item form input::-webkit-input-placeholder {
	color: #444444;
}

.blog__sidebar__item form input::-moz-placeholder {
	color: #444444;
}

.blog__sidebar__item form input:-ms-input-placeholder {
	color: #444444;
}

.blog__sidebar__item form input::-ms-input-placeholder {
	color: #444444;
}

.blog__sidebar__item form input::placeholder {
	color: #444444;
}

.blog__sidebar__title {
	text-align: center;
	margin-bottom: 35px;
}

.blog__sidebar__title h4 {
	color: #111111;
	font-weight: 700;
	position: relative;
	padding-bottom: 20px;
}

.blog__sidebar__title h4::before {
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

.blog__sidebar__social a {
	display: inline-block;
	font-size: 18px;
	color: #111111;
	width: 50px;
	height: 50px;
	background: #f2f2f2;
	border-radius: 50%;
	line-height: 50px;
	text-align: center;
	margin-right: 6px;
	margin-bottom: 5px;
}

.blog__sidebar__social a:last-child {
	margin-right: 6px;
}

.recent__item {
	display: block;
	overflow: hidden;
	margin-bottom: 25px;
	text-align: left;
}

.recent__item__pic {
	float: left;
	margin-right: 25px;
}
.recent__item__pic img{
	width: 130px;
  height: 80px;
}

.recent__item__text {
	overflow: hidden;
}

.recent__item__text h6 {
	color: #111111;
	line-height: 21px;
	font-weight: 700;
}

.recent__item__text span {
	font-size: 13px;
	color: #888888;
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
	color: #37a8ff;
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
	color: #37a8ff;
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
	color: #37a8ff;
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
	color: #5c00ce;
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
.site-btn{
    -webkit-tap-highlight-color: transparent;
--blue: #007bff;
--indigo: #6610f2;
--purple: #6f42c1;
--pink: #e83e8c;
--red: #dc3545;
--orange: #fd7e14;
--yellow: #ffc107;
--green: #28a745;
--teal: #20c997;
--cyan: #17a2b8;
--white: #fff;
--gray: #6c757d;
--gray-dark: #343a40;
--primary: #007bff;
--secondary: #6c757d;
--success: #28a745;
--info: #17a2b8;
--warning: #ffc107;
--danger: #dc3545;
--light: #f8f9fa;
--dark: #343a40;
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
 background-color:  #37a8ff;
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