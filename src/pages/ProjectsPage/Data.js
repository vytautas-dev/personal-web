
import imgTodo from "../../images/todo-app.jpg";
import imgBikeUnite from "../../images/bike-unite.jpg";
import imgPersonalWeb from "../../images/personal-web.jpg";


export const projectObjOne = {
    lightBg: true,
    lightText: false,
    lightTopLine: false,
    lightTextDesc: false,
    topLine: 'Mini social app',
    headline: 'Bike-Unite',
    description:
      'Mini social app created with MERN',
    buttonLabel: 'Check it out',
    imgStart: '',
    alt: 'bike-unite',
    route: 'https://bike-unite.herokuapp.com/',
    img: imgBikeUnite,
  };
  
export const projectObjTwo = {
    lightBg: false,
    lightText: true,
    lightTopLine: true,
    lightTextDesc: true,
    topLine: 'Todo app',
    headline: 'Todo app',
    description:
      'Simple Todo application with MERN',
    buttonLabel: 'Check it out',
    imgStart: "start",
    alt: 'todo-app',
    route: 'https://todo-app-mern-v1.herokuapp.com/',
    img: imgTodo,
  };

  export const projectObjThree = {
    lightBg: true,
    lightText: false,
    lightTopLine: false,
    lightTextDesc: false,
    topLine: 'Personal web',
    headline: 'Personal web',
    description:
      'Personal web created with JavaScript & CSS',
    buttonLabel: 'Check it out',
    imgStart: "",
    alt: 'personal-web',
    route: 'http://wojciech-sz.infinityfreeapp.com/',
    img: imgPersonalWeb,
  };
  