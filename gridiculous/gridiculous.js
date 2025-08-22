export class Gridiculous {
    initialize () {
        addCSSSheets('https://raw.githubusercontent.com/dreamForge-forging-our-dreams-in-tech/Pichai-UX---Gridiculous/refs/heads/main/gridiculous/css/style.css', 'GridiculousCSS');
    }
}

function addCSSSheets(url, id) {
    let head = document.getElementsByTagName('head')[0];

    let link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.media = 'all';

    if (id == 'font') {
        head.append(link);
    } else {
        head.prepend(link);
    }
}