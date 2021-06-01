// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Guild extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Guild entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Guild entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Guild", id.toString(), this);
  }

  static load(id: string): Guild | null {
    return store.get("Guild", id) as Guild | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get metadataURI(): string {
    let value = this.get("metadataURI");
    return value.toString();
  }

  set metadataURI(value: string) {
    this.set("metadataURI", Value.fromString(value));
  }

  get active(): boolean {
    let value = this.get("active");
    return value.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get currentPrice(): BigInt {
    let value = this.get("currentPrice");
    return value.toBigInt();
  }

  set currentPrice(value: BigInt) {
    this.set("currentPrice", Value.fromBigInt(value));
  }

  get subsPeriod(): BigInt {
    let value = this.get("subsPeriod");
    return value.toBigInt();
  }

  set subsPeriod(value: BigInt) {
    this.set("subsPeriod", Value.fromBigInt(value));
  }

  get currentBalance(): BigInt {
    let value = this.get("currentBalance");
    return value.toBigInt();
  }

  set currentBalance(value: BigInt) {
    this.set("currentBalance", Value.fromBigInt(value));
  }

  get totalSubscriptions(): BigInt {
    let value = this.get("totalSubscriptions");
    return value.toBigInt();
  }

  set totalSubscriptions(value: BigInt) {
    this.set("totalSubscriptions", Value.fromBigInt(value));
  }

  get subscriptions(): Array<string> | null {
    let value = this.get("subscriptions");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set subscriptions(value: Array<string> | null) {
    if (value === null) {
      this.unset("subscriptions");
    } else {
      this.set("subscriptions", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class GuildSubscription extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save GuildSubscription entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save GuildSubscription entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("GuildSubscription", id.toString(), this);
  }

  static load(id: string): GuildSubscription | null {
    return store.get("GuildSubscription", id) as GuildSubscription | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get guild(): string {
    let value = this.get("guild");
    return value.toString();
  }

  set guild(value: string) {
    this.set("guild", Value.fromString(value));
  }

  get keyId(): BigInt {
    let value = this.get("keyId");
    return value.toBigInt();
  }

  set keyId(value: BigInt) {
    this.set("keyId", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get expires(): string {
    let value = this.get("expires");
    return value.toString();
  }

  set expires(value: string) {
    this.set("expires", Value.fromString(value));
  }

  get paymentHistory(): Array<string> | null {
    let value = this.get("paymentHistory");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set paymentHistory(value: Array<string> | null) {
    if (value === null) {
      this.unset("paymentHistory");
    } else {
      this.set("paymentHistory", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class Payment extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Payment entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Payment entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Payment", id.toString(), this);
  }

  static load(id: string): Payment | null {
    return store.get("Payment", id) as Payment | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get purchasedAt(): string {
    let value = this.get("purchasedAt");
    return value.toString();
  }

  set purchasedAt(value: string) {
    this.set("purchasedAt", Value.fromString(value));
  }

  get subscription(): string {
    let value = this.get("subscription");
    return value.toString();
  }

  set subscription(value: string) {
    this.set("subscription", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}