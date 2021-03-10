import React, { useState, useEffect } from 'react'
import {
  Button,
  DatePicker,
  Space,
  Input,
  Row,
  Col,
  Table,
  Select,
  Modal,
  Popover,
} from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { API_URL } from '../../constants/appConstants'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import './VendorSearch.scss'
import moment from 'moment'
import fileDownload from 'js-file-download'
import NumberFormat from 'react-number-format'
import saleStatusApi from '../../api/SaleStatusAPI'

const { Option } = Select
const { RangePicker } = DatePicker

const VendorSearch = (props) => {
  const [hackValue, setHackValue] = useState()
  const [value, setValue] = useState()
  const [dates, setDates] = useState([])

  const [vendors, setVendors] = useState([])
  // console.log(vendors)
  // const [startDate, setStartDate] = useState()
  // const [endDate, setEndDate] = useState()
  // const [key, setKey] = useState()
  const [loading, setLoading] = useState(false)

  const [filter, setFilter] = useState()
  const [lastIndex, setLastIndex] = useState(0)
  const [sortIndex, setsortIndex] = useState(0)
  console.log(sortIndex)
  const [loadMoreFilterOrSort, setLoadMoreFilterOrSort] = useState({
    isFilter: false,
    isSort: false,
  })
  const [triggerSortLoadMore, setTriggerSortLoadMore] = useState({
    product_count_asc: false,
    product_count_desc: false,
    revenue_asc: false,
    revenue_desc: false,
    total_review_asc: false,
    total_review_desc: false,
    sale_count_asc: false,
    sale_count_desc: false,
  })

  useEffect(() => {
    getVendor()
  }, [lastIndex])

  useEffect(() => {
    if (sortIndex == 0) return
    if (triggerSortLoadMore.product_count_asc == true) {
      sortApi('product_count', 'asc')
    }
    if (triggerSortLoadMore.product_count_desc == true) {
      sortApi('product_count', 'desc')
    }
    if (triggerSortLoadMore.revenue_asc == true) {
      sortApi('revenue', 'asc')
    }
    if (triggerSortLoadMore.revenue_desc == true) {
      sortApi('revenue', 'desc')
    }
    if (triggerSortLoadMore.total_review_asc == true) {
      sortApi('total_review', 'asc')
    }
    if (triggerSortLoadMore.total_review_desc == true) {
      sortApi('total_review', 'desc')
    }
    if (triggerSortLoadMore.sale_count_asc == true) {
      sortApi('sale_count', 'asc')
    }
    if (triggerSortLoadMore.sale_count_desc == true) {
      sortApi('sale_count', 'desc')
    }
  }, [sortIndex])

  const SortProductCount = () => (
    <>
      <div className="style-sort">
        <p
          onClick={() => {
            for (const key in triggerSortLoadMore) {
              console.log(triggerSortLoadMore[key])
              if (triggerSortLoadMore[key]) {
                console.log('test')
                setsortIndex(0)
              }
            }
            sortApi('product_count', 'asc')
            setTriggerSortLoadMore({
              ...triggerSortLoadMore,
              product_count_asc: true,
              product_count_desc: false,
              revenue_asc: false,
              revenue_desc: false,
              total_review_asc: false,
              total_review_desc: false,
              sale_count_asc: false,
              sale_count_desc: false,
            })
          }}
        >
          오름차순
        </p>
        <p
          onClick={() => {
            for (const key in triggerSortLoadMore) {
              console.log(triggerSortLoadMore[key])
              if (triggerSortLoadMore[key]) {
                console.log('test')
                setsortIndex(0)
              }
            }
            sortApi('product_count', 'desc')
            setTriggerSortLoadMore({
              ...triggerSortLoadMore,
              product_count_asc: false,
              product_count_desc: true,
              revenue_asc: false,
              revenue_desc: false,
              total_review_asc: false,
              total_review_desc: false,
              sale_count_asc: false,
              sale_count_desc: false,
            })
          }}
        >
          내림차순
        </p>
        {/* <p>취소</p> */}
      </div>
    </>
  )

  const SortRevenue = () => (
    <>
      <div className="style-sort">
        <p
          onClick={() => {
            for (const key in triggerSortLoadMore) {
              console.log(triggerSortLoadMore[key])
              if (triggerSortLoadMore[key]) {
                console.log('test')
                setsortIndex(0)
              }
            }
            sortApi('revenue', 'asc')
            setTriggerSortLoadMore({
              ...triggerSortLoadMore,
              product_count_asc: false,
              product_count_desc: false,
              revenue_asc: true,
              revenue_desc: false,
              total_review_asc: false,
              total_review_desc: false,
              sale_count_asc: false,
              sale_count_desc: false,
            })
          }}
        >
          오름차순
        </p>
        <p
          onClick={() => {
            for (const key in triggerSortLoadMore) {
              console.log(triggerSortLoadMore[key])
              if (triggerSortLoadMore[key]) {
                setsortIndex(0)
                console.log('test')
              }
            }
            sortApi('revenue', 'desc')
            setTriggerSortLoadMore({
              ...triggerSortLoadMore,
              product_count_asc: false,
              product_count_desc: false,
              revenue_asc: false,
              revenue_desc: true,
              total_review_asc: false,
              total_review_desc: false,
              sale_count_asc: false,
              sale_count_desc: false,
            })
          }}
        >
          내림차순
        </p>
        {/* <p>취소</p> */}
      </div>
    </>
  )

  const SortTotalReview = () => (
    <>
      <div className="style-sort">
        <p
          onClick={() => {
            sortApi('total_review', 'asc')
            setTriggerSortLoadMore({
              ...triggerSortLoadMore,
              product_count_asc: false,
              product_count_desc: false,
              revenue_asc: false,
              revenue_desc: false,
              total_review_asc: true,
              total_review_desc: false,
              sale_count_asc: false,
              sale_count_desc: false,
            })
          }}
        >
          오름차순
        </p>
        <p
          onClick={() => {
            sortApi('total_review', 'desc')
            setTriggerSortLoadMore({
              ...triggerSortLoadMore,
              product_count_asc: false,
              product_count_desc: false,
              revenue_asc: false,
              revenue_desc: false,
              total_review_asc: false,
              total_review_desc: true,
              sale_count_asc: false,
              sale_count_desc: false,
            })
          }}
        >
          내림차순
        </p>
        {/* <p>취소</p> */}
      </div>
    </>
  )

  const SortSaleCount = () => (
    <>
      <div className="style-sort">
        <p
          onClick={() => {
            sortApi('sale_count', 'asc')
            setTriggerSortLoadMore({
              ...triggerSortLoadMore,
              product_count_asc: false,
              product_count_desc: false,
              revenue_asc: false,
              revenue_desc: false,
              total_review_asc: false,
              total_review_desc: false,
              sale_count_asc: true,
              sale_count_desc: false,
            })
          }}
        >
          오름차순
        </p>
        <p
          onClick={() => {
            sortApi('sale_count', 'desc')
            setTriggerSortLoadMore({
              ...triggerSortLoadMore,
              product_count_asc: false,
              product_count_desc: false,
              revenue_asc: false,
              revenue_desc: false,
              total_review_asc: false,
              total_review_desc: false,
              sale_count_asc: false,
              sale_count_desc: true,
            })
          }}
        >
          내림차순
        </p>
        {/* <p>취소</p> */}
      </div>
    </>
  )

  const loadMoreSort = (params) => {
    console.log(vendors.length)
    setsortIndex(vendors.length)
  }

  const loadMore = async () => {
    setLastIndex(vendors.length)
  }

  const sortApi = async (field, sort) => {
    setLoading(true)
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': localStorage.getItem('token-user'),
      },
    }

    let params = ''
    for (const key in filter) {
      if (filter[key]) {
        params += `&${key}=${filter[key]}`
      }
    }

    try {
      console.log(sortIndex)
      const res = await axios.get(
        `${API_URL}/bander/search?lastIndex=${sortIndex}${params}&sort=${field},${sort}`,
        config,
      )
      // if (res.status == 200) {
      //   if (lastIndex > 0) {
      //     setVendors(vendors.concat(res.data.data.result))
      //   } else {
      //     setVendors(res.data.data.result)
      //   }
      // }

      if (sortIndex > 0) {
        if (lastIndex > 0) {
          setVendors([])
        }
        setVendors(vendors.concat(res.data.data.result))
      } else {
        setVendors(res.data.data.result)
      }
      setLoading(false)
    } catch (error) {
      if (error.response.statusText == 'Unauthorized') {
        localStorage.clear()

        props.history.push('/')
      }
      setLoading(false)
    }
  }

  // Table
  const [countSelected, setCountSelected] = useState(0)
  const goToStore = (record) => {
    var win = window.open(record.bander_url, '_blank')
    win.focus()
  }

  const columns = [
    {
      title: '벤더명',
      render: (record) => {
        return (
          <a
            style={{
              fontWeight: 500,
              fontSize: '16px',
              color: '#74788D',
            }}
            onClick={() => goToStore(record)}
          >
            {record.bander_name}
          </a>
        )
      },
    },
    {
      title: <Popover content={<SortProductCount />}>총 판매 상품 수</Popover>,
      render: (record) => (
        <NumberFormat
          value={record.product_count}
          displayType={'text'}
          thousandSeparator={true}
        />
      ),
      // sorter: {
      //   compare: (a, b) => a.product_count - b.product_count,
      // },
    },
    {
      title: <Popover content={<SortRevenue />}>총 판매 매출</Popover>,
      render: (record) => (
        <NumberFormat
          value={record.revenue}
          displayType={'text'}
          thousandSeparator={true}
        />
      ),
      // sorter: {
      //   compare: (a, b) => a.revenue - b.revenue,
      // },
    },
    {
      title: <Popover content={<SortTotalReview />}>리뷰</Popover>,
      render: (record) => (
        <NumberFormat
          value={record.total_review}
          displayType={'text'}
          thousandSeparator={true}
        />
      ),
      // sorter: {
      //   compare: (a, b) => a.total_review - b.total_review,
      // },
    },
    {
      title: <Popover content={<SortSaleCount />}>판매수</Popover>,
      render: (record) => (
        <NumberFormat
          value={record.sale_count}
          displayType={'text'}
          thousandSeparator={true}
        />
      ),
      // sorter: {
      //   compare: (a, b) => a.sale_count - b.sale_count,
      // },
    },
  ]

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      )
      setCountSelected(selectedRows.length)
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows)
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows)
      setCountSelected(selectedRows.length)
    },
  }
  const [checkStrictly, setCheckStrictly] = useState(false)

  // DatePicker
  const { RangePicker } = DatePicker

  const onChangeStartDate = (date, dateString) => {
    console.log(dateString)
    // setStartDate(moment(dateString).unix())
    setFilter({ ...filter, start: moment(dateString).unix() })
  }

  const onChangeEndDate = (date, dateString) => {
    // setEndDate(moment(dateString).unix())
    setFilter({ ...filter, end: moment(dateString).unix() })
  }

  function onOk(value) {
    console.log('onOk: ', value)
  }

  const onChangeSearch = (e) => {
    setFilter({ ...filter, key: e.target.value })
  }

  const getVendor = async () => {
    setLoading(true)
    let params = ''
    for (const key in filter) {
      if (filter[key]) {
        params += `&${key}=${filter[key]}`
      }
    }

    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': localStorage.getItem('token-user'),
      },
    }
    try {
      const res = await axios.get(
        `${API_URL}/bander/search?lastIndex=${lastIndex}${params}`,
        config,
      )
      if (res.status == 200) {
        if (lastIndex > 0) {
          setVendors(vendors.concat(res.data.data.result))
        } else {
          setVendors(res.data.data.result)
        }
      }
    } catch (error) {
      if (error.response.statusText == 'Unauthorized') {
        localStorage.clear()

        props.history.push('/')
      }
    }
    setLoading(false)
  }

  const getExcelFile = async () => {
    const lengthData = vendors.length
    let params = `lastIndex=${lengthData}`

    for (const key in filter) {
      if (filter[key]) {
        params += `&${key}=${filter[key]}`
      }
    }

    saleStatusApi
      .getExcelFileBander(params)
      .then((value) => {
        console.log('Success')
        fileDownload(value, 'data.xls')
        setLoading(false)
      })
      .catch((err) => {
        console.log(err.response)
        setLoading(false)
      })

    // const lengthData = vendors.length
    // const config = {
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'X-Auth-Token': localStorage.getItem('token-user'),

    //   },
    // }
    // try {
    //   const { data } = await axios.get(
    //     `${API_URL}/product/export?lastIndex=${lengthData}${params}`,
    //     config,
    //   )
    //   fileDownload(data, 'data.xls')
    // } catch (error) {
    //   if (error.response.statusText == "Unauthorized") {
    //     localStorage.clear()

    //     props.history.push('/')
    //   }
    // }
  }

  const onOpenChange = (open) => {
    if (open) {
      setHackValue([])
      setDates([])
    } else {
      setHackValue(undefined)
    }
  }

  const disabledDate = (current) => {
    const daysInMonth = parseInt(moment(current, 'YYYY-MM').daysInMonth())

    if (!dates || dates.length === 0) {
      const date =
        (current && moment(current).format('DD') == 1) ||
        (current && moment(current).format('DD') == 15) ||
        (current && moment(current).format('DD') == daysInMonth)

      return !date
    } else {
      if (dates[0]) {
        return !(
          (moment(dates[0]).format('YYYY-MM') ==
            moment(current).format('YYYY-MM') &&
            current &&
            moment(current).format('DD') == 1) ||
          (moment(dates[0]).format('YYYY-MM') ==
            moment(current).format('YYYY-MM') &&
            current &&
            moment(current).format('DD') == 15) ||
          (moment(dates[0]).format('YYYY-MM') ==
            moment(current).format('YYYY-MM') &&
            current &&
            moment(current).format('DD') == daysInMonth)
        )
      }

      if (dates[1]) {
        return !(
          (moment(dates[1]).format('YYYY-MM') ==
            moment(current).format('YYYY-MM') &&
            current &&
            moment(current).format('DD') == 1) ||
          (moment(dates[1]).format('YYYY-MM') ==
            moment(current).format('YYYY-MM') &&
            current &&
            moment(current).format('DD') == 15) ||
          (moment(dates[1]).format('YYYY-MM') ==
            moment(current).format('YYYY-MM') &&
            current &&
            moment(current).format('DD') == daysInMonth)
        )
      }
    }
  }

  const onChangeRangePicker = (val) => {
    setValue(val)

    if (val && val[0] && val[1]) {
      const startDate = parseInt(moment(val[0]).format('DD'))
      const endDate = parseInt(moment(val[1]).format('DD'))

      if (startDate == endDate) {
        setValue('')
      }

      setFilter({
        ...filter,
        start: moment(val[0]).unix(),
        end: moment(val[1]).unix(),
      })
    } else {
      setFilter({ ...filter, start: '', end: '' })
    }
  }

  const onCalendarChange = (val) => {
    if (val && val[0]) {
      const daysInMonth = parseInt(moment(val[0], 'YYYY-MM').daysInMonth())
      const day = parseInt(moment(val[0]).format('DD'))
      if (daysInMonth == day) {
        modal('시작일은 월의 마지막 일자가 될 수 없습니다')
        return
      }
    }

    if (val && val[1]) {
      const day = parseInt(moment(val[1]).format('DD'))
      if (1 == day) {
        modal('시작일을 마지막 일자로 선택 할 수 없습니다')
        return
      }
    }

    if (val && val[0] && val[1]) {
      const startDate = parseInt(moment(val[0]).format('DD'))
      const endDate = parseInt(moment(val[1]).format('DD'))

      if (startDate == endDate) {
        modal('시작일은 종료일과 같을 수 없습니다')

        return
      }
    }

    setDates(val)
  }

  const modal = (text) => {
    Modal.error({
      title: '에러',
      content: text,
    })
  }

  return (
    <div className="vendor-search">
      <Row className="card-border" style={{ marginBottom: '2rem' }}>
        <Col span={24} className="wraper-actions-vender">
          <div style={{ display: 'flex', marginRight: '50px' }}>
            <div className="filter-date" style={{ marginRight: '10px' }}>
              <Space>
                <RangePicker
                  value={hackValue || value}
                  // disabledDate={disabledDate}
                  // onCalendarChange={(val) => onCalendarChange(val)}
                  onChange={(val) => onChangeRangePicker(val)}
                  onOpenChange={onOpenChange}
                />
              </Space>
            </div>
            <div>
              <Button
                style={{
                  backgroundColor: '#42ABBC',
                  color: 'white',
                  border: 'none',
                }}
                className="border-radius-6"
                onClick={getVendor}
                disabled={loading}
              >
                적용하기
              </Button>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <Input
              className="border-radius-6"
              onChange={onChangeSearch}
              style={{ marginRight: '5px' }}
              placeholder="Search"
              suffix={<SearchOutlined />}
            />
            <Button
              disabled={loading}
              onClick={getExcelFile}
              className="btn-light-blue border-radius-6"
              style={{
                backgroundColor: '#71c4d5',
                border: 'none',
                marginLeft: '10px',
              }}
              type="primary"
            >
              EXCEL
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="card-border">
        <Col span={24}>
          <Table
            loading={loading}
            rowKey={(record) => uuidv4()}
            columns={columns}
            dataSource={vendors}
            showSorterTooltip={false}
            scroll={{ x: 1300 }}
            pagination={false}
          />
        </Col>
        <Col span={24} style={{ textAlign: 'center', marginTop: '2rem' }}>
          {vendors.length ? (
            <Button
              // onClick={loadMore}
              onClick={loadMoreSort}
              disabled={loading}
              className="btn-light-blue border-radius-6"
              style={{
                backgroundColor: '#71c4d5',
                border: 'none',
                marginLeft: '10px',
              }}
              type="primary"
            >
              LOAD MORE
            </Button>
          ) : (
            ''
          )}
        </Col>
      </Row>
    </div>
  )
}

export default VendorSearch
