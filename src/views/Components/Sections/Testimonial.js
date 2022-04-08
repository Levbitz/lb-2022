import React from "react";
//import Card from "./Card";
import TestimonialCard from "./TestimonialCard";

//css
//import "./Css/About.css";

function Testimonial() {
  return (
    <div className="lb_about_wrapper white">
      <h2 className="center">SpotLight</h2>
      <div className="container  ">
        <div className="row">
          <div className="col s12 l3">
            <TestimonialCard
              img={require("assets/Images/DonorPic/pic1.jpg") }
            />
          </div>
          <div className="col s12 l3">
            <TestimonialCard
              img={require("assets/Images/DonorPic/02.jpg") }
            />
          </div>
          <div className="col s12 l3">
            <TestimonialCard
              img={require("assets/Images/DonorPic/03.jpg") }
            />
          </div>
          <div className="col s12 l3">
            <div className="lb_cardbtn_wrapper">
          <a
            href="/#"
            target="_blank"
            class="waves-effect waves-light btn indigo"
          >
          Button to open other Images in Lightbox
          </a>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
