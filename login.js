function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if ((password === "26/5" && username === "toka")) {
    window.location.href = "login.html";
  }else if ((password === "21" && username === "astro")) {
    window.location.href = "login.html";
  } else {
    alert("كلمة المرور غير صحيحة");
  }
}
