import { IChainData } from "./types";

const API_KEY = process.env.REACT_APP_INFURA_ID;

type Networks = {
  [key: number]: IChainData;
};

export const networks: Networks = {
  1: {
    name: "Ethereum Mainnet",
    short_name: "eth",
    chain: "ETH",
    network: "mainnet",
    chain_id: 1,
    network_id: 1,
    rpc_url: `https://mainnet.infura.io/v3/${API_KEY}`,
    native_currency: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
  4: {
    name: "Ethereum Rinkeby",
    short_name: "rin",
    chain: "ETH",
    network: "rinkeby",
    chain_id: 4,
    network_id: 4,
    rpc_url: `https://rinkeby.infura.io/v3/${API_KEY}`,
    native_currency: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
};
