// var btnContainer = document.getElementById("navgal");
//
// var btns = btnContainer.getElementsByClassName("btn");
//
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
function hotel( ){
  h1 = document.getElementById('h1');
  h2 = document.getElementById('h2');
  h3 = document.getElementById('h3');

  h1.setAttribute('src', "{% static 'img/1h.jpg' %}");
  h2.setAttribute('src', "{% static 'img/2h.jpg' %}");
  h3.setAttribute('src', "{% static 'img/3h.jpg' %}");

}
function aquapark(){

 h1.setAttribute('src', "{% static 'img/aq1.jpg' %}")
 h2.setAttribute('src', "{% static 'img/aq2.jpg' %}")
 h3.setAttribute('src', "{% static 'img/aq3.jpg' %}")
}
function rest(){


  h1.setAttribute('src', "{% static 'img/re1.jpg' %}")
  h2.setAttribute('src', "{% static 'img/re2.jpg' %}")
  h3.setAttribute('src', "{% static 'img/re3.jpg' %}")
}
function spa(){

  h1.setAttribute('src', "{% static 'img/spa1.jpg' %}")
  h2.setAttribute('src', "{% static 'img/spa2.jpg' %}")
  h3.setAttribute('src', "{% static 'img/spa3.jpg' %}")
}
