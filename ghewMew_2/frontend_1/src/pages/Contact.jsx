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

const Contact = () => {
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
								<h1>Contact</h1>
								<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="" class="btn btn-secondary me-2">Shop Now</a><a href="#" class="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						
					</div>
				</div>
			</div>


            <div class="untree_co-section">
      <div class="container">

        <div class="block">
          <div class="row justify-content-center">


            <div class="col-md-8 col-lg-8 pb-4">


              <div class="row mb-5">
                <div class="col-lg-4">
                  <div  class="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div class="service-icon color-1 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>
                    </div> 
                    <div class="service-contents">
                      <p>43 wireless Gate, Mohakhali,Dhaka</p>
                    </div> 
                  </div> 
                </div>

                <div class="col-lg-4">
                  <div  class="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div class="service-icon color-1 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                      </svg>
                    </div> 
                    <div class="service-contents">
                      <p>info@yourdomain.com</p>
                    </div> 
                  </div>
                </div>

                <div class="col-lg-4">
                  <div  class="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div class="service-icon color-1 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                      </svg>
                    </div> 
                    <div class="service-contents">
                      <p>+1 294 3925 3939</p>
                    </div> 
                  </div> 
                </div>
              </div>

              <form>
                <div class="row">
                  <div class="col-6">
                    <div class="form-group">
                      <label class="text-black" for="fname">First name</label>
                      <input type="text" class="form-control" id="fname"/>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label class="text-black" for="lname">Last name</label>
                      <input type="text" class="form-control" id="lname"/>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="text-black" for="email">Email address</label>
                  <input type="email" class="form-control" id="email"/>
                </div>

                <div class="form-group mb-5">
                  <label class="text-black" for="message">Message</label>
                  <textarea name="" class="form-control" id="message" cols="30" rows="5"></textarea>
                </div>

                <button type="submit" class="btn btn-primary-hover-outline">Send Message</button>
              </form>

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

export default Contact