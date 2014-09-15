/*
 * Project: Long Press
 * Description: Pops a list of alternate characters when a key is long-pressed
 * Author: Quentin Thiaucourt, http://toki-woki.net
 * Licence: MIT License http://opensource.org/licenses/mit-license.php
 */
/*
 * Forked by Kasper Peulen to provide OSX styling
 * and provide a bookmarklet script
 */
function setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function() {
        callback();
        if (++x === repetitions) {
            window.clearInterval(intervalID);
        }
    }, delay);
}
$(function() {
    setIntervalX(function() {
        var fontface = "";
        fontface += "<style>";
        fontface += "@font-face {";
        fontface += "  font-family: \"LatinModernMathJax_DoubleStruck\";";
        fontface += "  src: url(\"http:\/\/cdn.mathjax.org\/mathjax\/latest\/fonts\/HTML-CSS\/Gyre-Termes\/woff\/GyreTermesMathJax_DoubleStruck-Regular.woff?rev=2.4-beta-2\") format(\"woff\"), url(\"http:\/\/cdn.mathjax.org\/mathjax\/latest\/fonts\/HTML-CSS\/Asana-Math\/otf\/AsanaMathJax_DoubleStruck-Regular.otf?rev=2.4-beta-2\") format(\"opentype\");";
        fontface += "}";
        fontface += "<\/style>";
        $('head').append(fontface);
    }, 1000, 30);
});
var strVar = "";
strVar += "<style>";
strVar += "";
strVar += ".long-press-popup {";
strVar += "  -moz-box-shadow: 0px 1px 3px 1px lightgray;";
strVar += "-webkit-box-shadow: 0px 1px 3px 1px lightgray;";
strVar += "box-shadow: 0px 2px 3px 0px lightgrey;";
strVar += "  font-family: STIXGeneral,Cambria Math, Helvetica,Consolas , DejaVu Sans, Symbola, Quivira, Segoe UI Symbol, UniversaliaPlus, Menlo,Monaco,Lucida Console , h ,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;";
strVar += "	position: relative;";
strVar += "	top:20px;";
strVar += "	left:-19px;";
strVar += "	padding: 2px;";
strVar += "	margin: 0px;";
strVar += "	background: #FEFFFF;";
strVar += "	font-size: 12pt;";
strVar += "	border: 1px #C1D7FD solid;";
strVar += "	list-style-type: none;";
strVar += "  display: inline-block;";
strVar += "  border-radius: 5px;";
strVar += "  line-height: 21px; ";
strVar += "}";
strVar += ".long-press-popup li {";
strVar += "position:relative;";
strVar += "  line-height: 21px; ";
strVar += "    border: 1px white solid;";
strVar += "    border-radius: 4px;";
strVar += "	background: white;";
strVar += "	color: #0A7ED0;";
strVar += "	text-align: center;";
strVar += "  display: inline-block;  ";
strVar += "  min-width:24px;";
strVar += "}";
strVar += ".long-press-popup p{";
strVar += "  border: 1px #B9D6F0 solid;";
strVar += "	background: #E5F1FE;";
strVar += "	color: #0A7ED0;";
strVar += "}";
strVar += ".long-press-popup .selected {";
strVar += "    border: 1px #B9D6F0 solid;";
strVar += "	background: #E5F1FE;";
strVar += "	color: #0A7ED0;";
strVar += "}";
strVar += "";
strVar += "";
strVar += ".number {";
strVar += "  font-weight :lighter;";
strVar += "  font-family:Helvetica;";
strVar += "  text-align:center;";
strVar += "  font-size:9pt;";
strVar += "  padding: 0px;";
strVar += "  margin:0px;";
strVar += "  display: block;";
strVar += "    color: #CBCCCC;";
strVar += "}";
strVar += "<\/style>";
$(document).ready(function() {
    var tail = $('<div class="tail" style="position: absolute; z-index:1000;"></div> ');
    $('body').append(tail);
    $('head').append(strVar);
});
var typedChar;
(function($) {
    var types = ['DOMMouseScroll', 'mousewheel'];
    if ($.event.fixHooks) {
        for (var i = types.length; i;) {
            $.event.fixHooks[types[--i]] = $.event.mouseHooks;
        }
    }
    $.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var i = types.length; i;) {
                    this.addEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var i = types.length; i;) {
                    this.removeEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };
    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },
        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });

    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call(arguments, 1),
            delta = 0,
            returnValue = true,
            deltaX = 0,
            deltaY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";
        // Old school scrollwheel delta
        if (orgEvent.wheelDelta) {
            delta = orgEvent.wheelDelta / 120;
        }
        if (orgEvent.detail) {
            delta = -orgEvent.detail / 3;
        }
        // New school multidimensional scroll (touchpads) deltas
        deltaY = delta;
        // Gecko
        if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaY = 0;
            deltaX = -1 * delta;
        }
        // Webkit
        if (orgEvent.wheelDeltaY !== undefined) {
            deltaY = orgEvent.wheelDeltaY / 120;
        }
        if (orgEvent.wheelDeltaX !== undefined) {
            deltaX = -1 * orgEvent.wheelDeltaX / 120;
        }
        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);
        return ($.event.dispatch || $.event.handle).apply(this, args);
    }
})(jQuery);
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
// Place any jQuery/helper plugins in here.
function getCaretPosition(ctrl) {
    var caretPos = 0;
    if (document.selection) {
        // IE Support
        ctrl.focus();
        var sel = document.selection.createRange();
        sel.moveStart('character', -ctrl.value.length);
        caretPos = sel.text.length;
    } else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
        // Firefox support
        caretPos = ctrl.selectionStart;
    }
    return caretPos;
}

