// variables
const form = document.getElementById('request-quote');





// Event Listners
eventListners();

function eventListners() {
    document.addEventListener('DOMContentLoaded', function() {
        // Create the option for the years
        const html = new HTMLUI();
        html.displayYears();
    
    });
    
    // when the form is submitted
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // read the values from the form
        const make = document.getElementById('make').value;
        const year = document.getElementById('year').value;

        // read the radio buttons
        const level = document.querySelector('input[name="level"]:checked').value;

        // check that all the fields have something
        if(make === '' || year === '' || level === '') {
            console.log('error');
        } else {
            console.log('Alright!');
        }
    });
}



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