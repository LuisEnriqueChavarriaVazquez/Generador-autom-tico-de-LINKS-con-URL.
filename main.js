function abrirEnPestana(url) {
    var a = document.createElement("a");
    a.target = "_blank";
    a.href = url;
    a.click();
}

var url = "http://dapalan.com/DbLM";

var intervalo = setInterval(function() {
    abrirEnPestana(url);
}, 30000);