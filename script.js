function myFunction() {
    var x = document.getElementById("MyMenu");
    if (x.className === "menu") {
        x.className += "responsive";
    } else {
        x.className = "menu"
    }
}