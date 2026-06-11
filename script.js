//Download Btn

document.getElementById("downloadBtn").addEventListener("click", () => {
    const link = document.createElement('a');
    link.href = "/Portfolio/resume.docx";
    link.download = "resume.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});



const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "2070bba2-e914-4cf5-acdd-ba3fb3d398bf");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});


function facebookLink() {
    window.open("https://www.facebook.com/paulrgnr");
}
function intagramLink() {
    window.open("https://www.instagram.com/cyberpaulrgnr");
}
function tiktokLink() {
    window.open("https://www.tiktok.com/cyberpaulrgnr");
}
function linkedInLink() {
    window.open("https://www.linkedin.com/PaulReignierBediones");
}
