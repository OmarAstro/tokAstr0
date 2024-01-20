function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if ((password === "dog" && username === "toka")) {
    window.location.href = "../index2/index.html";
  }else if ((password === "21" && username === "astro")) {
    window.location.href = "../index2/index.html";
  } else {
    alert("كلمة المرور غير صحيحة");
  }
}
