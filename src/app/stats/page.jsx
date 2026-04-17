"use client";
import React from 'react';
import { Pie, PieChart } from 'recharts';

const data = [
  { name: 'Group A', value: 400, fill: '#00000' },
  { name: 'Group B', value: 300, fill: '#00C49F' },
  { name: 'Group C', value: 300, fill: '#FFBB28' },
  
];
const StatsPage = () => {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black py-15">
           
           <PieChart style={{ width: '80%', maxWidth: '500px', maxHeight: '50vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="5%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
    </PieChart>

    <div className='flex gap-8 mt-4 font-semibold'>
    <li>  Call</li>
    <li>Text</li>
    <li>Video</li>

    </div>

        </div>
    );
};

export default StatsPage;