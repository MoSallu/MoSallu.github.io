function test() {
    const form = document.getElementById("myForm");
    
            
    form.addEventListener("submit", function(event) {
    
        event.preventDefault();
    
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const age = document.getElementById("age").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;
    
        if (name === "" || email === "" || age === "" || phone === "" || message === "") {
    
            alert("Please fill in all fields");
        } 
        else if (!email.includes('@')) {
    
            alert("Please enter a valid email address");
        }
        else if (age < 18) {
            alert("You must be at least 18 years old to submit this form");
        }
        else {
            alert("Form submitted successfully!");
            form.reset();
        }       
    });
};
test();