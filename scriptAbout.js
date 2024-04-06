 function test() {
    function showNotification(message) {
        alert(message);
    }
    showNotification("Welcome to our website!");
    
    const confirmOkButton = document.getElementById("confirm-ok");
    const confirmCancelButton = document.getElementById("confirm-cancel");  
    const confirmationBox = document.getElementById("confirmation-box");    

    function showConfirmationBox() {    
        confirmationBox.style.display = "block";
    }

    function hideConfirmationBox() {
        confirmationBox.style.display = "none";
    }

    confirmOkButton.addEventListener("click", function() {
        const proceed = confirm("Do you want to move on?");
        if (proceed) {
            window.location.href = "contact.html"; 
        }
        else {
            hideConfirmationBox();
        }
        console.log("WORKED");
    });

    confirmCancelButton.addEventListener("click", function() {
        hideConfirmationBox();
    });

    window.onload = function() {
        showConfirmationBox();
    };
    // this is for the eventHandler
    function handleButtonClick() {
        alert("You clicked the button!");
    }
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("myButton").addEventListener("click", handleButtonClick);
    });
};
test();