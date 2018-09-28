var style = document.createElement('style');
style.innerHTML = '\n';
// code ...
var ni = 0;
for (var i = 0;i < document.all.length;i++) {
    if (document.all[i].hasAttribute('e')) {
        ni ++;
        var el = document.all[i];
        var s = '';
        if (!el.hasAttribute('id')) {
            el.setAttribute('id','e::' + ni);
        }
        s = '#' + el.getAttribute('id') + ' {\n';
        if (el.hasAttribute('bg:c')) {
            s += 'background-color:'+el.getAttribute('bg:c')+';\n';
            //el.removeAttribute('bg:c');
        }
        s += '}\n\n';
        style.innerHTML += s;
        //el.removeAttribute('e');
    }
}
// code ...
document.head.appendChild(style)