function validate() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;


    if (pass1.length < 8) {
        alert("Password one is " + (8-pass1.length) + " characters too short!")
    } else if (pass2.length < 8) {
        alert("Password two is " + (8-pass2.length) + " characters too short!")
    } else if (pass1 != pass2) {
        alert("Two passwords don't match!")
    } else {
        alert("Everything is good!")
    }
}
