import React from 'react';
import { getSummonerRegions } from '@/lib/data/getTFTAccounts';

export default function Search(props: any) {

  const regions = getSummonerRegions();

  return (
    <div className="flex w-full justify-center rounded-full">
      <select className={"select max-w-xs rounded-l-full border-r-0"}>
        <option disabled selected>Select Region</option>
        {regions.map(region => 
          <option key={region.platformID}>{region.region}</option>
        )}
      </select>
      <input type="text" placeholder="Enter Summoner Name" className="input w-full max-w-xs rounded-r-full border-l-0" />
    </div>
  )
}