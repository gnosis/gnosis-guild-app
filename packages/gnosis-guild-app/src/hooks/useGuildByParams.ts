import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useWeb3Context } from "../context/Web3Context";
import { GuildMetadata, useGuildContext } from "../context/GuildContext";
import { fetchGuild } from "../graphql";
import { IPFS_GATEWAY } from "../constants";
import { useGuild } from "./useGuild";

type Guild = {
  guild: GuildMetadata;
  loading: boolean;
  guildActive: boolean;
};

export const useGuildByParams = (): Guild => {
  const [guild, setGuild] = useState<GuildMetadata>({
    name: "",
    description: "",
    contentFormat: "",
    externalLink: "",
    image: new File([], ""),
    currency: "ETH",
    amount: "0",
    guildAddress: "",
    imageCid: "",
    active: true,
  });
  const { guildId } = useParams<{ guildId: string }>();
  const [loading, setLoading] = useState(true);
  const [guildActive, setGuildActive] = useState(false);
  const { providerChainId } = useWeb3Context();
  const { fetchMetadata } = useGuild();
  const { setGuildMetadata } = useGuildContext();

  useEffect(() => {
    const _fetchGuild = async () => {
      const meta = await fetchGuild(guildId, providerChainId || 4);
      if (meta) {
        setGuildActive(meta.active);
        let metadata = {
          name: "",
          description: "",
          contentFormat: "",
          externalLink: "",
          image: new File([], ""),
          currency: "ETH",
          amount: "0",
          guildAddress: "",
          imageCid: "",
          active: true,
        };

        if (meta.metadataURI) {
          const cid = meta.metadataURI.split("/").slice(-1)[0];
          metadata = await fetchMetadata(`${IPFS_GATEWAY}/${cid}`, guildId);
        }
        let blob = new Blob();
        if (metadata.imageCid) {
          const resp = await fetch(
            `${IPFS_GATEWAY}/${metadata.imageCid}`
          ).catch((err: Error) =>
            console.error(`Failed to fetch metadata image: ${err}`)
          );
          if (resp) {
            blob = await resp.blob();
          }
        }
        const data = {
          name: metadata.name,
          description: metadata.description,
          contentFormat: metadata.contentFormat,
          externalLink: metadata.externalLink,
          image: new File([blob], "profile.jpg"),
          currency: metadata.currency,
          amount: metadata.amount,
          guildAddress: metadata.guildAddress,
          imageCid: metadata.imageCid,
          tokenAddress: meta.tokenAddress,
          active: meta.active,
        };
        setGuildMetadata(data);
        setGuild(data);
      }
      setLoading(false);
    };
    _fetchGuild();
  }, [guildId, providerChainId, fetchMetadata, setGuildMetadata]);
  return {
    guild,
    loading,
    guildActive,
  };
};