function setCaretPosition(ctrl, pos) {
        if (ctrl.setSelectionRange) {
            ctrl.focus();
            ctrl.setSelectionRange(pos, pos);
        } else if (ctrl.createTextRange) {
            var range = ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }
    (function($, window, undefined) {
        var pluginName = 'longPress',
            document = window.document,
            defaults = {
            };
        var moreChars = {
            'A': '∀{𝒜}{𝔄}',
            'B': 'ℬ{𝔅}',
            'C': 'ℂ{𝒞}∐',
            'D': '{𝒟}{𝔇}Δ∩',
            'E': '∅ℰ',
            'F': 'ℱ',
            'G': 'Γ{𝒢}{𝔊}∇∠∟⟂∥∦∝⊿⊾⦜⦝',
            'H': 'ℋ',
            'I': 'ℐℑ∩∫∬∭⨌∮∯∰',
            'J': '{𝒥}{𝔍}',
            'K': '{𝒦}{𝔎}',
            'L': 'ℒ{𝔏}¬∀∃∄∴∵∧∨⊨⊭⋀⋁',
            'M': 'ℳ{𝔐}',
            'N': 'ℕℵ{𝒩}{𝔑}',
            'O': 'Ω{𝒪}⊕⊖⊗⊘⊙⊚⊛⊜⊝',
            'P': '∏ΠΦΨℙ{𝒫}',
            'Q': 'ℚ{𝒬}∎',
            'R': 'ℝℛ',
            'S': '∑Σ{𝒮}⅀',
            'T': '⊤⊥⊢⊣⊧⊨⊩{𝒯}',
            'U': '{𝒰}∪∩⋃⋂⨆⨅',
            'V': '{𝒱}Ʋ',
            'W': '{𝒲}',
            'X': 'Ξ{𝒳}⨉',
            'Y': '{𝒴}',
            'Z': 'ℤ{𝒵}',
            'a': 'α∀∧∠{𝔞}',
            'b': 'β{𝔟}',
            'c': 'χ{𝔠}↯∮',
            'd': 'δ{𝔡}∂º∬',
            'e': 'ϵε∃∄∅',
            'f': 'ϕφ',
            'g': 'γ{𝔤}',
            'h': 'η{𝔥}†♡♥',
            'i': '∈∉ι∫∞∋∌∩',
            'j': '{𝔧}',
            'k': 'κ',
            'l': 'λℓ',
            'm': 'μ{𝔪}',
            'n': 'ⁿν{𝔫}¬∇',
            'o': 'ω{𝔬}∨°',
            'p': 'πϕφψ{𝔭}',
            'q': '{𝔮}∎',
            'r': 'ρ{𝔯}',
            's': 'σ{𝔰}√∛∜∑∵',
            't': 'τθ{𝔱}∴',
            'u': 'υ{𝔲}',
            'v': 'ʋ',
            'w': 'ω⚠',
            'x': 'ξ×⨉⊗',
            'y': '',
            'z': 'ζ',
            '$': '€£₤₹¥¢₪₩฿₺₴₽',
            '%': '‰‱',
            '#': '◻⊞⊟⊠⊡⧇⧈⧅⧆',
            '.': '…⋯⋰⋱⋮·∘∙',
            ':': '∷≐≑≒≓≔≕∺∻∴∵', //∶
            '+': '±∓⊕₊⁺',
            '-': '⁻‾⏞', //⏜⎴
            '\'': '\u0301\u0304\u0307\u0309\u030A\u20f0',
            '`': '\u0300\u20d0\u20d1\u20ec\u20ed',
            '~': '\u0303\u0330',
            '"': '\u0308\u20db\u20dc\u20e8\u20e1\u20e7\u20e9\u0331',
            '_': '₋▁\u23DF', //┬⏝⎵
            '{': '❴⟨⌈⌊⟪⟦⦇⦉',
            '}': '❵⟩⌉⌋⟫⟧⦈⦊',
            '[': '❴⟨⌈⌊⟮⟪⟦⦇⦉',
            ']': '❵⟩⌉⌋⟯⟫⟧⦈⦊',
            '|': '∣∤∥∦',
            '\\': '∖',
            '/': '∕÷¦',
            '<': '≤⟨‹⊆⊂←↤⇐⊲',
            '>': '≥⟩›⊇⊃→↦⇒⟹⊳',
            '=': '≠≈≅≃≡⟺⇔≟≝≔≞⇕',
            '1': '¹₁',
            '2': '²₂',
            '3': '³₃',
            '4': '⁴₄',
            '5': '⁵₅',
            '6': '⁶₆',
            '7': '⁷₇',
            '8': '⁸₈',
            '9': '⁹₉',
            '0': '⁰₀',
            '*': '·∘∙⋄×⨉⊗⨀',
            '^': '\u20ef\u20ee\u0302\u030C\u0306\u20d6\u20d7' //┴
        };
        var ignoredKeys = [8, 13, 37, 38, 39, 40];
        var selectedCharIndex;
        var lastWhich;
        var timer;
        var activeElement;
        var keyup;
        var count = 0;
        var oldCharlength;
        var tail;
        var popup = $('<ul class=long-press-popup />');
        var onlyonce = false;
        $('html').click(function() {
            if (($('.long-press-popup').length > 0)) {
                hidePopup();
                //$('textarea').focus();
            }
        });
        $(window).mousewheel(onWheel);
        $(window).keyup(onKeyUp);
        $(window).on('keypress', function(e) {
            if (e.which === 39 || e.which == 34 || e.which == 96 || e.which == 126) {
                e.preventDefault();
            }
        });
        function onKeyDown(e) {
            if ($('.long-press-popup').length <= 0) {
                keyup = false;
                count += 1;
                if (e.which == 8 || e.which == 16 || e.which == 17 || e.which == 18 || e.which == 20 || e.which == 37 || e.which == 38 || e.which == 39 || e.which == 40 || e.which == 16) {
                    return;
                }
                if (e.which == 32) {
                    e.preventDefault();
                    activeElement = e.target;
                    var textAreaTxt = $(activeElement).val();
                    var caretPos = getCaretPosition(activeElement);
                    $(activeElement).val(textAreaTxt.substring(0, caretPos) + " " + textAreaTxt.substring(caretPos));
                    setCaretPosition(activeElement, caretPos + 1);
                }
                if (e.which == 222 && e.shiftKey === false && ($('.long-press-popup').length <= 0)) {
                    e.preventDefault();
                    activeElement = e.target;
                    var textAreaTxt = $(activeElement).val();
                    var caretPos = getCaretPosition(activeElement);
                    $(activeElement).val(textAreaTxt.substring(0, caretPos) + "'" + textAreaTxt.substring(caretPos));
                    setCaretPosition(activeElement, caretPos + 1);
                }
                if (e.which == 222 && e.shiftKey === true && ($('.long-press-popup').length <= 0)) {
                    e.preventDefault();
                    activeElement = e.target;
                    var textAreaTxt = $(activeElement).val();
                    var caretPos = getCaretPosition(activeElement);
                    $(activeElement).val(textAreaTxt.substring(0, caretPos) + '"' + textAreaTxt.substring(caretPos));
                    setCaretPosition(activeElement, caretPos + 1);
                }
                if (e.which == 192 && e.shiftKey === true && ($('.long-press-popup').length <= 0)) {
                    e.preventDefault();
                    activeElement = e.target;
                    var textAreaTxt = $(activeElement).val();
                    var caretPos = getCaretPosition(activeElement);
                    $(activeElement).val(textAreaTxt.substring(0, caretPos) + '~' + textAreaTxt.substring(caretPos));
                    setCaretPosition(activeElement, caretPos + 1);
                }
                if (e.which == 192 && e.shiftKey === false && ($('.long-press-popup').length <= 0)) {
                    e.preventDefault();
                    activeElement = e.target;
                    var textAreaTxt = $(activeElement).val();
                    var caretPos = getCaretPosition(activeElement);
                    $(activeElement).val(textAreaTxt.substring(0, caretPos) + '`' + textAreaTxt.substring(caretPos));
                    setCaretPosition(activeElement, caretPos + 1);
                }
                var oldcount = count;
                setTimeout(function() {
                    if (!keyup && (oldcount === count)) {
                        onTimer();
                    }
                }, 200);
            }
            // Arrow key with popup visible
            if ($('.long-press-popup').length > 0) {
                if (e.which == 9) {
                    e.preventDefault();
                    hidePopup();
                } else if (e.which == 37) {
                    activePreviousLetter();
                    e.preventDefault();
                } else if (e.which == 39) {
                    activateNextLetter();
                    e.preventDefault();
                } else if (e.which == 13) {
                    hidePopup();
                    e.preventDefault();
                } else if (e.which == lastWhich) {
                    e.preventDefault();
                    if (keyup) {
                        activateNextLetter();
                    }
                } else if (e.which == 49) {
                    selectCharIndex(0);
                    e.preventDefault();
                    hidePopup();
                } else if (e.which == 50) {
                    selectCharIndex(1);
                    e.preventDefault();
                    hidePopup();
                } else if (e.which == 51) {
                    selectCharIndex(2);
                    e.preventDefault();
                    hidePopup();
                } else if (e.which == 52) {
                    selectCharIndex(3);
                    e.preventDefault();
                    hidePopup();
                } else if (e.which == 53) {
                    selectCharIndex(4);
                    e.preventDefault();
                    hidePopup();
                } else if (e.which == 54) {
                    selectCharIndex(5);
                    e.preventDefault();
                    hidePopup();
                } else if (e.which == 55) {
                    selectCharIndex(6);
                    e.preventDefault();
                    hidePopup();
                } else if (e.which == 56) {
                    selectCharIndex(7);
                    e.preventDefault();
                    hidePopup();
                } else if (e.which == 57) {
                    selectCharIndex(8);
                    e.preventDefault();
                    hidePopup();
                } else if (e.which == 32) {
                    e.preventDefault();
                    activeElement = e.target;
                    var textAreaTxt = $(activeElement).val();
                    var caretPos = getCaretPosition(activeElement);
                    $(activeElement).val(textAreaTxt.substring(0, caretPos) + " " + textAreaTxt.substring(caretPos));
                    setCaretPosition(activeElement, caretPos + 1);
                    hidePopup();
                } else if (e.which == 27 || e.which == 8) {
                    e.preventDefault();
                    updateChar(-1);
                    hidePopup();
                } else if (e.which != lastWhich) {
                    hidePopup();
                    var f = $.Event('keydown');
                    f.which = e.which;
                    $('textarea').trigger(f);
                }
            }
            activeElement = e.target;
            $("#checkbox").click(function() {
                hidePopup();
            });
            lastWhich = e.which;
        }

        function onKeyUp(e) {
            keyup = true;
        }

        function onTimer() {
            typedChar = $(activeElement).val().split('')[getCaretPosition(activeElement) - 1];
            if (moreChars[typedChar]) {
                showPopup((moreChars[typedChar]));
            } else {}
        }

        function showPopup(chars) {
            popup.empty();
            oldCharlength = 1;
            $('.tail').on('click', function(e) {
                e.preventDefault();
            });
            var letter;
            var count = 0;
            for (var i = 0; i < chars.length; i++) {
                if (chars[i] !== "{") {
                    var title = "";
                    if (unicode_to_latex[chars[i]]) {
                        title = unicode_to_latex[chars[i]];
                    }
                    letter = $('<li class="long-press-letter" title="' + title + '" />').html(chars[i] + "<span class=\"number\">" + (count + 1) + "</span>");
                    letter.mouseenter(function() {
                        var index = $(this).index();
                        activateLetter(index);
                    });
                    popup.append(letter);
                    count += 1;
                } else {
                    var title = "";
                    var symbol = chars[i + 1] + chars[i + 2];
                    if (unicode_to_latex[symbol]) {
                        title = unicode_to_latex[symbol];
                    }
                    letter = $('<li class=long-press-letter  title="' + title + '" />').html(chars[i + 1] + chars[i + 2] + "<span class=\"number\">" + (count + 1) + "</span>");
                    letter.mouseenter(function() {
                        var index = $(this).index();
                        activateDouble(index);
                    });
                    popup.append(letter);
                    count += 1;
                    i += 3;
                }
            }
            $('.tail').append(popup);
            var height = $(".long-press-popup").innerHeight();
            $(".long-press-popup li").each(function(index) {
                $(this).css('padding-top', height - $(this).height() - 6);
            });
            $('textarea').each(function(index) {
                if ($(this).is(":focus")) {
                    $('.tail').css($(this).textareaHelper('caretPos'));
                    var offset1 = $('.tail').offset();
                    var offset2 = $(this).offset();
                    $(".tail").css('top', offset1.top + offset2.top);
                    $(".tail").css('left', offset1.left + offset2.left);
                }
            });
            $('input').each(function(index) {
                if ($(this).is(":focus")) {
                    var offset2 = $(this).offset();
                    $(".tail").css('top', offset2.top);
                    $(".tail").css('left', offset2.left + 18);
                }
            });
            /*

*/
            selectedCharIndex = -1;
        }

        function activateLetter(i) {
            selectCharIndex(i);
        }

        function activateDouble(i) {
            selectCharIndex(i);
        }

        function activateRelativeLetter(i) {
            selectCharIndex(($('.long-press-letter').length + selectedCharIndex + i) % $('.long-press-letter').length);
        }

        function activateNextLetter() {
            activateRelativeLetter(1);
        }

        function activePreviousLetter() {
            activateRelativeLetter(-1);
        }

        function hidePopup() {
            popup.detach();
            keyup = false;
            var oldstr = $(activeElement).val();
            var pos = getCaretPosition(activeElement);
            if ($('#checkbox').prop('checked')) {
                for (var a in unicode_to_latex) {
                    if (/[\u0300-\u036e\u1dc0-\u1dfe\u20d0-\u20fe\ufe20-\ufe2e]/.test(a)) {
                        var newstr = unicode_to_latex[a];
                        var textarea = $(activeElement).val();
                        var index = textarea.indexOf(a);
                        if (index !== -1) {
                            var text = textarea.split('');
                            text[index] = "{" + text[index - 1] + "}";
                            text[index - 1] = a;
                            $(activeElement).val(text.join(''));
                        }
                    }
                    $(activeElement).val($(activeElement).val().replace(a, unicode_to_latex[a]));
                }
                console.log("1");
                var newstr = $(activeElement).val();
                setCaretPosition(activeElement, pos + newstr.length - oldstr.length);
            }
        }

        function onWheel(e, delta, deltaX, deltaY) {
            if ($('.long-press-popup').length === 0) return;
            e.preventDefault();
            delta < 0 ? activateNextLetter() : activePreviousLetter();
        }

        function selectCharIndex(i) {
            $('.long-press-letter.selected').removeClass('selected');
            $('.long-press-letter').eq(i).addClass('selected');
            selectedCharIndex = i;
            updateChar(i);
        }

        function updateChar(i) {
            var caretpostion;
            var endString = $('.long-press-letter.selected').html().indexOf("<");
            var newChar = $('.long-press-letter.selected').html().substring(0, endString);
            if (i === -1) {
                newChar = typedChar;
            }
            var pos = getCaretPosition(activeElement);
            var arVal = $(activeElement).val().split('');
            if (newChar.length == 2 && (oldCharlength == 1 || arVal[pos - 1] == typedChar)) {
                arVal[pos - 1] = newChar[0];
                arVal.splice(pos, 0, newChar[1]);
                caretposition = pos + newChar.length - 1;
            } else if (arVal[pos - 1] == typedChar) {
                arVal[pos - 1] = newChar;
                caretposition = pos + newChar.length - 1;
            } else if (newChar.length == 2 && oldCharlength == 2) {
                arVal[pos - 2] = newChar[0];
                arVal[pos - 1] = newChar[1];
                caretposition = pos + newChar.length - 2;
            } else if (oldCharlength == 2) {
                arVal[pos - 2] = newChar;
                arVal[pos - 1] = "";
                caretposition = pos + newChar.length - 2;
            } else {
                arVal[pos - 1] = newChar;
                caretposition = pos + newChar.length - 1;
            }
            $(activeElement).val(arVal.join(''));
            setCaretPosition(activeElement, caretposition);
            oldCharlength = newChar.length;
        }

        function LongPress(element, options) {
            this.element = element;
            this.options = $.extend({}, defaults, options);
            this._defaults = defaults;
            this._name = pluginName;
            this.init();
        }
        LongPress.prototype = {
            init: function() {
                $(this.element).keydown(onKeyDown);
            }
        };
        $.fn[pluginName] = function(options) {
            return this.each(function() {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new LongPress(this, options));
                }
            });
        };
    }(jQuery, window));
