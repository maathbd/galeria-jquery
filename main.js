$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    });


    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-nova-imagem').val();
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoNovaImagem}" >`).appendTo(novoItem);

        $(`
            <div class="overlay-imagemlink">
                <a href="${enderecoNovaImagem}" title="Ver imagem em tamanho original" target="_blank">
                    Ver imagem em tamanho original
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(500);
        $('#endereco-nova-imagem').val('');
    })
})