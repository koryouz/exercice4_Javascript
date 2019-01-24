function toggle() {
  var regexName = /^[a-zA-Z ]+$/;
  var lastname = document.getElementById("lastname").value;
  var firstname = document.getElementById("firstname").value;
  var city = document.getElementById("city").value;
  if (lastname.match(regexName) && firstname.match(regexName) && city.match(regexName)){
    alert(lastname +"\n"+ firstname +"\n"+ city);
  }else {
    alert('Characteres invalides');
  }
}
