/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IAllowanceModule } from "./IAllowanceModule";

export class IAllowanceModuleFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAllowanceModule {
    return new Contract(address, _abi, signerOrProvider) as IAllowanceModule;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "safe",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "amount",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "payment",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "executeAllowanceTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "safe",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "amount",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "payment",
        type: "uint96",
      },
      {
        internalType: "uint16",
        name: "nonce",
        type: "uint16",
      },
    ],
    name: "generateTransferHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "safe",
        type: "address",
      },
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getTokenAllowance",
    outputs: [
      {
        internalType: "uint256[5]",
        name: "",
        type: "uint256[5]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
