const aLaMode = document.getElementById("alamode");

aLaMode.addEventListener("click", function() {
    alert("with whipped cream & sprinkles!");
});

/*const futureFacts = document.getElementById("cone");

futureFacts.addEventListener("click", function() {
    alert("Check back later for more of Brenna's inside scoops!");
});
*/

/*const button = document.querySelector("button");

button.addEventListener("click", event => {
    alert("with whipped cream & sprinkles!");
});
*/

let aLaModeHover = aLaMode;

aLaModeHover.addEventListener("mouseover", function() {
    aLaModeHover.setAttribute("style", "background-color: white");

    setTimeout(function() {
        aLaModeHover.setAttribute("style", "background-color: ");
    }, 1000);
}, false);



