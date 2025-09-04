document.addEventListener("DOMContentLoaded", function () {
  const formCard = document.querySelector(".form-card .form-body");
  const submitBtn = formCard.querySelector(".btn-submit");
  const resetBtn = formCard.querySelector(".btn-reset");

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Required fields
    const requiredFields = [
      "fname", "lname", "dob-day", "dob-month", "dob-year",
      "email", "mobile", "address", "city", "pincode", "state", "country"
    ];

    for (let id of requiredFields) {
      const field = document.getElementById(id);
      if (field && !field.value.trim()) {
        alert("⚠️ Please fill: " + (field.previousElementSibling?.innerText || id));
        field.focus();
        return;
      }
    }

    // Mobile validation
    const mobile = document.getElementById("mobile").value.trim();
    if (!/^[0-9]{10}$/.test(mobile)) {
      alert("⚠️ Enter valid 10-digit Mobile Number!");
      document.getElementById("mobile").focus();
      return;
    }

    // Pincode validation
    const pincode = document.getElementById("pincode").value.trim();
    if (!/^[0-9]{6}$/.test(pincode)) {
      alert("⚠️ Enter valid 6-digit PIN Code!");
      document.getElementById("pincode").focus();
      return;
    }

    // Gender validation
    const gender = formCard.querySelector("input[name='gender']:checked");
    if (!gender) {
      alert("⚠️ Please select your Gender!");
      return;
    }

    // Hobbies validation
    const hobbies = formCard.querySelectorAll("input[name='hobbies']:checked");
    if (hobbies.length === 0) {
      alert("⚠️ Please select at least one Hobby!");
      return;
    }

    // Qualification validation (table ke inputs)
    const qualificationInputs = formCard.querySelectorAll(".qualification input");
    for (let input of qualificationInputs) {
      if (!input.value.trim()) {
        alert("⚠️ Please fill all Qualification details!");
        input.focus();
        return;
      }
    }

    // Course validation
    const course = formCard.querySelector("input[name='course']:checked");
    if (!course) {
      alert("⚠️ Please select a Course!");
      return;
    }

    alert("✅ Form submitted successfully!");
    document.getElementById("studentForm")?.reset();
  });

  // Reset Event
  resetBtn.addEventListener("click", function (e) {
    const confirmReset = confirm("⚠️ Do you really want to reset the form?");
    if (!confirmReset) {
      e.preventDefault();
    }
  });
});
