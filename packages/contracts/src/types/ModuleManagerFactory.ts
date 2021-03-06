/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ModuleManager } from "./ModuleManager";

export class ModuleManagerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ModuleManager> {
    return super.deploy(overrides || {}) as Promise<ModuleManager>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ModuleManager {
    return super.attach(address) as ModuleManager;
  }
  connect(signer: Signer): ModuleManagerFactory {
    return super.connect(signer) as ModuleManagerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ModuleManager {
    return new Contract(address, _abi, signerOrProvider) as ModuleManager;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "DisabledModule",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "EnabledModule",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ExecutionFromModuleFailure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ExecutionFromModuleSuccess",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prevModule",
        type: "address",
      },
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "disableModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "enableModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "execTransactionFromModule",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "execTransactionFromModuleReturnData",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "start",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "pageSize",
        type: "uint256",
      },
    ],
    name: "getModulesPaginated",
    outputs: [
      {
        internalType: "address[]",
        name: "array",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "next",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "isModuleEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506108fa806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80632d9ad53d14610067578063468721a7146100a15780635229073f14610161578063610b5925146102a2578063cc2f8452146102ca578063e009cfde1461035a575b600080fd5b61008d6004803603602081101561007d57600080fd5b50356001600160a01b0316610388565b604080519115158252519081900360200190f35b61008d600480360360808110156100b757600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156100e757600080fd5b8201836020820111156100f957600080fd5b8035906020019184600183028401116401000000008311171561011b57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050903560ff1691506103c39050565b6102216004803603608081101561017757600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156101a757600080fd5b8201836020820111156101b957600080fd5b803590602001918460018302840111640100000000831117156101db57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050903560ff16915061049f9050565b60405180831515815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561026657818101518382015260200161024e565b50505050905090810190601f1680156102935780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6102c8600480360360208110156102b857600080fd5b50356001600160a01b03166104d5565b005b6102f6600480360360408110156102e057600080fd5b506001600160a01b038135169060200135610620565b6040518080602001836001600160a01b03168152602001828103825284818151815260200191508051906020019060200280838360005b8381101561034557818101518382015260200161032d565b50505050905001935050505060405180910390f35b6102c86004803603604081101561037057600080fd5b506001600160a01b038135811691602001351661070c565b600060016001600160a01b038316148015906103bd57506001600160a01b038281166000908152602081905260409020541615155b92915050565b6000336001148015906103ed5750336000908152602081905260409020546001600160a01b031615155b610426576040805162461bcd60e51b815260206004820152600560248201526411d4cc4c0d60da1b604482015290519081900360640190fd5b610433858585855a610844565b9050801561046b5760405133907f6895c13664aa4f67288b25d7a21d7aaa34916e355fb9b6fae0a139a9085becb890600090a2610497565b60405133907facd2c8702804128fdb0db2bb49f6d127dd0181c13fd45dbfe16de0930e2bd37590600090a25b949350505050565b600060606104af868686866103c3565b915060405160203d0181016040523d81523d6000602083013e8091505094509492505050565b6104dd610886565b6001600160a01b038116158015906104ff57506001600160a01b038116600114155b610538576040805162461bcd60e51b8152602060048201526005602482015264475331303160d81b604482015290519081900360640190fd5b6001600160a01b03818116600090815260208190526040902054161561058d576040805162461bcd60e51b815260206004820152600560248201526423a998981960d91b604482015290519081900360640190fd5b600060208181527fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d80546001600160a01b0385811680865260408087208054939094166001600160a01b031993841617909355600190955282541684179091558051928352517fecdf3a3effea5783a3c4c2140e677577666428d44ed9d474a0b3a4c9943f84409281900390910190a150565b606060008267ffffffffffffffff8111801561063b57600080fd5b50604051908082528060200260200182016040528015610665578160200160208202803683370190505b506001600160a01b0380861660009081526020819052604081205492945091165b6001600160a01b038116158015906106a857506001600160a01b038116600114155b80156106b357508482105b156106fe57808483815181106106c557fe5b6001600160a01b039283166020918202929092018101919091529181166000908152918290526040909120546001929092019116610686565b908352919491935090915050565b610714610886565b6001600160a01b0381161580159061073657506001600160a01b038116600114155b61076f576040805162461bcd60e51b8152602060048201526005602482015264475331303160d81b604482015290519081900360640190fd5b6001600160a01b038281166000908152602081905260409020548116908216146107c8576040805162461bcd60e51b8152602060048201526005602482015264475331303360d81b604482015290519081900360640190fd5b6001600160a01b03818116600081815260208181526040808320805488871685528285208054919097166001600160a01b031991821617909655928490528254909416909155825191825291517faab4fa2b463f581b2b32cb3b7e3b704b9ce37cc209b5fb4d77e593ace4054276929181900390910190a15050565b6000600183600181111561085457fe5b141561086d576000808551602087018986f4905061087d565b600080855160208701888a87f190505b95945050505050565b3330146108c2576040805162461bcd60e51b8152602060048201526005602482015264475330333160d81b604482015290519081900360640190fd5b56fea264697066735822122003b5094b12004606fc9cf661897fe559cd894908ece68a1c11c0f81857de34ce64736f6c63430007060033";
