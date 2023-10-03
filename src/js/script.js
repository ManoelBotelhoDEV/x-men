// passando o mouse por cima do personagem adicionamos a borda azul,

// mostrar a imagem e o testo grande da imagem selecionada 

// passo 1 - pegando os personagem no js para verificar quando o usuario passa o mouse por cima
// busca por todos os personagens com o  querySelectorAll
const personagens=document.querySelectorAll(".personagem")
// console.log(personagens)

// passo 2 - adicionando a classe selecionado no personagem que o usuario passa o cursor do mouse
// forEach - para cada 
personagens.forEach((personagem)=>{
  personagem.addEventListener('mouseenter',()=>{
  
// para funcionar no celular 

if(window.innerWidth<450){
    window.scrollTo({top:0,behavior:'smooth'})
}

// passo 3 tirar a seleção do personagem anterior
// querySelector seleciona so um elemento
const personagemSelecionado=document.querySelector('.selecionado')
 personagemSelecionado.classList.remove('selecionado')

 //classList lista de classe 
    //.add('selecionado')- coloca o fundo azul na figura ao passar o mouse
    personagem.classList.add('selecionado')

// passar o mouse em cima da figura peguena e trocar a imagem e descrição da imagem grande

// pegando o elemento do personagem grande e adicionando informações nele
// querySelector- selecionando imagem
const personagemGrande= document.querySelector('.personagem-grande')
// console.log(personagemGrande)
// alterar a imagem grande
const idPersonagem=personagem.attributes.id.value;
personagemGrande.src=`./src/imagens/card-${idPersonagem}.png`

// alterar o nome do personagem
const nomePersonagem= document.getElementById('nome-personagem')
// innerText mudar o texto
// getAttribute pegar atributo
nomePersonagem.innerText=personagem.getAttribute('data-name')

// alterar a descrição do personagem
const descricaoPersonagem= document.getElementById('descricao')
descricaoPersonagem.innerText=personagem.getAttribute('data-description')
})

})