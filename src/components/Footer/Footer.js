import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

import validate from "./validateInfo";
import { Button } from "../../globalStyles";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {
  Error,
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  ContactContainer,
  ContactInfo,
  Contact,
  FooterSubHeading,
  Form,
  FormInput,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  TextArea,
} from "./Footer.elements";
import FormSuccess from "./FormSuccess";

function Footer() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const form = useRef();

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setIsSubmitted(true);
      sendEmail(form.current);
    }
  }, [errors, isSubmitting]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const sendEmail = (form) => {
    emailjs
      .sendForm(
        "service_clrett1",
        "template_jqrl9bo",
        form,
        "user_PUXHsiKFVDHVaMFeGQayi"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Let's do something fun together! Write to me.
        </FooterSubHeading>
        <FooterSubText>Get in touch.</FooterSubText>
        <ContactContainer>
          {!isSubmitted ? (
            <Form ref={form} onSubmit={handleSubmit}>
              <FormInput
                name='name'
                type='text'
                placeholder='Your Name'
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <Error> {errors.name} </Error>}
              <FormInput
                name='email'
                type='email'
                placeholder='Email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <Error> {errors.email} </Error>}
              <TextArea
                name='message'
                type='text'
                placeholder='Message'
                value={values.message}
                onChange={handleChange}
              />
              {errors.message && <Error> {errors.message} </Error>}
              <Button fontBig wide type='submit'>
                {" "}
                Send{" "}
              </Button>
            </Form>
          ) : (
            <FormSuccess />
          )}
          <ContactInfo>
            <Contact>
              <h3>Wojciech Szczygielski </h3>
            </Contact>
            <Contact>
              <BsFillTelephoneFill style={{ marginRight: "15px" }} />{" "}
              <h4> +48 530 076 854 </h4>
            </Contact>
            <Contact>
              <AiOutlineMail style={{ marginRight: "15px" }} />{" "}
              <h4> wojciech.szczygielski91@gmail.com </h4>{" "}
            </Contact>
          </ContactInfo>
        </ContactContainer>
      </FooterSubscription>

      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/' onClick={() => {
              window.scrollTo({top: 0, behavior: 'smooth'});
            }}>
            <SocialIcon/>
            Hello World!
          </SocialLogo>
          <WebsiteRights>WOJCIECH SZCZYGIELSKI © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://github.com/vytautas-dev' target='_blank' aria-label='Facebook'>
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/vytautas_dev/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='https://linkedin.com/in/wojciech-szczygielski-428801228' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
