import React from 'react'

import "../scss/style.scss"
import "../css/tiny-slider.css"
import "../css/style.css"
import "../css/bootstrap.min.css"
import { Link } from 'react-router-dom'

const shop = () => {
  return (
    <>

<nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

<div class="container">
    <a class="navbar-brand" href="index.html">GhewMeaw<span>.</span></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsFurni">
        <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li><Link class="nav-link" to="/shop">Shop</Link></li>
            <li><Link class="nav-link" href="about.html">About us</Link></li>
            <li><Link class="nav-link" href="services.html">Services</Link></li>
            <li><Link class="nav-link" href="blog.html">Blog</Link></li>
            <li><Link class="nav-link" href="contact.html">Contact us</Link></li>
        </ul>

        
    </div>
</div>
    
</nav>

<div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Shop</h1>
							</div>
						</div>
						<div class="col-lg-7">
							
						</div>
					</div>
				</div>
			</div>


            <div class="untree_co-section product-section before-footer-section">
		    <div class="container">
		      	<div class="row"></div>



                  <div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="images/d1.jpg" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">food_1</h3>
							<strong class="product-price">5 Tk</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 

                    <div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="images/d2.jpg" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">food_2</h3>
							<strong class="product-price">6tk</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
                    <div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="images/d3.jpg" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">food_3</h3>
							<strong class="product-price">9 Tk</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>

                    <div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="images/d4.jpg" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">food_4</h3>
							<strong class="product-price">7 tk</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>

                    <div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="images/g1.jpg" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">food_5</h3>
							<strong class="product-price">6 Tk</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 

                    <div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="images/g2.jpg" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">food_6</h3>
							<strong class="product-price">8 Tk</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 

                    <div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="images/g3.jpg" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">food_7</h3>
							<strong class="product-price">10 Tk</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>

                    <div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="images/g3.jpg" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">food_7</h3>
							<strong class="product-price">10 Tk</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>

                    </div>
		    </div>
            <footer class="footer-section">
			<div class="container relative">

				

				<div class="row">
					<div class="col-lg-8">
						<div class="subscription-form">
							<h3 class="d-flex align-items-center"><span class="me-1"><img src="images/envelope-outline.svg" alt="Image" class="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>

							<form action="#" class="row g-3">
								<div class="col-auto">
									<input type="text" class="form-control" placeholder="Enter your name"/>
								</div>
								<div class="col-auto">
									<input type="email" class="form-control" placeholder="Enter your email"/>
								</div>
								<div class="col-auto">
									<button class="btn btn-primary">
										<span class="fa fa-paper-plane"></span>
									</button>
								</div>
							</form>

						</div>
					</div>
				</div>

				<div class="row g-5 mb-5">
					<div class="col-lg-4">
						<div class="mb-4 footer-logo-wrap"><a href="#" class="footer-logo">GhewMeaw<span>.</span></a></div>
						<p class="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

						<ul class="list-unstyled custom-social">
							<li><a href="#"><span class="fa fa-brands fa-facebook-f"></span></a></li>
							<li><a href="#"><span class="fa fa-brands fa-twitter"></span></a></li>
							<li><a href="#"><span class="fa fa-brands fa-instagram"></span></a></li>
							<li><a href="#"><span class="fa fa-brands fa-linkedin"></span></a></li>
						</ul>
					</div>

					<div class="col-lg-8">
						<div class="row links-wrap">
							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li><a href="#">About us</a></li>
									<li><a href="#">Services</a></li>
									<li><a href="#">Blog</a></li>
									<li><a href="#">Contact us</a></li>
								</ul>
							</div>

							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li><a href="#">Support</a></li>
									<li><a href="#">Knowledge base</a></li>
									<li><a href="#">Live chat</a></li>
								</ul>
							</div>

							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li><a href="#">Jobs</a></li>
									<li><a href="#">Our team</a></li>
									<li><a href="#">Leadership</a></li>
									<li><a href="#">Privacy Policy</a></li>
								</ul>
							</div>

							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li><a href="#">Nordic Chair</a></li>
									<li><a href="#">Kruzo Aero</a></li>
									<li><a href="#">Ergonomic Chair</a></li>
								</ul>
							</div>
						</div>
					</div>

				</div>
                </div>
            </footer> 

            






    </>
  )
}

export default shop