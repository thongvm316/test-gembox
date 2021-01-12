import React, { useState } from "react";
import GroupButton from "./GroupButton/GroupButton";
import Footer from "../../components/Footer";
import { DatePicker, Button, Row, Col, Card, Select } from "antd";
import { MinusOutlined } from '@ant-design/icons';

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import Market1 from "../../images/market1.png";
import Market2 from "../../images/market2.png";
import Market3 from "../../images/market3.png";
import Market4 from "../../images/market4.png";
import Market5 from "../../images/market5.png";
import Market6 from "../../images/market6.png";
import Market7 from "../../images/market7.png";
import Market8 from "../../images/market8.png";

import "./CategoryAnalysis.scss";
const { Option } = Select;

const CategoryAnalysis = (props) => {
    // Render Data
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
                    style={{ fontWeight: "400", fontSize: "16px", color: "#495057" }}
                >
                    <ul className="list-in" style={{ display: "flex" }}>
                        <li style={{ marginRight: "24px", fontWeight: "bold" }}>
                            {value.id}
                        </li>
                        <li>{value.name}</li>
                    </ul>
                    <li>₩{value.price}</li>
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

    // Chart
    const options = {
        chart: {
            height: 300,
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
            text: "2020년 완구 총 점유율 분석",
            align: "left",
            style: {
                color: "#495057"
            }
        },
        series: [
            {
                name: "Brands",
                // colorByPoint: true,
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

    const titileCard = (props) => (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#495057" }}>
                완구TOP10
             </h3>
            <h3 style={{ fontWeight: "700", fontSize: "24px", color: "#495057" }}>
                {props}
            </h3>
        </div>
    );

    // DatePicker
    const [dates, setDates] = useState([]);
    const [hackValue, setHackValue] = useState();
    const [value, setValue] = useState();
    console.log(value)
    const disabledDate = current => {
        if (!dates || dates.length === 0) {
            return false;
        }
        const tooLate = dates[0] && current.diff(dates[0], 'days') > 13;
        const tooEarly = dates[1] && dates[1].diff(current, 'days') > 13;
        return tooEarly || tooLate;
    };

    const onOpenChange = open => {
        if (open) {
            setHackValue([]);
            setDates([]);
        } else {
            setHackValue(undefined);
        }
    };

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    return (
        <div className="category-analysis">
            <GroupButton redirect={props.history.push} clickable="b" />

            <Row gutter={16} className="aggregate-month card-border" justify="space-between" align="middle">
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
                            <DatePicker.RangePicker
                                value={hackValue || value}
                                disabledDate={disabledDate}
                                onCalendarChange={val => setDates(val)}
                                onChange={val => setValue(val)}
                                // onChange={onChange}
                                onOpenChange={onOpenChange}
                                bordered={false}
                                separator={<MinusOutlined />}
                            />
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

                <Col xs={7} sm={4} md={3} lg={3} xl={3} style={{ textAlign: 'end' }} className="select-category-analysis">
                    <Select defaultValue="11번가" >
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
                gutter={24}
                className="chart card-border"
                style={{ marginTop: "24px", marginBottom: "24px" }}
            >
                <Col span={24}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                        {...props}
                    />
                </Col>

                <Col span={24} style={{ marginTop: "150px" }}>
                    <h1
                        style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            marginBottom: "24px",
                            color: "#495057"
                        }}
                    >
                        총 매출액
                    </h1>
                    <Row>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={3}
                            xl={3}
                            style={{ textAlign: "center" }}
                        >
                            <div className="style-border">
                                <img src={Market1} />
                                <span className="style-market">11번가</span>
                            </div>
                            <p
                                style={{
                                    paddingTop: "2rem",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: "#495057"
                                }}
                            >
                                1500
                            </p>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={3}
                            xl={3}
                            style={{ textAlign: "center" }}
                        >
                            <div className="style-border">
                                <img src={Market2} />
                                <span className="style-market">G마켓</span>
                            </div>
                            <p
                                style={{
                                    paddingTop: "2rem",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: "#495057"
                                }}
                            >
                                1500
                            </p>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={3}
                            xl={3}
                            style={{ textAlign: "center" }}
                        >
                            <div className="style-border">
                                <img src={Market3} />
                                <span className="style-market">쿠팡</span>
                            </div>
                            <p
                                style={{
                                    paddingTop: "2rem",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: "#495057"
                                }}
                            >
                                1500
                            </p>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={3}
                            xl={3}
                            style={{ textAlign: "center" }}
                        >
                            <div className="style-border">
                                <img src={Market4} />
                                <span className="style-market">인터파크</span>
                            </div>
                            <p
                                style={{
                                    paddingTop: "2rem",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: "#495057"
                                }}
                            >
                                1500
                            </p>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={3}
                            xl={3}
                            style={{ textAlign: "center" }}
                        >
                            <div className="style-border">
                                <img src={Market5} />
                                <span className="style-market">옥션</span>
                            </div>
                            <p
                                style={{
                                    paddingTop: "2rem",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: "#495057"
                                }}
                            >
                                1500
                            </p>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={3}
                            xl={3}
                            style={{ textAlign: "center" }}
                        >
                            <div className="style-border">
                                <img src={Market6} />
                                <span className="style-market">스마트스토어</span>
                            </div>
                            <p
                                style={{
                                    paddingTop: "2rem",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: "#495057"
                                }}
                            >
                                1500
                            </p>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={3}
                            xl={3}
                            style={{ textAlign: "center" }}
                        >
                            <div className="style-border">
                                <img src={Market7} />
                                <span className="style-market">티몬</span>
                            </div>
                            <p
                                style={{
                                    paddingTop: "2rem",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: "#495057"
                                }}
                            >
                                1500
                            </p>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={3}
                            xl={3}
                            style={{ textAlign: "center" }}
                        >
                            <div className="style-border">
                                <img src={Market8} />
                                <span className="style-market">위메프</span>
                            </div>
                            <p
                                style={{
                                    paddingTop: "2rem",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: "#495057"
                                }}
                            >
                                1500
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={24}>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                            <Card title={titileCard("11번가")} bordered={false}>
                                <RenderData data={data} />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                            <Card title={titileCard("G마켓")} bordered={false}>
                                <RenderData data={data} />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                            <Card title={titileCard("쿠팡")} bordered={false}>
                                <RenderData data={data} />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                            <Card title={titileCard("인터파크")} bordered={false}>
                                <RenderData data={data} />
                            </Card>
                        </Col>
                    </Row>

                    <Row gutter={[16, 16]} style={{ marginTop: "1rem" }}>
                        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                            <Card title={titileCard("옥션")} bordered={false}>
                                <RenderData data={data} />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                            <Card title={titileCard("스마트스토어")} bordered={false}>
                                <RenderData data={data} />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                            <Card title={titileCard("티몬")} bordered={false}>
                                <RenderData data={data} />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                            <Card title={titileCard("위메프")} bordered={false}>
                                <RenderData data={data} />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Footer />
        </div>
    );
};

export default CategoryAnalysis;
