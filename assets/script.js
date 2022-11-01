let form = document.querySelector('form');
let campos = document.querySelectorAll('.dados');
let msg = document.querySelectorAll('.alerta');
let emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function setError(index) {
    campos[index].style.border = '2px solid red';
    msg[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    msg[index].style.display = 'none';
}

function validarNome() {
    if(campos[0].value.length < 2) {
        setError(0);
    } else {
        removeError(0);
    }
}

function validarSobreNome() {
    if(campos[1].value.length < 2) {
        setError(1);
    } else {
        removeError(1);
    }
}

function validarEmail() {
    if(!emailRegex.test(campos[2].value)) {
        setError(2);
    } else {
        removeError(2);
    }
}

function validarSenha() {
    if(campos[3].value.length < 4 || campos[3].value.length > 8) {
        setError(3);
    } else {
        removeError(3);
    }
}

function limparCampos() {
    campos[0].value = '';
    campos[1].value = '';
    campos[2].value = '';
    campos[3].value = '';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validarNome();
    validarSobreNome();
    validarEmail();
    validarSenha();
    limparCampos();
});


