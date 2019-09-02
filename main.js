const form = document.getElementById('form');

const xyInput = document.getElementById('xy');
const dniInput = document.getElementById('dni');
const zInput = document.getElementById('z');

const successAlert = document.getElementById('successAlert');
const errorAlert = document.getElementById('errorAlert');

const arregloMultiplicador = [10, 0, 3, 4, 21, 24, 25, 24, 21, 16]

form.addEventListener('submit', event => {
    event.preventDefault();
    let xy = parseInt(xyInput.value);
    let dni = parseInt(dniInput.value);
    let z = parseInt(zInput.value);

    let cuil = `${xy}${dni}${z}`
    if(validarCuil(cuil)) {
        successAlert.style.display = 'block';
        errorAlert.style.display = 'none';
    } else {
        errorAlert.style.display = 'block';
        successAlert.style.display = 'none'
    }
})

form.addEventListener('reset', event => {
    successAlert.style.display = 'none'
    errorAlert.style.display = 'none'
});


function validarCuil(cuit) {
    if (cuit.length != 11) {
        return false;
    }

    let acumulado = 0;
    let digitos = cuit.split("");
    let digito = digitos.pop();

    for (let i = 0; i < digitos.length; i++) {
        acumulado += digitos[9 - i] * (2 + (i % 6));
    }

    let verif = 11 - (acumulado % 11);
    if (verif == 11) {
        verif = 0;
    }

    return digito == verif;
}