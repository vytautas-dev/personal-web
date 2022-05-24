import React from "react";
import imgSuccess from "../../images/mail-sent.svg";
import { FormSuccessContainer } from "./FormSuccess.elements";
import { Img, ImgWrapper } from "../InfoSection/InfoSection.elements";

const FormSuccess = () => {
  return (
    <FormSuccessContainer>
      <h1>Thank you for your message! I'll reply as soon as possible.</h1>
      <ImgWrapper style={{ maxWidth: "200px" }}>
        <Img src={imgSuccess} alt='email sent' />
      </ImgWrapper>
    </FormSuccessContainer>
  );
};

export default FormSuccess;
