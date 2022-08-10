//const nl = require("./list.json");

//import nl from "./list.json" assert { type: "json" };

let _networks = [];

export async function init() {
//    (_networks, await fetch('./list.json'));
    // TODO: use relative path?
    const nw = await (await fetch('https://raw.githubusercontent.com/superfluid-finance/metadata/master/networks/list.json')).json();
    _networks.push(...nw);
}

export const networkHelpers = {
    networks: _networks,

    //getMainnets: () => _networks.filter(e => ! e.isTestnet),
    mainnets: _networks.filter(e => ! e.isTestnet),

    testnets: _networks.filter(e => e.isTestnet),

    getNetworkByChainId: function (chainId) {
        console.log(`getting network for id ${chainId}`);
        return _networks.filter((n) => n.chainId === chainId)[0];
    },

    getNetworkByName: function (name) {
        return _networks.filter((n) => n.name === name)[0];
    },

    getNetworkByShortName: function (shortName) {
        return _networks.filter((n) => n.shortName === shortName)[0];
    },
};