var isIE11 = !!window.MSInputMethodContext && !!documentMode;
var isEdge = /Edge/.test(navigator.userAgent);
if(isIE11 || isEdge) {
    setTimeout(function(){ window.scrollTo(0, 0); }, 300);
}