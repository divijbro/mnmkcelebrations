const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const button = form.querySelector("button");
    const originalText = button.innerText;

    button.innerText = "Sending... ⏳";
    button.disabled = true;

    const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value
    };

    try {
        const response = await fetch("https://mnmktestpy.onrender.com/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }

    } catch (error) {
        alert("Server not responding.");
    }

    button.innerText = originalText;
    button.disabled = false;

});

