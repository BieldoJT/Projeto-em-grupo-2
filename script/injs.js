const listaCarrinho = []
const listaDecks = []
let elementosParaEsconder = [$("#cartVazio"), $("#acoesCart"), $("#button")];



/*const cart = $("#cart");*/

$(document).ready(() => {
    let carrinho = $("#produtosCart")
    let iconeAbrirCarrinho = $("#button-shop")
    let iconeFecharCarrinho = $("#fecharCart")
    let totalItens= 0
    let htmlTotalItens = $("#total-itens-valor")
    

    const abrirCarrinho = ()=>{
        $("#cart").css("display", "block")
    }

    iconeAbrirCarrinho.click(() => {
        $("#cart").css("display", "block")
    })
    iconeFecharCarrinho.click(() => {
        $("#cart").css("display", "none")
    })

    const atualizarTotal = ( )=>{ 

    }

    const abreFechaCarrinho = () => {
        if (listaCarrinho.length === 0) {

            $("#cartVazio").removeClass("d-none");
            $("#acoesCart").addClass("d-none");
            $("#button").addClass("d-none");
            $("#totalItensCard").addClass("d-none")
            $(".produtoCart").addClass("d-none")
        }
        else {

            $("#cartVazio").addClass("d-none");
            $("#acoesCart").removeClass("d-none");
            $("#button").removeClass("d-none");
            $("#totalItensCard").removeClass("d-none")
            $(".produtoCart").removeClass("d-none")

        }
    }
    

    const adicionarCarrinho = $(".addCarrinho")
    adicionarCarrinho.each((index, button) => {
        $(button).click(() => {
            const novoItem = criarItem()

            listaCarrinho.push(novoItem);
            carrinho.append(novoItem)
            console.log(listaCarrinho)
            abreFechaCarrinho()
            totalItens+=1
            htmlTotalItens.text(totalItens)
            abrirCarrinho()


        });
    })





    const criarItem = (item = { deck: "Challenger Deck 2020: Flash of Ferocity", valor: 30.00, img: "img/foto deck magic.jpg", qtd: 1 }) => {
        const novoProduto = $("<div />")
        const novoProdutoImagem = $("<img />")
        const novoProdutoInfo = $("<div />")
        const novoProdutoNome = $("<div />")
        const novoProdutoPreco = $("<div />");
        const novoProdutoopcoes = $("<div />");
        const seletorQtd = $("<div />");
        const opcapAdd = $("<span class='addItem me-2 pe-1 border-end '><img src='img/add.png'alt='add'></span>");
        const opcaoMinus = $("<span class='minus ms-2 ps-1 border-start'><img src='img/remove.png'  alt='remove'></span>");
        const removerNovoProduto = $("<div class='remove'><img src='img/recycle-bin.png' alt='lixeira'></div>");
        const qtd = $("<span />");



        novoProduto.addClass("produtoCart my-2 d-flex w-100 h-25 rounded-3");
        novoProdutoImagem.addClass("produtoCart-imagem");
        novoProdutoInfo.addClass("produtoCart-info w-100");
        novoProdutoNome.addClass("produtoNome mt-2");
        novoProdutoPreco.addClass("produtoPreÃ§o mb-1");
        novoProdutoopcoes.addClass("opcoesProduto w-100 mb-2 d-flex justify-content-around");
        seletorQtd.addClass("w-75 border border-1 border-dark text-center rounded-3");
        qtd.addClass("quantidade");




        seletorQtd.append(opcapAdd);
        seletorQtd.append(qtd);
        seletorQtd.append(opcaoMinus);
        novoProdutoopcoes.append(seletorQtd);
        novoProdutoopcoes.append(removerNovoProduto);
        novoProdutoInfo.append(novoProdutoNome);
        novoProdutoInfo.append(novoProdutoPreco);
        novoProdutoInfo.append(novoProdutoopcoes);
        novoProduto.append(novoProdutoImagem);
        novoProduto.append(novoProdutoInfo);


        novoProdutoNome.text(`${item.deck}`);
        novoProdutoPreco.text(`R$  ${item.valor}`);
        novoProdutoImagem.attr("src", `${item.img}`);
        qtd.text(`${item.qtd}`)


        return novoProduto
    }
    console.log(listaCarrinho)


    abreFechaCarrinho()
})