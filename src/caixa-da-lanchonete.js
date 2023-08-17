class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        itensTam = itens.lenght;

        if (itensTam == 0) {
            return "Não há itens no carrinho de compra!"
        }else {
            if (metodoDePagamento == 'dinheiro') {
                
            } else if (metodoDePagamento == 'debito') {
                
            } else if (metodoDePagamento == 'credito') {
                
            } else {
                return "Forma de pagamento inválida!";
            };
        };
    }

}

export { CaixaDaLanchonete };
