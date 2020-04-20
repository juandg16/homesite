var app = {
    ready: (callback) => {
      // In case the document is already rendered
      if (document.readyState!='loading') callback();
      else document.addEventListener('DOMContentLoaded', callback);
    }
};

var header = {};

var sbisdPaths = [
    {id:"#sbisd-path-1", d:""}
]

app.ready(function(event) {
    header.init();
    animatePath('.icon-sbisd', '200');
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
}

addListeners = function(){
    let element = document.getElementById("bio");
    document.getElementById('header-button-white').onclick = function() {
        console.log("button clicked white");
        element.scrollIntoView({behavior: 'smooth'});
    }

    document.getElementById('header-button-black').onclick = function() {
        console.log("button clicked black");
        element.scrollIntoView({behavior: 'smooth'});
    }
}

animatePath = function(iconName, number){
    var icon = document.querySelector(iconName);
    var iconPaths = icon.getElementsByTagName('path');
    var timeline = anime.timeline({ autoplay: true, direction: 'alternate', loop: true });
    var newPaths = [];

    for (var i =0; i<iconPaths.length; i++){
        var path = iconPaths[i];
        var draw = path.getAttribute("d");
        var newDraw = draw.replace(/(\d+)/g,number);
        newPaths.push({id: "#"+path.getAttribute("id"), d: newDraw});
    }
    
    newPaths.forEach(function(path, index) {
        timeline
            .add({
                targets: path.id,
                d: {
                    value: path.d,
                    duration: 1000,
                    easing: 'easeInOutQuad'
                },
                offset: 1000 + 100*index
            });
    });
}
