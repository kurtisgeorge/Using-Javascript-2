// when the "submit-button" is clicked, the contents of the contact-page are replaced 
// with a single <p> element that reads "Thank you for your message" in size 24 font.

const submitButton = document.getElementById("submit-button"); // Get the submit button
const contactPage = document.getElementById("contact-page"); // Get the contact page container

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Replace the content of the contact page with the thank you message
    contactPage.innerHTML = `
        <p style="font-size: 24px; text-align: center; margin-top: 50px;">
            Thank you for your message!
        </p>
    `;
}

// Add an event listener to the submit button to listen for clicks
submitButton.addEventListener("click", handleSubmit);