import React from "react";
import { DatePicker, Button, Row, Col, Card, Divider } from "antd";
import Footer from "../../components/Footer";
import GroupButton from "./GroupButton/GroupButton";
import "./home.scss";
import moment from "moment";

// Handle Data
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
  },
  {
    id: 11,
    title: "11번가",
    name: "Polar bear",
    price: 30
  },
  {
    id: 12,
    title: "11번가",
    name: "Killer whale",
    price: 84
  },
  {
    id: 13,
    title: "11번가",
    name: "Chuckwalla",
    price: 71
  },
  {
    id: 14,
    title: "11번가",
    name: "Polar bear",
    price: 35
  },
  {
    id: 15,
    title: "11번가",
    name: "Killer whale",
    price: 84
  },
  {
    id: 16,
    title: "11번가",
    name: "Chuckwalla",
    price: 71
  },
  {
    id: 17,
    title: "11번가",
    name: "Polar bear",
    price: 30
  },
  {
    id: 18,
    title: "11번가",
    name: "Killer whale",
    price: 84
  },
  {
    id: 19,
    title: "11번가",
    name: "Chuckwalla",
    price: 71
  },
  {
    id: 20,
    title: "11번가",
    name: "Polar bear",
    price: 35
  }
];
const data1 = data.slice(0, 10);
const data2 = data.slice(10, 20);

const ListItem = (props) => {
  const value = props.value;
  return (
    <>
      <ul className="ul-list">
        <li style={{ display: "flex", alignItems: "center" }}>
          <ul style={{ listStyle: "none", display: 'flex', alignItems: 'center' }}>
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
              <ul style={{ listStyle: 'none' }}>
                <li>
                  <small
                    style={{
                      fontWeight: "400",
                      fontSize: "12px",
                      color: "#74788D"
                    }}
                  >
                    {value.title}
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
                    {value.name}
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
            ₩{value.price}
          </strong>
        </li>
      </ul>
      <Divider className="edit-margin" />
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

const Home = (props) => {
  // Date Picker
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

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
          >
            적용하기
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
                <RenderData data={data1} />
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <RenderData data={data2} />
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
                <RenderData data={data1} />
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <RenderData data={data2} />
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
