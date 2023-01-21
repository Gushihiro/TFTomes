'use client';

import React, { useState } from 'react';
import { fetchRegions } from '@/lib/data/getTFTAccounts';

export default function Search(props: any) {

  const [ summonerRegion, setSummonerRegion ] = useState<string>();
  const [ summonerName, setSummonerName ] = useState<string>();
  const regions = fetchRegions();

  return (
    <form className="form-control">
      <div className="flex w-full justify-center">
        <select className={"select max-w-xs rounded-l-full border-r-0"}
            defaultValue={"Select Region"} value={summonerRegion}
            onChange={e => setSummonerRegion(e.currentTarget.value)}>
          <option disabled>Select Region</option>
          {regions.map(region => 
            <option key={region.platformID}>{region.region}</option>
          )}
        </select>
        <input type="text" placeholder="Enter Summoner Name"
            className="input w-full max-w-xs border-l-0 rounded-none"
            value={summonerName}
            onChange={e => setSummonerName(e.currentTarget.value)} />
        <button className="btn btn-ghost border-l-0 rounded-r-full search-button hover:bg-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </form>
  )
}