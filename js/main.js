window.addEventListener('load', init);

let nav;

function init() {
    //Retrieve gallery and add a click event for every Pokémon
    nav = document.getElementById('nav');
    nav.addEventListener('click', darkmodeClickHandler);
}

function darkmodeClickHandler(e) {
    let clickedItem = e.target;
    //Check if we clicked on a button
    /*if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }*/
    clickedItem.innerHTML = '';
    const theme = document.querySelector("#theme");
    if (theme.getAttribute("href") === "css/style.css") {
        // ... then switch it to "dark-theme.css"
        theme.href = "css/dark.css";
        clickedItem.innerHTML = '';
        clickedItem.innerHTML = '<i class="fa-solid fa-moon"></i>';
        // Otherwise...
    } else {
        // ... switch it to "light-theme.css"
        theme.href = "css/style.css";
        clickedItem.innerHTML = '';
        clickedItem.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}