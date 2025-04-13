document.getElementById('alertMe').onclick = function () {
    alert("Hi there! We are happy to see you here");
};

let hoverBtn = document.getElementById('hoverButton');
hoverBtn.onmouseover = function () {
    hoverBtn.style.backgroundColor = "#56423B";

};

hoverBtn.onmouseleave = function () {
    hoverBtn.style.backgroundColor = "#C3B4AE";

};
    
