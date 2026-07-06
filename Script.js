// we will use the function to organize our code for adding our info to the HTML
function loadInfo(){
    // this allows us to change the  content of our HTML element - textContent is the best option to use from a performance perspective
    document.getElementById("divMajor").textContent = "ACS(Advancing Computer Science)";
    // set the email address
    document.getElementById("divEmail").textContent = "Mwinston91574@uat.edu";
    // set the grad date
    document.getElementById("divGradDate").textContent = "Expected Graduation Date: May 2028";
}