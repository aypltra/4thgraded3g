document.getElementById("clubForm").onsubmit = function(event) {
    if (!confirm("Are you sure you want to submit this form?")) {
        event.preventDefault();
    }
};

document.getElementById("clubForm").onreset = function(event) {
    if (!confirm("Are you sure you want to reset the form?")) {
        event.preventDefault();
    }
};

document.querySelectorAll("input, textarea").forEach(element => {
    element.addEventListener("blur", function() {
        if (!this.value) {
            this.classList.add("error");
        } else {
            this.classList.remove("error");
        }
    });
});
