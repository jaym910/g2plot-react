import React from 'react'
import { StepLineChart } from '@opd/g2plot-react'
import { StepLineConfig } from '@antv/g2plot'

const config: StepLineConfig = {
  title: {
    visible: true,
    text: '配置折线数据点样式',
  },
  description: {
    visible: true,
    text: '自定义配置趋势线上数据点的样式',
  },
  padding: 'auto',
  forceFit: true,
  data: [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ],
  xField: 'year',
  yField: 'value',
  label: {
    visible: true,
    type: 'point',
  },
  point: {
    visible: true,
    size: 5,
    shape: 'diamond',
    style: {
      fill: 'white',
      stroke: '#2593fc',
      lineWidth: 2,
    },
  },
}

const StyledPointStepLine = () => <StepLineChart {...config} />

export default StyledPointStepLine
