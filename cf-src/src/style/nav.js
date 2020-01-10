function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "resonsive";
    } else {
        x.className = "topnav";
    }
}