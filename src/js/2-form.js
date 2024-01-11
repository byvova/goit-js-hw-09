const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const emailInput = form.elements.email;
const localStorageKey = "feedback-form-state";

textarea.value = JSON.parse(localStorage.getItem(localStorageKey))?.message || "";
emailInput.value = JSON.parse(localStorage.getItem(localStorageKey))?.email || "";

form.addEventListener("input", (event) => {
    const { name, value } = event.target;

    localStorage.setItem(localStorageKey, JSON.stringify({
        ...JSON.parse(localStorage.getItem(localStorageKey)),
        [name]: value.trim()
    }));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (textarea.value.trim() === "" || emailInput.value.trim() === "") {
        alert("Please fill in both fields before submitting.");
    } else {
        console.log({
            email: emailInput.value.trim(),
            message: textarea.value.trim()
        });
        localStorage.removeItem(localStorageKey);
        form.reset();
    }
});
