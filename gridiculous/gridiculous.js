export class Gridiculous {
    initialize () {
        addCSSSheets('https://dreamforge-forging-our-dreams-in-tech.github.io/Pichai-UX---Gridiculous/gridiculous/css/style.css', 'GridiculousCSS');
        addJSCode('https://cdnjs.cloudflare.com/ajax/libs/dragula/$VERSION/dragula.min.js', 'draguleJS');

        document.body.classList.add('gridView');
    }
}


// functions to inject JS or CSS files
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

function addJSCode(url, id) {
    let head = document.getElementsByTagName('head')[0];

    let link = document.createElement('script');
    link.id = id;
    link.src = url;
    link.type = 'module';

    head.append(link)
}