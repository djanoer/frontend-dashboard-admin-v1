import React from 'react';

import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../components';

const Pie = () => {
  return (
    <div>
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div>
        <PieChart
          id="chart-pie"
          data={pieChartData}
          legendVisiblity
          height="full"
        />
      </div>
    </div>
  )
}

export default Pie;