const aLaMode = document.getElementById("alamode", "em");

aLaMode.addEventListener("click", function() {
    alert("with whipped cream & sprinkles!");
});


/*const button = document.querySelector("button");

button.addEventListener("clicke", event => {
    alert("with whipped cream & sprinkles!");
});
*/



aLaMode.addEventListener("mouseover", function(event) {
    aLaMode.setAttribute("style", "background-color: lightgreen");
    //event.target.style.color = "green";

    setTimeout(function() {
        aLaMode.setAttribute("style", "background-color: ");
    }, 500);
}, false);

//aLaMode.addEventListener();


