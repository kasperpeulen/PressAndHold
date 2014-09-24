/**
 * Created by kasperpeulen on 20/09/14.
 */
var ctex_to_tex = function (){
    $('#latex').val($('#ta').val());
    var textarea = $('#latex').val();

    var binreg = function (symbol){
        var reg = new RegExp("(?:([^{}()\\[\\]])|[\\(\\[\\{](.*?)[\\)\\]\\}])"+symbol+"(?:([^{}\\(\\)\\[\\]])|[\\(\\[\\{](.*?)[\\)\\]\\}])","g");
        return reg;
    }



    while (binreg("∕").test(textarea)){
        textarea = textarea.replace(binreg("∕"),'\\frac{$1$2}{$3$4}');
    }
    textarea = textarea.replace(binreg("¦"),'\\binom{$1$2}{$3$4}');
    textarea = textarea.replace(binreg("↖"),'\\overset{$3$4}{$1$2}');
    textarea = textarea.replace(binreg("↙"),'\\underset{$3$4}{$1$2}');


    var text = textarea.split('');
    for (var index = 0; index < text.length; index++) {
        var i =index;
        if (text[index] === "⁅") {
            var sub=  textarea.substring(index);
            var endindex = sub.indexOf("⁆");
            var endindex2 = sub.indexOf("⁅");
            if (endindex !==-1 &&  endindex2 < endindex) {
                var innermath = sub.substring(0, endindex);
                if (innermath.indexOf("&") !== -1 ){

                    text[index+endindex]= "\\end{align*}" ;
                    text[index]= "\\begin{align*}" ;
                }
                else if (innermath.indexOf("\\\\") !== -1 ){


                    text[index+endindex]= "\\end{gather*}" ;
                    text[index]= "\\begin{gather*}" ;
                }
                else if (innermath.indexOf("((") !== -1 ){
                    text[index+endindex]= "``" ;
                    text[index]= "``" ;


                }
            }

        }
        textarea = text.join('');
    }

    var subscripts = {
        "\u00B9": "^1",
        "⁰": "^0",
        "\u00B2": "^2",
        "\u00B3": "^3",
        "\u2071": "^i",
        "\u2074": "^4",
        "\u2075": "^5",
        "\u2076": "^6",
        "\u2077": "^7",
        "\u2078": "^8",
        "\u2079": "^9",
        "\u207A": "^+",
        "\u207B": "^-",
        "\u207C": "^=",
        "\u207D": "^(",
        "\u207E": "^)",
        "\u207F": "^n",
        "\u2080": "_0",
        "\u2081": "_1",
        "\u2082": "_2",
        "\u2083": "_3",
        "\u2084": "_4",
        "\u2085": "_5",
        "\u2086": "_6",
        "\u2087": "_7",
        "\u2088": "_8",
        "\u2089": "_9",
        "\u208A": "_+",
        "\u208B": "_-",
        "\u208C": "_=",
        "\u208D": "_(",
        "\u208E": "_)",
        "ₓ" : "_x",
        "ₖ"   :"_k"
    }
    for (a in subscripts){
        var reg = new RegExp (a,"g");
        textarea = textarea.replace(reg,subscripts[a]);
    }

    textarea = textarea.replace(/(?:\^[\d\w\=\+\-\→]+)+/g, function($1) {
        return "^{"+$1.replace(/\^/g,"")+"}";
    });
    textarea = textarea.replace(/(?:_[\d\w\=\+\-\→]+)+/g, function($1) {
        return "_{"+$1.replace(/_/g,"")+"}";
    });
    textarea = textarea.replace(/"(\w+)"(\(|\[|\{)/g,'\\mathop{\\mathrm{$1}}$2');
    textarea = textarea.replace(/"([^"]+)"/g,'\\text{$1}');

    textarea = textarea.replace(/^⁅(.*?)⁆/gm,"\\[$1\\]");
    textarea = textarea.replace(/√(?:\s*?)(\S_{.*?})/g,'\\sqrt{$1}');

    for (var a in unicode_to_latex) {
        var newstr = unicode_to_latex[a];
        if (/[\u0300-\u036e\u1dc0-\u1dfe\u20d0-\u20fe\ufe20-\ufe2e]/.test(a)) {
            var index = textarea.indexOf(a);
            if (index !== -1) {
                var text = textarea.split('');
                text[index] = "{" + text[index - 1] + "}";
                text[index - 1] = a;
                $('#latex').val(text.join(''));
            }
        }
        var reg = new RegExp (a,"g");
        textarea = textarea.replace(reg,newstr);
    }

    textarea = textarea.replace(/(^|[^\\])(sin|cos|tan|csc|sec|cot|sinh|cosh|tanh|log|ln|det|dim|lim|mod|gcd|lcm|min|max)( |\(|\[|\{|\^|_)/g, '$1\\$2$3');

    $('#latex').val(textarea);
}