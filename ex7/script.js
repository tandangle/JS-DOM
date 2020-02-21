// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var headerButton = document.getElementById("section-header");
var section = document.getElementById("section");

headerButton.addEventListener('click', function(){
    if (document.getElementById("section").style.display != "none"){
        document.getElementById("section").style.display = "none"
    } else {
        document.getElementById("section").style.display = "block"
    }
})