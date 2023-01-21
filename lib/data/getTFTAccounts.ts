import { cache } from "react";

export type IGetTFTSummonerParams = {
  region: string;
  summonerName: string;
}

export type SummonerPageProps = {
  params: IGetTFTSummonerParams,
  children?: React.ReactNode;
}

interface IRegion {
  platformID: string;
  region: string;
}

export async function getTFTSummoner(params: IGetTFTSummonerParams) {
  const testplatformID = "RGAPI-32f4f759-516a-4f7f-85ea-435f5abf05c2";
  const res = await fetch(`https://${params.region}.api.riotgames.com/tft/summoner/v1/summoners/by-name/${params.summonerName}?api_platformID=${testplatformID}`);

  if (!res.ok) {
    throw new Error('Failed to fetch summoner');
  }

  return res.json();
}

export const getSummonerRegions = (): IRegion[] => [
  {
    platformID: 'NA1',
    region: 'North America'
  },
  {
    platformID: 'EUW1',
    region: 'Europe West'
  },
  {
    platformID: 'EUN1',
    region: 'Europe Nordic & East'
  },
  {
    platformID: 'OC1',
    region: 'Oceania'
  },
  {
    platformID: 'KR',
    region: 'Korea'
  },
  {
    platformID: 'JP1',
    region: 'Japan'
  },
  {
    platformID: 'BR1',
    region: 'Brazil'
  },
  {
    platformID: 'LA1',
    region: 'LAS'
  },
  {
    platformID: 'LA2',
    region: 'LAN'
  },
  {
    platformID: 'RU',
    region: 'Russia'
  },
  {
    platformID: 'TR1',
    region: 'Türkiye'
  },
  {
    platformID: 'SG2',
    region: 'Singapore'
  },
  {
    platformID: 'PH2',
    region: 'Philippines'
  },
  {
    platformID: 'TW2',
    region: 'Taiwan'
  },
  {
    platformID: 'VN2',
    region: 'Vietnam'
  },
  {
    platformID: 'TH2',
    region: 'Thailand'
  }
];

export function fetchRegions(): IRegion[] {
  return getSummonerRegions();
}