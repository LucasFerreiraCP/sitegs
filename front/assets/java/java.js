window.onload = function() {
  //Abaixo está a função para o menu mobile ser aberto.
  document.querySelector(".menu-mobile").addEventListener("click", function() {
    if (document.querySelector("nav").style.display == 'flex') {
      document.querySelector("nav").style.display = 'none';
    } else {
      document.querySelector("nav").style.display = 'flex';
    }
  });

  //Abaixo está o código para que o plano de fundo mude sozinho ou ao ser clicado nos pontinhos
  //Função para alterar o tempo que o fundo vai atualizar atualmente 5 segundos = 5000
  //Também tem para que mude as letras no plano de fundo.

  // Selecione os elementos relevantes
  const banner = document.querySelector('.banner');
  const pontos = document.querySelectorAll('.pontos');
  const imagensFundo = ['assets/images/bg1.jpg', 'assets/images/bg2.jpg', 'assets/images/bg3.jpg'];
  const frasesPrincipais = ['UM SISTEMA DE ERP COMPLETO', 'TENHA UM SOFTWARE PROFISSIONAL', 'UM SISTEMA DE FRENTE DE CAIXA'];
  const frasesSecundarias = ['PARA MELHORAR SUA EXPERIÊNCIA', 'PARA TER MAIS QUALIDADE ', 'SIMPLIFIQUE SUAS FUNÇÕES'];
  let indiceAtual = 0; // Índice da imagem atual
  let intervaloTempo; // Variável para armazenar o intervalo de tempo

  // Função para atualizar o fundo, o texto do h1 e os pontos ativos
  function atualizarSlide(indice) {
    // Atualize o fundo com base no índice
    banner.style.backgroundImage = `url('${imagensFundo[indice]}')`;

    // Atualize o texto do h1 e do span com base no índice
    const frasePrincipal = document.getElementById('frase-principal');
    const fraseSecundaria = document.getElementById('frase-secundaria');
    frasePrincipal.textContent = frasesPrincipais[indice];
    fraseSecundaria.textContent = frasesSecundarias[indice];

    // Remova a classe 'ativo' de todos os pontos
    pontos.forEach((p) => p.classList.remove('ativo'));

    // Adicione a classe 'ativo' apenas ao ponto correspondente ao índice
    pontos[indice].classList.add('ativo');
  }

  // Função para alternar para o próximo slide
  function alternarSlide() {
    indiceAtual++; // Incrementa o índice

    // Verifica se o índice está fora dos limites dos slides
    if (indiceAtual === imagensFundo.length) {
      indiceAtual = 0; // Volta para o primeiro slide
    }

    // Chama a função para atualizar o fundo, o texto do h1 e os pontos ativos
    atualizarSlide(indiceAtual);
  }

  // Função para iniciar o intervalo de tempo
  function iniciarIntervalo() {
    intervaloTempo = setInterval(alternarSlide, 5000);
  }

  // Função para parar o intervalo de tempo
  function pararIntervalo() {
    clearInterval(intervaloTempo);
  }

  // Adicione um ouvinte de eventos para cada ponto
  pontos.forEach((ponto, index) => {
    ponto.addEventListener('click', () => {
      // Chame a função para atualizar o fundo, o texto do h1 e os pontos ativos
      atualizarSlide(index);

      // Pare o intervalo de tempo atual
      pararIntervalo();

      // Inicie um novo intervalo de tempo
      iniciarIntervalo();
    });
  });

  // Defina o slide inicial para o primeiro índice
  atualizarSlide(indiceAtual);

  // Inicie o intervalo de tempo
  iniciarIntervalo();

  //Abaixo está o código para abrir o modal na tela ao clicar no botão de agendar demonstração.
  const modal = document.getElementById("modal");
  const closeModal = document.querySelector(".close");
  const agendarButton = document.querySelector("a[href='https://api.whatsapp.com/send?phone=5554999668512']");
  const form = document.querySelector("#modal");


  // Abrir o modal ao clicar no botão "Agende uma demonstração"
  agendarButton.addEventListener("click", function(event) {
    event.preventDefault();
    modal.style.display = "block";
  });

  // Código para fechar o modal
  $('.modal-close').click(function() {
    $('#modal').hide();
  });

  // Fechar o modal ao clicar fora da área do modal
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

    // Código para formatar o número de telefone
    $(document).ready(function() {
      $('#phone').inputmask('(99) 99999-9999');
    });


    // Enviar o formulário

document.getElementById("form").addEventListener("click", function() {
  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("phone").value;
  const time = document.getElementById("time").value;

  const data = {
    nome: nome,
    email: email,
    telefone: telefone,
    time: time
  };

  console.log("Enviando formulário...");
  console.log(data);
  fetch("http://localhost/public/index.php", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) {
        console.log("Formulário enviado com sucesso");
      } else {
        console.error("Erro ao enviar o formulário");
      }
    })
    .catch(error => {
      console.error("Erro ao enviar o formulário", error);
    });
});

};
