function mostrarAba(aba) {
    var tituloPagina = document.getElementById('titulo-login');
    var btnImg = document.getElementById('btn-pginicial');
    
    if (aba === 'login') {
        document.getElementById('matricula').style.display = 'none';
        document.getElementById('login').style.display = 'block';
        tituloPagina.textContent = 'Login';
        btnImg.style.display = 'none'; 
    } 
    else {
        document.getElementById('login').style.display = 'none';
        document.getElementById('matricula').style.display = 'block';
        tituloPagina.textContent = 'Faça Sua Matrícula';
        btnImg.style.display = 'block';
    }
}
