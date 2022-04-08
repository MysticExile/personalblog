window.addEventListener('load', init);

let nav;

function init() {
    // Retrieve navigation bar and add a click event for the darkmode button
    nav = document.getElementById('nav');
    nav.addEventListener('click', darkmodeClickHandler);
}

function darkmodeClickHandler(e) {
    // store the target into a variable
    let clickedItem = e.target;
    //Check if we clicked on a button
    if (clickedItem.nodeName !== 'BUTTON' && clickedItem.nodeName !== 'I') {
        //console.log("true 1");
        return;
    }
    if (clickedItem.getAttribute("id") !== "button-darkmode" && clickedItem.getAttribute("class") !== "button-darkmode") {
        //console.log("true 2");
        return;
    }
    // get the button element containing the darkmode icons
    let buttonElement = document.getElementById("moon");
    // get the element containing the link to the stylesheets
    const theme = document.querySelector("#theme");
    if (theme.getAttribute("href") === "css/style.css") {
        // ... then switch it to "dark-theme.css"
        theme.href = "css/dark.css";
        // clear the previous icon
        buttonElement.innerHTML = '';
        // insert the new icon
        buttonElement.innerHTML = '<i class="fa-solid fa-moon" id="button-darkmode"></i>';
        // Otherwise...
    } else {
        // ... switch it to "light-theme.css"
        theme.href = "css/style.css";
        // clear previous icon
        buttonElement.innerHTML = '';
        // insert the new icon
        buttonElement.innerHTML = '<i class="fa-solid fa-sun" id="button-darkmode"></i>';
    }
}