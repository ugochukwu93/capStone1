import React, { useState } from 'react';
import './Homepage.css'
import image1 from '../images/image3.jpg'
import image2 from '../images/chef.png'
import image3 from '../images/image4.jpg'
import image4 from '../images/chad-montano-eeqbbemH9-c-unsplash.jpg'
import image5 from '../images/chad-montano-MqT0asuoIcU-unsplash.jpg'
import image6 from '../images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg'

export default function Breakfast() {
    const [isActive, setIsActive] = useState(true);

    return (
        <div>
            <React.Fragment>
            <div className='container'>
            <div className="header">
              <div className="text">
                <img src={image2} alt=""/>
                <h2><i>Welcome</i> To <br/>Food<span>Castel</span></h2>
                <h4 className="text">Best food, Good food</h4>
                <div><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>
                <button>Book Your Table Now</button>
              </div>
            </div>
              
            <div className="dishes">
              <h3 className="toptext">Our Speciality</h3>
              <p><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br/>sed do eiusmod</p>
            <div className="images">
              <div className="foodcard col-lg-4">
                <div className="foodcard_img">
                  <img className="foodcar img-fluid" src={image1} alt="" />
                </div>
                <div className="foodcard_text">
                  <h4>Serving With Love</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                </div>
              </div>
              <div className="foodcard col-lg-4">
                <div className="foodcard_img">
                  <img className="foodcar img-fluid" src={image1} alt="" />
                </div>
                <div className="foodcard_text">
                  <h4>Tasty Products</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                </div>
              </div>
              <div className="foodcard col-lg-4">
                <div className="foodcard_img">
                  <img className="foodcar img-fluid" src={image3} alt="" />
                </div>
                <div className="foodcard_text">
                  <h4>Wide Range Flavors</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                </div>
              </div>
            </div>
          </div>
    
    
          <div className="menus">
              <h3>Food We Serve</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
            <div className="menu1">
              <div className="foodcard col-lg-4">
                <div className="foodcard_img">
                  <img className="foodcar img-fluid" src={image4} alt="" />
                </div>
                <div className="foodcard_text">
                  <h4>Breakfast</h4>
                  <p>Lorem ipsum dolor sit a incididunt ut labore et dolore</p>
                </div>
              </div>
              <div className="foodcard col-lg-4">
                <div className="foodcard_img">
                  <img className="foodcar img-fluid" src={image5} alt="" />
                </div>
                <div className="foodcard_text">
                  <h4>Brunch</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
              </div>
              <div className="foodcard col-lg-4">
                <div className="foodcard_img">
                  <img className="foodcar img-fluid" src={image4} alt="" />
                </div>
                <div className="foodcard_text">
                  <h4>Lunch/Dinner</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
              <div className="foodcard">
                <div className="foodcard_img">
                  <img className="foodcar img-fluid"src={image6} alt="" />
                </div>
                <div className="foodcard_text">
                  <h4>Desert</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
          </div>

      <div id="table-booking">
    <div className="contain">
    <div className="contact-form">
    <div className="section-title-text">
    <h1>Book a table</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
    </div>
      <div className="mainform">
        <div className="form">
          <form id="contact-form" name="contact-form" method="post" action="#">
            <div className="row">
            <div className="form-group col-md-4">
            <input type="text" name="name" className="form-control" required="required" placeholder="Name" />
            </div>
            <div className="form-group col-md-4">
            <input type="email" name="email" className="form-control" required="required" placeholder="Your Email" />
            </div>
            <div className="form-group col-md-4">
            <input type="text" name="address" className="form-control" placeholder="Address" />
            </div>
            <div className="form-group col-md-4">
            <input type="tel" name="mobile" className="form-control" placeholder="Mobile Number" />
            </div>
            <div className="form-group col-md-4">
            <input className="date-pick form-control" data-date-format="M d, D" type="date" id="check_in" name="check_in" placeholder="Date"/>
            </div>
            <div className="radio">
            <div className="form-group room_type-select">
            <select class="form-control-radio" name="room_type" id="room_type">
            <option value="">Book Type</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            </select>
            </div>
            </div>
            <div className="form-control-textarea">
            <textarea name="message" id="message" required="required" className="form-control-text" rows="8" placeholder="Enter Your Requirements"></textarea>
            </div>
            </div>
            <div className="form-group-btn">
            <button type="submit" className="button">Submit</button>
            </div>
            </form>
        </div>
      </div>
    </div>
    </div>
    </div>
        </div>
            </React.Fragment>
        </div>
    )
}