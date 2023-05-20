

const inputEmail = document.querySelector('#idEmail');
const inputSenha = document.querySelector('#idPass');

inputEmail.addEventListener('keyup', () => {

    const lblEmail = document.querySelector('label[for="idEmail"]');
    
    if(inputEmail.value.length < 5 ){
        inputEmail.setAttribute('style', 'outline-color:#ff0000;')
        lblEmail.setAttribute('style', 'color:#ff0000;')
    }else{
        inputEmail.setAttribute('style', 'outline-color:#00ff00;')
        lblEmail.setAttribute('style', 'color:#00ff00;')
    }
});

const eyePass = document.querySelector('.fa');

eyePass.addEventListener('click', () => {
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text');
        eyePass.setAttribute("class", "fa fa-eye-slash")
    }else{
        inputSenha.setAttribute('type', 'password');
        eyePass.setAttribute("class", "fa fa-eye")
    }
});

const botaoSubmit = document.querySelector("#btnSubmit");

// Objeto
const usuario = {
    emailUsuario: '',
    senhaUsuario: '',
    nomeCompleto: ''
};

// Lista de objetos
let listaDeUsuarios = [
    {
        emailUsuario: 'nat@a',
        senhaUsuario: 'nat',
        nomeCompleto: 'Nathaly'
    },
    {
        emailUsuario: '',
        senhaUsuario: '',
        nomeCompleto: 'José'
    },
    {
        emailUsuario: 'ma@a',
        senhaUsuario: 'ma',
        nomeCompleto: 'Maria'
    },
    {
        emailUsuario: '',
        senhaUsuario: '',
        nomeCompleto: 'Henry'
    },
    {
        emailUsuario: '',
        senhaUsuario: '',
        nomeCompleto: 'Jonh'
    }
];
// listaDeUsuarios.push(usuario);

botaoSubmit.addEventListener('click', () => {

    // Objeto de validação
    const userValidado = {
        emailUsuarioValidado: inputEmail.value,
        senhaUsuarioValidado: inputSenha.value
    }

    // Criando uma iteração com a lista de objetos para realizar 
    // a validação com o usuarioValidado

    try{
        listaDeUsuarios.forEach((usuario) => {
            // Realizando a validação
            // Comparando cada objeto da lsita com o objeto montado 
            // com os dados que vieram do formulário
            if(userValidado.emailUsuarioValidado == usuario.emailUsuario 
                && userValidado.senhaUsuarioValidado == usuario.senhaUsuario){
                    userValidado.senhaUsuarioValidado = usuario.senhaUsuario;
                    userValidado.emailUsuarioValidado = usuario.emailUsuario;
                    throw 'Validado';
            }
        });

        throw 'Senha ou nome de usuário inválido';

    }catch(msg){
        console.log(msg);
        const msgStatus = document.querySelector('#msgStatus');
        
        if(msg == 'Validado'){
            msgStatus.setAttribute('style', 'color:#00ff00');
            msgStatus.innerHTML = '<span><strong>Login efetuado com sucesso</strong></span>';

            // Redirec
            setTimeout(() => {
                window.location.href = './home.html'
            }, 2000);
            
        }else{
            msgStatus.setAttribute('style', 'color:#ff0000');
            msgStatus.innerHTML = '<span><strong>Login não efetuado com sucesso</strong></span>';
            
        }

    }

});