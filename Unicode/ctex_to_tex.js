/**
 * Created by kasperpeulen on 20/09/14.
 */
var ctex_to_tex = function (){
$('#latex').val($('#ta').val());

var textarea = $('#latex').val();
var re = /(_)([^\s{]+?)(\^)([^\s{]+?)( )/g;
var m;
while ((m=re.exec(textarea)) != null) {
    if (m.index === re.lastIndex) {
        re.lastIndex++;
    }
    textarea = textarea.replace(m[0], m[1] + "{" + m[2] + "}" + m[3] + "{" + m[4] + "} ");
}

var re = /(?:([^{}()])|\(([^{}()]+)\)|{([^{}()]+)})\∕(?:([^{}()])|\(([^{}()]+)\)|{([^{}()]+)})/g;
var subst = '\\frac{$1$2$3}{$4$5$6}';
var textarea = textarea.replace(re, subst);

    var re = /(?:([^{}()])|\(([^{}()]+)\)|{([^{}()]+)})¦(?:([^{}()])|\(([^{}()]+)\)|{([^{}()]+)})/g;
    var subst = '\\binom{$1$2$3}{$4$5$6}';
    var textarea = textarea.replace(re, subst);

    var re = /(?:([^{}()])|\(([^{}()]+)\)|{([^{}()]+)})↖(?:([^{}()])|\(([^{}()]+)\)|{([^{}()]+)})/g;
    var subst = '\\overset{$4$5$6}{$1$2$3}';
    var textarea = textarea.replace(re, subst);

    var re = /(?:([^{}()])|\(([^{}()]+)\)|{([^{}()]+)})↙(?:([^{}()])|\(([^{}()]+)\)|{([^{}()]+)})/g;
    var subst = '\\underset{$4$5$6}{$1$2$3}';
    var textarea = textarea.replace(re, subst);

    var re = /"([^"]+)"/g;
    var subst = '\\text{$1}';

    var textarea = textarea.replace(re, subst);

    var text = textarea.split('');
for (var index = 0; index < text.length; index++) {
       if (text[index] === "⁅") {
        var sub=  textarea.substring(index);
        var endindex = sub.indexOf("⁆");
        var endindex2 = sub.indexOf("⁅");
        if (endindex !==-1 &&  endindex2 < endindex) {
            var innermath = sub.substring(0, endindex);
            console.log(index,endindex,textarea,sub,innermath,innermath.indexOf("&"));
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
    $('#latex').val(text.join(''));
}

for (var a in unicode_to_latex) {
    if (/[\u0300-\u036e\u1dc0-\u1dfe\u20d0-\u20fe\ufe20-\ufe2e]/.test(a)) {
        var newstr = unicode_to_latex[a];
        var textarea = $('#latex').val();
        var index = textarea.indexOf(a);
        if (index !== -1) {
            var text = textarea.split('');
            text[index] = "{" + text[index - 1] + "}";
            text[index - 1] = a;
            $('#latex').val(text.join(''));
        }
    }


    $('#latex').val(replaceAll($('#latex').val(),a, unicode_to_latex[a]));


}
    textarea = textarea.replace(/(?:\^\d+)+/g, function($1) {
        return "^{"+$1.replace(/\^/g,"")+"}";
    });
    textarea = textarea.replace(/(?:_\d+)+/g, function($1) {
        return "_{"+$1.replace(/_/g,"")+"}";
    });
    $('#latex').val(textarea);
}