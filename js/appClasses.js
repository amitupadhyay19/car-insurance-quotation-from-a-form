//======= variables
const form = document.getElementById('request-quote');

// first load classes than you will initiate
const html = new HTMLUI();



// ====== Event Listners
eventListners();

function eventListners() {
    document.addEventListener('DOMContentLoaded', function () {

        // Create the option for the years
        html.displayYears();

    });

    // when the form is submitted
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // read the values from the form
        const make = document.getElementById('make').value;
        const year = document.getElementById('year').value;

        // read the radio buttons
        const level = document.querySelector('input[name="level"]:checked').value;

        // check that all the fields have something
        if (make === '' || year === '' || level === '') {
            html.displayError('All the fields are mandatory');
        } else {
            // clear the previous quotes
            const prevResult = document.querySelector('#result div');
            if (prevResult != null) {
                prevResult.remove();
            }

            // make the quotation
            const insurance = new Insurance(make, year, level);
            const price = insurance.calculateQuotation(insurance);

            // print the results form HTMLUI();
            html.showResults(price, insurance);
        }
    });
}

