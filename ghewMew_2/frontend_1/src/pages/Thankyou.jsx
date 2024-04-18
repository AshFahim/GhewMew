import React from 'react'

import "../scss/style.scss"
import "../css/tiny-slider.css"
import "../css/style.css"
import "../css/bootstrap.min.css"
import { Link } from 'react-router-dom'

const thankyou = () => {
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






<script src="js/bootstrap.bundle.min.js"></script>
		<script src="js/tiny-slider.js"></script>
 		<script src="js/custom.js"></script>
  </>)
}

export default Thankyou