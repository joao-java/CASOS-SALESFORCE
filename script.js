function mostrarOpcao() {
    const selecao = document.getElementById("chooseOption").value;

    const logistica = document.getElementById("logistica");
    const devolucaoMain = document.getElementById("devolucaoMain");
    const MaterialAvariadoMain = document.getElementById("MaterialAvariadoMain");
    
    logistica.style.display = "none";
    devolucaoMain.style.display = "none";
    MaterialAvariadoMain.style.display = "none";

    
    switch (selecao) {
        case '1':
            logistica.style.display = "block";
            console.log(logistica.childNodes[3].value)
            if (logistica.childNodes[3].value === 'Logistica1') {
                devolucaoMain.style.display ='block';
                console.log(devolucaoMain.childNodes[3].value)

            }
            break;
    
        case '2':

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

// Chame a função inicialmente para configurar o formulário
mostrarOpcao();
