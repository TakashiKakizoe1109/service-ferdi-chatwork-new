module.exports = Ferdi => class Chatwork extends Ferdi {
    overrideUserAgent() {
        const useragent = window.navigator.userAgent;
        const parts = useragent.split('(KHTML, like Gecko)');
        return parts.join('(KHTML, like Gecko) chatwork/0.0.250').replace('Electron', 'Chatwork').replace('Ferdi', 'Chatwork');
    }
};