/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MultiSendInterface extends ethers.utils.Interface {
  functions: {
    "multiSend(bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "multiSend",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "multiSend", data: BytesLike): Result;

  events: {};
}

export class MultiSend extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MultiSendInterface;

  functions: {
    multiSend(
      transactions: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "multiSend(bytes)"(
      transactions: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  multiSend(
    transactions: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "multiSend(bytes)"(
    transactions: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    multiSend(
      transactions: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "multiSend(bytes)"(
      transactions: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    multiSend(
      transactions: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "multiSend(bytes)"(
      transactions: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    multiSend(
      transactions: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "multiSend(bytes)"(
      transactions: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
