console.log("hello");

function hello() {
    console.log("hello");
}

hello();


function sideMenuAppears() {
    document.getElementById('side-menu').classList.add('show-menu');
}
function sideMenuDisappears() {
    document.getElementById('side-menu').classList.remove('show-menu');
}
document.getElementById('menu-trigger').addEventListener('click', sideMenuAppears);
document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);



let quoteIndex = 1;
showQuotes(quoteIndex);
function plusQuotes(n) {
    showQuotes(quoteIndex += n);
}
function showQuotes(n) {
    let quotes = document.getElementsByClassName("quotes");
    if (n > quotes.length) { quoteIndex = 1 }
    if (n < 1) { quoteIndex = quotes.length }
    for (i = 0; i < quotes.length; i++) {
        quotes[i].style.display = "none";
    }
    quotes[quoteIndex - 1].style.display = "block";
}



const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const zipcode = document.getElementById("zipcode");
const phone = document.getElementById("phone");
form.addEventListener('submit', checkInputs);

function checkInputs(event) {
    event.preventDefault();
    let flag = true;

    while (flag) {
        const formChecks = 5;
        let formCheckCounter = 0;
        const firstNameValue = firstname.value.trim();
        const lastNameValue = lastname.value.trim();
        const emailValue = email.value.trim();
        const zipCodeValue = zipcode.value.trim();
        const phoneValue = phone.value.trim();


        if (firstNameValue === "") {
            setErrorFor(firstname);
        }
        else {
            formCheckCounter++;
            document.querySelector(".first-name-field").classList.remove("error");
        }
        if (lastNameValue === "") {
            setErrorFor(lastname);
        }
        else {
            formCheckCounter++;
            document.querySelector(".last-name-field").classList.remove("error");
        }
        if (emailValue === "") {
            setErrorFor(email);
        }
        else {
            formCheckCounter++;
            document.querySelector(".email-address-field").classList.remove("error");
        }
        if (zipCodeValue === "") {
            setErrorFor(zipcode);
        }
        else {
            formCheckCounter++;
            document.querySelector(".zip-code-field").classList.remove("error");
        }
        if (phoneValue === "") {
            setErrorFor(phone);
        }
        else {
            formCheckCounter++;
            document.querySelector(".text-opt-in-field").classList.remove("error");
        }
        // console.log(formCheckCounter);
        if (formCheckCounter === formChecks) {
            flag = false;
            setSuccessFor();
        }
    }
}
function setErrorFor(input) {
    document.querySelector(".form-error").classList.add("showError");
    const formField = input.parentElement;//form-field
    document.querySelector("." + formField.className).classList.add("error");
}
function setSuccessFor(input) {
    console.log("success!!!");
    document.querySelector(".form-block").classList.add("hide-block");
    document.querySelector(".form-block-success").classList.add("show-block");
}


var mql = window.matchMedia('(max-width: 1280px)');
let backwardButton = document.querySelector("#backward i");
let forwardButton = document.querySelector("#forward i");
mql.onchange = (e) => {
    if (e.matches) {
        // console.log('This is a narrow screen — less than 1280px wide.')
        backwardButton.classList.remove("w3-xlarge");
        backwardButton.classList.add("w3-medium");
        forwardButton.classList.remove("w3-xlarge");
        forwardButton.classList.add("w3-medium");
    } else {
        // console.log('This is a wide screen — more than 1280px wide.');
        backwardButton.classList.remove("w3-medium");
        backwardButton.classList.add("w3-xlarge");
        forwardButton.classList.remove("w3-medium");
        forwardButton.classList.add("w3-xlarge");
    }
}



