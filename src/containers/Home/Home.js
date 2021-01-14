import React, { useState } from "react";
import moment from "moment";
import axios from "axios";

import { DatePicker, Button, Row, Col, Card, Divider, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import Footer from "../../components/Footer";
import GroupButton from "./GroupButton/GroupButton";
import { API_URL } from "../../constants/appConstants";
import "./home.scss";

const Home = (props) => {
  // Spin
  const [loading, setLoading] = useState(false);

  // Handle Data
  const [dataTopBander, setDataTopBander] = useState([]);
  const [dataTopProduct, setDataTopProduct] = useState([]);

  const id1 = [1, 11];
  const dataTopBander1 = dataTopBander.slice(0, 10).map((db) => {
    db.id = id1[0]++;
    return db;
  });

  const dataTopBander2 = dataTopBander.slice(10, 20).map((db) => {
    db.id = id1[1]++;
    return db;
  });

  const id2 = [1, 11];
  const dataTopProduct1 = dataTopProduct.slice(0, 10).map((db) => {
    db.id = id2[0]++;
    return db;
  });

  const dataTopProduct2 = dataTopProduct.slice(10, 20).map((db) => {
    db.id = id2[1]++;
    return db;
  });

  const ListItem = (props) => {
    const value = props.value;
    console.log(value);
    return (
      <>
        <ul className="ul-list">
          <li style={{ display: "flex", alignItems: "center" }}>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                alignItems: "center"
              }}
            >
              <li
                style={{
                  paddingRight: "40px",
                  fontWeight: "700",
                  fontSize: "20px",
                  color: "#495057"
                }}
              >
                <strong>{value.id}</strong>
              </li>

              <li>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <small
                      style={{
                        fontWeight: "400",
                        fontSize: "12px",
                        color: "#74788D"
                      }}
                    >
                      {value.market_name}
                    </small>
                  </li>
                  <li>
                    <strong
                      style={{
                        fontWeight: "700",
                        fontSize: "14px",
                        color: "#495057"
                      }}
                    >
                      {value.bander_name ? value.bander_name : value.name}
                    </strong>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <strong
              style={{ fontWeight: "700p", fontSize: "14px", color: "#495057" }}
            >
              {value.revenue ? `₩ ${value.revenue}` : value.sold}
            </strong>
          </li>
        </ul>
        <Divider className="edit-margin" />
      </>
    );
  };

  const RenderData = (props) => {
    const data = props.data;
    // console.log(data)
    const listitems = data.map((product, i) => (
      <ListItem key={i} value={product} />
    ));
    return <>{listitems}</>;
  };

  // Date Picker
  const [day, setDay] = useState([]);
  const toTimestamp = (strDate) => {
    var datum = Date.parse(strDate);
    return datum / 1000;
  };

  function onChange(dateString) {
    const startDay = dateString.concat("-01");
    const allDayInMonth = moment(dateString, "YYYY-MM").daysInMonth();
    const endDay = dateString.concat(`-${allDayInMonth}`);

    const startAndEndDay = [];
    startAndEndDay.unshift(toTimestamp(endDay));
    startAndEndDay.unshift(toTimestamp(startDay));
    setDay(startAndEndDay);
  }

  // Get Data
  const getData = async () => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Auth-Token": `${localStorage.getItem("token-user")}`
      }
    };
    try {
      setLoading(true);
      // const { data } = await axios.get(`${API_URL}/home/revenue?start=${day[0]}&end=${day[1]}`, config)
      const { data } = await axios.get(
        `${API_URL}/home/revenue?start=1606780800&end=1609372800`,
        config
      );
      const {
        data: { result }
      } = data;
      console.log(result);
      setDataTopBander(result.top_20_revenue);
      setDataTopProduct(result.top_20_selling);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="home-page">
      <GroupButton redirect={props.history.push} clickable="a" />

      <Row className="aggregate-month card-border">
        <h1
          style={{
            marginRight: "41px",
            paddingTop: "5px",
            color: "#495057",
            fontWeight: "700px",
            fontSize: "16px"
          }}
        >
          집계 월
        </h1>
        <Col xl={20} className="date-picker">
          <DatePicker onChange={onChange} bordered={false} picker="month" />
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
              )}{" "}
            <span style={loading ? { marginLeft: "5px" } : {}}>적용하기</span>
          </Button>
        </Col>
      </Row>

      <Row className="site-card-wrapper" gutter={32}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className="style-small-device"
        >
          <Card title="TOP 20 매출 벤더">
            <Row gutter={32}>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <RenderData data={dataTopBander1} />
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <RenderData data={dataTopBander2} />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className="style-small-device"
        >
          <Card title="TOP 20 판매 상품">
            <Row gutter={32}>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <RenderData data={dataTopProduct1} />
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <RenderData data={dataTopProduct2} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Home;
