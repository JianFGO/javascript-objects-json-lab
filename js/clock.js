(function(){ 
console.info("Hello JS"); 
const myNode = document.createElement("div");
const digitalClock = document.getElementById("digitalClock");
digitalClock.appendChild(myNode)
myNode.innerHTML = "Welcome";
const myDate = new Date();
console.dir(myDate);
myNode.innerHTML = myDate.toDateString();

// show only hours, minutes and seconds
myNode.innerHTML = myDate.toLocaleTimeString([],
     { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const updateClockHands = (myDate) => {
    const seconds = myDate.getSeconds();
    const rotSeconds = seconds * 6 - 90;
    secondHand.style.transform = `rotate(${rotSeconds}deg)`;
  };

  const updateTime = () => {
    console.info("tick tock");
    const myDate = new Date();
    myNode.innerHTML = myDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    updateClockHands(myDate);


  };
})();