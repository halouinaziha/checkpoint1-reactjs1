import React from "react";
import './Forms.css';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const Forms = () => {
return (
      <MDBContainer className="forms">
      <MDBRow className="row">
      <MDBCol md="11">
            <form>
            <p color="black" className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
            <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                  success="right" />
            <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                  success="right" />
            <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
                  error="wrong" success="right" />
            <MDBInput label="Your password" icon="lock" group type="password" validate />
            </div>
            <div className="text-center">
            <MDBBtn color="default"  rounded="true">Register</MDBBtn>
            </div>
            </form>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
);
};

export default Forms;
