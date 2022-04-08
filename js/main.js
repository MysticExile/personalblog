window.addEventListener('load', init);

let nav;

function init() {
    //Retrieve gallery and add a click event for every Pokémon
    nav = document.getElementById('nav');
    nav.addEventListener('click', darkmodeClickHandler);
}

function darkmodeClickHandler(e) {
    let clickedItem = e.target;
    //console.log(clickedItem);
    //console.log(clickedItem.nodeName);
    //Check if we clicked on a button
    if (clickedItem.nodeName !== 'BUTTON' && clickedItem.nodeName !== 'I') {
        //console.log("true 1");
        return;
    }
    if (clickedItem.getAttribute("id") !== "button-darkmode" && clickedItem.getAttribute("class") !== "button-darkmode"){
        //console.log("true 2");
        return;
    }
    let dark = document.getElementsByClassName("button-darkmode");
    const theme = document.querySelector("#theme");
    if (theme.getAttribute("href") === "css/style.css") {
        // ... then switch it to "dark-theme.css"
        theme.href = "css/dark.css";
        dark.innerHTML = '';
        dark.innerHTML = '<i class="fa-solid fa-moon" id="button-darkmode"></i>';
        // Otherwise...
    } else {
        // ... switch it to "light-theme.css"
        theme.href = "css/style.css";
        dark.innerHTML = '';
        dark.innerHTML = '<i class="fa-solid fa-sun" id="button-darkmode"></i>';
    }
}