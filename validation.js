
function validateForm() {
  var x = document.forms["form"]["Uname"].value;
  var y = document.forms["form"]["email"].value;
  var p = document.forms["form"]["password"].value;
  if (x == "") {
    alert("User name must be filled out!");
    return false;
  }
    else if (y == "") {
    alert("Email must be filled out!");
    return false;
  }
    else if (p == "") {
    alert("Password must be filled out!");
    return false;
  }
}


