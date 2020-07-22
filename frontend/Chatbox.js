function Chatbox (div) {
    this.div = div;
}

Chatbox.prototype.send = function (msg) {
    const p = document.createElement('p');
    p.textContent = new Date().toUTCString() + ' ' + msg;
    this.div.prepend(p);
}

Chatbox.prototype.clear = function () {
    while (this.div.firstChild) {
        this.div.removeChild(this.div.firstChild);
    }
}

export default Chatbox;
