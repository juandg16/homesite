import React from 'react';
import ReactDOM from 'react-dom';
import anime from 'animejs';
import './index.css';
import Title from './Title';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import { sbisdD1, sbisdD2, sbisdD3, sbisdD4 } from './svgs/sbisdPaths';

let app = {
  ready: (callback) => {
    // In case the document is already rendered
    if (document.readyState!='loading') callback();
    else document.addEventListener('DOMContentLoaded', callback);
  }
};

let header = {};

app.ready(function(event) {
  header.init();
  animatePath(".icon-sbisd", "200");
  addListeners();
});

header.init = function(){

  anime({
      targets: [".header-title", ".header-title-white"],
      translateY: ["3.5em", 0],
      easing: "easeOutExpo",
      delay: 1600,
      duration: 1800
  });

  anime({
      targets: ".header-button",
      translateY: ["3.5em", 0],
      easing: "easeOutExpo",
      delay: 2000,
      duration: 1200
  });

  anime({
      targets: "#cover1",
      translateY: ["0", "-61vh"],
      easing: "easeOutExpo",
      duration: 5000
  });

  anime({
      targets: "#cover2",
      translateY: ["0px", "-61vh"],
      easing: "easeOutExpo",
      delay: 600,
      duration: 5000
  });

  anime({
      targets: "#cover3",
      translateY: ["0px", "-61vh"],
      easing: "easeOutExpo",
      delay: 1000,
      duration: 5000
  });

  anime({
      targets: "#cover4",
      translateY: ["0px", "-61vh"],
      easing: "easeOutExpo",
      delay: 1300,
      duration: 5000
  });
  anime({
      targets: "#cover5",
      translateY: ["0px", "-61vh"],
      easing: "easeOutExpo",
      delay: 1500,
      duration: 5000
  });

  loadSBISDPaths();
}

let addListeners = function(){
  let element = document.getElementById("bio");
  document.getElementById('header-button-white').onclick = function() {
      element.scrollIntoView({behavior: 'smooth'});
  }

  document.getElementById('header-button-black').onclick = function() {
      element.scrollIntoView({behavior: 'smooth'});
  }
}

let loadSBISDPaths = function(){
  let icon = document.querySelector(".icon-sbisd");
  let iconPaths = icon.getElementsByTagName('path');
  iconPaths[0].setAttribute("d", sbisdD1);
  iconPaths[1].setAttribute("d", sbisdD2);
  iconPaths[2].setAttribute("d", sbisdD3);    
  iconPaths[3].setAttribute("d", sbisdD4);
}

let animatePath = function(iconName, number){
  let icon = document.querySelector(iconName);
  let iconPaths = icon.getElementsByTagName('path');
  let newPaths = [];

  for (let i =0; i<iconPaths.length; i++){
      let path = iconPaths[i];
      let draw = path.getAttribute("d");
      let newDraw = draw.replace(/(\d+)/g,number);
      newPaths.push({id: "#"+path.getAttribute("id"), d: newDraw});
  }
  
  newPaths.forEach(function(path, index) {
    anime({
      targets: path.id,
      d: path.d,
      duration: 1000,
      delay: 2000,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true,
    });
  });
}


ReactDOM.render(
  <React.StrictMode>
    <Title />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
