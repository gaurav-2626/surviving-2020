 // To test if the preloader workds
 function loadedContent(){
    myVar = setTimeout(showPage, 3000);
 }

function showPage(){
    // Hide the preloader
    document.querySelector(".preloader-wrap").style.display = "none";
    // Show the main contents
    document.querySelector(".container-fluid").style.display = "block";
}