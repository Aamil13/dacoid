import React from 'react'
import {
    BarChart,
    Bar,
    Tooltip,
  } from "recharts";

  const data = [
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
      pv: 70,
      uv: 30,
    },
    {
      pv: 40,
      uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 20,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 30,
        uv: 0,
    },
    {
        pv: 50,
        uv: 0,
    },
    {
        pv: 20,
        uv: 0,
    },
    {
        pv: 10,
        uv: 0,
    },
    {
        pv: 0,
        uv: 0,
    },
    {
        pv: 0,
        uv: 0,
    },
    {
        pv: 20,
        uv: 0,
    },
    {
        pv: 0,
        uv: 0,
    },
    {
        pv: 0,
        uv: 0,
    },
    {
        pv: 20,
        uv: 0,
    },
    {
        pv: 0,
        uv: 0,
    },
    {
        pv: 0,
        uv: 0,
    },
    {
        pv: 0,
        uv: 0,
    },
    {
        pv: 40,
        uv: 0,
    },
    {
        pv: 20,
        uv: 0,
    },
    {
        pv: 40,
        uv: 20,
    },
    {
        pv: 60,
        uv: 40,
    },
    {
        pv: 45,
        uv: 30,
    },
    {
        pv: 35,
        uv: 10,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 20,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
    {
        pv: 1,
        uv: 0,
    },
  
  ];

const Chart = () => {
  return (
    <div className='mx-auto w-[300px] relative mt-4'>
        <p className='absolute top-10 text-sm'>900 CAL</p>
        <div className='flex justify-between w-100 overflow-hidden'>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className='text-sm'>Good job</p>
            <p className='text-sm'>Less than 320 cal</p>
            <p className='text-sm'>&nbsp;</p>
        </div>
    <BarChart
      width={300}
      height={120}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <Tooltip />
      <Bar dataKey="pv" stackId="a" fill="#8099FF" />
      <Bar dataKey="uv" stackId="a" fill="#FF0000" />
    </BarChart>
    <div className='flex justify-between'>
        <p className='text-sm'>12:00</p>
        <p className='text-sm'>6:00</p>
        <p className='text-sm'>12:00</p>
        <p className='text-sm'>6:00</p>
        <p>&nbsp;</p>
    </div>
    </div>
  )
}

export default Chart