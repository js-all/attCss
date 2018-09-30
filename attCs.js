var style = document.createElement('style');
document.head.appendChild(style);
var f = [];
for (let i = 0; i < (Object.keys(document.body.style).length - 1); i++) {
    var css = Object.keys(document.body.style)[i].replace(/[A-Z]/g, '-$&').toLowerCase();
    f.push(css);
}

function updateCSS() {
    style.innerHTML += '\n';
    var ni = 0;
    var a = [{
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
        },
        {
            name: 'Z',
            attr: 'z-index'
        },
        {
            name: 'an',
            attr: 'animation'
        },
        {
            name: 'an:name',
            attr: 'animation-name'
        },
        {
            name: 'an:duration',
            attr: 'animation-duration'
        },
        {
            name: 'an:count',
            attr: 'animation-iteration-count'
        },
        {
            name: 'an:delay',
            attr: 'animation-delay'
        },
        {
            name: 'an:timing',
            attr: 'animation-timing-function'
        },
        {
            name: 'an:direction',
            attr: 'animation-direction'
        },
        {
            name: 'an:fill',
            attr: 'animation-fill-mode'
        },
        {
            name: 'an:playS',
            attr: 'animation-play-state'
        }
    ];
    for (var i = 0; i < document.all.length; i++) {
        if (document.all[i].hasAttribute('e')) {
            ni++;
            var el = document.all[i];
            var s = '';
            if (!el.hasAttribute('id')) {
                el.id = 'e_' + ni;
            }
            s = '#' + el.id + ' {\n';

            function attr(a, f) {
                if (el.hasAttribute(a)) {
                    s += f + ': ' + el.getAttribute(a) + ';\n';
                    el.removeAttribute(a);
                }
            }
            for (let j = 0; j < a.length; j++) {
                attr(a[j].name, a[j].attr);
                
            }
            if (el.hasAttribute('other')) {
                for (let u = 0; u < el.attributes.length; u++) {
                    let att = el.attributes;
                    let at = att[u.toString()];
                    let aa = at.localName;
                    let test = /o:(?=[a-z\-]+)/;
                    let d = aa.slice(2,(aa.length));
                    let isgood = false;
                    let attrV = el.getAttribute(aa);
                    for (let g= 0; g < f.length;g++) {
                        if (d == f[g]) {
                            isgood = true;
                        }
                    }
                    if (isgood) {
                        if (test.test(aa)) {
                            s += d + ': ' + attrV + ';\n';
                        }
                    }
                }
                var p = 0;
                while (p < el.attributes.length - 1) {
                    let aa = el.attributes[p].localName;
                    let test = /o:(?=[a-z\-]+)/;
                    if (test.test(aa)) {
                        console.log(aa);
                        el.removeAttribute(aa);
                    }
                    else {
                        p++;
                    }              
                 }
            }

            
            

            s += '}\n\n';
            style.innerHTML += s;
        }
    }
}
updateCSS();
