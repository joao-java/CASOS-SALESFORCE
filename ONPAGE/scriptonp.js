

function mostrarOpcao() {
    const selecao = document.getElementById("chooseOption").value;


    const logistica = document.getElementById("logistica");
    const devolucaoMain = document.getElementById("devolucaoMain");
    const financeiro = document.getElementById("financeiro");
    const renegociacao = document.getElementById("renegociacao");
    const boleto = document.getElementById("boleto");
    const comercial = document.getElementById("comercial");
    const sac = document.querySelector(".main--containerSac");

    const qualidade = document.getElementById("qualidade"); 
    const fertilizanteSais = document.getElementById("fertilizanteSais");
    const fertilizanteLiquidos = document.getElementById("fertilizanteLiquidos");
    const fertilizanteDomi = document.getElementById("fertilizanteDomi");
    const fertilizanteCond = document.getElementById("fertilizanteCond");

    const desacordoPedido = document.getElementById("desacordoPedido");
    
    logistica.style.display = "none";
    devolucaoMain.style.display = "none";
    financeiro.style.display = "none";
    renegociacao.style.display = "none";
    boleto.style.display = "none";
    comercial.style.display = "none";
    console.log(comercial.childNodes[3].value); 
    sac.style.display = "none";
    
    qualidade.style.display = "none";
    fertilizanteSais.style.display = "none";
    fertilizanteLiquidos.style.display = "none";
    fertilizanteDomi.style.display = "none";
    fertilizanteCond.style.display = "none";
    
    desacordoPedido.style.display = "none"
    
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
            qualidade.style.display = "block"
            if (qualidade.childNodes[3].value === 'qualidade1') {
                fertilizanteSais.style.display = "block"
            }else if (qualidade.childNodes[3].value === 'qualidade2'){
                fertilizanteLiquidos.style.display = "block"
            }else if (qualidade.childNodes[3].value === 'qualidade3'){
                fertilizanteDomi.style.display = "block"
            }else if (qualidade.childNodes[3].value === 'qualidade4'){
                fertilizanteCond.style.display = "block"
            }
            break;
        
        case '4':
            comercial.style.display = "block"
            console.log(comercial.childNodes[3].value);
            if (comercial.childNodes[3].value === 'comercial1') {
                desacordoPedido.style.display = "block"
                desacordo.style.display = "none"
            }
            break;
        
        case '5':
            sac.style.display = "block";
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
document.getElementById("comercialS").addEventListener("change", mostrarOpcao);
document.getElementById("qualidadeS").addEventListener("change", mostrarOpcao);

// Chame a função inicialmente para configurar o formulário
mostrarOpcao();
