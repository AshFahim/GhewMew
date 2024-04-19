import React from 'react'

import "../scss/style.scss"
import "../css/tiny-slider.css"
import "../css/style.css"
import "../css/bootstrap.min.css"
// import "../https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"

import { Link } from 'react-router-dom'

import truck from "../images/truck.svg"
import bag from "../images/bag.svg"
import blue from "../images/blue.png"
import cart from "../images/cart.svg"
import couch from "../images/couch.png"

import cross from "../images/cross.svg"
import d1 from "../images/d1.jpg"
import d2 from "../images/d2.jpg"
import d3 from "../images/d3.jpg"
import d4 from "../images/d4.jpg"

import dotsgreen from "../images/dots-green.svg"
import dotslight from "../images/dots-light.svg"
import dotsyellow from "../images/dots-yellow.svg"

import envelopeoutline from "../images/envelope-outline.svg"
import g1 from "../images/g1.jpg"
import g2 from "../images/g2.jpg"
import g3 from "../images/g3.jpg"
import logo from "../images/logo_dog and cat.png"

import p1 from "../images/p1.png"
import p2 from "../images/p2.png"
import p3 from "../images/p3.png"

import person1 from "../images/person_1.jpg"
import person2 from "../images/person_2.jpg"
import person3 from "../images/person_3.jpg"
import person4 from "../images/person_4.jpg"

import personx1 from "../images/person-1.png"
import personx2 from "../images/person-1.jpg"

import pet2 from "../images/pet 2.png"
import pet1 from "../images/pet-1.jpg"
import pet22 from "../images/pet-2.2.png"
import pet23 from "../images/pet-2.3.png"
import pet24 from "../images/pet-2.4.png"
import pet3 from "../images/pet-3.jpg"

import returns from "../images/return.svg"
import support from "../images/support.svg"
import user from "../images/user.svg"

const Services = () => {
  return(
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
							<Link class="nav-link" to="index.html">Home</Link>
						</li>
						<li><Link class="nav-link" to="/shop">Shop</Link></li>
            <li><Link class="nav-link" to="/about">About us</Link></li>
            <li><Link class="nav-link" to="/services">Services</Link></li>
            <li><Link class="nav-link" to="/blog">Blog</Link></li>
            <li><Link class="nav-link" to="/contact">Contact us</Link></li>
					</ul>

					
				</div>
			</div>
				
		</nav>

        <div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Services</h1>
								<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="" class="btn btn-secondary me-2">Shop Now</a><a href="#" class="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						
					</div>
				</div>
			</div>


            <div class="why-choose-section">
			<div class="container">
				
				
				<div class="row my-5">
					<div class="col-6 col-md-6 col-lg-3 mb-4">
						<div class="feature">
							<div class="icon">
								<img src={truck} alt="Image" class="imf-fluid"/>
							</div>
							<h3>Fast &amp; Free Shipping</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div class="col-6 col-md-6 col-lg-3 mb-4">
						<div class="feature">
							<div class="icon">
								<img src={bag} alt="Image" class="imf-fluid"/>
							</div>
							<h3>Easy to Shop</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div class="col-6 col-md-6 col-lg-3 mb-4">
						<div class="feature">
							<div class="icon">
								<img src={support} alt="Image" class="imf-fluid"/>
							</div>
							<h3>24/7 Support</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div class="col-6 col-md-6 col-lg-3 mb-4">
						<div class="feature">
							<div class="icon">
								<img src={returns} alt="Image" class="imf-fluid"/>
							</div>
							<h3>Hassle Free Returns</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					
					</div>

				</div>
			
			</div>


            <div class="product-section pt-0">
			<div class="container">
				<div class="row">


                <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 class="mb-4 section-title">Treated with good care and love.</h2>
						<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<p><a href="#" class="btn">Explore</a></p>
					</div>

                    <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="#">
							<img src={p1} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Bhapa Cat</h3>
							<strong class="product-price"></strong>

							<span class="icon-cross">
								<img src={cross} class="img-fluid"/>
							</span>
						</a>
					</div> 

                    <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="#">
							<img src={p2} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Sobuj Pakhi</h3>
							<strong class="product-price"></strong>

							<span class="icon-cross">
								<img src={cross} class="img-fluid"/>
							</span>
						</a>
					</div>

                    <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="#">
							<img src={p3} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Brown Tiger</h3>
							<strong class="product-price"></strong>

							<span class="icon-cross">
								<img src={cross} class="img-fluid"/>
							</span>
						</a>
					</div>

                    </div>
			</div>
		</div>


        <div class="testimonial-section">
			<div class="container">
				<div class="row">
					<div class="col-lg-7 mx-auto text-center">
						<h2 class="section-title">Testimonials</h2>
					</div>
				</div>

				<div class="row justify-content-center">
					<div class="col-lg-12">
						<div class="testimonial-slider-wrap text-center">

							<div id="testimonial-nav">
								<span class="prev" data-controls="prev"><span class="fa fa-chevron-left"></span></span>
								<span class="next" data-controls="next"><span class="fa fa-chevron-right"></span></span>
							</div>

							<div class="testimonial-slider">
								
								<div class="item">
									<div class="row justify-content-center">
										<div class="col-lg-8 mx-auto">

											<div class="testimonial-block text-center">
												<blockquote class="mb-5">
													<p>&ldquo;Product was good&rdquo;</p>
												</blockquote>
												<div class="author-info">
													<div class="author-pic">
														<img src={personx1} alt="Maria Jones" class="img-fluid"/>
													</div>
													<h3 class="font-weight-bold">Alison Bergers</h3>
													<span class="position d-block mb-3">CEO, Co-Founder, Aladin Company</span>
												</div>

												
											</div>

										</div>
									</div>
								</div> 
								

								<div class="item">
									<div class="row justify-content-center">
										<div class="col-lg-8 mx-auto">

											<div class="testimonial-block text-center">
												<blockquote class="mb-5">
													<p>&ldquo;Thanks for the servise we are going to visit again&rdquo;</p>
												</blockquote>
												<div class="author-info">
													<div class="author-pic">
														<img src={personx2} alt="Maria Jones" class="img-fluid"/>
													</div>
													<h3 class="font-weight-bold">Maria Jones</h3>
													<span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
												</div>

												
											</div>

										</div>
									</div>
								</div> 
								

								<div class="item">
									<div class="row justify-content-center">
										<div class="col-lg-8 mx-auto">

											<div class="testimonial-block text-center">
												<blockquote class="mb-5">
													<p>&ldquo;Best pet shop ever... &rdquo;</p>
												</blockquote>
												<div class="author-info">
													<div class="author-pic">
														<img src={personx2} alt="Maria Jones" class="img-fluid"/>
													</div>
													<h3 class="font-weight-bold">Maria Jones</h3>
													<span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
												</div>

												
											</div>

										</div>
									</div>
								</div> 
								
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>


        <footer class="footer-section">
			<div class="container relative">

				

				<div class="row">
					<div class="col-lg-8">
						<div class="subscription-form">
							<h3 class="d-flex align-items-center"><span class="me-1"><img src={envelopeoutline} alt="Image" class="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>

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



        <script src="js/bootstrap.bundle.min.js"></script>
		<script src="js/tiny-slider.js"></script>
 		<script src="js/custom.js"></script>



        </>)
}

export default Services