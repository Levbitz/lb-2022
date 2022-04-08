import React from "react";

function Xyz() {
  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <div className="container">
        <div className="row">
          <div className="col l7">
            <div>
              <img
                className="responsive-img "
                src={require("assets/Images/girl.JPG")}
                alt=""
              />
            </div>
          </div>
          <div className="col l5">
            <p className="black-text" style={{fontSize:20,lineHeight:1.5}}>
              Kiruba lost her mother when she was six months old. she was took care by her Granny. As she 
              grows, Her Granny was not able to support her much. She left school at grade one but then She
              was blessed to receive timely support from <strong>Life Begins</strong> which gave her
              Dedicated Health, Love, Care, Education and dream of achieving her Aim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Xyz;
