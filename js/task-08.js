const form = document.querySelector(".login-form");

const onFormSubmit = (event) => {
    event.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        return alert("Complete all fields!");
    }
    console.log({
        email,
        password,
    });

    form.reset();

}
form.addEventListener("submit", onFormSubmit);




