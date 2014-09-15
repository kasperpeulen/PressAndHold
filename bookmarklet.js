var unicode_to_latex = {
  "∕": "\\over ",
  "¦": "\\choose ",
  '❴': "\\{",
  '❵': "\\}",
  "≝": "\\stackrel{\\tiny\\text{def}}{=}",
  '≞': "\\stackrel{\\text{m}}{=}",
  '≟': "\\stackrel{\\text{?}}{=}",
  '⅀': '\\Bbb{\\Sigma}',
  '‾': '\\overline',
  '▁': '\\underline',
  '⏞': '\\overbrace ',
  '\u23DF': '\\underbrace',
  '⨀': '\\bigodot ',
  "𝔄": "\\mathfrak{A}",
  "𝔅": "\\mathfrak{B}",
  "ℭ": "\\mathfrak{C}",
  "𝔇": "\\mathfrak{D}",
  "𝔈": "\\mathfrak{E}",
  "𝔉": "\\mathfrak{F}",
  "𝔊": "\\mathfrak{G}",
  "ℌ": "\\mathfrak{H}",
  "ℑ": "\\mathfrak{I}",
  "𝔍": "\\mathfrak{J}",
  "𝔎": "\\mathfrak{K}",
  "𝔏": "\\mathfrak{L}",
  "𝔐": "\\mathfrak{M}",
  "𝔑": "\\mathfrak{N}",
  "𝔒": "\\mathfrak{O}",
  "𝔓": "\\mathfrak{P}",
  "𝔔": "\\mathfrak{Q}",
  "ℜ": "\\mathfrak{R}",
  "𝔖": "\\mathfrak{S}",
  "𝔗": "\\mathfrak{T}",
  "𝔘": "\\mathfrak{U}",
  "𝔙": "\\mathfrak{V}",
  "𝔚": "\\mathfrak{W}",
  "𝔛": "\\mathfrak{X}",
  "𝔜": "\\mathfrak{Y}",
  "ℨ": "\\mathfrak{Z}",
  "𝔞": "\\mathfrak{a}",
  "𝔟": "\\mathfrak{b}",
  "𝔠": "\\mathfrak{c}",
  "𝔡": "\\mathfrak{d}",
  "𝔢": "\\mathfrak{e}",
  "𝔣": "\\mathfrak{f}",
  "𝔤": "\\mathfrak{g}",
  "𝔥": "\\mathfrak{h}",
  "𝔦": "\\mathfrak{i}",
  "𝔧": "\\mathfrak{j}",
  "𝔨": "\\mathfrak{k}",
  "𝔩": "\\mathfrak{l}",
  "𝔪": "\\mathfrak{m}",
  "𝔫": "\\mathfrak{n}",
  "𝔬": "\\mathfrak{o}",
  "𝔭": "\\mathfrak{p}",
  "𝔮": "\\mathfrak{q}",
  "𝔯": "\\mathfrak{r}",
  "𝔰": "\\mathfrak{s}",
  "𝔱": "\\mathfrak{t}",
  "𝔲": "\\mathfrak{u}",
  "𝔳": "\\mathfrak{v}",
  "𝔴": "\\mathfrak{w}",
  "𝔵": "\\mathfrak{x}",
  "𝔶": "\\mathfrak{y}",
  "𝔷": "\\mathfrak{z}",
  "𝒜": "\\mathcal{A}",
  "ℬ": "\\mathcal{B}",
  "𝒞": "\\mathcal{C}",
  "𝒟": "\\mathcal{D}",
  "ℰ": "\\mathcal{E}",
  "ℱ": "\\mathcal{F}",
  "𝒢": "\\mathcal{G}",
  "ℋ": "\\mathcal{H}",
  "ℐ": "\\mathcal{I}",
  "𝒥": "\\mathcal{J}",
  "𝒦": "\\mathcal{K}",
  "ℒ": "\\mathcal{L}",
  "ℳ": "\\mathcal{M}",
  "𝒩": "\\mathcal{N}",
  "𝒪": "\\mathcal{O}",
  "𝒫": "\\mathcal{P}",
  "𝒬": "\\mathcal{Q}",
  "ℛ": "\\mathcal{R}",
  "𝒮": "\\mathcal{S}",
  "𝒯": "\\mathcal{T}",
  "𝒰": "\\mathcal{U}",
  "𝒱": "\\mathcal{V}",
  "𝒲": "\\mathcal{W}",
  "𝒳": "\\mathcal{X}",
  "𝒴": "\\mathcal{Y}",
  "𝒵": "\\mathcal{Z}",
  /*  //"\u0023": "\\#",
   "\u0025": "\\%",
   "\u0026": "\\&amp;",
   "\u002A": "\\ast ",
   "\u0027": "\\textquotesingle ",
   "\u005E": "\\^{}",
   "\u0060": "\\textasciigrave ",
   "\u007C": "\\vert ",
   "\u007E": "\\textasciitilde ",
   "\u00A1": "\\textexclamdown ",
   "\u00A2": "\\textcent ",
   "\u00A3": "\\textsterling ",
   "\u00A4": "\\textcurrency ",
   "\u00A5": "\\textyen ",
   "\u00A7": "\\textsection ",
   "\u00A8": "\\textasciidieresis ",
   "\u00A9": "\\textcopyright ",
   "\u00AA": "\\textordfeminine ",
   "\u00AB": "\\guillemotleft ",  */
  "\u00AC": "\\lnot ",
  "\u00AD": "\\-",
  "\u00AE": "\\textregistered ",
  "\u00AF": "\\textasciimacron ",
  "\u00B0": "\\textdegree ",
  "\u00B1": "\\pm ",
  "\u00B2": "^2",
  "\u00B3": "^3",
  "\u00B4": "\\textasciiacute ",
  "\u00B5": "\\mathrm{\\mu}",
  "\u00B6": "\\textparagraph ",
  "\u00B7": "\\cdot ",
  "\u00B8": "\\c{}",
  "\u00B9": "^1",
  "⁰": "^0",
  "\u00BA": "\\textordmasculine ",
  "\u00BB": "\\guillemotright ",
  "\u00BC": "\\textonequarter ",
  "\u00BD": "\\textonehalf ",
  "\u00BE": "\\textthreequarters ",
  "\u00BF": "\\textquestiondown ",
  "\u00C0": "\\`{A}",
  "\u00C1": "\\'{A}",
  "\u00C2": "\\^{A}",
  "\u00C3": "\\~{A}",
  "\u00C4": "\\\"{A}",
  "\u00C5": "\\AA ",
  "\u00C6": "\\AE ",
  "\u00C7": "\\c{C}",
  "\u00C8": "\\`{E}",
  "\u00C9": "\\'{E}",
  "\u00CA": "\\^{E}",
  "\u00CB": "\\\"{E}",
  "\u00CC": "\\`{I}",
  "\u00CD": "\\'{I}",
  "\u00CE": "\\^{I}",
  "\u00CF": "\\\"{I}",
  "\u00D0": "\\DH ",
  "\u00D1": "\\~{N}",
  "\u00D2": "\\`{O}",
  "\u00D3": "\\'{O}",
  "\u00D4": "\\^{O}",
  "\u00D5": "\\~{O}",
  "\u00D6": "\\\"{O}",
  "\u00D7": "\\times ",
  "\u00D8": "\\O ",
  "\u00D9": "\\`{U}",
  "\u00DA": "\\'{U}",
  "\u00DB": "\\^{U}",
  "\u00DC": "\\\"{U}",
  "\u00DD": "\\'{Y}",
  "\u00DE": "\\TH ",
  "\u00DF": "\\ss ",
  "\u00E0": "\\`{a}",
  "\u00E1": "\\'{a}",
  "\u00E2": "\\^{a}",
  "\u00E3": "\\~{a}",
  "\u00E4": "\\\"{a}",
  "\u00E5": "\\aa ",
  "\u00E6": "\\ae ",
  "\u00E7": "\\c{c}",
  "\u00E8": "\\`{e}",
  "\u00E9": "\\'{e}",
  "\u00EA": "\\^{e}",
  "\u00EB": "\\\"{e}",
  "\u00EC": "\\`{\\i}",
  "\u00ED": "\\'{\\i}",
  "\u00EE": "\\^{\\i}",
  "\u00EF": "\\\"{\\i}",
  "\u00F0": "\\dh ",
  "\u00F1": "\\~{n}",
  "\u00F2": "\\`{o}",
  "\u00F3": "\\'{o}",
  "\u00F4": "\\^{o}",
  "\u00F5": "\\~{o}",
  "\u00F6": "\\\"{o}",
  "\u00F7": "\\div ",
  "\u00F8": "\\o ",
  "\u00F9": "\\`{u}",
  "\u00FA": "\\'{u}",
  "\u00FB": "\\^{u}",
  "\u00FC": "\\\"{u}",
  "\u00FD": "\\'{y}",
  "\u00FE": "\\th ",
  "\u00FF": "\\\"{y}",
  "\u0100": "\\={A}",
  "\u0101": "\\={a}",
  "\u0102": "\\u{A}",
  "\u0103": "\\u{a}",
  "\u0104": "\\k{A}",
  "\u0105": "\\k{a}",
  "\u0106": "\\'{C}",
  "\u0107": "\\'{c}",
  "\u0108": "\\^{C}",
  "\u0109": "\\^{c}",
  "\u010A": "\\.{C}",
  "\u010B": "\\.{c}",
  "\u010C": "\\v{C}",
  "\u010D": "\\v{c}",
  "\u010E": "\\v{D}",
  "\u010F": "\\v{d}",
  "\u0110": "\\DJ ",
  "\u0111": "\\dj ",
  "\u0112": "\\={E}",
  "\u0113": "\\={e}",
  "\u0114": "\\u{E}",
  "\u0115": "\\u{e}",
  "\u0116": "\\.{E}",
  "\u0117": "\\.{e}",
  "\u0118": "\\k{E}",
  "\u0119": "\\k{e}",
  "\u011A": "\\v{E}",
  "\u011B": "\\v{e}",
  "\u011C": "\\^{G}",
  "\u011D": "\\^{g}",
  "\u011E": "\\u{G}",
  "\u011F": "\\u{g}",
  "\u0120": "\\.{G}",
  "\u0121": "\\.{g}",
  "\u0122": "\\c{G}",
  "\u0123": "\\c{g}",
  "\u0124": "\\^{H}",
  "\u0125": "\\^{h}",
  "\u0126": "{\\fontencoding{LELA}\\selectfont\\char40}",
  "\u0127": "\\Elzxh ",
  "\u0128": "\\~{I}",
  "\u0129": "\\~{\\i}",
  "\u012A": "\\={I}",
  "\u012B": "\\={\\i}",
  "\u012C": "\\u{I}",
  "\u012D": "\\u{\\i}",
  "\u012E": "\\k{I}",
  "\u012F": "\\k{i}",
  "\u0130": "\\.{I}",
  "\u0131": "\\i ",
  "\u0132": "IJ",
  "\u0133": "ij",
  "\u0134": "\\^{J}",
  "\u0135": "\\^{\\j}",
  "\u0136": "\\c{K}",
  "\u0137": "\\c{k}",
  "\u0138": "{\\fontencoding{LELA}\\selectfont\\char91}",
  "\u0139": "\\'{L}",
  "\u013A": "\\'{l}",
  "\u013B": "\\c{L}",
  "\u013C": "\\c{l}",
  "\u013D": "\\v{L}",
  "\u013E": "\\v{l}",
  "\u013F": "{\\fontencoding{LELA}\\selectfont\\char201}",
  "\u0140": "{\\fontencoding{LELA}\\selectfont\\char202}",
  "\u0141": "\\L ",
  "\u0142": "\\l ",
  "\u0143": "\\'{N}",
  "\u0144": "\\'{n}",
  "\u0145": "\\c{N}",
  "\u0146": "\\c{n}",
  "\u0147": "\\v{N}",
  "\u0148": "\\v{n}",
  "\u0149": "'n",
  "\u014A": "\\NG ",
  "\u014B": "\\ng ",
  "\u014C": "\\={O}",
  "\u014D": "\\={o}",
  "\u014E": "\\u{O}",
  "\u014F": "\\u{o}",
  "\u0150": "\\H{O}",
  "\u0151": "\\H{o}",
  "\u0152": "\\OE ",
  "\u0153": "\\oe ",
  "\u0154": "\\'{R}",
  "\u0155": "\\'{r}",
  "\u0156": "\\c{R}",
  "\u0157": "\\c{r}",
  "\u0158": "\\v{R}",
  "\u0159": "\\v{r}",
  "\u015A": "\\'{S}",
  "\u015B": "\\'{s}",
  "\u015C": "\\^{S}",
  "\u015D": "\\^{s}",
  "\u015E": "\\c{S}",
  "\u015F": "\\c{s}",
  "\u0160": "\\v{S}",
  "\u0161": "\\v{s}",
  "\u0162": "\\c{T}",
  "\u0163": "\\c{t}",
  "\u0164": "\\v{T}",
  "\u0165": "\\v{t}",
  "\u0166": "{\\fontencoding{LELA}\\selectfont\\char47}",
  "\u0167": "{\\fontencoding{LELA}\\selectfont\\char63}",
  "\u0168": "\\~{U}",
  "\u0169": "\\~{u}",
  "\u016A": "\\={U}",
  "\u016B": "\\={u}",
  "\u016C": "\\u{U}",
  "\u016D": "\\u{u}",
  "\u016E": "\\r{U}",
  "\u016F": "\\r{u}",
  "\u0170": "\\H{U}",
  "\u0171": "\\H{u}",
  "\u0172": "\\k{U}",
  "\u0173": "\\k{u}",
  "\u0174": "\\^{W}",
  "\u0175": "\\^{w}",
  "\u0176": "\\^{Y}",
  "\u0177": "\\^{y}",
  "\u0178": "\\\"{Y}",
  "\u0179": "\\'{Z}",
  "\u017A": "\\'{z}",
  "\u017B": "\\.{Z}",
  "\u017C": "\\.{z}",
  "\u017D": "\\v{Z}",
  "\u017E": "\\v{z}",
  "\u0195": "\\texthvlig ",
  "\u019E": "\\textnrleg ",
  "\u01AA": "\\eth ",
  "\u01BA": "{\\fontencoding{LELA}\\selectfont\\char195}",
  "\u01C2": "\\textdoublepipe ",
  "\u01F5": "\\'{g}",
  "\u0250": "\\Elztrna ",
  "\u0252": "\\Elztrnsa ",
  "\u0254": "\\Elzopeno ",
  "\u0256": "\\Elzrtld ",
  "\u0258": "{\\fontencoding{LEIP}\\selectfont\\char61}",
  "\u0259": "\\Elzschwa ",
  "\u025B": "\\varepsilon ",
  "\u0263": "\\Elzpgamma ",
  "\u0264": "\\Elzpbgam ",
  "\u0265": "\\Elztrnh ",
  "\u026C": "\\Elzbtdl ",
  "\u026D": "\\Elzrtll ",
  "\u026F": "\\Elztrnm ",
  "\u0270": "\\Elztrnmlr ",
  "\u0271": "\\Elzltlmr ",
  "\u0272": "\\Elzltln ",
  "\u0273": "\\Elzrtln ",
  "\u0277": "\\Elzclomeg ",
  "\u0278": "\\textphi ",
  "\u0279": "\\Elztrnr ",
  "\u027A": "\\Elztrnrl ",
  "\u027B": "\\Elzrttrnr ",
  "\u027C": "\\Elzrl ",
  "\u027D": "\\Elzrtlr ",
  "\u027E": "\\Elzfhr ",
  "\u027F": "{\\fontencoding{LEIP}\\selectfont\\char202}",
  "\u0282": "\\Elzrtls ",
  "\u0283": "\\Elzesh ",
  "\u0287": "\\Elztrnt ",
  "\u0288": "\\Elzrtlt ",
  "\u028A": "\\Elzpupsil ",
  "\u028B": "\\Elzpscrv ",
  "\u028C": "\\Elzinvv ",
  "\u028D": "\\Elzinvw ",
  "\u028E": "\\Elztrny ",
  "\u0290": "\\Elzrtlz ",
  "\u0292": "\\Elzyogh ",
  "\u0294": "\\Elzglst ",
  "\u0295": "\\Elzreglst ",
  "\u0296": "\\Elzinglst ",
  "\u029E": "\\textturnk ",
  "\u02A4": "\\Elzdyogh ",
  "\u02A7": "\\Elztesh ",
  "\u02C7": "\\textasciicaron ",
  "\u02C8": "\\Elzverts ",
  "\u02CC": "\\Elzverti ",
  "\u02D0": "\\Elzlmrk ",
  "\u02D1": "\\Elzhlmrk ",
  "\u02D2": "\\Elzsbrhr ",
  "\u02D3": "\\Elzsblhr ",
  "\u02D4": "\\Elzrais ",
  "\u02D5": "\\Elzlow ",
  "\u02D8": "\\textasciibreve ",
  "\u02D9": "\\textperiodcentered ",
  "\u02DA": "\\r{}",
  "\u02DB": "\\k{}",
  "\u02DC": "\\texttildelow ",
  "\u02DD": "\\H{}",
  "\u02E5": "\\tone{55}",
  "\u02E6": "\\tone{44}",
  "\u02E7": "\\tone{33}",
  "\u02E8": "\\tone{22}",
  "\u02E9": "\\tone{11}",
  "\u0300": "\\grave",
  "\u0301": "\\acute",
  "\u0302": "\\hat",
  "\u0303": "\\tilde",
  "\u0304": "\\bar",
  "\u0305": "\\overline",
  "\u0306": "\\breve",
  "\u0307": "\\dot",
  "\u0308": "\\ddot",
  "\u030A": "\\mathring",
  "\u030C": "\\check",
  "\u0321": "\\Elzpalh ",
  "\u0322": "\\Elzrh ",
  "\u0327": "\\c",
  "\u0328": "\\k",
  "\u032A": "\\Elzsbbrg ",
  "\u032B": "{\\fontencoding{LECO}\\selectfont\\char203}",
  "\u032F": "{\\fontencoding{LECO}\\selectfont\\char207}",
  "\u0330": "\\wideutilde",
  //"\u0331": "\\underbar",
  "\u0332": "\\underline",
  '⟮': '\\lgroup',
  '⟯': '\\rgroup',
  "\u0335": "\\Elzxl ",
  "\u0336": "\\Elzbar ",
  "\u0337": "{\\fontencoding{LECO}\\selectfont\\char215}",
  "\u0338": "{\\fontencoding{LECO}\\selectfont\\char216}",
  "\u033A": "{\\fontencoding{LECO}\\selectfont\\char218}",
  "\u033B": "{\\fontencoding{LECO}\\selectfont\\char219}",
  "\u033C": "{\\fontencoding{LECO}\\selectfont\\char220}",
  "\u033D": "{\\fontencoding{LECO}\\selectfont\\char221}",
  "\u0361": "{\\fontencoding{LECO}\\selectfont\\char225}",
  "\u0386": "\\'{A}",
  "\u0388": "\\'{E}",
  "\u0389": "\\'{H}",
  "\u038A": "\\'{}{I}",
  "\u038C": "\\'{}O",
  "\u038E": "\\mathrm{'Y}",
  "\u038F": "\\mathrm{'\\Omega}",
  "\u0390": "\\acute{\\ddot{\\iota}}",
  "\u0391": "\\Alpha ",
  "\u0392": "\\Beta ",
  "\u0393": "\\Gamma ",
  "\u0394": "\\Delta ",
  "\u0395": "\\Epsilon ",
  "\u0396": "\\Zeta ",
  "\u0397": "\\Eta ",
  "\u0398": "\\Theta ",
  "\u0399": "\\Iota ",
  "\u039A": "\\Kappa ",
  "\u039B": "\\Lambda ",
  "\u039E": "\\Xi ",
  "\u03A0": "\\Pi ",
  "\u03A1": "\\Rho ",
  "\u03A3": "\\Sigma ",
  "\u03A4": "\\Tau ",
  "\u03A5": "\\Upsilon ",
  "\u03A6": "\\Phi ",
  "\u03A7": "\\Chi ",
  "\u03A8": "\\Psi ",
  "\u03A9": "\\Omega ",
  "\u03AA": "\\mathrm{\\ddot{I}}",
  "\u03AB": "\\mathrm{\\ddot{Y}}",
  "\u03AC": "\\'{$\\alpha$}",
  "\u03AD": "\\acute{\\epsilon}",
  "\u03AE": "\\acute{\\eta}",
  "\u03AF": "\\acute{\\iota}",
  "\u03B0": "\\acute{\\ddot{\\upsilon}}",
  "\u03B1": "\\alpha ",
  "\u03B2": "\\beta ",
  "\u03B3": "\\gamma ",
  "\u03B4": "\\delta ",
  "\u03B5": "\\epsilon ",
  "\u03B6": "\\zeta ",
  "\u03B7": "\\eta ",
  "\u03B8": "\\texttheta ",
  "\u03B9": "\\iota ",
  "\u03BA": "\\kappa ",
  "\u03BB": "\\lambda ",
  "\u03BC": "\\mu ",
  "\u03BD": "\\nu ",
  "\u03BE": "\\xi ",
  "\u03C0": "\\pi ",
  "\u03C1": "\\rho ",
  "\u03C2": "\\varsigma ",
  "\u03C3": "\\sigma ",
  "\u03C4": "\\tau ",
  "\u03C5": "\\upsilon ",
  "\u03C6": "\\varphi ",
  "\u03C7": "\\chi ",
  "\u03C8": "\\psi ",
  "\u03C9": "\\omega ",
  "\u03CA": "\\ddot{\\iota}",
  "\u03CB": "\\ddot{\\upsilon}",
  "\u03CC": "\\'{o}",
  "\u03CD": "\\acute{\\upsilon}",
  "\u03CE": "\\acute{\\omega}",
  "\u03D0": "\\Pisymbol{ppi022}{87}",
  "\u03D1": "\\textvartheta ",
  "\u03D2": "\\Upsilon ",
  "\u03D5": "\\phi ",
  "\u03D6": "\\varpi ",
  "\u03DA": "\\Stigma ",
  "\u03DC": "\\Digamma ",
  "\u03DD": "\\digamma ",
  "\u03DE": "\\Koppa ",
  "\u03E0": "\\Sampi ",
  "\u03F0": "\\varkappa ",
  "\u03F1": "\\varrho ",
  "\u03F4": "\\textTheta ",
  "\u03F6": "\\backepsilon ",
  "\u0401": "\\cyrchar\\CYRYO ",
  "\u0402": "\\cyrchar\\CYRDJE ",
  "\u0403": "\\cyrchar{\\'\\CYRG}",
  "\u0404": "\\cyrchar\\CYRIE ",
  "\u0405": "\\cyrchar\\CYRDZE ",
  "\u0406": "\\cyrchar\\CYRII ",
  "\u0407": "\\cyrchar\\CYRYI ",
  "\u0408": "\\cyrchar\\CYRJE ",
  "\u0409": "\\cyrchar\\CYRLJE ",
  "\u040A": "\\cyrchar\\CYRNJE ",
  "\u040B": "\\cyrchar\\CYRTSHE ",
  "\u040C": "\\cyrchar{\\'\\CYRK}",
  "\u040E": "\\cyrchar\\CYRUSHRT ",
  "\u040F": "\\cyrchar\\CYRDZHE ",
  "\u0410": "\\cyrchar\\CYRA ",
  "\u0411": "\\cyrchar\\CYRB ",
  "\u0412": "\\cyrchar\\CYRV ",
  "\u0413": "\\cyrchar\\CYRG ",
  "\u0414": "\\cyrchar\\CYRD ",
  "\u0415": "\\cyrchar\\CYRE ",
  "\u0416": "\\cyrchar\\CYRZH ",
  "\u0417": "\\cyrchar\\CYRZ ",
  "\u0418": "\\cyrchar\\CYRI ",
  "\u0419": "\\cyrchar\\CYRISHRT ",
  "\u041A": "\\cyrchar\\CYRK ",
  "\u041B": "\\cyrchar\\CYRL ",
  "\u041C": "\\cyrchar\\CYRM ",
  "\u041D": "\\cyrchar\\CYRN ",
  "\u041E": "\\cyrchar\\CYRO ",
  "\u041F": "\\cyrchar\\CYRP ",
  "\u0420": "\\cyrchar\\CYRR ",
  "\u0421": "\\cyrchar\\CYRS ",
  "\u0422": "\\cyrchar\\CYRT ",
  "\u0423": "\\cyrchar\\CYRU ",
  "\u0424": "\\cyrchar\\CYRF ",
  "\u0425": "\\cyrchar\\CYRH ",
  "\u0426": "\\cyrchar\\CYRC ",
  "\u0427": "\\cyrchar\\CYRCH ",
  "\u0428": "\\cyrchar\\CYRSH ",
  "\u0429": "\\cyrchar\\CYRSHCH ",
  "\u042A": "\\cyrchar\\CYRHRDSN ",
  "\u042B": "\\cyrchar\\CYRERY ",
  "\u042C": "\\cyrchar\\CYRSFTSN ",
  "\u042D": "\\cyrchar\\CYREREV ",
  "\u042E": "\\cyrchar\\CYRYU ",
  "\u042F": "\\cyrchar\\CYRYA ",
  "\u0430": "\\cyrchar\\cyra ",
  "\u0431": "\\cyrchar\\cyrb ",
  "\u0432": "\\cyrchar\\cyrv ",
  "\u0433": "\\cyrchar\\cyrg ",
  "\u0434": "\\cyrchar\\cyrd ",
  "\u0435": "\\cyrchar\\cyre ",
  "\u0436": "\\cyrchar\\cyrzh ",
  "\u0437": "\\cyrchar\\cyrz ",
  "\u0438": "\\cyrchar\\cyri ",
  "\u0439": "\\cyrchar\\cyrishrt ",
  "\u043A": "\\cyrchar\\cyrk ",
  "\u043B": "\\cyrchar\\cyrl ",
  "\u043C": "\\cyrchar\\cyrm ",
  "\u043D": "\\cyrchar\\cyrn ",
  "\u043E": "\\cyrchar\\cyro ",
  "\u043F": "\\cyrchar\\cyrp ",
  "\u0440": "\\cyrchar\\cyrr ",
  "\u0441": "\\cyrchar\\cyrs ",
  "\u0442": "\\cyrchar\\cyrt ",
  "\u0443": "\\cyrchar\\cyru ",
  "\u0444": "\\cyrchar\\cyrf ",
  "\u0445": "\\cyrchar\\cyrh ",
  "\u0446": "\\cyrchar\\cyrc ",
  "\u0447": "\\cyrchar\\cyrch ",
  "\u0448": "\\cyrchar\\cyrsh ",
  "\u0449": "\\cyrchar\\cyrshch ",
  "\u044A": "\\cyrchar\\cyrhrdsn ",
  "\u044B": "\\cyrchar\\cyrery ",
  "\u044C": "\\cyrchar\\cyrsftsn ",
  "\u044D": "\\cyrchar\\cyrerev ",
  "\u044E": "\\cyrchar\\cyryu ",
  "\u044F": "\\cyrchar\\cyrya ",
  "\u0451": "\\cyrchar\\cyryo ",
  "\u0452": "\\cyrchar\\cyrdje ",
  "\u0453": "\\cyrchar{\\'\\cyrg}",
  "\u0454": "\\cyrchar\\cyrie ",
  "\u0455": "\\cyrchar\\cyrdze ",
  "\u0456": "\\cyrchar\\cyrii ",
  "\u0457": "\\cyrchar\\cyryi ",
  "\u0458": "\\cyrchar\\cyrje ",
  "\u0459": "\\cyrchar\\cyrlje ",
  "\u045A": "\\cyrchar\\cyrnje ",
  "\u045B": "\\cyrchar\\cyrtshe ",
  "\u045C": "\\cyrchar{\\'\\cyrk}",
  "\u045E": "\\cyrchar\\cyrushrt ",
  "\u045F": "\\cyrchar\\cyrdzhe ",
  "\u0460": "\\cyrchar\\CYROMEGA ",
  "\u0461": "\\cyrchar\\cyromega ",
  "\u0462": "\\cyrchar\\CYRYAT ",
  "\u0464": "\\cyrchar\\CYRIOTE ",
  "\u0465": "\\cyrchar\\cyriote ",
  "\u0466": "\\cyrchar\\CYRLYUS ",
  "\u0467": "\\cyrchar\\cyrlyus ",
  "\u0468": "\\cyrchar\\CYRIOTLYUS ",
  "\u0469": "\\cyrchar\\cyriotlyus ",
  "\u046A": "\\cyrchar\\CYRBYUS ",
  "\u046C": "\\cyrchar\\CYRIOTBYUS ",
  "\u046D": "\\cyrchar\\cyriotbyus ",
  "\u046E": "\\cyrchar\\CYRKSI ",
  "\u046F": "\\cyrchar\\cyrksi ",
  "\u0470": "\\cyrchar\\CYRPSI ",
  "\u0471": "\\cyrchar\\cyrpsi ",
  "\u0472": "\\cyrchar\\CYRFITA ",
  "\u0474": "\\cyrchar\\CYRIZH ",
  "\u0478": "\\cyrchar\\CYRUK ",
  "\u0479": "\\cyrchar\\cyruk ",
  "\u047A": "\\cyrchar\\CYROMEGARND ",
  "\u047B": "\\cyrchar\\cyromegarnd ",
  "\u047C": "\\cyrchar\\CYROMEGATITLO ",
  "\u047D": "\\cyrchar\\cyromegatitlo ",
  "\u047E": "\\cyrchar\\CYROT ",
  "\u047F": "\\cyrchar\\cyrot ",
  "\u0480": "\\cyrchar\\CYRKOPPA ",
  "\u0481": "\\cyrchar\\cyrkoppa ",
  "\u0482": "\\cyrchar\\cyrthousands ",
  "\u0488": "\\cyrchar\\cyrhundredthousands ",
  "\u0489": "\\cyrchar\\cyrmillions ",
  "\u048C": "\\cyrchar\\CYRSEMISFTSN ",
  "\u048D": "\\cyrchar\\cyrsemisftsn ",
  "\u048E": "\\cyrchar\\CYRRTICK ",
  "\u048F": "\\cyrchar\\cyrrtick ",
  "\u0490": "\\cyrchar\\CYRGUP ",
  "\u0491": "\\cyrchar\\cyrgup ",
  "\u0492": "\\cyrchar\\CYRGHCRS ",
  "\u0493": "\\cyrchar\\cyrghcrs ",
  "\u0494": "\\cyrchar\\CYRGHK ",
  "\u0495": "\\cyrchar\\cyrghk ",
  "\u0496": "\\cyrchar\\CYRZHDSC ",
  "\u0497": "\\cyrchar\\cyrzhdsc ",
  "\u0498": "\\cyrchar\\CYRZDSC ",
  "\u0499": "\\cyrchar\\cyrzdsc ",
  "\u049A": "\\cyrchar\\CYRKDSC ",
  "\u049B": "\\cyrchar\\cyrkdsc ",
  "\u049C": "\\cyrchar\\CYRKVCRS ",
  "\u049D": "\\cyrchar\\cyrkvcrs ",
  "\u049E": "\\cyrchar\\CYRKHCRS ",
  "\u049F": "\\cyrchar\\cyrkhcrs ",
  "\u04A0": "\\cyrchar\\CYRKBEAK ",
  "\u04A1": "\\cyrchar\\cyrkbeak ",
  "\u04A2": "\\cyrchar\\CYRNDSC ",
  "\u04A3": "\\cyrchar\\cyrndsc ",
  "\u04A4": "\\cyrchar\\CYRNG ",
  "\u04A5": "\\cyrchar\\cyrng ",
  "\u04A6": "\\cyrchar\\CYRPHK ",
  "\u04A7": "\\cyrchar\\cyrphk ",
  "\u04A8": "\\cyrchar\\CYRABHHA ",
  "\u04A9": "\\cyrchar\\cyrabhha ",
  "\u04AA": "\\cyrchar\\CYRSDSC ",
  "\u04AB": "\\cyrchar\\cyrsdsc ",
  "\u04AC": "\\cyrchar\\CYRTDSC ",
  "\u04AD": "\\cyrchar\\cyrtdsc ",
  "\u04AE": "\\cyrchar\\CYRY ",
  "\u04AF": "\\cyrchar\\cyry ",
  "\u04B0": "\\cyrchar\\CYRYHCRS ",
  "\u04B1": "\\cyrchar\\cyryhcrs ",
  "\u04B2": "\\cyrchar\\CYRHDSC ",
  "\u04B3": "\\cyrchar\\cyrhdsc ",
  "\u04B4": "\\cyrchar\\CYRTETSE ",
  "\u04B5": "\\cyrchar\\cyrtetse ",
  "\u04B6": "\\cyrchar\\CYRCHRDSC ",
  "\u04B7": "\\cyrchar\\cyrchrdsc ",
  "\u04B8": "\\cyrchar\\CYRCHVCRS ",
  "\u04B9": "\\cyrchar\\cyrchvcrs ",
  "\u04BA": "\\cyrchar\\CYRSHHA ",
  "\u04BB": "\\cyrchar\\cyrshha ",
  "\u04BC": "\\cyrchar\\CYRABHCH ",
  "\u04BD": "\\cyrchar\\cyrabhch ",
  "\u04BE": "\\cyrchar\\CYRABHCHDSC ",
  "\u04BF": "\\cyrchar\\cyrabhchdsc ",
  "\u04C0": "\\cyrchar\\CYRpalochka ",
  "\u04C3": "\\cyrchar\\CYRKHK ",
  "\u04C4": "\\cyrchar\\cyrkhk ",
  "\u04C7": "\\cyrchar\\CYRNHK ",
  "\u04C8": "\\cyrchar\\cyrnhk ",
  "\u04CB": "\\cyrchar\\CYRCHLDSC ",
  "\u04CC": "\\cyrchar\\cyrchldsc ",
  "\u04D4": "\\cyrchar\\CYRAE ",
  "\u04D5": "\\cyrchar\\cyrae ",
  "\u04D8": "\\cyrchar\\CYRSCHWA ",
  "\u04D9": "\\cyrchar\\cyrschwa ",
  "\u04E0": "\\cyrchar\\CYRABHDZE ",
  "\u04E1": "\\cyrchar\\cyrabhdze ",
  "\u04E8": "\\cyrchar\\CYROTLD ",
  "\u04E9": "\\cyrchar\\cyrotld ",
  "\u2002": "\\hspace{0.6em}",
  "\u2003": "\\hspace{1em}",
  "\u2004": "\\hspace{0.33em}",
  "\u2005": "\\hspace{0.25em}",
  "\u2006": "\\hspace{0.166em}",
  "\u2007": "\\hphantom{0}",
  "\u2008": "\\hphantom{,}",
  "\u2009": "\\hspace{0.167em}",
  "\u2009-0200A-0200A": "\\;",
  "\u200A": "\\mkern1mu ",
  "\u2013": "\\textendash ",
  "\u2014": "\\textemdash ",
  "\u2015": "\\rule{1em}{1pt}",
  "\u2016": "\\Vert ",
  "\u201B": "\\Elzreapos ",
  "\u201C": "\\textquotedblleft ",
  "\u201D": "\\textquotedblright ",
  "\u201E": ",,",
  "\u2020": "\\textdagger ",
  "\u2021": "\\textdaggerdbl ",
  "\u2022": "\\textbullet ",
  "\u2025": "..",
  "\u2026": "\\ldots ",
  "\u2030": "\\textperthousand ",
  "\u2031": "\\textpertenthousand ",
  "\u2032": "{'}",
  "\u2033": "{''}",
  "\u2034": "{'''}",
  "\u2035": "\\backprime ",
  "\u2039": "\\guilsinglleft ",
  "\u203A": "\\guilsinglright ",
  "\u2057": "''''",
  "\u205F": "\\mkern4mu ",
  "\u2060": "\\nolinebreak ",
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
  "\u20A7": "\\ensuremath{\\Elzpes}",
  "\u20AC": "\\mbox{\\texteuro} ",
  //"\u20d0" :"\\leftharpoonaccent",
  //"\u20D1": "\\rightharpoonaccent",
  "\u20D2": "\\vertoverlay",
  "\u20D6": "\\overleftarrow",
  "\u20D7": "\\vec",
  "\u20DB": "\\dddot",
  "\u20DC": "\\ddddot",
  '\u20E1': '\\overleftrightarrow',
  //'\u20E7':'\\annuity',
  //'\u20E8':'\\threeunderdot',
  //'\u20E9':'\\widebridgeabove',
  //'\u20EC':'\\underrightharpoondown',
  //'\u20ED':'\\underleftharpoondown',
  '\u20EE': '\\underleftarrow',
  '\u20EF': '\\underrightarrow',
  //'\u20f0': '\\asteraccent',
  "\u2102": "\\Bbb{C}",
  "\u210A": "\\mathcal{g}",
  "\u210D": "\\Bbb{H}",
  "\u210F": "\\hslash ",
  "\u2113": "\\ell ",
  "\u2115": "\\Bbb{N}",
  "\u2116": "\\cyrchar\\textnumero ",
  "\u2118": "\\wp ",
  "\u2119": "\\Bbb{P}",
  "\u211A": "\\Bbb{Q}",
  "\u211D": "\\Bbb{R}",
  "\u211E": "\\Elzxrat ",
  "\u2122": "\\texttrademark ",
  "\u2124": "\\Bbb{Z}",
  "\u2126": "\\Omega ",
  "\u2127": "\\mho ",
  "\u2129": "\\ElsevierGlyph{2129}",
  "\u212B": "\\AA ",
  "\u212F": "\\mathcal{e}",
  "\u2134": "\\mathcal{o}",
  "\u2135": "\\aleph ",
  "\u2136": "\\beth ",
  "\u2137": "\\gimel ",
  "\u2138": "\\daleth ",
  "\u2153": "\\textfrac{1}{3}",
  "\u2154": "\\textfrac{2}{3}",
  "\u2155": "\\textfrac{1}{5}",
  "\u2156": "\\textfrac{2}{5}",
  "\u2157": "\\textfrac{3}{5}",
  "\u2158": "\\textfrac{4}{5}",
  "\u2159": "\\textfrac{1}{6}",
  "\u215A": "\\textfrac{5}{6}",
  "\u215B": "\\textfrac{1}{8}",
  "\u215C": "\\textfrac{3}{8}",
  "\u215D": "\\textfrac{5}{8}",
  "\u215E": "\\textfrac{7}{8}",
  "\u2190": "\\leftarrow ",
  "\u2191": "\\uparrow ",
  "\u2192": "\\rightarrow ",
  "\u2193": "\\downarrow ",
  "\u2194": "\\leftrightarrow ",
  "\u2195": "\\updownarrow ",
  "\u2196": "\\nwarrow ",
  "\u2197": "\\nearrow ",
  "\u2198": "\\searrow ",
  "\u2199": "\\swarrow ",
  "\u219A": "\\nleftarrow ",
  "\u219B": "\\nrightarrow ",
  "\u219C": "\\arrowwaveright ",
  "\u219D": "\\arrowwaveright ",
  "\u219E": "\\twoheadleftarrow ",
  "\u21A0": "\\twoheadrightarrow ",
  "\u21A2": "\\leftarrowtail ",
  "\u21A3": "\\rightarrowtail ",
  "\u21A6": "\\mapsto ",
  "\u21A9": "\\hookleftarrow ",
  "\u21AA": "\\hookrightarrow ",
  "\u21AB": "\\looparrowleft ",
  "\u21AC": "\\looparrowright ",
  "\u21AD": "\\leftrightsquigarrow ",
  "\u21AE": "\\nleftrightarrow ",
  "\u21B0": "\\Lsh ",
  "\u21B1": "\\Rsh ",
  "\u21B3": "\\ElsevierGlyph{21B3}",
  "\u21B6": "\\curvearrowleft ",
  "\u21B7": "\\curvearrowright ",
  "\u21BA": "\\circlearrowleft ",
  "\u21BB": "\\circlearrowright ",
  "\u21BC": "\\leftharpoonup ",
  "\u21BD": "\\leftharpoondown ",
  "\u21BE": "\\upharpoonright ",
  "\u21BF": "\\upharpoonleft ",
  "\u21C0": "\\rightharpoonup ",
  "\u21C1": "\\rightharpoondown ",
  "\u21C2": "\\downharpoonright ",
  "\u21C3": "\\downharpoonleft ",
  "\u21C4": "\\rightleftarrows ",
  "\u21C5": "\\dblarrowupdown ",
  "\u21C6": "\\leftrightarrows ",
  "\u21C7": "\\leftleftarrows ",
  "\u21C8": "\\upuparrows ",
  "\u21C9": "\\rightrightarrows ",
  "\u21CA": "\\downdownarrows ",
  "\u21CB": "\\leftrightharpoons ",
  "\u21CC": "\\rightleftharpoons ",
  "\u21CD": "\\nLeftarrow ",
  "\u21CE": "\\nLeftrightarrow ",
  "\u21CF": "\\nRightarrow ",
  "\u21D0": "\\Leftarrow ",
  "\u21D1": "\\Uparrow ",
  "\u21D2": "\\Rightarrow ",
  "\u21D3": "\\Downarrow ",
  "\u21D4": "\\Leftrightarrow ",
  "\u21D5": "\\Updownarrow ",
  "\u21DA": "\\Lleftarrow ",
  "\u21DB": "\\Rrightarrow ",
  "\u21DD": "\\rightsquigarrow ",
  "\u21F5": "\\DownArrowUpArrow ",
  "\u2200": "\\forall ",
  "\u2201": "\\complement ",
  "\u2202": "\\partial ",
  "\u2203": "\\exists ",
  "\u2204": "\\nexists ",
  "\u2205": "\\varnothing ",
  "\u2207": "\\nabla ",
  "\u2208": "\\in ",
  "\u2209": "\\not\\in ",
  "\u220B": "\\ni ",
  "\u220C": "\\not\\ni ",
  "\u220F": "\\prod ",
  "\u2210": "\\coprod ",
  "\u2211": "\\sum ",
  "\u2213": "\\mp ",
  "\u2214": "\\dotplus ",
  "\u2216": "\\setminus ",
  "\u2217": "{_\\ast}",
  "\u2218": "\\circ ",
  "\u2219": "\\bullet ",
  "\u221A": "\\sqrt",
  "∛": "\\sqrt[3]",
  "∜": "\\sqrt[4]",
  "\u221D": "\\propto ",
  "\u221E": "\\infty ",
  "\u221F": "\\rightangle ",
  "\u2220": "\\angle ",
  "\u2221": "\\measuredangle ",
  "\u2222": "\\sphericalangle ",
  "\u2223": "\\mid ",
  "\u2224": "\\nmid ",
  "\u2225": "\\parallel ",
  "\u2226": "\\nparallel ",
  "\u2227": "\\wedge ",
  "\u2228": "\\vee ",
  "\u2229": "\\cap ",
  "\u222A": "\\cup ",
  "\u222B": "\\int ",
  "\u222C": "\\int\\!\\int ",
  "\u222D": "\\int\\!\\int\\!\\int ",
  "\u222E": "\\oint ",
  "\u222F": "\\surfintegral ",
  "\u2230": "\\volintegral ",
  "\u2231": "\\clwintegral ",
  "\u2232": "\\ElsevierGlyph{2232}",
  "\u2233": "\\ElsevierGlyph{2233}",
  "\u2234": "\\therefore ",
  "\u2235": "\\because ",
  "\u2236": ":",
 // "\u2237": "\\Colon ",
  "\u2238": "\\ElsevierGlyph{2238}",
  "\u223A": "\\mathbin{{:}\\!\\!{-}\\!\\!{:}}",
  "\u223B": "\\homothetic ",
  "\u223C": "\\sim ",
  "\u223D": "\\backsim ",
  "\u223E": "\\lazysinv ",
  "\u2240": "\\wr ",
  "\u2241": "\\not\\sim ",
  "\u2242": "\\ElsevierGlyph{2242}",
  "\u2242-00338": "\\NotEqualTilde ",
  "\u2243": "\\simeq ",
  "\u2244": "\\not\\simeq ",
  "\u2245": "\\cong ",
  "\u2246": "\\approxnotequal ",
  "\u2247": "\\not\\cong ",
  "\u2248": "\\approx ",
  "\u2249": "\\not\\approx ",
  "\u224A": "\\approxeq ",
  "\u224B": "\\tildetrpl ",
  "\u224B-00338": "\\not\\apid ",
  "\u224C": "\\allequal ",
  "\u224D": "\\asymp ",
  "\u224E": "\\Bumpeq ",
  "\u224E-00338": "\\NotHumpDownHump ",
  "\u224F": "\\bumpeq ",
  "\u224F-00338": "\\NotHumpEqual ",
  "\u2250": "\\doteq ",
  "\u2250-00338": "\\not\\doteq",
  "\u2251": "\\doteqdot ",
  "\u2252": "\\fallingdotseq ",
  "\u2253": "\\risingdotseq ",
  "\u2254": ":=",
  "\u2255": "=:",
  "\u2256": "\\eqcirc ",
  "\u2257": "\\circeq ",
  "\u2259": "\\estimates ",
  "\u225A": "\\ElsevierGlyph{225A}",
  "\u225B": "\\starequal ",
  "\u225C": "\\triangleq ",
  "\u2260": "\\neq ",
  "\u2261": "\\equiv ",
  "\u2262": "\\not\\equiv ",
  "\u2264": "\\leq ",
  "\u2265": "\\geq ",
  "\u2266": "\\leqq ",
  "\u2267": "\\geqq ",
  "\u2268": "\\lneqq ",
  "\u2268-0FE00": "\\lvertneqq ",
  "\u2269": "\\gneqq ",
  "\u2269-0FE00": "\\gvertneqq ",
  "\u226A": "\\ll ",
  "\u226A-00338": "\\NotLessLess ",
  "\u226B": "\\gg ",
  "\u226B-00338": "\\NotGreaterGreater ",
  "\u226C": "\\between ",
  "\u226D": "\\not\\kern-0.3em\\times ",
  "\u226E": "\\not&lt;",
  "\u226F": "\\not&gt;",
  "\u2270": "\\not\\leq ",
  "\u2271": "\\not\\geq ",
  "\u2272": "\\lessequivlnt ",
  "\u2273": "\\greaterequivlnt ",
  "\u2274": "\\ElsevierGlyph{2274}",
  "\u2275": "\\ElsevierGlyph{2275}",
  "\u2276": "\\lessgtr ",
  "\u2277": "\\gtrless ",
  "\u2278": "\\notlessgreater ",
  "\u2279": "\\notgreaterless ",
  "\u227A": "\\prec ",
  "\u227B": "\\succ ",
  "\u227C": "\\preccurlyeq ",
  "\u227D": "\\succcurlyeq ",
  "\u227E": "\\precapprox ",
  "\u227E-00338": "\\NotPrecedesTilde ",
  "\u227F": "\\succapprox ",
  "\u227F-00338": "\\NotSucceedsTilde ",
  "\u2280": "\\not\\prec ",
  "\u2281": "\\not\\succ ",
  "\u2282": "\\subset ",
  "\u2283": "\\supset ",
  "\u2284": "\\not\\subset ",
  "\u2285": "\\not\\supset ",
  "\u2286": "\\subseteq ",
  "\u2287": "\\supseteq ",
  "\u2288": "\\not\\subseteq ",
  "\u2289": "\\not\\supseteq ",
  "\u228A": "\\subsetneq ",
  "\u228A-0FE00": "\\varsubsetneqq ",
  "\u228B": "\\supsetneq ",
  "\u228B-0FE00": "\\varsupsetneq ",
  "\u228E": "\\uplus ",
  "\u228F": "\\sqsubset ",
  "\u228F-00338": "\\NotSquareSubset ",
  "\u2290": "\\sqsupset ",
  "\u2290-00338": "\\NotSquareSuperset ",
  "\u2291": "\\sqsubseteq ",
  "\u2292": "\\sqsupseteq ",
  "\u2293": "\\sqcap ",
  "\u2294": "\\sqcup ",
  "\u2295": "\\oplus ",
  "\u2296": "\\ominus ",
  "\u2297": "\\otimes ",
  "\u2298": "\\oslash ",
  "\u2299": "\\odot ",
  "\u229A": "\\circledcirc ",
  "\u229B": "\\circledast ",
  "\u229D": "\\circleddash ",
  "\u229E": "\\boxplus ",
  "\u229F": "\\boxminus ",
  "\u22A0": "\\boxtimes ",
  "\u22A1": "\\boxdot ",
  "\u22A2": "\\vdash ",
  "\u22A3": "\\dashv ",
  "\u22A4": "\\top ",
  "\u22A5": "\\perp ",
  "\u22A7": "\\truestate ",
  "\u22A8": "\\forcesextra ",
  "\u22A9": "\\Vdash ",
  "\u22AA": "\\Vvdash ",
  "\u22AB": "\\VDash ",
  "\u22AC": "\\nvdash ",
  "\u22AD": "\\nvDash ",
  "\u22AE": "\\nVdash ",
  "\u22AF": "\\nVDash ",
  "\u22B2": "\\vartriangleleft ",
  "\u22B3": "\\vartriangleright ",
  "\u22B4": "\\trianglelefteq ",
  "\u22B5": "\\trianglerighteq ",
  "\u22B6": "\\original ",
  "\u22B7": "\\image ",
  "\u22B8": "\\multimap ",
  "\u22B9": "\\hermitconjmatrix ",
  "\u22BA": "\\intercal ",
  "\u22BB": "\\veebar ",
  "\u22BE": "\\rightanglearc ",
  "\u22C0": "\\ElsevierGlyph{22C0}",
  "\u22C1": "\\ElsevierGlyph{22C1}",
  "\u22C2": "\\bigcap ",
  "\u22C3": "\\bigcup ",
  "\u22C4": "\\diamond ",
  "\u22C5": "\\cdot ",
  "\u22C6": "\\star ",
  "\u22C7": "\\divideontimes ",
  "\u22C8": "\\bowtie ",
  "\u22C9": "\\ltimes ",
  "\u22CA": "\\rtimes ",
  "\u22CB": "\\leftthreetimes ",
  "\u22CC": "\\rightthreetimes ",
  "\u22CD": "\\backsimeq ",
  "\u22CE": "\\curlyvee ",
  "\u22CF": "\\curlywedge ",
  "\u22D0": "\\Subset ",
  "\u22D1": "\\Supset ",
  "\u22D2": "\\Cap ",
  "\u22D3": "\\Cup ",
  "\u22D4": "\\pitchfork ",
  "\u22D6": "\\lessdot ",
  "\u22D7": "\\gtrdot ",
  "\u22D8": "\\verymuchless ",
  "\u22D9": "\\verymuchgreater ",
  "\u22DA": "\\lesseqgtr ",
  "\u22DB": "\\gtreqless ",
  "\u22DE": "\\curlyeqprec ",
  "\u22DF": "\\curlyeqsucc ",
  "\u22E2": "\\not\\sqsubseteq ",
  "\u22E3": "\\not\\sqsupseteq ",
  "\u22E5": "\\Elzsqspne ",
  "\u22E6": "\\lnsim ",
  "\u22E7": "\\gnsim ",
  "\u22E8": "\\precedesnotsimilar ",
  "\u22E9": "\\succnsim ",
  "\u22EA": "\\ntriangleleft ",
  "\u22EB": "\\ntriangleright ",
  "\u22EC": "\\ntrianglelefteq ",
  "\u22ED": "\\ntrianglerighteq ",
  "\u22EE": "\\vdots ",
  "\u22EF": "\\cdots ",
  "\u22F0": "\\upslopeellipsis ",
  "\u22F1": "\\downslopeellipsis ",
  "\u2305": "\\barwedge ",
  "\u2306": "\\perspcorrespond ",
  "\u2308": "\\lceil ",
  "\u2309": "\\rceil ",
  "\u230A": "\\lfloor ",
  "\u230B": "\\rfloor ",
  "\u2315": "\\recorder ",
  "\u2316": "\\mathchar\"2208",
  "\u231C": "\\ulcorner ",
  "\u231D": "\\urcorner ",
  "\u231E": "\\llcorner ",
  "\u231F": "\\lrcorner ",
  "\u2322": "\\frown ",
  "\u2323": "\\smile ",
  "⟨": "\\langle ",
  "⟩": "\\rangle ",
  "\u233D": "\\ElsevierGlyph{E838}",
  "\u23A3": "\\Elzdlcorn ",
  "\u23B0": "\\lmoustache ",
  "\u23B1": "\\rmoustache ",
  "\u2423": "\\textvisiblespace ",
  "\u2460": "\\ding{172}",
  "\u2461": "\\ding{173}",
  "\u2462": "\\ding{174}",
  "\u2463": "\\ding{175}",
  "\u2464": "\\ding{176}",
  "\u2465": "\\ding{177}",
  "\u2466": "\\ding{178}",
  "\u2467": "\\ding{179}",
  "\u2468": "\\ding{180}",
  "\u2469": "\\ding{181}",
  "\u24C8": "\\circledS ",
  "\u2506": "\\Elzdshfnc ",
  "\u2519": "\\Elzsqfnw ",
  "\u2571": "\\diagup ",
  "\u25A0": "\\ding{110}",
  "\u25A1": "\\square ",
  "\u25AA": "\\blacksquare ",
  "\u25AD": "\\fbox{~~}",
  "\u25AF": "\\Elzvrecto ",
  "\u25B1": "\\ElsevierGlyph{E381}",
  "\u25B2": "\\ding{115}",
  "\u25B3": "\\bigtriangleup ",
  "\u25B4": "\\blacktriangle ",
  "\u25B5": "\\vartriangle ",
  "\u25B8": "\\blacktriangleright ",
  "\u25B9": "\\triangleright ",
  "\u25BC": "\\ding{116}",
  "\u25BD": "\\bigtriangledown ",
  "\u25BE": "\\blacktriangledown ",
  "\u25BF": "\\triangledown ",
  "\u25C2": "\\blacktriangleleft ",
  "\u25C3": "\\triangleleft ",
  "\u25C6": "\\ding{117}",
  "\u25CA": "\\lozenge ",
  "\u25CB": "\\bigcirc ",
  "\u25CF": "\\ding{108}",
  "\u25D0": "\\Elzcirfl ",
  "\u25D1": "\\Elzcirfr ",
  "\u25D2": "\\Elzcirfb ",
  "\u25D7": "\\ding{119}",
  "\u25D8": "\\Elzrvbull ",
  "\u25E7": "\\Elzsqfl ",
  "\u25E8": "\\Elzsqfr ",
  "\u25EA": "\\Elzsqfse ",
  "\u25EF": "\\bigcirc ",
  "\u2605": "\\ding{72}",
  "\u2606": "\\ding{73}",
  "\u260E": "\\ding{37}",
  "\u261B": "\\ding{42}",
  "\u261E": "\\ding{43}",
  "\u263E": "\\rightmoon ",
  "\u263F": "\\mercury ",
  "\u2640": "\\venus ",
  "\u2642": "\\male ",
  "\u2643": "\\jupiter ",
  "\u2644": "\\saturn ",
  "\u2645": "\\uranus ",
  "\u2646": "\\neptune ",
  "\u2647": "\\pluto ",
  "\u2648": "\\aries ",
  "\u2649": "\\taurus ",
  "\u264A": "\\gemini ",
  "\u264B": "\\cancer ",
  "\u264C": "\\leo ",
  "\u264D": "\\virgo ",
  "\u264E": "\\libra ",
  "\u264F": "\\scorpio ",
  "\u2650": "\\sagittarius ",
  "\u2651": "\\capricornus ",
  "\u2652": "\\aquarius ",
  "\u2653": "\\pisces ",
  "\u2660": "\\ding{171}",
  "\u2662": "\\diamond ",
  "\u2663": "\\ding{168}",
  "\u2665": "\\ding{170}",
  "\u2666": "\\ding{169}",
  "\u2669": "\\quarternote ",
  "\u266A": "\\eighthnote ",
  "\u266D": "\\flat ",
  "\u266E": "\\natural ",
  "\u266F": "\\sharp ",
  "\u2701": "\\ding{33}",
  "\u2702": "\\ding{34}",
  "\u2703": "\\ding{35}",
  "\u2704": "\\ding{36}",
  "\u2706": "\\ding{38}",
  "\u2707": "\\ding{39}",
  "\u2708": "\\ding{40}",
  "\u2709": "\\ding{41}",
  "\u270C": "\\ding{44}",
  "\u270D": "\\ding{45}",
  "\u270E": "\\ding{46}",
  "\u270F": "\\ding{47}",
  "\u2710": "\\ding{48}",
  "\u2711": "\\ding{49}",
  "\u2712": "\\ding{50}",
  "\u2713": "\\ding{51}",
  "\u2714": "\\ding{52}",
  "\u2715": "\\ding{53}",
  "\u2716": "\\ding{54}",
  "\u2717": "\\ding{55}",
  "\u2718": "\\ding{56}",
  "\u2719": "\\ding{57}",
  "\u271A": "\\ding{58}",
  "\u271B": "\\ding{59}",
  "\u271C": "\\ding{60}",
  "\u271D": "\\ding{61}",
  "\u271E": "\\ding{62}",
  "\u271F": "\\ding{63}",
  "\u2720": "\\ding{64}",
  "\u2721": "\\ding{65}",
  "\u2722": "\\ding{66}",
  "\u2723": "\\ding{67}",
  "\u2724": "\\ding{68}",
  "\u2725": "\\ding{69}",
  "\u2726": "\\ding{70}",
  "\u2727": "\\ding{71}",
  "\u2729": "\\ding{73}",
  "\u272A": "\\ding{74}",
  "\u272B": "\\ding{75}",
  "\u272C": "\\ding{76}",
  "\u272D": "\\ding{77}",
  "\u272E": "\\ding{78}",
  "\u272F": "\\ding{79}",
  "\u2730": "\\ding{80}",
  "\u2731": "\\ding{81}",
  "\u2732": "\\ding{82}",
  "\u2733": "\\ding{83}",
  "\u2734": "\\ding{84}",
  "\u2735": "\\ding{85}",
  "\u2736": "\\ding{86}",
  "\u2737": "\\ding{87}",
  "\u2738": "\\ding{88}",
  "\u2739": "\\ding{89}",
  "\u273A": "\\ding{90}",
  "\u273B": "\\ding{91}",
  "\u273C": "\\ding{92}",
  "\u273D": "\\ding{93}",
  "\u273E": "\\ding{94}",
  "\u273F": "\\ding{95}",
  "\u2740": "\\ding{96}",
  "\u2741": "\\ding{97}",
  "\u2742": "\\ding{98}",
  "\u2743": "\\ding{99}",
  "\u2744": "\\ding{100}",
  "\u2745": "\\ding{101}",
  "\u2746": "\\ding{102}",
  "\u2747": "\\ding{103}",
  "\u2748": "\\ding{104}",
  "\u2749": "\\ding{105}",
  "\u274A": "\\ding{106}",
  "\u274B": "\\ding{107}",
  "\u274D": "\\ding{109}",
  "\u274F": "\\ding{111}",
  "\u2750": "\\ding{112}",
  "\u2751": "\\ding{113}",
  "\u2752": "\\ding{114}",
  "\u2756": "\\ding{118}",
  "\u2758": "\\ding{120}",
  "\u2759": "\\ding{121}",
  "\u275A": "\\ding{122}",
  "\u275B": "\\ding{123}",
  "\u275C": "\\ding{124}",
  "\u275D": "\\ding{125}",
  "\u275E": "\\ding{126}",
  "\u2761": "\\ding{161}",
  "\u2762": "\\ding{162}",
  "\u2763": "\\ding{163}",
  "\u2764": "\\ding{164}",
  "\u2765": "\\ding{165}",
  "\u2766": "\\ding{166}",
  "\u2767": "\\ding{167}",
  "\u2776": "\\ding{182}",
  "\u2777": "\\ding{183}",
  "\u2778": "\\ding{184}",
  "\u2779": "\\ding{185}",
  "\u277A": "\\ding{186}",
  "\u277B": "\\ding{187}",
  "\u277C": "\\ding{188}",
  "\u277D": "\\ding{189}",
  "\u277E": "\\ding{190}",
  "\u277F": "\\ding{191}",
  "\u2780": "\\ding{192}",
  "\u2781": "\\ding{193}",
  "\u2782": "\\ding{194}",
  "\u2783": "\\ding{195}",
  "\u2784": "\\ding{196}",
  "\u2785": "\\ding{197}",
  "\u2786": "\\ding{198}",
  "\u2787": "\\ding{199}",
  "\u2788": "\\ding{200}",
  "\u2789": "\\ding{201}",
  "\u278A": "\\ding{202}",
  "\u278B": "\\ding{203}",
  "\u278C": "\\ding{204}",
  "\u278D": "\\ding{205}",
  "\u278E": "\\ding{206}",
  "\u278F": "\\ding{207}",
  "\u2790": "\\ding{208}",
  "\u2791": "\\ding{209}",
  "\u2792": "\\ding{210}",
  "\u2793": "\\ding{211}",
  "\u2794": "\\ding{212}",
  "\u2798": "\\ding{216}",
  "\u2799": "\\ding{217}",
  "\u279A": "\\ding{218}",
  "\u279B": "\\ding{219}",
  "\u279C": "\\ding{220}",
  "\u279D": "\\ding{221}",
  "\u279E": "\\ding{222}",
  "\u279F": "\\ding{223}",
  "\u27A0": "\\ding{224}",
  "\u27A1": "\\ding{225}",
  "\u27A2": "\\ding{226}",
  "\u27A3": "\\ding{227}",
  "\u27A4": "\\ding{228}",
  "\u27A5": "\\ding{229}",
  "\u27A6": "\\ding{230}",
  "\u27A7": "\\ding{231}",
  "\u27A8": "\\ding{232}",
  "\u27A9": "\\ding{233}",
  "\u27AA": "\\ding{234}",
  "\u27AB": "\\ding{235}",
  "\u27AC": "\\ding{236}",
  "\u27AD": "\\ding{237}",
  "\u27AE": "\\ding{238}",
  "\u27AF": "\\ding{239}",
  "\u27B1": "\\ding{241}",
  "\u27B2": "\\ding{242}",
  "\u27B3": "\\ding{243}",
  "\u27B4": "\\ding{244}",
  "\u27B5": "\\ding{245}",
  "\u27B6": "\\ding{246}",
  "\u27B7": "\\ding{247}",
  "\u27B8": "\\ding{248}",
  "\u27B9": "\\ding{249}",
  "\u27BA": "\\ding{250}",
  "\u27BB": "\\ding{251}",
  "\u27BC": "\\ding{252}",
  "\u27BD": "\\ding{253}",
  "\u27BE": "\\ding{254}",
  "\u27F5": "\\longleftarrow ",
  "\u27F6": "\\longrightarrow ",
  "\u27F7": "\\longleftrightarrow ",
  "\u27F8": "\\Longleftarrow ",
  "\u27F9": "\\Longrightarrow ",
  "\u27FA": "\\Longleftrightarrow ",
  "\u27FC": "\\longmapsto ",
  "\u27FF": "\\sim\\joinrel\\leadsto",
  "\u2905": "\\ElsevierGlyph{E212}",
  "\u2912": "\\UpArrowBar ",
  "\u2913": "\\DownArrowBar ",
  "\u2923": "\\ElsevierGlyph{E20C}",
  "\u2924": "\\ElsevierGlyph{E20D}",
  "\u2925": "\\ElsevierGlyph{E20B}",
  "\u2926": "\\ElsevierGlyph{E20A}",
  "\u2927": "\\ElsevierGlyph{E211}",
  "\u2928": "\\ElsevierGlyph{E20E}",
  "\u2929": "\\ElsevierGlyph{E20F}",
  "\u292A": "\\ElsevierGlyph{E210}",
  "\u2933": "\\ElsevierGlyph{E21C}",
  "\u2933-00338": "\\ElsevierGlyph{E21D}",
  "\u2936": "\\ElsevierGlyph{E21A}",
  "\u2937": "\\ElsevierGlyph{E219}",
  "\u2940": "\\Elolarr ",
  "\u2941": "\\Elorarr ",
  "\u2942": "\\ElzRlarr ",
  "\u2944": "\\ElzrLarr ",
  "\u2947": "\\Elzrarrx ",
  "\u294E": "\\LeftRightVector ",
  "\u294F": "\\RightUpDownVector ",
  "\u2950": "\\DownLeftRightVector ",
  "\u2951": "\\LeftUpDownVector ",
  "\u2952": "\\LeftVectorBar ",
  "\u2953": "\\RightVectorBar ",
  "\u2954": "\\RightUpVectorBar ",
  "\u2955": "\\RightDownVectorBar ",
  "\u2956": "\\DownLeftVectorBar ",
  "\u2957": "\\DownRightVectorBar ",
  "\u2958": "\\LeftUpVectorBar ",
  "\u2959": "\\LeftDownVectorBar ",
  "\u295A": "\\LeftTeeVector ",
  "\u295B": "\\RightTeeVector ",
  "\u295C": "\\RightUpTeeVector ",
  "\u295D": "\\RightDownTeeVector ",
  "\u295E": "\\DownLeftTeeVector ",
  "\u295F": "\\DownRightTeeVector ",
  "\u2960": "\\LeftUpTeeVector ",
  "\u2961": "\\LeftDownTeeVector ",
  "\u296E": "\\UpEquilibrium ",
  "\u296F": "\\ReverseUpEquilibrium ",
  "\u2970": "\\RoundImplies ",
  "\u297C": "\\ElsevierGlyph{E214}",
  "\u297D": "\\ElsevierGlyph{E215}",
  "\u2980": "\\Elztfnc ",
  "\u2985": "\\ElsevierGlyph{3018}",
  "\u2986": "\\Elroang ",
  "\u2993": "&lt;\\kern-0.58em(",
  "\u2994": "\\ElsevierGlyph{E291}",
  "\u2999": "\\Elzddfnc ",
  "\u299C": "\\Angle ",
  "\u29A0": "\\Elzlpargt ",
  "\u29B5": "\\ElsevierGlyph{E260}",
  "\u29B6": "\\ElsevierGlyph{E61B}",
  "\u29CA": "\\ElzLap ",
  "\u29CB": "\\Elzdefas ",
  "\u29CF": "\\LeftTriangleBar ",
  "\u29CF-00338": "\\NotLeftTriangleBar ",
  "\u29D0": "\\RightTriangleBar ",
  "\u29D0-00338": "\\NotRightTriangleBar ",
  "\u29DC": "\\ElsevierGlyph{E372}",
  "\u29EB": "\\blacklozenge ",
  "\u29F4": "\\RuleDelayed ",
  "\u2A04": "\\Elxuplus ",
  "\u2A05": "\\ElzThr ",
  "\u2A06": "\\Elxsqcup ",
  "\u2A07": "\\ElzInf ",
  "\u2A08": "\\ElzSup ",
  "\u2A0D": "\\ElzCint ",
  "\u2A0F": "\\clockoint ",
  "\u2A10": "\\ElsevierGlyph{E395}",
  "\u2A16": "\\sqrint ",
  "\u2A25": "\\ElsevierGlyph{E25A}",
  "\u2A2A": "\\ElsevierGlyph{E25B}",
  "\u2A2D": "\\ElsevierGlyph{E25C}",
  "\u2A2E": "\\ElsevierGlyph{E25D}",
  "\u2A2F": "\\ElzTimes ",
  "\u2A34": "\\ElsevierGlyph{E25E}",
  "\u2A35": "\\ElsevierGlyph{E25E}",
  "\u2A3C": "\\ElsevierGlyph{E259}",
  "\u2A3F": "\\amalg ",
  "\u2A53": "\\ElzAnd ",
  "\u2A54": "\\ElzOr ",
  "\u2A55": "\\ElsevierGlyph{E36E}",
  "\u2A56": "\\ElOr ",
  "\u2A5E": "\\perspcorrespond ",
  "\u2A5F": "\\Elzminhat ",
  "\u2A63": "\\ElsevierGlyph{225A}",
  "\u2A6E": "\\stackrel{*}{=}",
  "\u2A75": "\\Equal ",
  "\u2A7D": "\\leqslant ",
  "\u2A7D-00338": "\\nleqslant ",
  "\u2A7E": "\\geqslant ",
  "\u2A7E-00338": "\\ngeqslant ",
  "\u2A85": "\\lessapprox ",
  "\u2A86": "\\gtrapprox ",
  "\u2A87": "\\lneq ",
  "\u2A88": "\\gneq ",
  "\u2A89": "\\lnapprox ",
  "\u2A8A": "\\gnapprox ",
  "\u2A8B": "\\lesseqqgtr ",
  "\u2A8C": "\\gtreqqless ",
  "\u2A95": "\\eqslantless ",
  "\u2A96": "\\eqslantgtr ",
  "\u2A9D": "\\Pisymbol{ppi020}{117}",
  "\u2A9E": "\\Pisymbol{ppi020}{105}",
  "\u2AA1": "\\NestedLessLess ",
  "\u2AA1-00338": "\\NotNestedLessLess ",
  "\u2AA2": "\\NestedGreaterGreater ",
  "\u2AA2-00338": "\\NotNestedGreaterGreater ",
  "\u2AAF": "\\preceq ",
  "\u2AAF-00338": "\\not\\preceq ",
  "\u2AB0": "\\succeq ",
  "\u2AB0-00338": "\\not\\succeq ",
  "\u2AB5": "\\precneqq ",
  "\u2AB6": "\\succneqq ",
  "\u2AB7": "\\precapprox ",
  "\u2AB8": "\\succapprox ",
  "\u2AB9": "\\precnapprox ",
  "\u2ABA": "\\succnapprox ",
  "\u2AC5": "\\subseteqq ",
  "\u2AC5-00338": "\\nsubseteqq ",
  "\u2AC6": "\\supseteqq ",
  "\u2AC6-00338": "\\nsupseteqq",
  "\u2ACB": "\\subsetneqq ",
  "\u2ACC": "\\supsetneqq ",
  "\u2AEB": "\\ElsevierGlyph{E30D}",
  "\u2AF6": "\\Elztdcol ",
  "\u2AFD": "{{/}\\!\\!{/}}",
  "\u2AFD-020E5": "{\\rlap{\\textbackslash}{{/}\\!\\!{/}}}",
  "\u300A": "\\ElsevierGlyph{300A}",
  "\u300B": "\\ElsevierGlyph{300B}",
  "\u3018": "\\ElsevierGlyph{3018}",
  "\u3019": "\\ElsevierGlyph{3019}",
  "\u301A": "\\openbracketleft ",
  "\u301B": "\\openbracketright ",
  "\uFB00": "ff",
  "\uFB01": "fi",
  "\uFB02": "fl",
  "\uFB03": "ffi",
  "\uFB04": "ffl",
  "\uD400": "\\mathbf{A}",
  "\uD401": "\\mathbf{B}",
  "\uD402": "\\mathbf{C}",
  "\uD403": "\\mathbf{D}",
  "\uD404": "\\mathbf{E}",
  "\uD405": "\\mathbf{F}",
  "\uD406": "\\mathbf{G}",
  "\uD407": "\\mathbf{H}",
  "\uD408": "\\mathbf{I}",
  "\uD409": "\\mathbf{J}",
  "\uD40A": "\\mathbf{K}",
  "\uD40B": "\\mathbf{L}",
  "\uD40C": "\\mathbf{M}",
  "\uD40D": "\\mathbf{N}",
  "\uD40E": "\\mathbf{O}",
  "\uD40F": "\\mathbf{P}",
  "\uD410": "\\mathbf{Q}",
  "\uD411": "\\mathbf{R}",
  "\uD412": "\\mathbf{S}",
  "\uD413": "\\mathbf{T}",
  "\uD414": "\\mathbf{U}",
  "\uD415": "\\mathbf{V}",
  "\uD416": "\\mathbf{W}",
  "\uD417": "\\mathbf{X}",
  "\uD418": "\\mathbf{Y}",
  "\uD419": "\\mathbf{Z}",
  "\uD41A": "\\mathbf{a}",
  "\uD41B": "\\mathbf{b}",
  "\uD41C": "\\mathbf{c}",
  "\uD41D": "\\mathbf{d}",
  "\uD41E": "\\mathbf{e}",
  "\uD41F": "\\mathbf{f}",
  "\uD420": "\\mathbf{g}",
  "\uD421": "\\mathbf{h}",
  "\uD422": "\\mathbf{i}",
  "\uD423": "\\mathbf{j}",
  "\uD424": "\\mathbf{k}",
  "\uD425": "\\mathbf{l}",
  "\uD426": "\\mathbf{m}",
  "\uD427": "\\mathbf{n}",
  "\uD428": "\\mathbf{o}",
  "\uD429": "\\mathbf{p}",
  "\uD42A": "\\mathbf{q}",
  "\uD42B": "\\mathbf{r}",
  "\uD42C": "\\mathbf{s}",
  "\uD42D": "\\mathbf{t}",
  "\uD42E": "\\mathbf{u}",
  "\uD42F": "\\mathbf{v}",
  "\uD430": "\\mathbf{w}",
  "\uD431": "\\mathbf{x}",
  "\uD432": "\\mathbf{y}",
  "\uD433": "\\mathbf{z}",
  "\uD434": "\\mathsl{A}",
  "\uD435": "\\mathsl{B}",
  "\uD436": "\\mathsl{C}",
  "\uD437": "\\mathsl{D}",
  "\uD438": "\\mathsl{E}",
  "\uD439": "\\mathsl{F}",
  "\uD43A": "\\mathsl{G}",
  "\uD43B": "\\mathsl{H}",
  "\uD43C": "\\mathsl{I}",
  "\uD43D": "\\mathsl{J}",
  "\uD43E": "\\mathsl{K}",
  "\uD43F": "\\mathsl{L}",
  "\uD440": "\\mathsl{M}",
  "\uD441": "\\mathsl{N}",
  "\uD442": "\\mathsl{O}",
  "\uD443": "\\mathsl{P}",
  "\uD444": "\\mathsl{Q}",
  "\uD445": "\\mathsl{R}",
  "\uD446": "\\mathsl{S}",
  "\uD447": "\\mathsl{T}",
  "\uD448": "\\mathsl{U}",
  "\uD449": "\\mathsl{V}",
  "\uD44A": "\\mathsl{W}",
  "\uD44B": "\\mathsl{X}",
  "\uD44C": "\\mathsl{Y}",
  "\uD44D": "\\mathsl{Z}",
  "\uD44E": "\\mathsl{a}",
  "\uD44F": "\\mathsl{b}",
  "\uD450": "\\mathsl{c}",
  "\uD451": "\\mathsl{d}",
  "\uD452": "\\mathsl{e}",
  "\uD453": "\\mathsl{f}",
  "\uD454": "\\mathsl{g}",
  "\uD456": "\\mathsl{i}",
  "\uD457": "\\mathsl{j}",
  "\uD458": "\\mathsl{k}",
  "\uD459": "\\mathsl{l}",
  "\uD45A": "\\mathsl{m}",
  "\uD45B": "\\mathsl{n}",
  "\uD45C": "\\mathsl{o}",
  "\uD45D": "\\mathsl{p}",
  "\uD45E": "\\mathsl{q}",
  "\uD45F": "\\mathsl{r}",
  "\uD460": "\\mathsl{s}",
  "\uD461": "\\mathsl{t}",
  "\uD462": "\\mathsl{u}",
  "\uD463": "\\mathsl{v}",
  "\uD464": "\\mathsl{w}",
  "\uD465": "\\mathsl{x}",
  "\uD466": "\\mathsl{y}",
  "\uD467": "\\mathsl{z}",
  "\uD468": "\\mathbit{A}",
  "\uD469": "\\mathbit{B}",
  "\uD46A": "\\mathbit{C}",
  "\uD46B": "\\mathbit{D}",
  "\uD46C": "\\mathbit{E}",
  "\uD46D": "\\mathbit{F}",
  "\uD46E": "\\mathbit{G}",
  "\uD46F": "\\mathbit{H}",
  "\uD470": "\\mathbit{I}",
  "\uD471": "\\mathbit{J}",
  "\uD472": "\\mathbit{K}",
  "\uD473": "\\mathbit{L}",
  "\uD474": "\\mathbit{M}",
  "\uD475": "\\mathbit{N}",
  "\uD476": "\\mathbit{O}",
  "\uD477": "\\mathbit{P}",
  "\uD478": "\\mathbit{Q}",
  "\uD479": "\\mathbit{R}",
  "\uD47A": "\\mathbit{S}",
  "\uD47B": "\\mathbit{T}",
  "\uD47C": "\\mathbit{U}",
  "\uD47D": "\\mathbit{V}",
  "\uD47E": "\\mathbit{W}",
  "\uD47F": "\\mathbit{X}",
  "\uD480": "\\mathbit{Y}",
  "\uD481": "\\mathbit{Z}",
  "\uD482": "\\mathbit{a}",
  "\uD483": "\\mathbit{b}",
  "\uD484": "\\mathbit{c}",
  "\uD485": "\\mathbit{d}",
  "\uD486": "\\mathbit{e}",
  "\uD487": "\\mathbit{f}",
  "\uD488": "\\mathbit{g}",
  "\uD489": "\\mathbit{h}",
  "\uD48A": "\\mathbit{i}",
  "\uD48B": "\\mathbit{j}",
  "\uD48C": "\\mathbit{k}",
  "\uD48D": "\\mathbit{l}",
  "\uD48E": "\\mathbit{m}",
  "\uD48F": "\\mathbit{n}",
  "\uD490": "\\mathbit{o}",
  "\uD491": "\\mathbit{p}",
  "\uD492": "\\mathbit{q}",
  "\uD493": "\\mathbit{r}",
  "\uD494": "\\mathbit{s}",
  "\uD495": "\\mathbit{t}",
  "\uD496": "\\mathbit{u}",
  "\uD497": "\\mathbit{v}",
  "\uD498": "\\mathbit{w}",
  "\uD499": "\\mathbit{x}",
  "\uD49A": "\\mathbit{y}",
  "\uD49B": "\\mathbit{z}",
  "\uD4B0": "\\mathcal{U}",
  "\uD4B1": "\\mathcal{V}",
  "\uD4B2": "\\mathcal{W}",
  "\uD4B3": "\\mathcal{X}",
  "\uD4B4": "\\mathcal{Y}",
  "\uD4B5": "\\mathcal{Z}",
  "\uD4B6": "\\mathcal{a}",
  "\uD4B7": "\\mathcal{b}",
  "\uD4B8": "\\mathcal{c}",
  "\uD4B9": "\\mathcal{d}",
  "\uD4BB": "\\mathcal{f}",
  "\uD4BD": "\\mathcal{h}",
  "\uD4BE": "\\mathcal{i}",
  "\uD4BF": "\\mathcal{j}",
  "\uD4C0": "\\mathcal{k}",
  "\uD4C1": "\\mathcal{l}",
  "\uD4C2": "\\mathcal{m}",
  "\uD4C3": "\\mathcal{n}",
  "\uD4C5": "\\mathcal{p}",
  "\uD4C6": "\\mathcal{q}",
  "\uD4C7": "\\mathcal{r}",
  "\uD4C8": "\\mathcal{s}",
  "\uD4C9": "\\mathcal{t}",
  "\uD4CA": "\\mathcal{u}",
  "\uD4CB": "\\mathcal{v}",
  "\uD4CC": "\\mathcal{w}",
  "\uD4CD": "\\mathcal{x}",
  "\uD4CE": "\\mathcal{y}",
  "\uD4CF": "\\mathcal{z}",
  "\uD4D0": "\\mathmit{A}",
  "\uD4D1": "\\mathmit{B}",
  "\uD4D2": "\\mathmit{C}",
  "\uD4D3": "\\mathmit{D}",
  "\uD4D4": "\\mathmit{E}",
  "\uD4D5": "\\mathmit{F}",
  "\uD4D6": "\\mathmit{G}",
  "\uD4D7": "\\mathmit{H}",
  "\uD4D8": "\\mathmit{I}",
  "\uD4D9": "\\mathmit{J}",
  "\uD4DA": "\\mathmit{K}",
  "\uD4DB": "\\mathmit{L}",
  "\uD4DC": "\\mathmit{M}",
  "\uD4DD": "\\mathmit{N}",
  "\uD4DE": "\\mathmit{O}",
  "\uD4DF": "\\mathmit{P}",
  "\uD4E0": "\\mathmit{Q}",
  "\uD4E1": "\\mathmit{R}",
  "\uD4E2": "\\mathmit{S}",
  "\uD4E3": "\\mathmit{T}",
  "\uD4E4": "\\mathmit{U}",
  "\uD4E5": "\\mathmit{V}",
  "\uD4E6": "\\mathmit{W}",
  "\uD4E7": "\\mathmit{X}",
  "\uD4E8": "\\mathmit{Y}",
  "\uD4E9": "\\mathmit{Z}",
  "\uD4EA": "\\mathmit{a}",
  "\uD4EB": "\\mathmit{b}",
  "\uD4EC": "\\mathmit{c}",
  "\uD4ED": "\\mathmit{d}",
  "\uD4EE": "\\mathmit{e}",
  "\uD4EF": "\\mathmit{f}",
  "\uD4F0": "\\mathmit{g}",
  "\uD4F1": "\\mathmit{h}",
  "\uD4F2": "\\mathmit{i}",
  "\uD4F3": "\\mathmit{j}",
  "\uD4F4": "\\mathmit{k}",
  "\uD4F5": "\\mathmit{l}",
  "\uD4F6": "\\mathmit{m}",
  "\uD4F7": "\\mathmit{n}",
  "\uD4F8": "\\mathmit{o}",
  "\uD4F9": "\\mathmit{p}",
  "\uD4FA": "\\mathmit{q}",
  "\uD4FB": "\\mathmit{r}",
  "\uD4FC": "\\mathmit{s}",
  "\uD4FD": "\\mathmit{t}",
  "\uD4FE": "\\mathmit{u}",
  "\uD4FF": "\\mathmit{v}",
  "\uD500": "\\mathmit{w}",
  "\uD501": "\\mathmit{x}",
  "\uD502": "\\mathmit{y}",
  "\uD503": "\\mathmit{z}",
  "\uD504": "\\mathfrak{A}",
  "\uD505": "\\mathfrak{B}",
  "\uD507": "\\mathfrak{D}",
  "\uD508": "\\mathfrak{E}",
  "\uD509": "\\mathfrak{F}",
  "\uD50A": "\\mathfrak{G}",
  "\uD50D": "\\mathfrak{J}",
  "\uD50E": "\\mathfrak{K}",
  "\uD50F": "\\mathfrak{L}",
  "\uD510": "\\mathfrak{M}",
  "\uD511": "\\mathfrak{N}",
  "\uD512": "\\mathfrak{O}",
  "\uD513": "\\mathfrak{P}",
  "\uD514": "\\mathfrak{Q}",
  "\uD516": "\\mathfrak{S}",
  "\uD517": "\\mathfrak{T}",
  "\uD518": "\\mathfrak{U}",
  "\uD519": "\\mathfrak{V}",
  "\uD51A": "\\mathfrak{W}",
  "\uD51B": "\\mathfrak{X}",
  "\uD51C": "\\mathfrak{Y}",
  "\uD51E": "\\mathfrak{a}",
  "\uD51F": "\\mathfrak{b}",
  "\uD520": "\\mathfrak{c}",
  "\uD521": "\\mathfrak{d}",
  "\uD522": "\\mathfrak{e}",
  "\uD523": "\\mathfrak{f}",
  "\uD524": "\\mathfrak{g}",
  "\uD525": "\\mathfrak{h}",
  "\uD526": "\\mathfrak{i}",
  "\uD527": "\\mathfrak{j}",
  "\uD528": "\\mathfrak{k}",
  "\uD529": "\\mathfrak{l}",
  "\uD52A": "\\mathfrak{m}",
  "\uD52B": "\\mathfrak{n}",
  "\uD52C": "\\mathfrak{o}",
  "\uD52D": "\\mathfrak{p}",
  "\uD52E": "\\mathfrak{q}",
  "\uD52F": "\\mathfrak{r}",
  "\uD530": "\\mathfrak{s}",
  "\uD531": "\\mathfrak{t}",
  "\uD532": "\\mathfrak{u}",
  "\uD533": "\\mathfrak{v}",
  "\uD534": "\\mathfrak{w}",
  "\uD535": "\\mathfrak{x}",
  "\uD536": "\\mathfrak{y}",
  "\uD537": "\\mathfrak{z}",
  "\uD538": "\\Bbb{A}",
  "\uD539": "\\Bbb{B}",
  "\uD53B": "\\Bbb{D}",
  "\uD53C": "\\Bbb{E}",
  "\uD53D": "\\Bbb{F}",
  "\uD53E": "\\Bbb{G}",
  "\uD540": "\\Bbb{I}",
  "\uD541": "\\Bbb{J}",
  "\uD542": "\\Bbb{K}",
  "\uD543": "\\Bbb{L}",
  "\uD544": "\\Bbb{M}",
  "\uD546": "\\Bbb{O}",
  "\uD54A": "\\Bbb{S}",
  "\uD54B": "\\Bbb{T}",
  "\uD54C": "\\Bbb{U}",
  "\uD54D": "\\Bbb{V}",
  "\uD54E": "\\Bbb{W}",
  "\uD54F": "\\Bbb{X}",
  "\uD550": "\\Bbb{Y}",
  "\uD552": "\\Bbb{a}",
  "\uD553": "\\Bbb{b}",
  "\uD554": "\\Bbb{c}",
  "\uD555": "\\Bbb{d}",
  "\uD556": "\\Bbb{e}",
  "\uD557": "\\Bbb{f}",
  "\uD558": "\\Bbb{g}",
  "\uD559": "\\Bbb{h}",
  "\uD55A": "\\Bbb{i}",
  "\uD55B": "\\Bbb{j}",
  "\uD55C": "\\Bbb{k}",
  "\uD55D": "\\Bbb{l}",
  "\uD55E": "\\Bbb{m}",
  "\uD55F": "\\Bbb{n}",
  "\uD560": "\\Bbb{o}",
  "\uD561": "\\Bbb{p}",
  "\uD562": "\\Bbb{q}",
  "\uD563": "\\Bbb{r}",
  "\uD564": "\\Bbb{s}",
  "\uD565": "\\Bbb{t}",
  "\uD566": "\\Bbb{u}",
  "\uD567": "\\Bbb{v}",
  "\uD568": "\\Bbb{w}",
  "\uD569": "\\Bbb{x}",
  "\uD56A": "\\Bbb{y}",
  "\uD56B": "\\Bbb{z}",
  "\uD56C": "\\mathslbb{A}",
  "\uD56D": "\\mathslbb{B}",
  "\uD56E": "\\mathslbb{C}",
  "\uD56F": "\\mathslbb{D}",
  "\uD570": "\\mathslbb{E}",
  "\uD571": "\\mathslbb{F}",
  "\uD572": "\\mathslbb{G}",
  "\uD573": "\\mathslbb{H}",
  "\uD574": "\\mathslbb{I}",
  "\uD575": "\\mathslbb{J}",
  "\uD576": "\\mathslbb{K}",
  "\uD577": "\\mathslbb{L}",
  "\uD578": "\\mathslbb{M}",
  "\uD579": "\\mathslbb{N}",
  "\uD57A": "\\mathslbb{O}",
  "\uD57B": "\\mathslbb{P}",
  "\uD57C": "\\mathslbb{Q}",
  "\uD57D": "\\mathslbb{R}",
  "\uD57E": "\\mathslbb{S}",
  "\uD57F": "\\mathslbb{T}",
  "\uD580": "\\mathslbb{U}",
  "\uD581": "\\mathslbb{V}",
  "\uD582": "\\mathslbb{W}",
  "\uD583": "\\mathslbb{X}",
  "\uD584": "\\mathslbb{Y}",
  "\uD585": "\\mathslbb{Z}",
  "\uD586": "\\mathslbb{a}",
  "\uD587": "\\mathslbb{b}",
  "\uD588": "\\mathslbb{c}",
  "\uD589": "\\mathslbb{d}",
  "\uD58A": "\\mathslbb{e}",
  "\uD58B": "\\mathslbb{f}",
  "\uD58C": "\\mathslbb{g}",
  "\uD58D": "\\mathslbb{h}",
  "\uD58E": "\\mathslbb{i}",
  "\uD58F": "\\mathslbb{j}",
  "\uD590": "\\mathslbb{k}",
  "\uD591": "\\mathslbb{l}",
  "\uD592": "\\mathslbb{m}",
  "\uD593": "\\mathslbb{n}",
  "\uD594": "\\mathslbb{o}",
  "\uD595": "\\mathslbb{p}",
  "\uD596": "\\mathslbb{q}",
  "\uD597": "\\mathslbb{r}",
  "\uD598": "\\mathslbb{s}",
  "\uD599": "\\mathslbb{t}",
  "\uD59A": "\\mathslbb{u}",
  "\uD59B": "\\mathslbb{v}",
  "\uD59C": "\\mathslbb{w}",
  "\uD59D": "\\mathslbb{x}",
  "\uD59E": "\\mathslbb{y}",
  "\uD59F": "\\mathslbb{z}",
  "\uD5A0": "\\mathsf{A}",
  "\uD5A1": "\\mathsf{B}",
  "\uD5A2": "\\mathsf{C}",
  "\uD5A3": "\\mathsf{D}",
  "\uD5A4": "\\mathsf{E}",
  "\uD5A5": "\\mathsf{F}",
  "\uD5A6": "\\mathsf{G}",
  "\uD5A7": "\\mathsf{H}",
  "\uD5A8": "\\mathsf{I}",
  "\uD5A9": "\\mathsf{J}",
  "\uD5AA": "\\mathsf{K}",
  "\uD5AB": "\\mathsf{L}",
  "\uD5AC": "\\mathsf{M}",
  "\uD5AD": "\\mathsf{N}",
  "\uD5AE": "\\mathsf{O}",
  "\uD5AF": "\\mathsf{P}",
  "\uD5B0": "\\mathsf{Q}",
  "\uD5B1": "\\mathsf{R}",
  "\uD5B2": "\\mathsf{S}",
  "\uD5B3": "\\mathsf{T}",
  "\uD5B4": "\\mathsf{U}",
  "\uD5B5": "\\mathsf{V}",
  "\uD5B6": "\\mathsf{W}",
  "\uD5B7": "\\mathsf{X}",
  "\uD5B8": "\\mathsf{Y}",
  "\uD5B9": "\\mathsf{Z}",
  "\uD5BA": "\\mathsf{a}",
  "\uD5BB": "\\mathsf{b}",
  "\uD5BC": "\\mathsf{c}",
  "\uD5BD": "\\mathsf{d}",
  "\uD5BE": "\\mathsf{e}",
  "\uD5BF": "\\mathsf{f}",
  "\uD5C0": "\\mathsf{g}",
  "\uD5C1": "\\mathsf{h}",
  "\uD5C2": "\\mathsf{i}",
  "\uD5C3": "\\mathsf{j}",
  "\uD5C4": "\\mathsf{k}",
  "\uD5C5": "\\mathsf{l}",
  "\uD5C6": "\\mathsf{m}",
  "\uD5C7": "\\mathsf{n}",
  "\uD5C8": "\\mathsf{o}",
  "\uD5C9": "\\mathsf{p}",
  "\uD5CA": "\\mathsf{q}",
  "\uD5CB": "\\mathsf{r}",
  "\uD5CC": "\\mathsf{s}",
  "\uD5CD": "\\mathsf{t}",
  "\uD5CE": "\\mathsf{u}",
  "\uD5CF": "\\mathsf{v}",
  "\uD5D0": "\\mathsf{w}",
  "\uD5D1": "\\mathsf{x}",
  "\uD5D2": "\\mathsf{y}",
  "\uD5D3": "\\mathsf{z}",
  "\uD5D4": "\\mathsfbf{A}",
  "\uD5D5": "\\mathsfbf{B}",
  "\uD5D6": "\\mathsfbf{C}",
  "\uD5D7": "\\mathsfbf{D}",
  "\uD5D8": "\\mathsfbf{E}",
  "\uD5D9": "\\mathsfbf{F}",
  "\uD5DA": "\\mathsfbf{G}",
  "\uD5DB": "\\mathsfbf{H}",
  "\uD5DC": "\\mathsfbf{I}",
  "\uD5DD": "\\mathsfbf{J}",
  "\uD5DE": "\\mathsfbf{K}",
  "\uD5DF": "\\mathsfbf{L}",
  "\uD5E0": "\\mathsfbf{M}",
  "\uD5E1": "\\mathsfbf{N}",
  "\uD5E2": "\\mathsfbf{O}",
  "\uD5E3": "\\mathsfbf{P}",
  "\uD5E4": "\\mathsfbf{Q}",
  "\uD5E5": "\\mathsfbf{R}",
  "\uD5E6": "\\mathsfbf{S}",
  "\uD5E7": "\\mathsfbf{T}",
  "\uD5E8": "\\mathsfbf{U}",
  "\uD5E9": "\\mathsfbf{V}",
  "\uD5EA": "\\mathsfbf{W}",
  "\uD5EB": "\\mathsfbf{X}",
  "\uD5EC": "\\mathsfbf{Y}",
  "\uD5ED": "\\mathsfbf{Z}",
  "\uD5EE": "\\mathsfbf{a}",
  "\uD5EF": "\\mathsfbf{b}",
  "\uD5F0": "\\mathsfbf{c}",
  "\uD5F1": "\\mathsfbf{d}",
  "\uD5F2": "\\mathsfbf{e}",
  "\uD5F3": "\\mathsfbf{f}",
  "\uD5F4": "\\mathsfbf{g}",
  "\uD5F5": "\\mathsfbf{h}",
  "\uD5F6": "\\mathsfbf{i}",
  "\uD5F7": "\\mathsfbf{j}",
  "\uD5F8": "\\mathsfbf{k}",
  "\uD5F9": "\\mathsfbf{l}",
  "\uD5FA": "\\mathsfbf{m}",
  "\uD5FB": "\\mathsfbf{n}",
  "\uD5FC": "\\mathsfbf{o}",
  "\uD5FD": "\\mathsfbf{p}",
  "\uD5FE": "\\mathsfbf{q}",
  "\uD5FF": "\\mathsfbf{r}",
  "\uD600": "\\mathsfbf{s}",
  "\uD601": "\\mathsfbf{t}",
  "\uD602": "\\mathsfbf{u}",
  "\uD603": "\\mathsfbf{v}",
  "\uD604": "\\mathsfbf{w}",
  "\uD605": "\\mathsfbf{x}",
  "\uD606": "\\mathsfbf{y}",
  "\uD607": "\\mathsfbf{z}",
  "\uD608": "\\mathsfsl{A}",
  "\uD609": "\\mathsfsl{B}",
  "\uD60A": "\\mathsfsl{C}",
  "\uD60B": "\\mathsfsl{D}",
  "\uD60C": "\\mathsfsl{E}",
  "\uD60D": "\\mathsfsl{F}",
  "\uD60E": "\\mathsfsl{G}",
  "\uD60F": "\\mathsfsl{H}",
  "\uD610": "\\mathsfsl{I}",
  "\uD611": "\\mathsfsl{J}",
  "\uD612": "\\mathsfsl{K}",
  "\uD613": "\\mathsfsl{L}",
  "\uD614": "\\mathsfsl{M}",
  "\uD615": "\\mathsfsl{N}",
  "\uD616": "\\mathsfsl{O}",
  "\uD617": "\\mathsfsl{P}",
  "\uD618": "\\mathsfsl{Q}",
  "\uD619": "\\mathsfsl{R}",
  "\uD61A": "\\mathsfsl{S}",
  "\uD61B": "\\mathsfsl{T}",
  "\uD61C": "\\mathsfsl{U}",
  "\uD61D": "\\mathsfsl{V}",
  "\uD61E": "\\mathsfsl{W}",
  "\uD61F": "\\mathsfsl{X}",
  "\uD620": "\\mathsfsl{Y}",
  "\uD621": "\\mathsfsl{Z}",
  "\uD622": "\\mathsfsl{a}",
  "\uD623": "\\mathsfsl{b}",
  "\uD624": "\\mathsfsl{c}",
  "\uD625": "\\mathsfsl{d}",
  "\uD626": "\\mathsfsl{e}",
  "\uD627": "\\mathsfsl{f}",
  "\uD628": "\\mathsfsl{g}",
  "\uD629": "\\mathsfsl{h}",
  "\uD62A": "\\mathsfsl{i}",
  "\uD62B": "\\mathsfsl{j}",
  "\uD62C": "\\mathsfsl{k}",
  "\uD62D": "\\mathsfsl{l}",
  "\uD62E": "\\mathsfsl{m}",
  "\uD62F": "\\mathsfsl{n}",
  "\uD630": "\\mathsfsl{o}",
  "\uD631": "\\mathsfsl{p}",
  "\uD632": "\\mathsfsl{q}",
  "\uD633": "\\mathsfsl{r}",
  "\uD634": "\\mathsfsl{s}",
  "\uD635": "\\mathsfsl{t}",
  "\uD636": "\\mathsfsl{u}",
  "\uD637": "\\mathsfsl{v}",
  "\uD638": "\\mathsfsl{w}",
  "\uD639": "\\mathsfsl{x}",
  "\uD63A": "\\mathsfsl{y}",
  "\uD63B": "\\mathsfsl{z}",
  "\uD63C": "\\mathsfbfsl{A}",
  "\uD63D": "\\mathsfbfsl{B}",
  "\uD63E": "\\mathsfbfsl{C}",
  "\uD63F": "\\mathsfbfsl{D}",
  "\uD640": "\\mathsfbfsl{E}",
  "\uD641": "\\mathsfbfsl{F}",
  "\uD642": "\\mathsfbfsl{G}",
  "\uD643": "\\mathsfbfsl{H}",
  "\uD644": "\\mathsfbfsl{I}",
  "\uD645": "\\mathsfbfsl{J}",
  "\uD646": "\\mathsfbfsl{K}",
  "\uD647": "\\mathsfbfsl{L}",
  "\uD648": "\\mathsfbfsl{M}",
  "\uD649": "\\mathsfbfsl{N}",
  "\uD64A": "\\mathsfbfsl{O}",
  "\uD64B": "\\mathsfbfsl{P}",
  "\uD64C": "\\mathsfbfsl{Q}",
  "\uD64D": "\\mathsfbfsl{R}",
  "\uD64E": "\\mathsfbfsl{S}",
  "\uD64F": "\\mathsfbfsl{T}",
  "\uD650": "\\mathsfbfsl{U}",
  "\uD651": "\\mathsfbfsl{V}",
  "\uD652": "\\mathsfbfsl{W}",
  "\uD653": "\\mathsfbfsl{X}",
  "\uD654": "\\mathsfbfsl{Y}",
  "\uD655": "\\mathsfbfsl{Z}",
  "\uD656": "\\mathsfbfsl{a}",
  "\uD657": "\\mathsfbfsl{b}",
  "\uD658": "\\mathsfbfsl{c}",
  "\uD659": "\\mathsfbfsl{d}",
  "\uD65A": "\\mathsfbfsl{e}",
  "\uD65B": "\\mathsfbfsl{f}",
  "\uD65C": "\\mathsfbfsl{g}",
  "\uD65D": "\\mathsfbfsl{h}",
  "\uD65E": "\\mathsfbfsl{i}",
  "\uD65F": "\\mathsfbfsl{j}",
  "\uD660": "\\mathsfbfsl{k}",
  "\uD661": "\\mathsfbfsl{l}",
  "\uD662": "\\mathsfbfsl{m}",
  "\uD663": "\\mathsfbfsl{n}",
  "\uD664": "\\mathsfbfsl{o}",
  "\uD665": "\\mathsfbfsl{p}",
  "\uD666": "\\mathsfbfsl{q}",
  "\uD667": "\\mathsfbfsl{r}",
  "\uD668": "\\mathsfbfsl{s}",
  "\uD669": "\\mathsfbfsl{t}",
  "\uD66A": "\\mathsfbfsl{u}",
  "\uD66B": "\\mathsfbfsl{v}",
  "\uD66C": "\\mathsfbfsl{w}",
  "\uD66D": "\\mathsfbfsl{x}",
  "\uD66E": "\\mathsfbfsl{y}",
  "\uD66F": "\\mathsfbfsl{z}",
  "\uD670": "\\mathtt{A}",
  "\uD671": "\\mathtt{B}",
  "\uD672": "\\mathtt{C}",
  "\uD673": "\\mathtt{D}",
  "\uD674": "\\mathtt{E}",
  "\uD675": "\\mathtt{F}",
  "\uD676": "\\mathtt{G}",
  "\uD677": "\\mathtt{H}",
  "\uD678": "\\mathtt{I}",
  "\uD679": "\\mathtt{J}",
  "\uD67A": "\\mathtt{K}",
  "\uD67B": "\\mathtt{L}",
  "\uD67C": "\\mathtt{M}",
  "\uD67D": "\\mathtt{N}",
  "\uD67E": "\\mathtt{O}",
  "\uD67F": "\\mathtt{P}",
  "\uD680": "\\mathtt{Q}",
  "\uD681": "\\mathtt{R}",
  "\uD682": "\\mathtt{S}",
  "\uD683": "\\mathtt{T}",
  "\uD684": "\\mathtt{U}",
  "\uD685": "\\mathtt{V}",
  "\uD686": "\\mathtt{W}",
  "\uD687": "\\mathtt{X}",
  "\uD688": "\\mathtt{Y}",
  "\uD689": "\\mathtt{Z}",
  "\uD68A": "\\mathtt{a}",
  "\uD68B": "\\mathtt{b}",
  "\uD68C": "\\mathtt{c}",
  "\uD68D": "\\mathtt{d}",
  "\uD68E": "\\mathtt{e}",
  "\uD68F": "\\mathtt{f}",
  "\uD690": "\\mathtt{g}",
  "\uD691": "\\mathtt{h}",
  "\uD692": "\\mathtt{i}",
  "\uD693": "\\mathtt{j}",
  "\uD694": "\\mathtt{k}",
  "\uD695": "\\mathtt{l}",
  "\uD696": "\\mathtt{m}",
  "\uD697": "\\mathtt{n}",
  "\uD698": "\\mathtt{o}",
  "\uD699": "\\mathtt{p}",
  "\uD69A": "\\mathtt{q}",
  "\uD69B": "\\mathtt{r}",
  "\uD69C": "\\mathtt{s}",
  "\uD69D": "\\mathtt{t}",
  "\uD69E": "\\mathtt{u}",
  "\uD69F": "\\mathtt{v}",
  "\uD6A0": "\\mathtt{w}",
  "\uD6A1": "\\mathtt{x}",
  "\uD6A2": "\\mathtt{y}",
  "\uD6A3": "\\mathtt{z}",
  "\uD6A8": "\\mathbf{\\Alpha}",
  "\uD6A9": "\\mathbf{\\Beta}",
  "\uD6AA": "\\mathbf{\\Gamma}",
  "\uD6AB": "\\mathbf{\\Delta}",
  "\uD6AC": "\\mathbf{\\Epsilon}",
  "\uD6AD": "\\mathbf{\\Zeta}",
  "\uD6AE": "\\mathbf{\\Eta}",
  "\uD6AF": "\\mathbf{\\Theta}",
  "\uD6B0": "\\mathbf{\\Iota}",
  "\uD6B1": "\\mathbf{\\Kappa}",
  "\uD6B2": "\\mathbf{\\Lambda}",
  "\uD6B5": "\\mathbf{\\Xi}",
  "\uD6B7": "\\mathbf{\\Pi}",
  "\uD6B8": "\\mathbf{\\Rho}",
  "\uD6B9": "\\mathbf{\\vartheta}",
  "\uD6BA": "\\mathbf{\\Sigma}",
  "\uD6BB": "\\mathbf{\\Tau}",
  "\uD6BC": "\\mathbf{\\Upsilon}",
  "\uD6BD": "\\mathbf{\\Phi}",
  "\uD6BE": "\\mathbf{\\Chi}",
  "\uD6BF": "\\mathbf{\\Psi}",
  "\uD6C0": "\\mathbf{\\Omega}",
  "\uD6C1": "\\mathbf{\\nabla}",
  "\uD6C2": "\\mathbf{\\Alpha}",
  "\uD6C3": "\\mathbf{\\Beta}",
  "\uD6C4": "\\mathbf{\\Gamma}",
  "\uD6C5": "\\mathbf{\\Delta}",
  "\uD6C6": "\\mathbf{\\Epsilon}",
  "\uD6C7": "\\mathbf{\\Zeta}",
  "\uD6C8": "\\mathbf{\\Eta}",
  "\uD6C9": "\\mathbf{\\theta}",
  "\uD6CA": "\\mathbf{\\Iota}",
  "\uD6CB": "\\mathbf{\\Kappa}",
  "\uD6CC": "\\mathbf{\\Lambda}",
  "\uD6CF": "\\mathbf{\\Xi}",
  "\uD6D1": "\\mathbf{\\Pi}",
  "\uD6D2": "\\mathbf{\\Rho}",
  "\uD6D3": "\\mathbf{\\varsigma}",
  "\uD6D4": "\\mathbf{\\Sigma}",
  "\uD6D5": "\\mathbf{\\Tau}",
  "\uD6D6": "\\mathbf{\\Upsilon}",
  "\uD6D7": "\\mathbf{\\Phi}",
  "\uD6D8": "\\mathbf{\\Chi}",
  "\uD6D9": "\\mathbf{\\Psi}",
  "\uD6DA": "\\mathbf{\\Omega}",
  "\uD6DB": "\\partial ",
  "\uD6DC": "\\in",
  "\uD6DD": "\\mathbf{\\vartheta}",
  "\uD6DE": "\\mathbf{\\varkappa}",
  "\uD6DF": "\\mathbf{\\phi}",
  "\uD6E0": "\\mathbf{\\varrho}",
  "\uD6E1": "\\mathbf{\\varpi}",
  "\uD6E2": "\\mathsl{\\Alpha}",
  "\uD6E3": "\\mathsl{\\Beta}",
  "\uD6E4": "\\mathsl{\\Gamma}",
  "\uD6E5": "\\mathsl{\\Delta}",
  "\uD6E6": "\\mathsl{\\Epsilon}",
  "\uD6E7": "\\mathsl{\\Zeta}",
  "\uD6E8": "\\mathsl{\\Eta}",
  "\uD6E9": "\\mathsl{\\Theta}",
  "\uD6EA": "\\mathsl{\\Iota}",
  "\uD6EB": "\\mathsl{\\Kappa}",
  "\uD6EC": "\\mathsl{\\Lambda}",
  "\uD6EF": "\\mathsl{\\Xi}",
  "\uD6F1": "\\mathsl{\\Pi}",
  "\uD6F2": "\\mathsl{\\Rho}",
  "\uD6F3": "\\mathsl{\\vartheta}",
  "\uD6F4": "\\mathsl{\\Sigma}",
  "\uD6F5": "\\mathsl{\\Tau}",
  "\uD6F6": "\\mathsl{\\Upsilon}",
  "\uD6F7": "\\mathsl{\\Phi}",
  "\uD6F8": "\\mathsl{\\Chi}",
  "\uD6F9": "\\mathsl{\\Psi}",
  "\uD6FA": "\\mathsl{\\Omega}",
  "\uD6FB": "\\mathsl{\\nabla}",
  "\uD6FC": "\\mathsl{\\Alpha}",
  "\uD6FD": "\\mathsl{\\Beta}",
  "\uD6FE": "\\mathsl{\\Gamma}",
  "\uD6FF": "\\mathsl{\\Delta}",
  "\uD700": "\\mathsl{\\Epsilon}",
  "\uD701": "\\mathsl{\\Zeta}",
  "\uD702": "\\mathsl{\\Eta}",
  "\uD703": "\\mathsl{\\Theta}",
  "\uD704": "\\mathsl{\\Iota}",
  "\uD705": "\\mathsl{\\Kappa}",
  "\uD706": "\\mathsl{\\Lambda}",
  "\uD709": "\\mathsl{\\Xi}",
  "\uD70B": "\\mathsl{\\Pi}",
  "\uD70C": "\\mathsl{\\Rho}",
  "\uD70D": "\\mathsl{\\varsigma}",
  "\uD70E": "\\mathsl{\\Sigma}",
  "\uD70F": "\\mathsl{\\Tau}",
  "\uD710": "\\mathsl{\\Upsilon}",
  "\uD711": "\\mathsl{\\Phi}",
  "\uD712": "\\mathsl{\\Chi}",
  "\uD713": "\\mathsl{\\Psi}",
  "\uD714": "\\mathsl{\\Omega}",
  "\uD715": "\\partial ",
  "\uD716": "\\in",
  "\uD717": "\\mathsl{\\vartheta}",
  "\uD718": "\\mathsl{\\varkappa}",
  "\uD719": "\\mathsl{\\phi}",
  "\uD71A": "\\mathsl{\\varrho}",
  "\uD71B": "\\mathsl{\\varpi}",
  "\uD71C": "\\mathbit{\\Alpha}",
  "\uD71D": "\\mathbit{\\Beta}",
  "\uD71E": "\\mathbit{\\Gamma}",
  "\uD71F": "\\mathbit{\\Delta}",
  "\uD720": "\\mathbit{\\Epsilon}",
  "\uD721": "\\mathbit{\\Zeta}",
  "\uD722": "\\mathbit{\\Eta}",
  "\uD723": "\\mathbit{\\Theta}",
  "\uD724": "\\mathbit{\\Iota}",
  "\uD725": "\\mathbit{\\Kappa}",
  "\uD726": "\\mathbit{\\Lambda}",
  "\uD729": "\\mathbit{\\Xi}",
  "\uD72B": "\\mathbit{\\Pi}",
  "\uD72C": "\\mathbit{\\Rho}",
  "\uD72D": "\\mathbit{O}",
  "\uD72E": "\\mathbit{\\Sigma}",
  "\uD72F": "\\mathbit{\\Tau}",
  "\uD730": "\\mathbit{\\Upsilon}",
  "\uD731": "\\mathbit{\\Phi}",
  "\uD732": "\\mathbit{\\Chi}",
  "\uD733": "\\mathbit{\\Psi}",
  "\uD734": "\\mathbit{\\Omega}",
  "\uD735": "\\mathbit{\\nabla}",
  "\uD736": "\\mathbit{\\Alpha}",
  "\uD737": "\\mathbit{\\Beta}",
  "\uD738": "\\mathbit{\\Gamma}",
  "\uD739": "\\mathbit{\\Delta}",
  "\uD73A": "\\mathbit{\\Epsilon}",
  "\uD73B": "\\mathbit{\\Zeta}",
  "\uD73C": "\\mathbit{\\Eta}",
  "\uD73D": "\\mathbit{\\Theta}",
  "\uD73E": "\\mathbit{\\Iota}",
  "\uD73F": "\\mathbit{\\Kappa}",
  "\uD740": "\\mathbit{\\Lambda}",
  "\uD743": "\\mathbit{\\Xi}",
  "\uD745": "\\mathbit{\\Pi}",
  "\uD746": "\\mathbit{\\Rho}",
  "\uD747": "\\mathbit{\\varsigma}",
  "\uD748": "\\mathbit{\\Sigma}",
  "\uD749": "\\mathbit{\\Tau}",
  "\uD74A": "\\mathbit{\\Upsilon}",
  "\uD74B": "\\mathbit{\\Phi}",
  "\uD74C": "\\mathbit{\\Chi}",
  "\uD74D": "\\mathbit{\\Psi}",
  "\uD74E": "\\mathbit{\\Omega}",
  "\uD74F": "\\partial ",
  "\uD750": "\\in",
  "\uD751": "\\mathbit{\\vartheta}",
  "\uD752": "\\mathbit{\\varkappa}",
  "\uD753": "\\mathbit{\\phi}",
  "\uD754": "\\mathbit{\\varrho}",
  "\uD755": "\\mathbit{\\varpi}",
  "\uD756": "\\mathsfbf{\\Alpha}",
  "\uD757": "\\mathsfbf{\\Beta}",
  "\uD758": "\\mathsfbf{\\Gamma}",
  "\uD759": "\\mathsfbf{\\Delta}",
  "\uD75A": "\\mathsfbf{\\Epsilon}",
  "\uD75B": "\\mathsfbf{\\Zeta}",
  "\uD75C": "\\mathsfbf{\\Eta}",
  "\uD75D": "\\mathsfbf{\\Theta}",
  "\uD75E": "\\mathsfbf{\\Iota}",
  "\uD75F": "\\mathsfbf{\\Kappa}",
  "\uD760": "\\mathsfbf{\\Lambda}",
  "\uD763": "\\mathsfbf{\\Xi}",
  "\uD765": "\\mathsfbf{\\Pi}",
  "\uD766": "\\mathsfbf{\\Rho}",
  "\uD767": "\\mathsfbf{\\vartheta}",
  "\uD768": "\\mathsfbf{\\Sigma}",
  "\uD769": "\\mathsfbf{\\Tau}",
  "\uD76A": "\\mathsfbf{\\Upsilon}",
  "\uD76B": "\\mathsfbf{\\Phi}",
  "\uD76C": "\\mathsfbf{\\Chi}",
  "\uD76D": "\\mathsfbf{\\Psi}",
  "\uD76E": "\\mathsfbf{\\Omega}",
  "\uD76F": "\\mathsfbf{\\nabla}",
  "\uD770": "\\mathsfbf{\\Alpha}",
  "\uD771": "\\mathsfbf{\\Beta}",
  "\uD772": "\\mathsfbf{\\Gamma}",
  "\uD773": "\\mathsfbf{\\Delta}",
  "\uD774": "\\mathsfbf{\\Epsilon}",
  "\uD775": "\\mathsfbf{\\Zeta}",
  "\uD776": "\\mathsfbf{\\Eta}",
  "\uD777": "\\mathsfbf{\\Theta}",
  "\uD778": "\\mathsfbf{\\Iota}",
  "\uD779": "\\mathsfbf{\\Kappa}",
  "\uD77A": "\\mathsfbf{\\Lambda}",
  "\uD77D": "\\mathsfbf{\\Xi}",
  "\uD77F": "\\mathsfbf{\\Pi}",
  "\uD780": "\\mathsfbf{\\Rho}",
  "\uD781": "\\mathsfbf{\\varsigma}",
  "\uD782": "\\mathsfbf{\\Sigma}",
  "\uD783": "\\mathsfbf{\\Tau}",
  "\uD784": "\\mathsfbf{\\Upsilon}",
  "\uD785": "\\mathsfbf{\\Phi}",
  "\uD786": "\\mathsfbf{\\Chi}",
  "\uD787": "\\mathsfbf{\\Psi}",
  "\uD788": "\\mathsfbf{\\Omega}",
  "\uD789": "\\partial ",
  "\uD78A": "\\in",
  "\uD78B": "\\mathsfbf{\\vartheta}",
  "\uD78C": "\\mathsfbf{\\varkappa}",
  "\uD78D": "\\mathsfbf{\\phi}",
  "\uD78E": "\\mathsfbf{\\varrho}",
  "\uD78F": "\\mathsfbf{\\varpi}",
  "\uD790": "\\mathsfbfsl{\\Alpha}",
  "\uD791": "\\mathsfbfsl{\\Beta}",
  "\uD792": "\\mathsfbfsl{\\Gamma}",
  "\uD793": "\\mathsfbfsl{\\Delta}",
  "\uD794": "\\mathsfbfsl{\\Epsilon}",
  "\uD795": "\\mathsfbfsl{\\Zeta}",
  "\uD796": "\\mathsfbfsl{\\Eta}",
  "\uD797": "\\mathsfbfsl{\\vartheta}",
  "\uD798": "\\mathsfbfsl{\\Iota}",
  "\uD799": "\\mathsfbfsl{\\Kappa}",
  "\uD79A": "\\mathsfbfsl{\\Lambda}",
  "\uD79D": "\\mathsfbfsl{\\Xi}",
  "\uD79F": "\\mathsfbfsl{\\Pi}",
  "\uD7A0": "\\mathsfbfsl{\\Rho}",
  "\uD7A1": "\\mathsfbfsl{\\vartheta}",
  "\uD7A2": "\\mathsfbfsl{\\Sigma}",
  "\uD7A3": "\\mathsfbfsl{\\Tau}",
  "\uD7A4": "\\mathsfbfsl{\\Upsilon}",
  "\uD7A5": "\\mathsfbfsl{\\Phi}",
  "\uD7A6": "\\mathsfbfsl{\\Chi}",
  "\uD7A7": "\\mathsfbfsl{\\Psi}",
  "\uD7A8": "\\mathsfbfsl{\\Omega}",
  "\uD7A9": "\\mathsfbfsl{\\nabla}",
  "\uD7AA": "\\mathsfbfsl{\\Alpha}",
  "\uD7AB": "\\mathsfbfsl{\\Beta}",
  "\uD7AC": "\\mathsfbfsl{\\Gamma}",
  "\uD7AD": "\\mathsfbfsl{\\Delta}",
  "\uD7AE": "\\mathsfbfsl{\\Epsilon}",
  "\uD7AF": "\\mathsfbfsl{\\Zeta}",
  "\uD7B0": "\\mathsfbfsl{\\Eta}",
  "\uD7B1": "\\mathsfbfsl{\\vartheta}",
  "\uD7B2": "\\mathsfbfsl{\\Iota}",
  "\uD7B3": "\\mathsfbfsl{\\Kappa}",
  "\uD7B4": "\\mathsfbfsl{\\Lambda}",
  "\uD7B7": "\\mathsfbfsl{\\Xi}",
  "\uD7B9": "\\mathsfbfsl{\\Pi}",
  "\uD7BA": "\\mathsfbfsl{\\Rho}",
  "\uD7BB": "\\mathsfbfsl{\\varsigma}",
  "\uD7BC": "\\mathsfbfsl{\\Sigma}",
  "\uD7BD": "\\mathsfbfsl{\\Tau}",
  "\uD7BE": "\\mathsfbfsl{\\Upsilon}",
  "\uD7BF": "\\mathsfbfsl{\\Phi}",
  "\uD7C0": "\\mathsfbfsl{\\Chi}",
  "\uD7C1": "\\mathsfbfsl{\\Psi}",
  "\uD7C2": "\\mathsfbfsl{\\Omega}",
  "\uD7C3": "\\partial ",
  "\uD7C4": "\\in",
  "\uD7C5": "\\mathsfbfsl{\\vartheta}",
  "\uD7C6": "\\mathsfbfsl{\\varkappa}",
  "\uD7C7": "\\mathsfbfsl{\\phi}",
  "\uD7C8": "\\mathsfbfsl{\\varrho}",
  "\uD7C9": "\\mathsfbfsl{\\varpi}",
  "\uD7CE": "\\mathbf{0}",
  "\uD7CF": "\\mathbf{1}",
  "\uD7D0": "\\mathbf{2}",
  "\uD7D1": "\\mathbf{3}",
  "\uD7D2": "\\mathbf{4}",
  "\uD7D3": "\\mathbf{5}",
  "\uD7D4": "\\mathbf{6}",
  "\uD7D5": "\\mathbf{7}",
  "\uD7D6": "\\mathbf{8}",
  "\uD7D7": "\\mathbf{9}",
  "\uD7D8": "\\Bbb{0}",
  "\uD7D9": "\\Bbb{1}",
  "\uD7DA": "\\Bbb{2}",
  "\uD7DB": "\\Bbb{3}",
  "\uD7DC": "\\Bbb{4}",
  "\uD7DD": "\\Bbb{5}",
  "\uD7DE": "\\Bbb{6}",
  "\uD7DF": "\\Bbb{7}",
  "\uD7E0": "\\Bbb{8}",
  "\uD7E1": "\\Bbb{9}",
  "\uD7E2": "\\mathsf{0}",
  "\uD7E3": "\\mathsf{1}",
  "\uD7E4": "\\mathsf{2}",
  "\uD7E5": "\\mathsf{3}",
  "\uD7E6": "\\mathsf{4}",
  "\uD7E7": "\\mathsf{5}",
  "\uD7E8": "\\mathsf{6}",
  "\uD7E9": "\\mathsf{7}",
  "\uD7EA": "\\mathsf{8}",
  "\uD7EB": "\\mathsf{9}",
  "\uD7EC": "\\mathsfbf{0}",
  "\uD7ED": "\\mathsfbf{1}",
  "\uD7EE": "\\mathsfbf{2}",
  "\uD7EF": "\\mathsfbf{3}",
  "\uD7F0": "\\mathsfbf{4}",
  "\uD7F1": "\\mathsfbf{5}",
  "\uD7F2": "\\mathsfbf{6}",
  "\uD7F3": "\\mathsfbf{7}",
  "\uD7F4": "\\mathsfbf{8}",
  "\uD7F5": "\\mathsfbf{9}",
  "\uD7F6": "\\mathtt{0}",
  "\uD7F7": "\\mathtt{1}",
  "\uD7F8": "\\mathtt{2}",
  "\uD7F9": "\\mathtt{3}",
  "\uD7FA": "\\mathtt{4}",
  "\uD7FB": "\\mathtt{5}",
  "\uD7FC": "\\mathtt{6}",
  "\uD7FD": "\\mathtt{7}",
  "\uD7FE": "\\mathtt{8}",
  "\uD7FF": "\\mathtt{9}"
};
var strVar = "";
strVar += "<style>";
strVar += "";
strVar += ".long-press-popup {";
strVar += "  -moz-box-shadow: 0px 1px 3px 1px lightgray;";
strVar += "-webkit-box-shadow: 0px 1px 3px 1px lightgray;";
strVar += "box-shadow: 0px 2px 3px 0px lightgrey;";
strVar += "  font-family: Cambria Math,STIXGeneral,Latin Modern Math, Helvetica;";
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
strVar += ".popup-preview {";
strVar += "  -moz-box-shadow: 0px 1px 3px 1px lightgray;";
strVar += "-webkit-box-shadow: 0px 1px 3px 1px lightgray;";
strVar += "box-shadow: 0px 2px 3px 0px lightgrey;";
strVar += "  font-family: Cambria Math,STIXGeneral,Latin Modern Math, Helvetica;";
strVar += "	position: relative;";
strVar += "	top:0px;";
strVar += "	left:0px;";
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
strVar += ".popup-preview li {";
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
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
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
      defaults = {};
    var moreChars = {
      'A': '∀{𝒜}{𝔄}',
      'B': 'ℬ{𝔅}',
      'C': 'ℂ{𝒞}∐',
      'D': '𝒟{𝔇}Δ∩',
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
      '`': '\u0300', //\u20d0\u20d1\u20ec\u20ed',
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
      '<': '≤⟨⊆⊂←↤⇐⊲',
      '>': '≥⟩⊇⊃→↦⇒⟹⊳',
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
      '*': '·∘∙⋄×⨉⊗⊙⨀',
      '^': '\u0302\u030C\u20d7\u0306' //┴
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
      if (e.which === 39 || e.which == 34 || e.which == 96 || e.which == 94 || e.which == 126) {
        e.preventDefault();
      }
    });

    function onKeyDown(e) {
      activeElement = e.target;
      var font = $(activeElement).css('font-family');
      var hasSTIX = /STIX/g.test(font);
      if (!hasSTIX) {
        $(activeElement).css('font-family', font + "Cambria Math, STIXGeneral,Latin Modern Roman");
      }
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
        if (e.which == 54 && e.shiftKey === true && ($('.long-press-popup').length <= 0)) {
          e.preventDefault();
          activeElement = e.target;
          var textAreaTxt = $(activeElement).val();
          var caretPos = getCaretPosition(activeElement);
          $(activeElement).val(textAreaTxt.substring(0, caretPos) + '^' + textAreaTxt.substring(caretPos));
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
      if (true) { //$('#checkbox').prop('checked')
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
      var caretPos = this.getOriginalCaretPos(),
        str = this.$text.val(),
        pre = document.createTextNode(str.substring(0, caretPos)),
        post = document.createTextNode(str.substring(caretPos)),
        $car = $('<span/>').addClass(caretClass).css('position', 'absolute').html('&nbsp;');
      this.$mirror.append(pre, $car, post).scrollTop(this.$text.scrollTop());
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
