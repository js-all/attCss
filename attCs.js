var style = document.createElement('style');
// code ...
for (let i = 0;i < document.all.length;i++) {
    if (document.all[i].hasAttribute('e')) {
        var el = document.all[i];
        var s = '';
        var hi = true;
        if (el.hasAttribute('id')) {
            el.id = 'e::' + i;
            hi = false;
        }
        s = el.id + ' {\n';
        if (el.hasAttribute('bg:c')) {
            s += 'background-color:'+el.getAttribute('bg:c')+';\n';
        }
        s += '}\n\n';
        style.innerHTML += s;
    }
}
// code ...
document.head.appendChild(style)