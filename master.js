function loadBackground () {
  var cookie = getCookie('background');
  var size = getCookie('bgSize');

  size = size.replace(" this_is_percent", "%")

  if (!size) {
    size = "auto";
  }
  if (!cookie) {
    cookie = "background.jpg";
  }
  document.body.style.backgroundImage = `url(${cookie})`;
  document.body.style.backgroundSize = size;
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
loadBackground();
