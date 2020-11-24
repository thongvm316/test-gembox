import React, { useState } from 'react';
import './ProductSearch.scss'
import { Row, Col, Table, Modal } from 'antd';
import Chart from './Chart'

const TableList = (props) => {
    const [ countSelected, setCountSelected ] = useState(0)

  const renderTitle = (record) =>{
    return <a onClick={showModal}>{record} </a>
  }

  const [visible, setVisible] = React.useState(false)

    const showModal = () => {
       setVisible(true)
      };
    
    const handleOk = e => {
        setVisible(false)
      };
    
    const  handleCancel = e => {
        setVisible(false)
  };

    const columns = [
      {
        title: '마켓명',
        dataIndex: '마켓명',
        render: renderTitle,
      },
      {
        title: '벤더명',
        dataIndex: '벤더명',
      },
      {
        title: '카테고리',
        dataIndex: '카테고리',
      },
      {
        title: '상품명',
        dataIndex: '상품명',
      },
      {
        title: '가격',
        dataIndex: '가격',
      },
      {
        title: '리뷰',
        dataIndex: '리뷰',
      },
      {
        title: '판매수',
        dataIndex: '판매수',
      },
    ];

    const data = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        마켓명: `Edward King ${i}`,
        벤더명: 32,
        카테고리: `London, Park Lane no. ${i}`,
        상품명: '유아완구(category)',
        가격: '￦55,500',
        리뷰: 140.244,
        판매수: '1,000,000,000,000'
      });
    }

    const onSearch = (e) => {
        console.log(e)
    }

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setCountSelected(selectedRows.length)

        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
            setCountSelected(selectedRows.length)
        },
    };
    const [checkStrictly, setCheckStrictly] = useState(false);
    return (
        <>
                <Col span={24}>
                    <Table
                        columns={columns}
                        dataSource={data}
                        scroll={{ x: 1300 }}
                        rowSelection={{ ...rowSelection, checkStrictly }}
                    />
                </Col>
                  <Modal
                      title="Basic Modal"
                      visible={visible}
                      onOk={handleOk}  
                      onCancel={handleCancel}
                      >
                      <Chart/>
                  </Modal>
        </>
    )
}

export default TableList