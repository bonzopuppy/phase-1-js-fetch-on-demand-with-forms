const init = () => {


// Grab the form element, add an event listener for "Submit", write a callback function that takes that event object and runs a method on it to prevent the default refresh behavior

    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();


        // grab the input element 
        const input = document.querySelector("input#searchByID");

        console.log(input.value);

        // using the input value, fetch related data, convert it to object/array
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => (response.json()))
        .then ((data) => {

        //grab the Title and Summary elements, and change them according to the data
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");
            title.innerText = data.title;
            summary.innerText = data.summary;
        });
    });    

};

document.addEventListener('DOMContentLoaded', init);
