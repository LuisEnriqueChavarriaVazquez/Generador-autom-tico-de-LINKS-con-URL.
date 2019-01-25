# Generador automático de LINKS con URL.

### Descripción de código / code's description.

> Basicamente este programa lo que hace es generar un link el cual se presiona de manera automatica en la dirección que sea indicada en js.
>
> This program makes possible to generate a link and then get it opened automaticly to any link or URL that you've indicated before.

### Codigo de js. / JavaScript's code.

```javascript
// Creacion de link.
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
```

