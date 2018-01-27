$('#navbar').on('show.bs.collapse', function(){
    $('.topCasaFina-banner').css('transform', 'translate(-50%, 30%)');
});


$('#navbar').on('hide.bs.collapse', function(){
    $('.topCasaFina-banner').css('transform', 'translate(-50%, -50%)');
});;