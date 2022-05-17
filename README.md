# Superfluid Metadata

Contains metadata around the Superfluid framework.

## Networks

List of EVM networks with the Superfluid protocol deployed.
Example use:

```js
> sfMeta = require(@superfluid-finance/metadata)
> sfMeta.networks.length
12
> sfMeta.testnets.length
7
> sfMeta.mainnets.length
5
> sfMeta.mainnets.filter(n => n.nativeTokenSymbol === "ETH").map(n => n.name)
[
  'eth-ropsten',
  'eth-kovan',
  'eth-goerli',
  'optimism-kovan',
  'arbitrum-rinkeby',
  'optimism-mainnet',
  'arbitrum-one'
]
> m.getNetworkByChainId(10)
{
  name: 'optimism-mainnet',
  isTestnet: false,
  networkId: 10,
  chainId: 10,
  shortName: 'optimism',
  nativeTokenSymbol: 'ETH',
  contractsV1: {
    resolver: '0x743B5f46BC86caF41bE4956d9275721E0531B186',
    host: '0x567c4B141ED61923967cA25Ef4906C8781069a10',
    governance: '0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D',
    cfaV1: '0x204C6f131bb7F258b2Ea1593f5309911d8E458eD',
    idaV1: '0xc4ce5118C3B20950ee288f086cb7FC166d222D4c',
    superTokenFactory: '0x8276469A443D5C6B7146BED45e2abCaD3B6adad9',
    superfluidLoader: '0x8E310ce29Ab7Fa2878944A65BB0eaF97B1853d40',
    toga: '0xA3c8502187fD7a7118eAD59dc811281448946C8f'
  },
  startBlockV1: 4300000,
  logsQueryRange: 50000,
  explorer: 'https://optimistic.etherscan.io',
  httpProviderUrl: 'http://optimism-mainnet.web3-infra.superfluid.dev',
  subgraphV1: {
    name: 'protocol-v1-optimism-mainnet',
    hostedEndpoint: 'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-optimism-mainnet'
  }
}
```