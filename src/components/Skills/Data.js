import { FaReact, FaNode } from "react-icons/fa";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io";
import { SiRedux, SiCss3 } from "react-icons/si";

export const skillObjOne = {
  skillName: "Java Script",
  skillFeatures: [
    "ES6 basics",
    "Functional programming",
    "Async/Await & Promises",
  ],
  icon: <IoLogoJavascript />,
  docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
};

export const skillObjTwo = {
  skillName: "React.js",
  skillFeatures: ["Single Page App", "Hooks", "Routing"],
  icon: <FaReact />,
  docs: "https://reactjs.org/docs/hello-world.html",
};

export const skillObjThree = {
  skillName: "Node.js",
  skillFeatures: ["Express", "MongoDB", "Rest API"],
  icon: <FaNode />,
  docs: "https://nodejs.org/en/docs/",
};

export const skillObjFour = {
  skillName: "Redux",
  skillFeatures: ["State management", "Store updating", "Actions & Reducers"],
  icon: <SiRedux />,
  docs: "https://redux.js.org/",
};

export const skillObjFive = {
  skillName: "CSS",
  skillFeatures: ["Styled Components", "Bootstrap", "SASS"],
  icon: <SiCss3 />,
  docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
};

export const skillObjSix = {
  skillName: "HTML",
  skillFeatures: ["HTML5 structure", "Formatting elements", "Forms"],
  icon: <IoLogoHtml5 />,
  docs: "https://developer.mozilla.org/pl/docs/Web/HTML",
};
