module.exports =
[
    {
        "name": "eth-goerli",
        "isTestnet": true,
        "networkId": 5,
        "chainId": 5,
        "shortName": "goerli",
        "uppercaseName": "ETH_GOERLI",
        "nativeTokenSymbol": "ETH",
        "contractsV1": {
            "resolver": "0x3710AB3fDE2B61736B8BB0CE845D6c61F667a78E",
            "host": "0x22ff293e14F1EC3A09B137e9e06084AFd63adDF9",
            "governance": "0x3a648764a6d66440ca096343937c711a7ac1b1e9",
            "cfaV1": "0xEd6BcbF6907D4feEEe8a8875543249bEa9D308E8",
            "cfaV1Forwarder": "0xcfA132E353cB4E398080B9700609bb008eceB125",
            "idaV1": "0xfDdcdac21D64B639546f3Ce2868C7EF06036990c",
            "superTokenFactory": "0x94f26B4c8AD12B18c12f38E878618f7664bdcCE2",
            "superfluidLoader": "0x74d860243Ff08A243d5485899f343117EbDa6eA8",
            "toga": "0xa54FC15FC75693447d70a57262F37a70B614721b"
        },
        "startBlockV1": 3550000,
        "logsQueryRange": 10000,
        "explorer": "https://goerli.etherscan.io",
        "subgraphV1": {
            "name": "protocol-v1-goerli",
            "hostedEndpoint": "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-goerli"
        }
    },
    {
        "name": "polygon-mumbai",
        "isTestnet": true,
        "networkId": 80001,
        "chainId": 80001,
        "shortName": "mumbai",
        "uppercaseName": "POLYGON_MUMBAI",
        "nativeTokenSymbol": "MATIC",
        "contractsV1": {
            "resolver": "0x8C54C83FbDe3C59e59dd6E324531FB93d4F504d3",
            "host": "0xEB796bdb90fFA0f28255275e16936D25d3418603",
            "governance": "0x2637eA93EE5cd887ff9AC98185eA67Bd70C5f62e",
            "cfaV1": "0x49e565Ed1bdc17F3d220f72DF0857C26FA83F873",
            "cfaV1Forwarder": "0xcfA132E353cB4E398080B9700609bb008eceB125",
            "idaV1": "0x804348D4960a61f2d5F9ce9103027A3E849E09b8",
            "superTokenFactory": "0x200657E2f123761662567A1744f9ACAe50dF47E6",
            "superfluidLoader": "0x0d56ED56b63382B0FC964490feB9AE438B6B4b79"
        },
        "startBlockV1": 8100000,
        "logsQueryRange": 10000,
        "explorer": "https://mumbai.polygonscan.com",
        "subgraphV1": {
            "name": "protocol-v1-mumbai",
            "hostedEndpoint": "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-mumbai"
        }
    },
    {
        "name": "optimism-goerli",
        "isTestnet": true,
        "networkId": 420,
        "chainId": 420,
        "shortName": "opgoerli",
        "uppercaseName": "OPTIMISM_GOERLI",
        "nativeTokenSymbol": "ETH",
        "contractsV1": {
            "resolver": "0x21d4E9fbB9DB742E6ef4f29d189a7C18B0b59136",
            "host": "0xE40983C2476032A0915600b9472B3141aA5B5Ba9",
            "governance": "0x777Be25F9fdcA87e8a0E06Ad4be93d65429FCb9f",
            "cfaV1": "0xff48668fa670A85e55A7a822b352d5ccF3E7b18C",
            "cfaV1Forwarder": "0xcfA132E353cB4E398080B9700609bb008eceB125",
            "idaV1": "0x96215257F2FcbB00135578f766c0449d239bd92F",
            "superTokenFactory": "0x9aCc39d15e3f168c111a1D4F80271a9E526c9a9F",
            "superfluidLoader": "0x5Bb5908dcCC9Bb0fC39a78CfDf9e47B4C08E9521"
        },
        "startBlockV1": 340000,
        "logsQueryRange": 50000,
        "explorer": "https://goerli-optimism.etherscan.io",
        "subgraphV1": {
            "name": "protocol-v1-optimism-goerli",
            "hostedEndpoint": "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-optimism-goerli"
        }
    },
    {
        "name": "arbitrum-goerli",
        "isTestnet": true,
        "networkId": 421613,
        "chainId": 421613,
        "shortName": "arbgoerli",
        "uppercaseName": "ARBITRUM_GOERLI",
        "nativeTokenSymbol": "ETH",
        "contractsV1": {
            "resolver": "0x21d4E9fbB9DB742E6ef4f29d189a7C18B0b59136",
            "host": "0xE40983C2476032A0915600b9472B3141aA5B5Ba9",
            "governance": "0x777Be25F9fdcA87e8a0E06Ad4be93d65429FCb9f",
            "cfaV1": "0xff48668fa670A85e55A7a822b352d5ccF3E7b18C",
            "cfaV1Forwarder": "0xcfA132E353cB4E398080B9700609bb008eceB125",
            "idaV1": "0x96215257F2FcbB00135578f766c0449d239bd92F",
            "superTokenFactory": "0x9aCc39d15e3f168c111a1D4F80271a9E526c9a9F",
            "superfluidLoader": "0x5Bb5908dcCC9Bb0fC39a78CfDf9e47B4C08E9521"
        },
        "startBlockV1": 93000,
        "logsQueryRange": 50000,
        "explorer": "https://goerli-rollup-explorer.arbitrum.io",
        "subgraphV1": {
            "name": "protocol-v1-arbitrum-goerli",
            "hostedEndpoint": "https://subgraph.satsuma.xyz/superfluid/arbitrum-goerli/api"
        }
    },
    {
        "name": "avalanche-fuji",
        "isTestnet": true,
        "networkId": 43113,
        "chainId": 43113,
        "shortName": "fuji",
        "uppercaseName": "AVALANCHE_FUJI",
        "nativeTokenSymbol": "AVAX",
        "contractsV1": {
            "resolver": "0x141920741bC45b962B59c833cd849bA617F7ef38",
            "host": "0xf04F2C525819691ed9ABD3D2B7109E1633795e68",
            "governance": "0xe4bbA294E0F7C4a83a105F7fe2CeCf4D7Bd8B3c0",
            "cfaV1": "0xED74d30B8034152b0638CB03cc5c3c906dd1c482",
            "cfaV1Forwarder": "0xcfA132E353cB4E398080B9700609bb008eceB125",
            "idaV1": "0x997d745884F54a93E6662b055c5e6c09F688718b",
            "superTokenFactory": "0xA25dbEa94C5824892006b30a629213E7Bf238624",
            "superfluidLoader": "0x777Be25F9fdcA87e8a0E06Ad4be93d65429FCb9f"
        },
        "startBlockV1": 3220000,
        "logsQueryRange": 50000,
        "explorer": "https://testnet.snowtrace.io",
        "subgraphV1": {
            "name": "protocol-v1-avalanche-fuji",
            "hostedEndpoint": "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-avalanche-fuji"
        }
    },
    {
        "name": "xdai-mainnet",
        "isTestnet": false,
        "networkId": 100,
        "chainId": 100,
        "shortName": "xdai",
        "uppercaseName": "XDAI_MAINNET",
        "nativeTokenSymbol": "xDAI",
        "contractsV1": {
            "resolver": "0xD2009765189164b495c110D61e4D301729079911",
            "host": "0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7",
            "governance": "0xaCc7380323681fdb8a0B9F2FE7d69dDFf0664478",
            "cfaV1": "0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D",
            "cfaV1Forwarder": "0xcfA132E353cB4E398080B9700609bb008eceB125",
            "idaV1": "0x7888ac96F987Eb10E291F34851ae0266eF912081",
            "superTokenFactory": "0x23410e2659380784498509698ed70E414D384880",
            "superfluidLoader": "0x21d4E9fbB9DB742E6ef4f29d189a7C18B0b59136",
            "toga": "0xb7DE52F4281a7a276E18C40F94cd93159C4A2d22",
            "batchLiquidator": "0xf4b9bBFc34dc8cc392bC97c76bc60D8350D83172"
        },
        "startBlockV1": 14820000,
        "logsQueryRange": 20000,
        "explorer": "https://gnosisscan.io",
        "subgraphV1": {
            "name": "protocol-v1-xdai",
            "hostedEndpoint": "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-xdai"
        }
    },
    {
        "name": "polygon-mainnet",
        "isTestnet": false,
        "networkId": 137,
        "chainId": 137,
        "shortName": "matic",
        "uppercaseName": "POLYGON_MAINNET",
        "nativeTokenSymbol": "MATIC",
        "contractsV1": {
            "resolver": "0xE0cc76334405EE8b39213E620587d815967af39C",
            "host": "0x3E14dC1b13c488a8d5D310918780c983bD5982E7",
            "governance": "0x3AD3f7A0965Ce6f9358AD5CCE86Bc2b05F1EE087",
            "cfaV1": "0x6EeE6060f715257b970700bc2656De21dEdF074C",
            "cfaV1Forwarder": "0xcfA132E353cB4E398080B9700609bb008eceB125",
            "idaV1": "0xB0aABBA4B2783A72C52956CDEF62d438ecA2d7a1",
            "superTokenFactory": "0x2C90719f25B10Fc5646c82DA3240C76Fa5BcCF34",
            "superfluidLoader": "0x15F0Ca26781C3852f8166eD2ebce5D18265cceb7",
            "toga": "0x6AEAeE5Fd4D05A741723D752D30EE4D72690A8f7",
            "batchLiquidator": "0xE6E151C28F6EC8DD696637ac2bf5d24adB527566"
        },
        "startBlockV1": 10000000,
        "logsQueryRange": 10000,
        "explorer": "https://polygonscan.com",
        "subgraphV1": {
            "name": "protocol-v1-matic",
            "hostedEndpoint": "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-matic"
        }
    },
    {
        "name": "optimism-mainnet",
        "isTestnet": false,
        "networkId": 10,
        "chainId": 10,
        "shortName": "optimism",
        "uppercaseName": "OPTIMISM_MAINNET",
        "nativeTokenSymbol": "ETH",
        "contractsV1": {
            "resolver": "0x743B5f46BC86caF41bE4956d9275721E0531B186",
            "host": "0x567c4B141ED61923967cA25Ef4906C8781069a10",
            "governance": "0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D",
            "cfaV1": "0x204C6f131bb7F258b2Ea1593f5309911d8E458eD",
            "cfaV1Forwarder": "0xcfA132E353cB4E398080B9700609bb008eceB125",
            "idaV1": "0xc4ce5118C3B20950ee288f086cb7FC166d222D4c",
            "superTokenFactory": "0x8276469A443D5C6B7146BED45e2abCaD3B6adad9",
            "superfluidLoader": "0x8E310ce29Ab7Fa2878944A65BB0eaF97B1853d40",
            "toga": "0xA3c8502187fD7a7118eAD59dc811281448946C8f",
            "batchLiquidator": "0xEe1bd2C743BF40B1206B090Fa9aB27A0C57d7B90"
        },
        "startBlockV1": 4300000,
        "logsQueryRange": 50000,
        "explorer": "https://optimistic.etherscan.io",
        "subgraphV1": {
            "name": "protocol-v1-optimism-mainnet",
            "hostedEndpoint": "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-optimism-mainnet"
        }
    },
    {
        "name": "arbitrum-one",
        "isTestnet": false,
        "networkId": 42161,
        "chainId": 42161,
        "shortName": "arbone",
        "uppercaseName": "ARBITRUM_ONE",
        "nativeTokenSymbol": "ETH",
        "contractsV1": {
            "resolver": "0x609b9d9d6Ee9C3200745A79B9d3398DBd63d509F",
            "host": "0xCf8Acb4eF033efF16E8080aed4c7D5B9285D2192",
            "governance": "0x0170FFCC75d178d426EBad5b1a31451d00Ddbd0D",
            "cfaV1": "0x731FdBB12944973B500518aea61942381d7e240D",
            "cfaV1Forwarder": "0xcfA132E353cB4E398080B9700609bb008eceB125",
            "idaV1": "0x2319C7e07EB063340D2a0E36709B0D65fda75986",
            "superTokenFactory": "0x1C21Ead77fd45C84a4c916Db7A6635D0C6FF09D6",
            "superfluidLoader": "0xB99cA401e10D277345BcFb281AC148a2e16Db466",
            "toga": "0xFC63B7C762B10670Eda15cF3ca3970bCDB28C9eF",
            "batchLiquidator": "0xA87F76e99f6C8Ff8996d14f550ceF47f193D9A09"
        },
        "startBlockV1": 7600000,
        "logsQueryRange": 50000,
        "explorer": "https://arbiscan.io",
        "subgraphV1": {
            "name": "protocol-v1-arbitrum-one",
            "hostedEndpoint": "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-arbitrum-one"
        }
    },
    {
        "name": "avalanche-c",
        "isTestnet": false,
        "networkId": 43114,
        "chainId": 43114,
        "shortName": "avalanche",
        "uppercaseName": "AVALANCHE_C",
        "nativeTokenSymbol": "AVAX",
        "contractsV1": {
            "resolver": "0x24a3F04F70B7f07B9673EadD3e146391BcfEa5c1",
            "host": "0x60377C7016E4cdB03C87EF474896C11cB560752C",
            "governance": "0xF74390BabA510ec2fE196c2e02B037380d7a6F12",
            "cfaV1": "0x6946c5B38Ffea373b0a2340b4AEf0De8F6782e58",
            "cfaV1Forwarder": "0xcfA132E353cB4E398080B9700609bb008eceB125",
            "idaV1": "0x1fA9fFe8Db73F701454B195151Db4Abb18423cf2",
            "superTokenFactory": "0x464AADdBB2B80f3Cb666522EB7381bE610F638b4",
            "superfluidLoader": "0x2601E69a2D16C8Ccc8aEe8cE9F59d24a59986B9E",
            "toga": "0x3D9A67D5ec1E72CEcA8157e028855056786b6159",
            "batchLiquidator": "0xcFE6382B33F2AdaFbE46e6A26A88E0182ae32b0c"
        },
        "startBlockV1": 14700000,
        "logsQueryRange": 50000,
        "explorer": "https://snowtrace.io",
        "subgraphV1": {
            "name": "protocol-v1-avalanche-c",
            "hostedEndpoint": "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-avalanche-c"
        }
    },
    {
        "name": "bsc-mainnet",
        "isTestnet": false,
        "networkId": 56,
        "chainId": 56,
        "shortName": "bsc",
        "uppercaseName": "BSC_MAINNET",
        "nativeTokenSymbol": "BNB",
        "contractsV1": {
            "resolver": "0x69604aA4e9e8BF44A73C680997205Edb03A92E41",
            "host": "0xd1e2cFb6441680002Eb7A44223160aB9B67d7E6E",
            "governance": "0xee07D9fce4Cf2a891BC979E9d365929506C2982f",
            "cfaV1": "0x49c38108870e74Cb9420C0991a85D3edd6363F75",
            "cfaV1Forwarder": "0xcfA132E353cB4E398080B9700609bb008eceB125",
            "idaV1": "0x594ed9Cd773584B645aC1F5B11020d3b32cDF07d",
            "superTokenFactory": "0x8bde47397301F0Cd31b9000032fD517a39c946Eb",
            "superfluidLoader": "0x3C26e5bEbc68EaAf4efcd88F8E5A6Aeb77b65579",
            "toga": "0xFCD84210f5d51Cd40a30443d44d6A5500d5D10dF",
            "batchLiquidator": "0xe6C8d111337D0052b9D88BF5d7D55B7f8385ACd3"
        },
        "startBlockV1": 18800000,
        "logsQueryRange": 5000,
        "explorer": "https://bscscan.com",
        "subgraphV1": {
            "name": "protocol-v1-bsc-mainnet",
            "hostedEndpoint": "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-bsc-mainnet"
        }
    }
]
