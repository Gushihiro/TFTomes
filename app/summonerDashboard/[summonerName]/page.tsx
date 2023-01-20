import { IGetTFTSummonerParams, SummonerPageProps, getTFTSummoner } from "@/lib/data/getTFTAccounts";


export default async function Page({ params }: SummonerPageProps) {
  const summoner = await getTFTSummoner(params);
  if (!summoner) return null;
  console.log("Summoner", summoner);
  return (
    <p>{summoner}</p>
  )
}