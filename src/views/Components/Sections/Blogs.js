import React from "react";
//import Card from "./Card";
import TestimonialCard from "./TestimonialCard";

//css
//import "./Css/About.css";

function Blogs() {
  return (
    <div className="lb_about_wrapper white">
      <h2 className="center">Our Blogs</h2>
      <div className="container  ">
        <div className="row">
          <div className="col s12 l4">
            <TestimonialCard
              img={require("assets/Images/DonorPic/01.jpg")}
            />
          </div>
          <div className="col s12 l4">
            <TestimonialCard
              img={require("assets/Images/DonorPic/01.jpg")}
            />
          </div>
          <div className="col s12 l4">
            <TestimonialCard
              img={require("assets/Images/DonorPic/01.jpg")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
