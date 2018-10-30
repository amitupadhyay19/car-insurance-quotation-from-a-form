// variables





// Event Listners
document.addEventListener('DOMContentLoaded', function() {
    // Create the option for the years
    const html = new HTMLUI();
    html.displayYears();

});




// Objects

function HTMLUI() {}

// Displays the latest 20 years in the select
HTMLUI.prototype.displayYears = function() {
    // max & minimum years
    const max = new Date().getFullYear(),
          min = max - 20;

    // generate the list with the latest 20 years
    const selectYears = document.getElementById('year');

    // print the values
    // for(let i = min; i <= max; i++) {  1998 to 2018
    for(let i = max; i >= min; i--) {  // print form 2018 to 1998
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYears.appendChild(option); 
    }

}