const personagem = {
  nome: "Aventureiro",
  ataque: 10,
  defesa: 5
};

const fases = [
  { nome: "Floresta dos Goblins", descricao: "Goblins emboscados bloqueiam a trilha.", reqAtk: 15, reqDef: 10 },
  { nome: "Caverna das Aranhas", descricao: "Aranhas gigantes te atacam no escuro.", reqAtk: 20, reqDef: 16 },
  { nome: "Montanha do Dragão", descricao: "Um dragão jovem guarda a passagem.", reqAtk: 30, reqDef: 21 },
  { nome: "Castelo do Lich", descricao: "Magos necromantes te cercam.", reqAtk: 40, reqDef: 30 },
  { nome: "Trono Sombrio", descricao: "O Rei das Trevas espera por você.", reqAtk: 55, reqDef: 39 }
];

function iniciarJogo() {
  console.log("=== BEM-VINDO AO RPG DE ATRIBUTOS ===");
  
  let nomeInput = prompt("Digite o nome do seu personagem:");
  if (nomeInput && nomeInput.trim() !== "") {
    personagem.nome = nomeInput;
  }

  for (let i = 0; i < fases.length; i++) {
    let faseAtual = fases[i];
    let venceuFase = false;

    while (!venceuFase) {
      console.log(`\n--- FASE ${i + 1}: ${faseAtual.nome} ---`);
      console.log(faseAtual.descricao);
      console.log(`Requisitos do desafio: Ataque >= ${faseAtual.reqAtk} | Defesa >= ${faseAtual.reqDef}`);
      console.log(`Seus atributos atuais: Ataque = ${personagem.ataque}, Defesa = ${personagem.defesa}`);

      let acao = prompt("O que deseja fazer?\n1. Tentar vencer o desafio\n2. Melhorar atributos\n3. Sair do jogo");

      if (acao === "3" || !acao) {
        alert("Jogo encerrado.");
        return; 
      } 
      else if (acao === "2") {
        let tipo = prompt("Melhorar qual atributo?\n1. Ataque (+5)\n2. Defesa (+3)\n3. Voltar ao menu");
        
        if (tipo === "1") {
          personagem.ataque += 5;
          console.log(`\n⬆️ Ataque aumentado para ${personagem.ataque}`);
        } 
        else if (tipo === "2") {
          personagem.defesa += 3;
          console.log(`\n⬆️ Defesa aumentada para ${personagem.defesa}`);
        }
      } 
      else if (acao === "1") {
        if (personagem.ataque >= faseAtual.reqAtk && personagem.defesa >= faseAtual.reqDef) {
          console.log(`\n✅ VITÓRIA! Você venceu ${faseAtual.nome} com seus atributos atuais.`);
          alert(`Parabéns, ${personagem.nome}! Você superou ${faseAtual.nome}.`);
          venceuFase = true; 
        } 
        else {
          let faltaAtk = Math.max(0, faseAtual.reqAtk - personagem.ataque);
          let faltaDef = Math.max(0, faseAtual.reqDef - personagem.defesa);

          console.log(`\n❌ VOCÊ PERDEU! Seus atributos são insuficientes para o desafio.`);
          if (faltaAtk > 0) console.log(`Faltam ${faltaAtk} de Ataque.`);
          if (faltaDef > 0) console.log(`Faltam ${faltaDef} de Defesa.`);

          alert(`Você perdeu! Faltam ${faltaAtk} de Ataque e ${faltaDef} de Defesa para vencer esta fase.\nMelhore seus atributos ou tente novamente.`);
        }
      } 
      else {
        alert("Opção inválida. Digite 1, 2 ou 3.");
      }
    } 
  }

  console.log("\n🏆 PARABÉNS! Você completou todas as 5 fases e venceu o jogo!");
  alert(`Parabéns, ${personagem.nome}! Você é um verdadeiro herói!`);
}

iniciarJogo();
