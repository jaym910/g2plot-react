import React, { useState, useEffect } from 'react'
import { StackedAreaChart } from '@opd/g2plot-react'
import { StackedAreaConfig } from '@antv/g2plot'

const config: StackedAreaConfig = {
  title: {
    visible: true,
    text: '堆叠面积图 - lineLabel',
  },
  description: {
    visible: true,
    text: '当label类型设置为line时，label与面积区域尾端顶部对齐。',
  },
  xField: 'date',
  yField: 'value',
  stackField: 'country',
  xAxis: {
    tickCount: 5,
  },
  label: {
    visible: true,
    type: 'line',
  },
  legend: {
    visible: true,
    position: 'right-top',
  },
}

const LineLabelStackedArea = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    let active = true
    fetch('https://g2plot.antv.vision/zh/examples/data/oil.json')
      .then(res => res.json())
      .then(data => {
        if (active) {
          setData(data)
        }
      })
    return () => {
      active = false
    }
  }, [])

  return <StackedAreaChart {...config} data={data} />
}

export default LineLabelStackedArea
