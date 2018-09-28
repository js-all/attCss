var style = document.createElement('style');
// code ...
var ni = 0;
for (var i = 0;i < document.all.length;i++) {
    if (document.all[i].hasAttribute('e')) {
        ni ++;
        var el = document.all[i];
        var s = '';
        if (el.hasAttribute('id')) {
            el.setAttribute('id','e::' + ni);
            console.log(el.id);
        }
        else {
            s += el.getAttribute('id') + ' {\n';
            console.log(el.id);
        }
        console.log(s + ' // ' + el.id);
        if (el.hasAttribute('bg:c')) {
            s += 'background-color:'+el.getAttribute('bg:c')+';\n';
        }
        s += '}\n\n';
        style.innerHTML += s;
    }
}
// code ...
document.head.appendChild(style)