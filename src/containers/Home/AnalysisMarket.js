import React from "react";
import { DatePicker, Button, Row, Col, Select, Card } from "antd";
import Footer from "../../components/Footer";
import GroupButton from "./GroupButton/GroupButton";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import "./AnalysisMarket.scss";
const { Option } = Select;
const { RangePicker } = DatePicker;

const AnalysisMarket = (props) => {
    // Render - Data
    const data = [
        {
            id: 1,
            title: "11번가",
            name: "Polar bear",
            price: 30
        },
        {
            id: 2,
            title: "11번가",
            name: "Killer whale",
            price: 84
        },
        {
            id: 3,
            title: "11번가",
            name: "Chuckwalla",
            price: 71
        },
        {
            id: 4,
            title: "11번가",
            name: "Polar bear",
            price: 35
        },
        {
            id: 5,
            title: "11번가",
            name: "Killer whale",
            price: 84
        },
        {
            id: 6,
            title: "11번가",
            name: "Chuckwalla",
            price: 71
        },
        {
            id: 7,
            title: "11번가",
            name: "Polar bear",
            price: 30
        },
        {
            id: 8,
            title: "11번가",
            name: "Killer whale",
            price: 84
        },
        {
            id: 9,
            title: "11번가",
            name: "Chuckwalla",
            price: 71
        },
        {
            id: 10,
            title: "11번가",
            name: "Polar bear",
            price: 35
        }
    ];

    const ListItem = (props) => {
        const value = props.value;
        return (
            <>
                <ul
                    className="ul-list"
                    style={{
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#495057",
                        display: "flex",
                        listStyle: "none",
                        justifyContent: "space-between"
                    }}
                >
                    <li style={{ fontWeight: 700, fontSize: "16px", color: "#495057" }}>
                        category
            </li>
                    <li style={{ fontWeight: 400, fontSize: "12px", color: "#74788D" }}>
                        ₩{value.price}
                    </li>
                </ul>
            </>
        );
    };

    const RenderData = (props) => {
        const data = props.data;
        const listitems = data.map((product) => (
            <ListItem key={product.id} value={product} />
        ));
        return <>{listitems}</>;
    };

    // Date Picker
    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    // Option of chart
    const options = {
        chart: {
            height: 331,
            type: "pie",
            renderTo: "container"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                colors: [
                    "#ffc26f",
                    "#d185d8",
                    "#8784d7",
                    "#fe7c69",
                    "#caeefb",
                    "#9bdbaf",
                    "#fff1b6",
                    "#febeb3"
                ]
            }
        },
        tooltip: {
            enabled: true,
            formatter: function () {
                return "<b>" + this.y + "%</b>";
            }
        },
        credits: {
            enabled: false
        },
        title: {
            text: "11번가 카테고리별 분석",
            align: "left",
            style: {
                color: "#495057"
            }
        },
        series: [
            {
                name: "Brands",
                dataLabels: {
                    enabled: false
                },
                showInLegend: false,
                data: [
                    {
                        name: "Chrome",
                        y: 15
                    },
                    {
                        name: "Internet Explorer",
                        y: 15
                    },
                    {
                        name: "Firefox",
                        y: 15
                    },
                    {
                        name: "Edge",
                        y: 15
                    },
                    {
                        name: "Safari",
                        y: 10
                    },
                    {
                        name: "Other",
                        y: 10
                    },
                    {
                        name: "VBN",
                        y: 10
                    },
                    {
                        name: "HJK",
                        y: 10
                    }
                ]
            }
        ]
    };

    const optionsLineAndColumnChart = {
        title: "",
        chart: {
            zoomType: "xy"
        },
        xAxis: [
            {
                categories: [
                    "category",
                    "category",
                    "category",
                    "category",
                    "category",
                    "category",
                    "category",
                    "category",
                    "category",
                    "category",
                    "category",
                    "category"
                ],
                crosshair: true
            }
        ],
        yAxis: [
            {
                labels: false,
                title: false,
                gridLineColor: "transparent"
            },
            {
                // Secondary yAxis
                title: false,
                labels: false,
                opposite: true,
                gridLineColor: "transparent"
            }
        ],
        tooltip: {
            shared: true
        },
        legend: {
            layout: "vertical",
            align: "left",
            x: 120,
            verticalAlign: "top",
            y: 100,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                "rgba(255,255,255,0.25)"
        },
        series: [
            {
                name: "",
                type: "column",
                yAxis: 1,
                data: [
                    { y: 10, color: "#FFF1B6" },
                    { y: 20, color: "#9BDBAF" },
                    { y: 30, color: "#CAEEFB" },
                    { y: 40, color: "#FFC26F" },
                    { y: 30, color: "#D185D8" },
                    { y: 20, color: "#8784D7" },
                    { y: 10, color: "#FE7C69" },
                    { y: 20, color: "##FEBEB3" },
                    { y: 49.9, color: "#9BDBAF" }
                ],
                tooltip: {
                    valueSuffix: " ₩"
                },
                colors: [
                    "#2f7ed8",
                    "#0d233a",
                    "#8bbc21",
                    "#910000",
                    "#1aadce",
                    "#492970",
                    "#f28f43",
                    "#77a1e5",
                    "#c42525"
                ]
            },
            {
                name: "",
                type: "spline",
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3],
                tooltip: {
                    valueSuffix: ""
                },
                marker: {
                    enabled: false
                },
                color: "#34C38F"
            }
        ]
    };

    return (
        <div className="analysis-market">
            <GroupButton redirect={props.history.push} clickable="c" />

            <Row
                gutter={16}
                className="aggregate-month card-border"
                justify="space-between"
                align="middle"
            >
                <Col xs={17} sm={20} md={21} lg={21} xl={21} className="date-picker">
                    <Row gutter={[4, 4]}>
                        <Col xs={24} sm={3} md={3} lg={2} xl={1}>
                            <h1
                                style={{
                                    paddingTop: "3px",
                                    color: "#495057",
                                    fontWeight: "700px",
                                    fontSize: "16px"
                                }}
                            >
                                집계 월
                             </h1>
                        </Col>
                        <Col xs={24} sm={10} md={10} lg={10} xl={6}>
                            <RangePicker onChange={onChange} bordered={false} />
                        </Col>
                        <Col xs={24} sm={2} md={2} lg={2} xl={2}>
                            <Button
                                style={{
                                    background: "#71c4d5",
                                    borderColor: "#71c4d5",
                                    fontWeight: "bold"
                                }}
                                type="primary"
                            >
                                적용하기
                            </Button>
                        </Col>
                    </Row>
                </Col>

                <Col
                    xs={7}
                    sm={4}
                    md={3}
                    lg={3}
                    xl={3}
                    style={{ textAlign: "end" }}
                    className="select-category-analysis"
                >
                    <Select defaultValue="11번가">
                        <Option value="11번가">11번가</Option>
                        <Option value="G마켓">G마켓</Option>
                        <Option value="쿠팡">쿠팡</Option>
                        <Option value="인터파크">인터파크</Option>
                        <Option value="옥션">옥션</Option>
                        <Option value="스마트스토어">스마트스토어</Option>
                        <Option value="티몬">티몬</Option>
                    </Select>
                </Col>
            </Row>

            <Row
                gutter={16}
                className="chart-one card-border"
                style={{ marginTop: "24px" }}
            >
                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                        {...props}
                    />
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                    <Row gutter={[16, 16]} justify="center">
                        <Col xs={24} sm={12} md={12} lg={10} xl={10}>
                            <Card title="매출액" style={{ borderRadius: "16px" }}>
                                <RenderData data={data} />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={10} xl={10}>
                            <Card title="매출액" style={{ borderRadius: "16px" }}>
                                <RenderData data={data} />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{ marginTop: "40px" }} className="chart-two card-border">
                <Col span={24}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={optionsLineAndColumnChart}
                        {...props}
                    />
                </Col>
            </Row>

            <Footer />
        </div>
    );
};

export default AnalysisMarket;
