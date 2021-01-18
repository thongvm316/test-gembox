import React, { useState, useEffect } from "react";
import moment from 'moment'
import axios from 'axios'
import { API_URL } from '../../constants/appConstants'

import GroupButton from "./GroupButton/GroupButton";
import Footer from "../../components/Footer";
import { DatePicker, Button, Row, Col, Card, Select, Spin, Dropdown, Menu } from "antd";
import { MinusOutlined, LoadingOutlined, DownOutlined } from '@ant-design/icons';

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
    const [loading, setLoading] = useState(false);
    const [selectMarket, setSelectMarket] = useState('11번가');
    const [totalSale, setTotalSale] = useState([]);
    const fakeTotalSale = [
        {
            "market_name": "11번가",
            "total": "1500"
        },
        {
            "market_name": "G마켓",
            "total": "2000"
        },
        {
            "market_name": "쿠팡",
            "total": "1000"
        },
        {
            "market_name": "인터파크",
            "total": "3000"
        },
        {
            "market_name": "옥션",
            "total": "3500"
        },
        {
            "market_name": "스마트스토어",
            "total": "1200"
        },
        {
            "market_name": "티몬",
            "total": "4000"
        },
        {
            "market_name": "위메프",
            "total": "4300"
        }
    ]

    const [topProduct, setTopProduct] = useState({
        topcoupang: [],
        topauction: [],
        topsmartstore: [],
        topwemake: [],
        toptmon: [],
        topinterpark: [],
        top11str: [],
        topgmarket: []
    })
    console.log(topProduct);

    /* Select Market */
    function handleChangeSelectMarket(value) {
        setSelectMarket(value)
    }

    /* Render Data */
    let id = [1, 1, 1, 1, 1, 1, 1, 1];
    const topcoupang = topProduct.topcoupang.map(value => {
        value.id = id[0]++;
        return value
    })

    const topauction = topProduct.topauction.map(value => {
        value.id = id[1]++;
        return value
    })

    const topsmartstore = topProduct.topsmartstore.map(value => {
        value.id = id[2]++;
        return value
    })

    const topwemake = topProduct.topwemake.map(value => {
        value.id = id[3]++;
        return value
    })

    const toptmon = topProduct.toptmon.map(value => {
        value.id = id[4]++;
        return value
    })

    const topinterpark = topProduct.topinterpark.map(value => {
        value.id = id[5]++;
        return value
    })

    const top11str = topProduct.top11str.map(value => {
        value.id = id[6]++;
        return value
    })

    const topgmarket = topProduct.topgmarket.map(value => {
        value.id = id[7]++;
        return value
    })

    const RenderData = (props) => {
        const data = props.data;
        return <>
            {
                data.map((product, i) => (
                    <React.Fragment key={i}>
                        <ul
                            className="ul-list"
                            style={{ fontWeight: "400", fontSize: "16px", color: "#495057" }}
                        >
                            <ul className="list-in" style={{ display: "flex", alignItems: 'center' }}>
                                <li style={{ marginRight: "24px", fontWeight: "bold" }}>
                                    {product.id}
                                </li>
                                <li>{product.name}</li>
                            </ul>
                            <li>₩ {product.seller_price}</li>
                        </ul>
                    </React.Fragment>
                ))
            }
        </>;
    };

    /* Chart */
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
                        name: "11번가",
                        y: 10
                    },
                    {
                        name: "G마켓",
                        y: 15
                    },
                    {
                        name: "쿠팡",
                        y: 15
                    },
                    {
                        name: "인터파크",
                        y: 15
                    },
                    {
                        name: "옥션",
                        y: 10
                    },
                    {
                        name: "스마트스토어",
                        y: 10
                    },
                    {
                        name: "티몬",
                        y: 10
                    },
                    {
                        name: "위메프",
                        y: 30
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

    /* DatePicker */
    const [dates, setDates] = useState([]);
    const [hackValue, setHackValue] = useState();
    const [value, setValue] = useState();
    const dayPicker = [];

    const toTimestamp = (strDate) => {
        var datum = Date.parse(strDate);
        return datum / 1000;
    }

    if (value !== undefined) {
        dayPicker.unshift(toTimestamp(moment.utc(value[1]._d).format('YYYY-MM-DD')))
        dayPicker.unshift(toTimestamp(moment.utc(value[0]._d).format('YYYY-MM-DD')))
    }

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

    /* For render total sale component */
    const markets = [
        { market: '11번가', img: Market1 },
        { market: 'G마켓', img: Market2 },
        { market: '쿠팡', img: Market3 },
        { market: '인터파크', img: Market4 },
        { market: '옥션', img: Market5 },
        { market: '스마트스토어', img: Market6 },
        { market: '티몬', img: Market7 },
        { market: '위메프', img: Market8 }
    ]

    /* Select category */
    const [category, setCategory] = useState('완구');
    const selectCategory = (e) => {
        setCategory(e.currentTarget.textContent)
    }

    const menu = (
        <Menu>
            <Menu.SubMenu title="쿠팡">
                <Menu.Item>
                    <div onClick={selectCategory}>콘솔/휴대용게임기</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>베이비패션</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>여아키즈패션</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>남아키즈패션</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>기저귀</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>물티슈</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>분유/어린이식품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>수유용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>이유용품/유아식기</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유모차/웨건</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>카시트</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>아기띠/외출용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동침구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>놀이매트/안전용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아가구/인테리어</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>욕실용품/스킨케어</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>위생/건강/세제</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>완구/교구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동도서</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아/어린이</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>소설/에세이/시</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>초중고참고서</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>캐릭터별완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>신생아/영아완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>로봇/작동완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>역할놀이</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>블록놀이</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>인형</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>물놀이/계절완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>승용완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>스포츠/야외완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>실내대형완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>STEAM완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>학습완구/교구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>보드게임</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>RC완구/부품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>퍼즐/큐브/피젯토이</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>프라모델</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>피규어/다이캐스트</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유기농/친환경 전문관</div>
                </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu title="티몬">
                <Menu.Item>
                    <div onClick={selectCategory}>기저귀·물티슈</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>분유·유아식품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>수유·이유용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>위생·건강·세제</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아목욕·스킨케어</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>외출용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>안전·실내용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동침구·가구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>완구·교구·도서</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동잡화</div>
                </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu title="11번가">
                <Menu.Item>
                    <div onClick={selectCategory}>기저귀</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>분유</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>물티슈</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>장난감</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>출산/돌기념품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>순금/돌반지</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>이유용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>수유용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동식/영양제</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아목욕/스킨케어</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아세제/위생용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아안전/실내용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>외출용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아가구/침구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>신생아의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>아동/주니어의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동신발</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동찹화</div>
                </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu title="네이버쇼핑">
                <Menu.Item>
                    <div onClick={selectCategory}>분유</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>기저귀</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>물티슈</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>이유식</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>아기간식</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유모차</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>카시트</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아세제</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>구강청결용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>소독/살균용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>수유용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>스킨/바디용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>위출용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>목욕용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>안전용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>이유식용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아침구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아가구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>임산부용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>임부복</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>출산/돌기념품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동 주얼리</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>신생아의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동언더웨어/잠옷</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>수영복/용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아발육용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>교재/서적</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>인형</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>위생/건강용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유라동잡화</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>완구/매트</div>
                </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu title="인터파크">
                <Menu.Item>
                    <div onClick={selectCategory}>완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>기저귀/분유/물티슈/생리대</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>출산/임부/유아용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동의류/잡화/임부복</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>북마켓</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>아동</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>청소년</div>
                </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu title="옥션">
                <Menu.Item>
                    <div onClick={selectCategory}>유모차/카시트</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아외출용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>놀이방매트</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아발육용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아안전용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아가구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>수유용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>이유식용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>소독/세정용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아스킨/바디케어</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아구강용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아위생용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아목욕용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아세탁용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>임부복</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>임산부용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>출산/돌기념품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>분유</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>기저귀</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>이유식/유아간식</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>신생아/영유아완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>감각발달완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>블록</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>승용완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>공간놀이완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>스포츠완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>로봇/캐릭터완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>작동완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>역할놀이완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>인형</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>미술/공작놀이</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>음악/악기놀이</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>자연/과학완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>언어/학습완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>원목교구/가베</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동퍼즐</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>물놀이완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>RC완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>신생아의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>여아의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>남아의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동공용의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동내의/잠옷</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동테마의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동스포츠의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동신발</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동가방</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동잡화</div>
                </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu title="G마켓">
                <Menu.Item>
                    <div onClick={selectCategory}>분유</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>수유용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>이유식/유아간식</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>이유식용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>기저귀</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아외출용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>소독/세정용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아위생용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아스킨/바디케어</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아구강용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아목욕용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아세탁용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아발육용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유모차/카시트</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>놀이방매트</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아안전용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아가구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>임부복</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>임산부용품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>출산/돌기념품</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>신생아/영유아완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>감각발달완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>블록</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>미술/공작놀</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>언어/학습완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>역할놀이완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>음악/악기놀이</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>자연/과학완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동퍼즐</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>원목교구/가베</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>인형</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>승용완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>스포츠완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>공간놀이완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>물놀이완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>RC완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>로봇/캐릭터완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>작동완구</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>여아의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>남아의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동공용의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>신생아의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동내의/잠옷</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동스포츠의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동테마의류</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동신발</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동잡화</div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={selectCategory}>유아동가방</div>
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
    );

    /* Get data */
    const config = {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        }
    };

    const getData = async () => {
        setLoading(true)
        console.log('Waiting for data.....')
        await Promise.all([
            axios.get(`${API_URL}/home/category/totalsales?start=1234567890&end=2134567890&key=${category}`, config).then((value) => {
                setTotalSale(value.data.data.result)
            }).catch(error => console.log(error.response)),

            axios.get(`${API_URL}/home/category/topcoupang?start=1234567890&end=2134567890&key=${category}`, config).then((value) => {
                setTopProduct(prevState => ({ ...prevState, topcoupang: value.data.data.result }))
            }).catch(error => console.log(error.response)),

            axios.get(`${API_URL}/home/category/topauction?start=1234567890&end=2134567890&key=${category}`, config).then((value) => {
                setTopProduct(prevState => ({ ...prevState, topauction: value.data.data.result }))
            }).catch(error => console.log(error.response)),

            axios.get(`${API_URL}/home/category/topsmartstore?start=1234567890&end=2134567890&key=${category}`, config).then((value) => {
                setTopProduct(prevState => ({ ...prevState, topsmartstore: value.data.data.result }))
            }).catch(error => console.log(error.response)),

            axios.get(`${API_URL}/home/category/topwemake?start=1234567890&end=2134567890&key=${category}`, config).then((value) => {
                setTopProduct(prevState => ({ ...prevState, topwemake: value.data.data.result }))
            }).catch(error => console.log(error.response)),

            axios.get(`${API_URL}/home/category/toptmon?start=1234567890&end=2134567890&key=${category}`, config).then((value) => {
                setTopProduct(prevState => ({ ...prevState, toptmon: value.data.data.result }))
            }).catch(error => console.log(error.response)),

            axios.get(`${API_URL}/home/category/topinterpark?start=1234567890&end=2134567890&key=${category}`, config).then((value) => {
                setTopProduct(prevState => ({ ...prevState, topinterpark: value.data.data.result }))
            }).catch(error => console.log(error.response)),

            axios.get(`${API_URL}/home/category/top11str?start=1234567890&end=2134567890&key=${category}`, config).then((value) => {
                setTopProduct(prevState => ({ ...prevState, top11str: value.data.data.result }))
            }).catch(error => console.log(error.response)),

            axios.get(`${API_URL}/home/category/topgmarket?start=1234567890&end=2134567890&key=${category}`, config).then((value) => {
                setTopProduct(prevState => ({ ...prevState, topgmarket: value.data.data.result }))
            }).catch(error => console.log(error.response))
        ])
        setLoading(false)
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
                                onClick={getData}
                            >
                                {loading ? (
                                    <Spin indicator={<LoadingOutlined style={{ color: "#fff" }} />} />
                                ) : (
                                        ""
                                    )}<span style={loading ? { marginLeft: "5px" } : {}}>적용하기</span>
                            </Button>
                        </Col>
                    </Row>
                </Col>

                <Col xs={7} sm={4} md={3} lg={3} xl={3} style={{ textAlign: 'end' }} className="select-category-analysis">
                    {/* <Select onChange={handleChangeSelectMarket} defaultValue="11번가" >
                        <Option value="11번가">11번가</Option>
                        <Option value="G마켓">G마켓</Option>
                        <Option value="쿠팡">쿠팡</Option>
                        <Option value="인터파크">인터파크</Option>
                        <Option value="옥션">옥션</Option>
                        <Option value="스마트스토어">스마트스토어</Option>
                        <Option value="티몬">티몬</Option>
                    </Select> */}
                    <Dropdown overlay={menu}>
                        <span className="ant-dropdown-link">
                            {category}
                        </span>
                    </Dropdown>
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
                        {
                            markets.map((market, i) => (
                                <Col
                                    key={i}
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={3}
                                    xl={3}
                                    style={{ textAlign: "center" }}
                                    className="total-sale"
                                >
                                    <div className="style-border">
                                        <img src={market.img} />
                                        <span className="style-market">{market.market}</span>
                                    </div>
                                    <p
                                        style={{
                                            paddingTop: "1rem",
                                            fontWeight: "400",
                                            fontSize: "16px",
                                            color: "#495057"
                                        }}
                                    >
                                        {
                                            fakeTotalSale.map(total => {
                                                if (total.market_name === market.market) {
                                                    return total.total
                                                }
                                            })
                                        }
                                    </p>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={24}>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={6}>
                            <Card title={titileCard("11번가")} bordered={false}>
                                <RenderData data={topcoupang} />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={6}>
                            <Card title={titileCard("G마켓")} bordered={false}>
                                <RenderData data={topauction} />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={6}>
                            <Card title={titileCard("쿠팡")} bordered={false}>
                                <RenderData data={topsmartstore} />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={6}>
                            <Card title={titileCard("인터파크")} bordered={false}>
                                <RenderData data={topwemake} />
                            </Card>
                        </Col>
                    </Row>

                    <Row gutter={[16, 16]} style={{ marginTop: "1rem" }}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={6}>
                            <Card title={titileCard("옥션")} bordered={false}>
                                <RenderData data={toptmon} />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={6}>
                            <Card title={titileCard("스마트스토어")} bordered={false}>
                                <RenderData data={topinterpark} />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={6}>
                            <Card title={titileCard("티몬")} bordered={false}>
                                <RenderData data={top11str} />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={6}>
                            <Card title={titileCard("위메프")} bordered={false}>
                                <RenderData data={topgmarket} />
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
