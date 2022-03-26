module.exports = {
    networks: require("./networks.json"),

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
