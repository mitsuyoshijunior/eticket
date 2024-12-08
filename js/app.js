function comprar() {
    let quantidade = parseInt(document.getElementById('qtd').value)

    if (!quantidade || quantidade <= 0) {
        alert("Preencha uma quantidade válida")
        return
    }

    comprarAssento(quantidade)


    document.getElementById('qtd').value = ''

}

function comprarAssento(x){
    let ingresso = document.getElementById('tipo-ingresso').value
    let qtdAssento = parseInt(document.getElementById(`qtd-${ingresso}`).textContent)

    if(x > qtdAssento) {
        alert("Quantidade indisponível.")
    } else {
        qtdAssento = qtdAssento - x
        document.getElementById(`qtd-${ingresso}`).textContent = qtdAssento
        alert("Compra realizada com sucesso!")
    }
}
