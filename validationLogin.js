
function validateForm() {
  var x = document.forms["form"]["Uname"].value;
  var p = document.forms["form"]["password"].value;
  if (x == "") {
    alert("User name must be filled out!");
    return false;
  }
    else if (p == "") {
    alert("Password must be filled out!");
    return false;
  }
}


