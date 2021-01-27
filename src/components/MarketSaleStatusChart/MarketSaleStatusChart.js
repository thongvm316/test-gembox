import React, { useState, useEffect } from 'react';
import './MarketSaleStatusChart.scss'
import { API_URL } from '../../constants/appConstants';
import axios from 'axios'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts/highstock'
import { Spin } from 'antd';
import moment from 'moment'


const MarketSaleStatusChart = (props) => {
    const [data, setData] = useState([])
    const [spinning, setSpinning] = useState(false)

    useEffect(() => {
        getData()
    }, [])


    const optionsLineAndColumnChart = {
        title: '',
        chart: {
            zoomType: 'xy',
        },
        xAxis: [{
            categories: data.map(pro => {return pro.bander_name}),
            crosshair: true,
            visible : false
        }],
        yAxis: [
            {
                labels: false,
                title: false,
                gridLineColor: 'transparent',
            },
            {
                // Secondary yAxis
                title: false,
                labels: false,
                opposite: true,
                gridLineColor: 'transparent',
            },
        ],
        tooltip: {
            shared: true,
        },
        credits: {
            enabled: false
        },
        legend: false,
        series: [
            {
                name: '',
                type: 'column',
                yAxis: 1,
                data: data.map(pro => { return parseInt(pro.revenue) }),
                tooltip: {
                    valueSuffix: ' 매출액',
                },
            },
            {
                name: '',
                type: 'spline',
                data: data.map(pro => { return parseInt(pro.sold) }),
                tooltip: {
                    valueSuffix: ' 판매건수',
                },
            },
        ],
    }

    const getData = async () => {
        setSpinning(true)
        const config = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Auth-Token': localStorage.getItem('token-user'),
            },
        }
        try {
            const res = await axios.get(
                `${API_URL}/product/detail/marketsalestatus?market=${props.market}&productName=${props.productName}`,
                config,
            )
            if (res.status == 200) {
                setData(res.data.data.result)
            }
        } catch (error) {
            console.log(error.response.data)
        }
        setSpinning(false)

    }

    return (
        <div>
            <Spin tip="Loading..." spinning={spinning}>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={optionsLineAndColumnChart}
                    {...props}
                />
                <div className="market">{props.market}</div>
            </Spin>
        </div>
    )
}

export default MarketSaleStatusChart