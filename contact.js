document.getElementById("contactForm").addEventListener("submit", function (e) {

		const fullname = document.getElementById("fullname").value.trim();
		const namePattern = /^[A-Za-z\s]+$/;

		if (fullname.length < 5) {
			alert("Full name must contain at least 5 characters.");
			e.preventDefault();
			return;
		}

		if (!namePattern.test(fullname)) {
			alert("Full name must contain only letters and spaces.");
			e.preventDefault();
			return;
		}

		const email = document.getElementById("email").value.trim();
		const emailPattern = /^[a-zA-Z0-9._%+-]+@e-uvt\.ro$/;

		if (!emailPattern.test(email)) {
			alert("Email must be valid and end with @e-uvt.ro");
			e.preventDefault();
			return;
		 }

		const phone = document.getElementById("phone").value.trim();
        if (phone !== "") {
            const phonePattern = /^[0-9]{10}$/;
            if (!phonePattern.test(phone)) {
                alert("Phone must be a valid 10-digit number.");
                e.preventDefault();
                return;
            }
        }

        let dob = document.getElementById("dob").value;
        if (dob) {
            const today = new Date();
            const birthDate = new Date(dob);
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            if (age < 18) {
                alert("You must be at least 18 years old.");
                e.preventDefault();
                return;
            }
        }

        let ageInput = document.getElementById("age").value.trim();
        if (ageInput) {
            const ageValue = parseInt(ageInput, 10);
            if (ageValue < 18 || ageValue > 60) {
                alert("You must be between 18 and 60 years old.");
                e.preventDefault();
                return;
            }
        }

        let url = document.getElementById("website").value.trim();
        if (url) {
            const urlPattern = /^https:\/\/([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/;
            if (!urlPattern.test(url)) {
                alert("Please enter a valid URL starting with https://");
                e.preventDefault();
                return;
            }
        }

        let fileInput = document.getElementById("fileUpload");
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const allowedTypes = ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf"];
            if (!allowedTypes.includes(file.type)) {
                alert("Only .docx and .pdf files are allowed.");
                e.preventDefault();
                return;
            }
            if (file.size > 2 * 1024 * 1024) {
                alert("File size must be less than 2MB.");
                e.preventDefault();
                return;
            }
        }

        let color = document.getElementById("favColor").value;
        if (!color) {
            alert("Please select your favorite color.");
            e.preventDefault();
            return;
        }

        let subject = document.getElementById("subject")
        if (!subject.value) {
            alert("Please select a subject.");
            e.preventDefault();
            return;
        }

        let message = document.getElementById("msg").value;
        if (message.length < 1) {
            alert("Message must not be empty.");
            e.preventDefault();
            return;
        }

        let heardAbout = document.getElementsByName("heardAbout");
        let checked = Array.from(heardAbout).some(radio => radio.checked);
        if (!checked) {
            alert("Please select how you heard about us.");
            e.preventDefault();
            return;
        }


		let proceed = confirm("Do you want to submit the form?");
        if (proceed !== true) {
            e.preventDefault();
            return;
        }
	});