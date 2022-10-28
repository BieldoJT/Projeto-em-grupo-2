const listaCarrinho = []
const listaDecks = [{ deck: "Challenger Deck 2022: Rakdos Vampires", valor: 28.00, img: "img/decks/deck1.jpg", qtd: 1 },{ deck: "Challenger Deck 2022: Gruul Stompy", valor: 38.00, img: "img/decks/deck2.jpg", qtd: 1 },{ deck: "Challenger Deck 2022: Mono White Aggro", valor: 35.00, img: "img/decks/deck3.jpg", qtd: 1 },{ deck: "Challenger Deck 2022: Dimir Control", valor: 40.00, img: "img/decks/deck4.jpg", qtd: 1 },{ deck: "Challenger Deck 2021: Azorius Control", valor: 38.00, img: "img/decks/deck5.jpg", qtd: 1 },{ deck: "Challenger Deck 2021: Dimir Rogues", valor: 22.00, img: "img/decks/deck6.jpg", qtd: 1 },{ deck: "Challenger Deck 2021: Mono Green Stompy", valor: 25.00, img: "img/decks/deck7.jpg", qtd: 1 },{ deck: "Challenger Deck 2020: Allied Fires", valor: 28.00, img: "img/decks/deck8.jpg", qtd: 1 },{ deck: "Challenger Deck 2020: Flash of Ferocity", valor: 20.00, img: "img/decks/deck9.jpg", qtd: 1 },{ deck: "Challenger Deck 2020: Final Adventure", valor: 40.00, img: "img/decks/deck10.jpg", qtd: 1 },{ deck: "Challenger Deck 2020: Cavalcade Charge", valor: 22.00, img: "img/decks/deck11.jpg", qtd: 1 },{ deck: "Challenger Deck 2019: Arcane Tempo", valor: 48.00, img: "img/decks/deck12.jpg", qtd: 1 }]


let elementosParaEsconder = [$("#cartVazio"), $("#acoesCart"), $("#button")];



/*const cart = $("#cart");*/

$(document).ready(() => {
    let carrinho = $("#produtosCart")
    let iconeAbrirCarrinho = $("#button-shop")
    let iconeFecharCarrinho = $("#fecharCart")
    let totalItens= 0
    let htmlTotalItens = $("#total-itens-valor")
    let totalPreçoTexto = $("#preçoTotal")
    let totalPreço = 0
    

    const abrirCarrinho = ()=>{
        $("#cart").css("display", "block")
    }

    iconeAbrirCarrinho.click(() => {
        $("#cart").css("display", "block")
    })
    iconeFecharCarrinho.click(() => {
        $("#cart").css("display", "none")
    })


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
            console.log(index)
            const item = listaDecks[index]
            const novoItem = criarItem(item)
            listaCarrinho.push(novoItem);
           
            const preço = listaDecks[index].valor
            totalPreço += preço
            totalPreçoTexto.text(`R$ ${totalPreço},00`)
            carrinho.append(novoItem)
            abreFechaCarrinho()
            totalItens+=1
            htmlTotalItens.text(totalItens)
            abrirCarrinho()
            
        });
    })

    const removerCarrinho = $(".remove")
    removerCarrinho.each((index,button)=>{
        $(button).click(()=>{
            console.log(index)
            if(index>-1){
                listaCarrinho.splice(index,1)
            }
            
        })
    })





    const criarItem = (item) => {
        const novoProduto = $("<div />")
        const novoProdutoImagem = $("<img />")
        const novoProdutoInfo = $("<div />")
        const novoProdutoNome = $("<div />")
        const novoProdutoPreco = $("<div />");
        const removerNovoProduto = $("<div class='remove d-flex justify-content-around'><img src='img/recycle-bin.png' alt='lixeira'></div>");
        



        novoProduto.addClass("produtoCart my-2 d-flex w-100 h-25 rounded-3");
        novoProdutoImagem.addClass("produtoCart-imagem");
        novoProdutoInfo.addClass("produtoCart-info w-100");
        novoProdutoNome.addClass("produtoNome mt-2");
        novoProdutoPreco.addClass("produtoPreço mb-1");
     
        




        
        ;
        novoProdutoInfo.append(novoProdutoNome);
        novoProdutoInfo.append(novoProdutoPreco);
        novoProdutoInfo.append(removerNovoProduto)
        novoProduto.append(novoProdutoImagem);
        novoProduto.append(novoProdutoInfo);


        novoProdutoNome.text(`${item.deck}`);
        novoProdutoPreco.text(`R$  ${item.valor}`);
        novoProdutoImagem.attr("src", `${item.img}`);


        return novoProduto
    }
    console.log(listaCarrinho)


    abreFechaCarrinho()
})





