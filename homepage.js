function clock() {
  var good;
  var now = new Date();
  var thour = now.getHours();
  var hour = now.getHours();
  var min = now.getMinutes();
  var name = " " + getCookie('name');
  if (name == " ") {
    name = "";
  }
  var mid = "PM";
  if (min < 10) {
    min = "0" + min;
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour == 0) {
    hour = 12;
  }
  if (thour < 12) {
    mid = "AM";
  }

  if (thour < 12) {
    good = "Good Morning";
  }
  else if (thour < 18) {
    good = "Good Afternoon";
  }
  else {
    good = "Good Evening";
  }

  good = good + name

  document.getElementById('welcome').innerHTML = good + ", " + "It is currently " + hour+':'+min + " "+ mid;
  setTimeout(clock, 1000);
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
function showSpotify() {
  var greet = document.getElementById('welcome').innerHTML;
  var dive = document.getElementById('spotiframe');
  var cookie = getCookie('spotify');
  if (!cookie) {
    enabled = "Enabled";
  }
  if (cookie == "Disabled") {
    dive.style.display = "none";
    return;
  }
  var src;
  if (greet.includes('Good Morning')) {
    src = "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX2MyUCsl25eb";
  }
  if (greet.includes('Good Afternoon')) {
    src = "https://open.spotify.com/embed/user/117230904/playlist/6IomSg1c2rq7OmDrbpvFKs";
  }
  if (greet.includes('Good Evening')) {
    src = "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DXaX7xgI3f7y8";
  }
  dive.src = src;
  setTimeout(showSpotify, 1000 * 60 * 60);

}
function useEngine() {
  var engine = getCookie('searchEngine');

  var action = document.getElementById('searchform');
  var placeholder = document.getElementById('searchinput');
  var argument = document.getElementById('searchinput');

  if (!engine) {
    engine = "Google";
  }

  if (engine == "Google") {
    action.action = "https://www.google.com/search";
    placeholder.placeholder = "Search on Google...";
  }
  else if (engine == "DuckDuckGo") {
    action.action = "https://www.duckduckgo.com/";
    placeholder.placeholder = "Search on DuckDuckGo...";
  }
  else if (engine == "Bing") {
    action.action = "https://www.bing.com/";
    placeholder.placeholder = "Search on Bing...";
  }
  else if (engine == "Yahoo") {
    action.action = "https://search.yahoo.com/";
    placeholder.placeholder = "Search on Yahoo...";
    argument.name = "p";
  }
}
useEngine();
clock();
showSpotify();
