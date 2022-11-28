const btnFlecha = document.getElementById("btnFlechaMenu") as HTMLImageElement;
const logoHidden = document.getElementById("logoHidden") as HTMLElement

btnFlecha.addEventListener("click", function () {
    if (logoHidden.style.display === 'none') {
        logoHidden.style.display = 'block';
    }
    else {
        logoHidden.style.display = 'none';
    }
});

