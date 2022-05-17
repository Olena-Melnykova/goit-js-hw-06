const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const elements = event.currentTarget.elements;

    const mail = elements.email.value;
    const password = elements.password.value;

    if (mail === "" || password === "") {
        return alert("Complete all fields!");
    }
    console.log("e-mail:", mail, "password:", password);
    event.currentTarget.reset();

}
