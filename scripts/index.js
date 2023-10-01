function msg() {
    $("#mensagem").addClass('ver');
    setTimeout(function () { $("#mensagem").removeClass('ver'); }, 7000);
};

$('footer-coluna li a').click(function(event) {
  event.preventDefault();
});
