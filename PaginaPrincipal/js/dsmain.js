var btnNav = document.getElementById("btnNav");
var divHidden = document.getElementById("divHidden");
btnNav.addEventListener("click", function () {
    if (divHidden.style.display === 'none') {
        divHidden.style.display = 'flex';
    }
    else {
        divHidden.style.display = 'none';
    }
});
