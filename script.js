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

let count = 0;
document.getElementById('buttonCounter').onclick = function () {
    count++;
    let counter = document.getElementById('counter');
    counter.textContent = count;

    if (count % 2 === 0) {
        counter.style.color = "green"
    } else {
        counter.style.color = "red";
    }
};

document.getElementById('loopButton').onclick = function () {
    let loopText = "";
    for (let i = 0; i < 5; i++) {
      loopText += "Book your appointment now!";
    }
    document.getElementById('loopContainer').textContent = loopText;
  };