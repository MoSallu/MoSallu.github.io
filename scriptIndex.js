function test() {
    function showNotification(message) {
        alert(message);
    }
    showNotification("Welcome to our website!");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    button1.addEventListener("click", function() {
         changeColorScheme("scheme1");
    });
        
    button2.addEventListener("click", function() {
        changeColorScheme("scheme2");
    });
        
    function changeColorScheme(scheme) {
        const body = document.body;
        
        switch (scheme) {
            case "scheme1":
                body.style.backgroundColor = "lightblue";
                body.style.color = "black";
                break;
            case "scheme2":
                body.style.backgroundColor = "beige";
                body.style.color = "black";
                break;
            default:
                break;
        }
    } 
};
test();
    