import React, { useState } from 'react';
import './Homepage.css'

export default function Breakfast() {
    const [isActive, setIsActive] = useState(true);

    return (
        <div>
            <React.Fragment>
            <div className ="container">
        <div className="first">
          <div className="logo">Hi</div>
          <div>
            <h2>Welcome To Food<span>Castel</span></h2>
            <p className="starlogo">logo</p>
            <h4 className="text">Best food, Good food</h4>
            <button>Book Your Table Now</button>
          </div>
        </div>
          
        <div class="dishes">
          <h3>Our Speciality</h3>
          <p>star</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        <div class="foodshow_card row text-center">
          <div class="foodcard col-lg-4">
            <div class="foodcard_img">
              <img class="foodcar img-fluid" src="image5.jpg" alt="" />
            </div>
            <div class="foodcard_text">
              <h4>Serving With Love</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            </div>
          </div>
          <div class="foodcard col-lg-4">
            <div class="foodcard_img">
              <img class="foodcar img-fluid" src="image4.jpg" alt="" />
            </div>
            <div class="foodcard_text">
              <h4>Tasty Products</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            </div>
          </div>
          <div class="foodcard col-lg-4">
            <div class="foodcard_img">
              <img class="foodcar img-fluid" src="image3.jpg" alt="" />
            </div>
            <div class="foodcard_text">
              <h4>Wide Range Flavors</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            </div>
          </div>
        </div>
      </div>


      <div class="menus">
          <h3>Food We Serve</h3>
          <p>star</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        <div class="foodshow_card row text-center">
          <div class="foodcard col-lg-4">
            <div class="foodcard_img">
              <img class="foodcar img-fluid" src="image5.jpg" alt="" />
            </div>
            <div class="foodcard_text">
              <h4>Breakfast</h4>
              <p>Lorem ipsum dolor sit a incididunt ut labore et dolore</p>
            </div>
          </div>
          <div class="foodcard col-lg-4">
            <div class="foodcard_img">
              <img class="foodcar img-fluid" src="image4.jpg" alt="" />
            </div>
            <div class="foodcard_text">
              <h4>Brunch</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>
          </div>
          <div class="foodcard col-lg-4">
            <div class="foodcard_img">
              <img class="foodcar img-fluid" src="image3.jpg" alt="" />
            </div>
            <div class="foodcard_text">
              <h4>Lunch/Dinner</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="foodcard col-lg-4">
            <div class="foodcard_img">
              <img class="foodcar img-fluid" src="image3.jpg" alt="" />
            </div>
            <div class="foodcard_text">
              <h4>Desert</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="faqparallax container-fluid my-4 text-white">
        <div class="faqparallax-Overlay bg-dark bg-opacity-50"></div>
        <div>
          <p>icon</p>
          <h3>Have You Ever</h3>
          <h3>Ordered On Foodcastle</h3>
          <p>30 Min for Deliveery</p>
          <p>Any Where</p>
          <button class="btn btn-danger">Try it Now</button>
        </div>
        <div>image</div>
      </div>

      <div id="table-booking">
<div class="container">
<div class="padding contact-form text-center">
<div class="section-title">
<h1>Book a table</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
</div>
<form id="contact-form" name="contact-form" method="post" action="#">
<div class="row">
<div class="form-group col-md-4">
<input type="text" name="name" class="form-control" required="required" placeholder="Name" />
</div>
<div class="form-group col-md-4">
<input type="email" name="email" class="form-control" required="required" placeholder="Your Email" />
</div>
<div class="form-group col-md-4">
<input type="text" name="address" class="form-control" placeholder="Address" />
</div>
<div class="form-group col-md-4">
<input type="tel" name="mobile" class="form-control" placeholder="Mobile Number" />
</div>
<div class="form-group col-md-4">
<input class="date-pick form-control" data-date-format="M d, D" type="text" id="check_in" name="check_in" placeholder="Date"/>
</div>
<div class="form-group col-md-4">
<div class="form-group room_type-select">
<select class="form-control" name="room_type" id="room_type">
<option value="">Book Type</option>
<option value="Breakfast">Breakfast</option>
<option value="Lunch">Lunch</option>
<option value="Dinner">Dinner</option>
</select>
</div>
</div>
<div class="form-group col-sm-12">
<textarea name="message" id="message" required="required" class="form-control" rows="8" placeholder="Enter Your Requirements"></textarea>
</div>
</div>
<div class="form-group">
<button type="submit" class="btn btn-primary">Submit</button>
</div>
</form>
</div>
</div>
</div>

      <div class="footerT mt-5 container-fluid text-center text-white p-4">
    <div class="row">
      <div class="col-sm-4 marginn">
        &copy; 2021. FoodPlug. All rights reserved.
      </div>
      <div class="col-sm-4 marginn">
        <i class="fab fa-linkedin footer-icon " aria-hidden="true"></i>
        <i class="fab fa-instagram footer-icon " aria-hidden="true"></i>
        <i class="fab fa-facebook footer-icon " aria-hidden="true"></i>
      </div>
    </div>
    </div>
        </div>
            </React.Fragment>
        </div>
    )
}