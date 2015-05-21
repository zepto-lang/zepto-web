var displayNav = function() {
  var el = document.getElementById('nav').style;
  if (el.width == '200px') { el.width = '0'; el.padding = '0'; }
  else { el.width = '200px'; el.padding = '0.8em'; }
}
