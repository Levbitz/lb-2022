import React from "react";
import emailjs from "emailjs-com";

//import emailjs from "emailjs-com";

function Form() {
  function sendEmail(e) {
     e.preventDefault();
     emailjs.sendForm(
       "service_3n6cc91",
       "template_fcgnmcg",
       e.target,
       "user_FKeFsx5fVPcdU8BsbTdwU"
     )
     .then(
       (result) => {
         alert("you message has been recieved thank for your feed back");
       },
       (error) => {
         console.log(error.text);
       }
     );
   e.target.reset();
 }
  return (
    <form  onSubmit={sendEmail} >
    <div className="row">
      <h3 className="indigo-text text-darken-4 center">
        Send us Feedback
      </h3>

      
    </div>

    <div className="row">
      

    <div className="input-field col l12   ">
      <input
        type="text"
        className="Validate"
        placeholder="enter name"
        name="name"
      />
      <label
          className="indigo-text text-darken-4"
          htmlFor="textarea1"
        >
        Name
        </label>
     
    </div>
  </div>


    <div className="row">
      

    <div className="input-field col l12   ">
      <input
        type="email"
        className="Validate"
        placeholder="email id"
        name="email"
      />
      <label
          className="indigo-text text-darken-4"
          htmlFor="textarea1"
        >
    Email id
        </label>
     
    </div>
  </div>
  
  <div className="row">
      

  <div className="input-field col l12   ">
    <input
      type="text"
      className="Validate"
      placeholder="number"
      name="number"
    />
    <label
          className="indigo-text text-darken-4"
          htmlFor="textarea1"
        >
        Phone Number
        </label>
   
  </div>
</div>

  

    <div className="row">
      <div className="input-field col s12  ">
        <textarea
          placeholder="write your message"
          id="textarea1"
          className="materialize-textarea"
          name="message"
        ></textarea>
        <label
          className="indigo-text text-darken-4"
          htmlFor="textarea1"
        >
          Message
        </label>
      </div>
      <div className="input-field col s12">
        <p className="center">
          <button className=" center indigo darken-4  btn btn-large  waves-effect waves-light ">
            {" "}
            Submit
          </button>
        </p>
      </div>
    </div>
  </form>
  )
}


export default Form;
