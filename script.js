const aLaMode = document.getElementById("alamode");

aLaMode.addEventListener("click", function() {
    alert("with whipped cream & sprinkles!");
});


/*const button = document.querySelector("button");

button.addEventListener("clicke", event => {
    alert("with whipped cream & sprinkles!");
});
*/

let aLaModeHover = aLaMode;

aLaModeHover.addEventListener("mouseover", function() {
    aLaModeHover.setAttribute("style", "background-color: white");
    //event.target.style.color = "green";

    setTimeout(function() {
        aLaModeHover.setAttribute("style", "background-color: ");
    }, 1000);
}, false);



