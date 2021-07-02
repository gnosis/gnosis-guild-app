import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";

import { useWeb3Context } from "../context/Web3Context";
import { fetchSubscriberByGuild } from "../graphql";

const initialSubscriber = {
  id: "",
  active: false,
  unsubscribedAt: "",
  owner: "",
  paymentHistory: [{}],
  keyId: 0,
};

export const useSubscriber = () => {
  const { providerChainId, account, cpk } = useWeb3Context();
  const { guildId } = useParams<{ guildId: string }>();

  const [subscribed, setSubscribed] = useState(false);
  const [subscriberMeta, setSubscriberMeta] = useState(initialSubscriber);
  const [currentMinimumAmount, setCurrentMinimumAmount] = useState("0");
  const [id, setId] = useState("");

  useEffect(() => {
    const setSubscriber = async (): Promise<void> => {
      if (!guildId || !providerChainId || !account) {
        return;
      }
      const subscribers = await fetchSubscriberByGuild(
        guildId,
        // TODO: should subscriber be the CPK or the owner?
        // cpk?.address || account,
        account,
        providerChainId
      );
      if (!subscribers) {
        setSubscribed(false);
        return;
      }
      if (subscribers.length > 0) {
        setSubscribed(true);
        const subscriber = subscribers[0];
        setId(subscriber.id);
        setSubscriberMeta(subscriber);
        if (subscriber.paymentHistory.length > 0) {
          const payment = subscriber.paymentHistory[0];
          setCurrentMinimumAmount(ethers.utils.formatEther(payment.value));
        }
      } else {
        setSubscribed(false);
      }
    };

    setSubscriber();
  }, [providerChainId, account, guildId]);
  return {
    subscribed,
    currentMinimumAmount,
    id,
    subscriber: subscriberMeta,
  };
};
