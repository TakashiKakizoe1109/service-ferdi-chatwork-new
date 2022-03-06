const path = require('path');
let counts = {direct: 0, indirect: 0};

module.exports = (Ferdi) => {

    const getMessages = function getMessages() {
        try {
            counts.direct = 0;
            counts.indirect = 0;
            const rooms = document.querySelectorAll('#RoomList ._unreadBadge > span');
            for (let i = 0; i < rooms.length; ++i) {
                const count = Ferdi.safeParseInt(rooms[i].innerText);
                const after = window.getComputedStyle(rooms[i].parentNode, '::after');
                if (after.content !== "none") {
                    counts.direct += count;
                }
                counts.indirect += count;
            }
        } catch (e) {
        }
        Ferdi.setBadge(counts.direct, counts.indirect);
    };

    Ferdi.loop(getMessages);
    Ferdi.injectJSUnsafe(path.join(__dirname, 'js', 'webview-unsafe.js'));
    Ferdi.injectCSS(path.join(__dirname, 'css', 'service.css'));
};