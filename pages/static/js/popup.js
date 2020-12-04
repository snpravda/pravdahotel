
function entry() {
   document.getElementById('entry').style.display = "block";
}

window.onclick = function (e) {
  if(e.target == document.getElementById('entry')){
    document.getElementById('entry').style.display = "none";
  }
}
