const nl = require("./list.json");

// add default and derived properties
for(let i=0; i<nl.length; i++) {
    nl[i].subgraphV1 = nl[i].subgraphV1 || {};
    nl[i].subgraphV1.name = nl[i].subgraphV1.name || `protocol-v1-${nl[i].name}`;
    nl[i].subgraphV1.hostedEndpoint = nl[i].subgraphV1.hostedEndpoint ||
        `https://api.thegraph.com/subgraphs/name/superfluid-finance/${nl[i].subgraphV1.name}`;
    
    nl[i].startBlockV1 = nl[i].startBlockV1 || 0;
    nl[i].logsQueryRange = nl[i].logsQueryRange || 10000;
}

module.exports = {
    networks: nl,

    mainnets: nl.filter(e => ! e.isTestnet),

    testnets: nl.filter(e => e.isTestnet),

    getNetworkByChainId: function (chainId) {
        return this.networks.filter((n) => n.chainId === chainId)[0];
    },

    getNetworkByName: function (name) {
        return this.networks.filter((n) => n.name === name)[0];
    },

    getNetworkByShortName: function (shortName) {
        return this.networks.filter((n) => n.shortName === shortName)[0];
    },
};
