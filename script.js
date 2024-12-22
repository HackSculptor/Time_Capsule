// Select elements
const form = document.querySelector('#mainform form');

// Event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    const date = document.querySelector('#date').value;
    const isPublic = document.querySelector('#public').checked;
    const notify = document.querySelector('#notify').checked;
    const media = document.querySelector('#media').files[0]; // Get the attached file

    const capsule = {
        name,
        email,
        message,
        date,
        isPublic,
        notify,
        createdAt: new Date().toISOString(),
        media: null, // Placeholder for media preview
    };

    if (media) {
        const reader = new FileReader();
        reader.onload = function (e) {
            capsule.media = e.target.result; // Save file as Base64 string
            saveCapsule(capsule); // Save capsule after media is read
        };
        reader.readAsDataURL(media); // Convert file to Base64
    } else {
        saveCapsule(capsule); // Save capsule if no media is attached
    }
});

// Function to save capsule to localStorage
function saveCapsule(capsule) {
    let capsules = JSON.parse(localStorage.getItem('timeCapsules')) || [];
    capsules.push(capsule);
    localStorage.setItem('timeCapsules', JSON.stringify(capsules));

    alert('Your capsule has been saved!');
    form.reset(); // Clear the form
}
