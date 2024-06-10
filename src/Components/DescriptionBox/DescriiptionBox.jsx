import React from "react";
import "./DescriiptionBox.css";

const DescriiptionBox = () => {
  return (
    <div className="descriiptionBox">
      <div className="descriptionbox-navigation">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviewers (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitate buying and
          selling of products or services over the internet servers as a virtual
          marketplace where business and individual showcasw their products ,
          interect with customers , and conduct transaction without the need for
          physical presence . e-commmerce website have gained imense popularity
          due to theor convinience accessibilty , and the global reach they
          offer
        </p>
        <p>
          {" "}
          E-commerce webiste typically display products or services detailed
          description images prices and any available products
        </p>
      </div>
    </div>
  );
};

export default DescriiptionBox;
