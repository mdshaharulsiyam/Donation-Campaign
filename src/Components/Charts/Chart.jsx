import React, { useContext, useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { DonatedItems } from '../../Root';

const Chart = () => {
  const StoredData = useContext(DonatedItems);
  const [DonationCardItem,setDonationCardItem] = useState([])
 let finalData = [];
  useEffect(()=>{
    const fetchDonationCardItemData = async ()=>{
      const res = await fetch('./Donation-Campaign.json');
      let data = await res.json()
      setDonationCardItem(data)
    }
    fetchDonationCardItemData()
  },[])
  StoredData.forEach(item => {
    let DonatedItem =  DonationCardItem.find(Items=> Items.Id === item);
    if(DonatedItem){
      finalData.push(DonatedItem)
    }
  });
  const totalDonation = DonationCardItem.length;
  const yourDonation = finalData.length;
  console.log(totalDonation,yourDonation)
  const data = [
    { name: 'Your Donation', value: yourDonation },
    { name: 'total Donations', value: totalDonation - yourDonation }, 
  ];
  const COLORS = ['#FF444A', '#00C49F']; 

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className='mx-auto max-w-md'>
      <ResponsiveContainer width={400} height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
