var style = document.createElement('style');
style.innerHTML = '\n';
var ni = 0;
var a = [
    {
        name: 'bg:c',
        attr: 'background-color'
    },
    {
        name: 'border:r',
        attr: 'border-radius'
    },
    {
        name: 'color',
        attr: 'color'
    },
    {
        name: 'pos',
        attr: 'position'
    },
    {
        name: 'pos:top',
        attr: 'top'
    },
    {
        name: 'pos:left',
        attr: 'left'
    },
    {
        name: 'pos:right',
        attr: 'right'
    },
    {
        name: 'pos:bottom',
        attr: 'bottom'
    },
    {
        name: 'height',
        attr: 'height'
    },
    {
        name: 'width',
        attr: 'width'
    }
];
for (var i = 0;i < document.all.length;i++) {
    if (document.all[i].hasAttribute('e')) {
        ni ++;
        var el = document.all[i];
        var s = '';
        if (!el.hasAttribute('id')) {
            el.setAttribute('id','e_' + ni);
        }
        s = '#' + el.getAttribute('id') + ' {\n';
        function attr(a,f) {
            if (el.hasAttribute(a)) {
                s += f + ':'+el.getAttribute(a)+';\n';
                el.removeAttribute(a);
            }
        }
        for (let j = 0;j < a.length;j++) {
            attr(a[j].name,a[j].attr);
        }
        s += '}\n\n';
        style.innerHTML += s;
        el.removeAttribute('e');
        
    }
}
document.head.appendChild(style);
