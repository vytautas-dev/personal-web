import img1 from "../../images/img1.svg";
import img2 from "../../images/img2.svg";
import profile from "../../images/profile.png";

export const homeObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Hello World, I am Wojciech and...",
  headline: "I want to make my dreams come true!",
  description:
    "I am 30-years old self-taught from Warsaw. A year ago, I decided turn me life upside down and become a programmer. I believe that I can make my dreams come true!",
  buttonLabel: "Contact me",
  imgStart: true,
  img: profile,
  alt: "Credit Card",
  start: "",
  route: "contact",
};

export const homeObjTwo = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Extremely need for experience!",
  headline: "A solid foundation for the building self-development",
  description:
    "I'm looking for my first job in IT where I could gain experience. I have the basics thanks to which I can develop my skills. ",
  buttonLabel: "My skills",
  imgStart: "",
  img: img1,
  alt: "Vault",
  start: "",
  route: "skills",
};

export const homeObjThree = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: "If you want create modern projects...",
  headline: "You have to follow new technologies",
  description:
    "I have created several projects to show what stage of my learning I am at. Press the button to see my projects.",
  buttonLabel: "My Projects",
  imgStart: "start",
  img: img2,
  alt: "Vault",
  start: "true",
  route: "projects",
};

