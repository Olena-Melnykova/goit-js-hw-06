const form = document.querySelector(".login-form");

function onFormSubmit(event) {
    event.preventDefault();

    const elements = event.currentTarget.elements;

    const email = elements.email.value;
    const password = elements.password.value;

    if (email === "" || password === "") {
        return alert("Complete all fields!");
    }
    console.log({
        email,
        password,
    });

    event.currentTarget.reset();

}
form.addEventListener("submit", onFormSubmit);


