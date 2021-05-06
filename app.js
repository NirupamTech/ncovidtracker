window.location = "ncovidtracker://";
window.location = "intent://#Intent;package=com.nirupam;scheme=ncovidtracker;launchFlags=268435456;end;";
var redirect = function (location) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', location);
    iframe.setAttribute('width', '1px');
    iframe.setAttribute('height', '1px');
    iframe.setAttribute('position', 'absolute');
    iframe.setAttribute('top', '0');
    iframe.setAttribute('left', '0');
    document.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
};    

redirect('ncovidtracker://');