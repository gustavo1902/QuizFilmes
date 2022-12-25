document.getElementById('quiz-form').addEventListener('submit', function(event) {
    // Previne o envio do formulário
    event.preventDefault();
  
    // Armazena o número de perguntas corretas
    let respostasCorretas = 0;
  
    // Verifica se a resposta da primeira pergunta está correta
    if (document.querySelector('input[name="pergunta1"]:checked').value === 'opcao4') {
      respostasCorretas++;
    }
  
    // Verifica se as respostas da segunda pergunta estão corretas
    let pergunta2 = document.getElementsByName('pergunta2');
    if (pergunta2[0].checked && pergunta2[1].checked && !pergunta2[2].checked && pergunta2[3].checked) {
      respostasCorretas++;
    }
  
    // Exibe o resultado final
    alert(`Você acertou ${respostasCorretas} de 2 perguntas.`);
  });
  
  