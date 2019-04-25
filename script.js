jQuery(document).ready(function(){
    Buscar();
})

function Buscar(){
    $('#pesquisar').click(function(){
        PesquisarPK();
        
    })
}

function PesquisarPK(){
    var pokemon = $('#valorbusca').val();
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + pokemon,
        method: "GET"
    })
    .then(function(PkResult){
        $('#pokemon').text(PkResult.name)
        $('#numero').text(PkResult.id)
        $('#impokemon').fadeOut(1)
        $('#impokemon').fadeIn(2000)
        $('#impokemon').attr('src', PkResult.sprites.front_default)
        $('#tipo').text('')
        $('#golpes').text('')
        for(var i = 0; i< PkResult.types.length; i++) {
            $('#tipo').append('<li>' + PkResult.types[i].type.name + '</li>')
        }        
        for(var x = 0; x< PkResult.moves.length; x++) {
            $('#golpes').append('<li>' + PkResult.moves[x].move.name + '</li>')
        }
        $('#dexrigth, #teste').fadeOut(1)
        $('#dexrigth, #teste').fadeIn(1000)
        
        PesquisarLocal(PkResult.location_area_encounters);
    })
    .fail(function(error){
        console.log(error)
    })
}

function PesquisarLocal(url){
    $.ajax({
        url:url,
        method: "GET"
    })
    .then(function(PkLocaliza){
        $('#localizacao').text('')
        for(var y = 0; y < PkLocaliza.length; y++) {
            $('#localizacao').append('<li>' + PkLocaliza[y].location_area.name + '</li>')
        }
    })
    .fail(function(error){
        console.log(error)
    })
}