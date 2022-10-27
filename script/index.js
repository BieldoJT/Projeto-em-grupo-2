 /* And here's the magic! EQCSS.js required 
 @element html, body and (min-scroll-y: 100vh) {
    header {
      position: fixed;
      top: 0;
      background: white;
      box-shadow: rgba(0,0,0,.05) 0 3px 15px;
    }
  }*/

  $(document).ready(function(){});

var fixo = $(".header-fixed"),cabecalho = $(".header"),offset = $(window).height()

function scroll(){
    var topoDocumento = $(document).scrollTop();
    console.log(topoDocumento)
    var fixacao = $("header").offset().top;
    console.log(fixacao)
    if (topoDocumento > fixacao){
        cabecalho.css({
        "position":"fixed",
        "box-shadow": "rgba(0,0,0,.05) 0 3px 15px"})
    }
    else{
        cabecalho.css({
        "position": "absolute",
        })
    }
    
}
scroll();

$(document).scroll(function(){
    scroll()
})