$(function() {
    $('textarea').each(function(index) {
        $(this).longPress();
    });
    $('input').each(function(index) {
        $(this).longPress();
    });
});
(function($) {
    'use strict';
    var caretClass = 'textarea-helper-caret',
        dataKey = 'textarea-helper'
        // Styles that could influence size of the mirrored element.
        ,
        mirrorStyles = [
            // Box Styles.
            'box-sizing', 'height', 'width', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top'
            // Font stuff.
            , 'font-family', 'font-size', 'font-style', 'font-variant', 'font-weight'
            // Spacing etc.
            , 'word-spacing', 'letter-spacing', 'line-height', 'text-decoration', 'text-indent', 'text-transform'
            // The direction.
            , 'direction'
        ];
    var TextareaHelper = function(elem) {
        if (elem.nodeName.toLowerCase() !== 'textarea') return;
        this.$text = $(elem);
        this.$mirror = $('<div/>').css({
            'position': 'absolute',
            'overflow': 'auto',
            'white-space': 'pre-wrap',
            'word-wrap': 'break-word',
            'top': 0,
            'left': -9999
        }).insertAfter(this.$text);
    };
    (function() {
        this.update = function() {
            var styles = {};
            for (var i = 0, style; style = mirrorStyles[i]; i++) {
                styles[style] = this.$text.css(style);
            }
            this.$mirror.css(styles).empty();
            var caretPos = this.getOriginalCaretPos()
                ,
                str = this.$text.val(),
                pre = document.createTextNode(str.substring(0, caretPos)),
                post = document.createTextNode(str.substring(caretPos)),
                $car = $('<span/>').addClass(caretClass).css('position', 'absolute').html('&nbsp;');
            this.$mirror.append(pre, $car, post)
                .scrollTop(this.$text.scrollTop());
        };
        this.destroy = function() {
            this.$mirror.remove();
            this.$text.removeData(dataKey);
            return null;
        };
        this.caretPos = function() {
            this.update();
            var $caret = this.$mirror.find('.' + caretClass),
                pos = $caret.position();
            if (this.$text.css('direction') === 'rtl') {
                pos.right = this.$mirror.innerWidth() - pos.left;
                pos.left = 'auto';
            }
            return pos;
        };
        this.height = function() {
            this.update();
            this.$mirror.css('height', '');
            console.log(this.$mirror.height());
            return this.$mirror.height();
        };
        this.getOriginalCaretPos = function() {
            var text = this.$text[0];
            if (text.selectionStart) {
                return text.selectionStart;
            } else if (document.selection) {
                text.focus();
                var r = document.selection.createRange();
                if (r === null) {
                    return 0;
                }
                var re = text.createTextRange(),
                    rc = re.duplicate();
                re.moveToBookmark(r.getBookmark());
                rc.setEndPoint('EndToStart', re);
                return rc.text.length;
            }
            return 0;
        };
    }).call(TextareaHelper.prototype);
    $.fn.textareaHelper = function(method) {
        this.each(function() {
            var $this = $(this),
                instance = $this.data(dataKey);
            if (!instance) {
                instance = new TextareaHelper(this);
                $this.data(dataKey, instance);
            }
        });
        if (method) {
            var instance = this.first().data(dataKey);
            return instance[method]();
        } else {
            return this;
        }
    };
})(jQuery);
