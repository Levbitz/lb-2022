import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <div style={{ marginBottom: 30 }} className="Form-wrapper">
      <div className="z-depth-0">
        <div className="row">
          <div className="col s12 ">
            <h2 className="white-text darken-5">Contact us</h2>
          </div>
          <div className="col s12 l7 ">
            <div>
              <blockquote className="z-depth-2">
                <h3 className="indigo-text text-darken-4">Address One</h3>
                <p>
                  <span>Location:</span>{" "}
                  <span>#42, 2nd cross, Shampura Main Rd, Muniveerappa Layout, Bengaluru, Karnataka 560032</span>
                </p>
                <p>
                  <span>Email:</span> <span>lifebeginsngo@gmail.com</span>
                </p>
                <p>
                  <span>phone number:</span> <span>+91-8431221686</span>
                </p>
              </blockquote>
            </div>
            {/*<div>
              <blockquote className="z-depth-2">
                <h3 className="indigo-text text-darken-4">Address two</h3>
                <p>
                  <span>Location:</span>{" "}
                  <span>Lorem ipsum dolor sit amet.</span>
                </p>
                <p>
                  <span>Email</span> <span>email@gmail.com</span>
                </p>
                <p>
                  <span>phone number</span> <span>08000000000000</span>
                </p>
              </blockquote>
            </div>
            <div>
              <blockquote className="z-depth-2">
                <h3 className="indigo-text text-darken-4">Address three</h3>
                <p>
                  <span>Location:</span>{" "}
                  <span>Lorem ipsum dolor sit amet.</span>
                </p>
                <p>
                  <span>Email</span> <span>email@gmail.com</span>
                </p>
                <p>
                  <span>phone number</span> <span>08000000000000</span>
                </p>
              </blockquote>
            </div>*/}
          </div>
          <div style={{ marginRight: -30 }} className="col l4 offset-l1   ">
           <Form/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;