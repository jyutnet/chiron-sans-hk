function loadFontFromCDN(version) {
    var cssPrefix =
        window.location.hostname === 'localhost' ?
            '_build/chiron-sans-hk/' :
            'https://cdn.jsdelivr.net/gh/tamcy/chiron-sans-hk@v' + version + '/build/webfont/';

    $.each(['ExtraLight', 'Light', 'Normal', 'Medium', 'Bold', 'Heavy'], function (_, weight) {
        $("<link>", {
            rel: "stylesheet",
            type: "text/css",
            href: cssPrefix + 'css/' + weight + '.css'
        }).appendTo('head');
    });

}
