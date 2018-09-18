import {_} from "../../tools/utils";

class DOMHandler {
    constructor(el) {

        if (_.isString(el))
            el = document.querySelector(el);
        this.nativeElement = el;
        this.isWFM = true;
    }

    on(eventName, callback, context) {
        callback = callback.bind(context);
        this.nativeElement.addEventListener(eventName, callback);
        return this;
    }

    off(eventName, callback) {
        this.nativeElement.removeEventListener(eventName, callback);
        return this;
    }

    css(styles) {
        if (!styles) return this.nativeElement.style;

        Object.keys(styles).forEach(key => {
            this.nativeElement.style[key] = styles[key];
        });

        return this;
    }

    addClass(className) {
        this.nativeElement.classList.add(className);
        return this;
    }

    removeClass(className) {
        this.nativeElement.classList.remove(className);
        return this;
    }

    hasClass(className) {
        return this.nativeElement.classList.contains(className);
    }

    html(html) {
        if (html.isWFM) html = html.nativeElement.innerHTML;
        this.nativeElement.innerHTML = html;
        return this;
    }

    append(el) {
        if (el.isWFM) el = el.nativeElement;
        this.nativeElement.appendChild(el);
        return this;
    }

    parent() {
        return $(this.nativeElement.parentNode);
    }

    attr(name, value = null) {
        if (!value) {
            return this.nativeElement.getAttribute(name);
        }

        this.nativeElement.setAttribute(name, value);
        return this;
    }

    find(selector) {
        return $(this.nativeElement.querySelector(selector));
    }

    findAll(selector) {

    }
}

export function $(el) {
    return new DOMHandler(el);
}