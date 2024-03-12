const botoes = document.querySelectorAll(".botao");

for ( let i = 0 <botoes.length; j++){
    botoes[i].onclick = function(){
        for (let j= 0; < botoes.length; jj++){
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo")
    }
}