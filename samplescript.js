const changeNameButton = document.getElementById('changeName');
const studentName = document.getElementById('studentName');
const changeBackgroundButton = document.getElementById('changeBackground');
const profileButton = document.getElementById('profile');
const toggleDetailsButton = document.getElementById('toggleDetails');
const detailsSection = document.getElementById('details');

let isBackgroundChanged = false;

changeNameButton.addEventListener("click", function() {
    studentName.textContent = "Maria Santos";
});

changeBackgroundButton.addEventListener("click", function() {
    if (isBackgroundChanged === false) {
        profileButton.style.backgroundColor = "#abece1e1";
        isBackgroundChanged = true;
    } else {
        profileButton.style.backgroundColor = "";
        isBackgroundChanged = false;
    }
});

toggleDetailsButton.addEventListener("click", function() {
    if (detailsSection.style.display === "none") {
        detailsSection.style.display = "block";
    } else {
        detailsSection.style.display = "none";
    }
});
