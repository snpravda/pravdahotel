
function reply_mousOver(clicked_id) {
    document.getElementById(clicked_id).src = "/static/img/" + clicked_id + ".jpg";
}

function reply_mouseOut(clicked_id) {
    document.getElementById(clicked_id).src = "/static/img/" + clicked_id + ".png"
}


function btn(clicked_id) {
    popup = document.getElementById("mypopup");
    popup.style.display = "block";
    document.getElementById('img').src = "/static/img/" + clicked_id + ".png"
    if (clicked_id == 'r1') {
        document.getElementById('order').innerHTML = "Покращений двомісний номер з 1 ліжком або 2 окремими ліжками";
        document.getElementById('description').innerHTML = "У числі зручностей номера з ламінатом на підлозі 1 двоспальне або 2 односпальні ліжка, диван, письмовий стіл, балкон з видом на місто, кондиціонер і 42-дюймовий ЖК-телевізор зі світлодіодним підсвічуванням. У власній ванній кімнаті з душем надаються фен, тапочки і халати. Також в розпорядженні гостей сейф для ноутбука, вибір подушок, міні-бар, 2 пляшки води по 0,5 літра і приналежності для чаю / кави, включаючи електричний чайник.";
    } else if (clicked_id == 'r2') {
        document.getElementById('order').innerHTML = "Покращений сімейний номер (для 3 дорослих)";
        document.getElementById('description').innerHTML = "У числі зручностей номера Делюкс з ламінатом на підлозі диван, письмовий стіл, балкон з видом на море, кондиціонер і 42-дюймовий ЖК-телевізор зі світлодіодним підсвічуванням. У власній ванній кімнаті з душем надаються фен, тапочки і халати. Також в розпорядженні гостей сейф для ноутбука, вибір подушок, міні-бар, 2 пляшки води по 0,5 літра і приналежності для чаю / кави, включаючи електричний чайник.";
    } else {
        document.getElementById('order').innerHTML = "Номер люкс (до 6 осіб)";
        document.getElementById('description').innerHTML = "Люкс площею 235 кв. м. Гості цього люкса можуть безкоштовно користуватися комфортабельними павільйонами біля басейну. Потрібно попереднє бронювання павільйонів.";
    }
    document.getElementById('submit').setAttribute('name', clicked_id);
};

function cross() {
    popup.style.display = "none";

};
window.onclick = function (e) {
    if (e.target == popup) {
        popup.style.display = "none";
    }
}

function draft() {
    document.getElementById('preview').style.display = "block";
    document.getElementById('roomDetails').style.display = "none";
}

//  else {
//   document.getElementById('roomDetails').style.display = "block";
//   document.getElementById('preview').style.display = "none";
// }

function rooms() {
    document.getElementById('roomDetails').style.display = "flex";
    document.getElementById('preview').style.display = "none";
}



function validation() {
    let dep = document.forms["form"]["departure"];
    let arr = document.forms["form"]["arrive"];
    let today = todays_date();
    arr.setCustomValidity("");
    dep.setCustomValidity("");
    // let submit = true
    if (arr.value < today){
        arr.setCustomValidity("Невірна дата заїзду!");
        return;
    }
    else if (dep.value < today) {
        dep.setCustomValidity("Невірна дата виїзду!");
        return;
    }
    else if (arr.value > dep.value){
        arr.setCustomValidity("Дата заїзду не може бути пізніше дати виїзду!");
        return;
    }
    // else {
    //     arr.setCustomValidity("");
    //     dep.setCustomValidity("");
    // }

    document.forms["form"].submit()

    // if (submit){
    //     document.forms["form"].submit()
    // }

}

function todays_date() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    // document.document.forms["form"]["departure"].min = today;
    // document.document.forms["form"]["arrive"].min = today;
    return today
}

function checkValid(){
    let dep = document.forms["form"]["departure"];
    let arr = document.forms["form"]["arrive"];
    arr.checkValidity()
    dep.checkValidity()

}
