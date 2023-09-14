function mostrarOpcao() {
    const selecao = document.getElementById("chooseOption").value;


    const logistica = document.getElementById("logistica");
    const devolucaoMain = document.getElementById("devolucaoMain");
    const financeiro = document.getElementById("financeiro");
    const renegociacao = document.getElementById("renegociacao");
    const boleto = document.getElementById("boleto");
    const qualidade = document.getElementById("qualidade");
    const comercial = document.getElementById("comercial");
    
    logistica.style.display = "none";
    devolucaoMain.style.display = "none";
    financeiro.style.display = "none";
    renegociacao.style.display = "none";
    boleto.style.display = "none";
    qualidade.style.display = "none";
    comercial.style.display = "none";
    
    console.log(selecao)
    switch (selecao) {
        case '1':
            logistica.style.display = "block";
            if (logistica.childNodes[3].value === 'Logistica1') {
                devolucaoMain.style.display ='block';
            }
            
            break;
    
        case '2':
            financeiro.style.display = "block";
            if (financeiro.childNodes[3].value === 'financeiro2') {
                renegociacao.style.display = 'block';
            }else if (financeiro.childNodes[3].value === 'financeiro3'){
                boleto.style.display = 'block';
            }
            break;

        case '3':

            break;
        
        case '4':

            break;
        
        default:
            break;
    }
}

    
// Função para mostrar ou ocultar os campos de seleção de carros e motos com base na seleção principal


// Adicione um ouvinte de evento para chamar a função quando a seleção mudar no campo principal
document.getElementById("chooseOption").addEventListener("change", mostrarOpcao);
document.getElementById("logisticaS").addEventListener("change", mostrarOpcao);
document.getElementById("devolucaoS").addEventListener("change", mostrarOpcao);
document.getElementById("financeiroS").addEventListener("change", mostrarOpcao);

// Chame a função inicialmente para configurar o formulário
mostrarOpcao();
