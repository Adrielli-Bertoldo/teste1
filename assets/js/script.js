const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener('submit', function(event) {
  
    event.preventDefault();
  
    const campoNome = document.querySelector('#name');
    const txtNome = document.querySelector('#txtNome');
  
    if (campoNome.value.length < 3) {
      txtNome.innerHTML = 'O Nome deve ter no minimo 3 caracteres.';
      campoNome.focus();
      return;
    }else{
      txtNome.innerHTML = '';
    }
  
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');
  
    if (!campoEmail.value.match(emailRegex)) {
      txtEmail.innerHTML = 'Digite um E-mail válido.';
      campoEmail.focus();
      return;
    }else{
      txtEmail.innerHTML = '';
    }
  
    const campoSubject = document.querySelector('#subject');
    const txtSubject = document.querySelector('#txtSubject');
  
    if (campoSubject.value.length < 3) {
      txtSubject.innerHTML = 'O Assunto deve ter no minimo 3 caracteres.';
      campoSubject.focus();
      return;
    }else{
      txtSubject.innerHTML = '';
    }

    const campoMessage = document.querySelector('#message');

    window.alert("Formulário Enviado com Sucesso!");
  
    campoNome.value = ''
    campoEmail.value = ''
    campoSubject.value = ''
    campoMessage.value = ''

    /* Atribui uma função para o evento Click do elemento 'botao_clique' */
botao_click.addEventListener("click", () => {
  alert("O botão foi clicado!");
});

/* Atribui uma função para o evento Mouse Over do elemento 'botao_over' */ 
botao_over.addEventListener("mouseover", () => {
  alert("O mouse passou sobre o botão!");
});

  });