function getFields() {
  var engineName = document.getElementById('menu');
  var bgImage = document.getElementById('bgImage');
  var bgSize = document.getElementById('bgSize');
  var name = document.getElementById('name');
  var spotify = document.getElementById('spotifymenu');
  var cookieSpotify = getCookie('spotify');
  if (!cookieSpotify) {
    cookieSpotify = "Enabled";
  }
  var cookieName = getCookie('name');
  if (!cookieName) {
    cookieName = "What is your name?";
  }
  var cookieBgSize = getCookie('bgSize');
  cookieBgSize = cookieBgSize.replace(" this_is_percent", "%")
  var cookieBg = getCookie('background');
  var cookie = getCookie('searchEngine');
  if (!cookieBgSize) {
    cookieBgSize = "auto";
  }
  if (!cookieBg) {
    cookieBg = "Image URL";
  }
  if (!cookie) {
    cookie = "Google"
  }
  engineName.innerHTML = cookie;
  bgImage.placeholder = cookieBg;
  bgSize.placeholder = cookieBgSize;
  name.placeholder = cookieName;
  spotify.innerHTML = cookieSpotify;
}
function changeEngine(engine) {
  var engineName = document.getElementById('menu');
  engineName.innerHTML = engine;
  document.cookie = "searchEngine=" + engine;
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}
function checkCookie() {
  var cookieEnabled = navigator.cookieEnabled;
  var settings = document.getElementById('main-settings');
  if (cookieEnabled) {
    settings.style.display = "block";
  }
  else {
    settings.style.display = "none";
    plsCookie();
  }
}
function plsCookie() {
  var alert = document.getElementById('cookie-alert');
  alert.style.display = "block";
}
function changeImage() {
  var input = document.getElementById('bgImage').value;
  var mainAlert = document.getElementById('main-alert');
  var body = document.body;

  document.cookie = "background=" + input;
  mainAlert.className = "alert bg-success text-center";
  mainAlert.innerHTML = "Successfully changed the background image";
  mainAlert.style.display = "block";

  if (!input) {
    input = "background.jpg";
  }

  body.style.backgroundImage = `url(${input})`;
}
function changeBgSize(x) {
  var input = document.getElementById('bgSize');
  var value = String(input.value);
  var mainAlert = document.getElementById('main-alert');
  var body = document.body;

  if (x) {
    value = "auto";
  }

  size = value.toLowerCase();
  cookieSize = size.replace("%", " this_is_percent");
  if (!size) {
    size = "auto";
    cookieSize = "auto";
  }
  document.cookie = "bgSize=" + cookieSize;
  mainAlert.className = "alert bg-success text-center";
  mainAlert.innerHTML = "Successfully resized the background";
  mainAlert.style.display = "block";

  body.style.backgroundSize = size;
}
function changeName(x) {
  var input = document.getElementById('name');
  var value = input.value;
  var mainAlert = document.getElementById('main-alert');

  if (x) {
    value = "";
  }

  document.cookie = "name=" + value;
  mainAlert.className = "alert bg-success text-center";
  mainAlert.innerHTML = "Successfully changed your name";
  mainAlert.style.display = "block";
}
function showSpotify(x) {
  var dropdown = document.getElementById('spotifymenu');
  var mainAlert = document.getElementById('main-alert');
  var is_enable;
  if (x == true) {
    dropdown.innerHTML = "Enabled";
    is_enable = "Enabled";
  }

  if (x == false) {
    dropdown.innerHTML = "Disabled";
    is_enable = "Disabled";
  }

  mainAlert.className = "alert bg-success text-center";
  mainAlert.innerHTML = `Successfully ${is_enable} spotify`;
  mainAlert.style.display = "block";

  document.cookie = "spotify=" + is_enable;
}
getFields();
checkCookie();
