import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Row, Col, Checkbox } from 'antd'
import './Chart.scss'

const Chart = () => {

    // For Chart
    var _0x5696=["\x63\x6F\x6C\x75\x6D\x6E","\uC7BC\uD329\uD1A0\uB9AC\x20\x32\uAC1C\uC6D4\x20\uD3C9\uADE0\x20\uBE44\uAD50","\x62\x6F\x6C\x64","\x31","\x32","\x33","\x34","\x35","","\x76\x61\x6C\x75\x65","\x25","\x23\x38\x32\x36\x61\x66\x39","\x62\x6C\x61\x63\x6B","\x31\x36\x70\x78","\x23\x66\x66\x66","\x6E\x6F\x6E\x65","\x3C\x73\x6D\x61\x6C\x6C\x3E\uD310\uB9E4\x20\uAC74\uC218\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E\x3C\x74\x61\x62\x6C\x65\x3E","\x3C\x74\x72\x3E\x3C\x74\x64\x3E\x7B\x70\x6F\x69\x6E\x74\x2E\x79\x7D\x3C\x2F\x74\x64\x3E","\x3C\x2F\x74\x72\x3E","\x3C\x74\x72\x3E\x3C\x74\x64\x3E\x7B\x70\x6F\x69\x6E\x74\x2E\x6E\x61\x6D\x65\x7D\x3C\x2F\x74\x64\x3E","\x3C\x2F\x74\x61\x62\x6C\x65\x3E","\x43\x68\x61\x72\x74","\x50\x72\x6F\x64\x75\x63\x74\x20\x31","\x23\x46\x46\x32\x31\x42\x34","\x50\x72\x6F\x64\x75\x63\x74\x20\x32","\x23\x35\x62\x34\x61\x39\x39","\x50\x72\x6F\x64\x75\x63\x74\x20\x33","\x23\x66\x66\x39\x39\x30\x30","\x50\x72\x6F\x64\x75\x63\x74\x20\x34","\x23\x32\x38\x63\x62\x66\x66","\x50\x72\x6F\x64\x75\x63\x74\x20\x35","\x23\x39\x65\x30\x30\x66\x66"];const options={chart:{type:_0x5696[0]},title:{text:_0x5696[1],style:{fontWeight:_0x5696[2]}},credits:{enabled:false},xAxis:{categories:[_0x5696[3],_0x5696[4],_0x5696[5],_0x5696[6],_0x5696[7]]},yAxis:{title:{text:_0x5696[8]},labels:{formatter:function(){return this[_0x5696[9]]+ _0x5696[10]},style:{color:_0x5696[11]}}},legend:{enabled:false},plotOptions:{series:{lineWidth:1,marker:{enable:false}}},tooltip:{style:{color:_0x5696[12],fontSize:_0x5696[13]},backgroundColor:_0x5696[14],borderColor:_0x5696[15],borderRadius:10,shadow:true,useHTML:true,headerFormat:_0x5696[16],pointFormat:_0x5696[17]+ _0x5696[18]+ _0x5696[19]+ _0x5696[18],footerFormat:_0x5696[20]},series:[{name:_0x5696[21],data:[{name:_0x5696[22],color:_0x5696[23],y:50},{name:_0x5696[24],color:_0x5696[25],y:40},{name:_0x5696[26],color:_0x5696[27],y:100},{name:_0x5696[28],color:_0x5696[29],y:150},{name:_0x5696[30],color:_0x5696[31],y:80}]}]}

    var _0x9b31=["\x73\x70\x6C\x69\x6E\x65","\uCD5C\uADFC\x20\x33\uAC1C\uC6D4\x20\uACBD\uC7C1\uC0AC\x20\uBD84\uC11D","\x6C\x65\x66\x74","\x62\x6F\x6C\x64","\x31\x36\x70\x78","\x50\x72\x6F\x64\x75\x63\x74\x20\x31","\x23\x46\x46\x32\x31\x42\x34","\x50\x72\x6F\x64\x75\x63\x74\x20\x32","\x23\x35\x62\x34\x61\x39\x39","\x50\x72\x6F\x64\x75\x63\x74\x20\x33","\x23\x66\x66\x39\x39\x30\x30","\x50\x72\x6F\x64\x75\x63\x74\x20\x34","\x23\x32\x38\x63\x62\x66\x66","\x50\x72\x6F\x64\x75\x63\x74\x20\x35","\x23\x39\x65\x30\x30\x66\x66","\x52\x61\x6E\x67\x65\x3A\x20\x31\x30\x20\x74\x6F\x20\x31\x32","\x76\x61\x6C\x75\x65","\uC6D4","\x23\x61\x65\x61\x65\x62\x30","","\x4D","\x70\x75\x72\x70\x6C\x65","\x23\x66\x66\x66","\x6E\x6F\x6E\x65","\x3C\x73\x6D\x61\x6C\x6C\x3E\uD310\uB9E4\uAC74\uC218\x20\uBE44\uAD50\x20\x26\x6E\x62\x73\x70\x3B\x20\x26\x6E\x62\x73\x70\x3B\x20\x26\x6E\x62\x73\x70\x3B\x20\x26\x6E\x62\x73\x70\x3B\x7B\x70\x6F\x69\x6E\x74\x2E\x6B\x65\x79\x7D\x3C\x2F\x73\x6D\x61\x6C\x6C\x3E\x3C\x74\x61\x62\x6C\x65\x3E","\x3C\x74\x72\x3E\x3C\x74\x64\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x7B\x73\x65\x72\x69\x65\x73\x2E\x63\x6F\x6C\x6F\x72\x7D\x22\x3E\x7B\x73\x65\x72\x69\x65\x73\x2E\x6E\x61\x6D\x65\x7D\x3A\x26\x6E\x62\x73\x70\x3B\x20\x26\x6E\x62\x73\x70\x3B\x20\x26\x6E\x62\x73\x70\x3B\x20\x3C\x2F\x74\x64\x3E","\x3C\x74\x64\x20\x73\x74\x79\x6C\x65\x3D\x22\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x20\x72\x69\x67\x68\x74\x22\x3E\x3C\x62\x3E\x7B\x70\x6F\x69\x6E\x74\x2E\x79\x7D\x3C\x2F\x62\x3E\x3C\x2F\x74\x64\x3E\x3C\x2F\x74\x72\x3E","\x3C\x2F\x74\x61\x62\x6C\x65\x3E","\x68\x6F\x72\x69\x7A\x6F\x6E\x74\x61\x6C","\x63\x65\x6E\x74\x65\x72"];const optionsLineChart2={chart:{type:_0x9b31[0]},title:{text:_0x9b31[1],align:_0x9b31[2],style:{fontWeight:_0x9b31[3],fontSize:_0x9b31[4]}},credits:{enabled:false},series:[{data:[1,5,3],name:_0x9b31[5],color:_0x9b31[6]},{data:[9,2,6],name:_0x9b31[7],color:_0x9b31[8]},{data:[5,5,8],name:_0x9b31[9],color:_0x9b31[10]},{data:[3,5,7],name:_0x9b31[11],color:_0x9b31[12]},{data:[1,0,9],name:_0x9b31[13],color:_0x9b31[14]}],plotOptions:{series:{pointStart:10,marker:{enabled:false}}},xAxis:{allowDecimals:false,accessibility:{rangeDescription:_0x9b31[15]},labels:{formatter:function(){return this[_0x9b31[16]]+ _0x9b31[17]},style:{color:_0x9b31[18]}}},yAxis:{title:{text:_0x9b31[19]},labels:{formatter:function(){return this[_0x9b31[16]]+ _0x9b31[20]},style:{color:_0x9b31[18]}}},tooltip:{style:{fontSize:_0x9b31[4]},crosshairs:{width:1,color:_0x9b31[21]},shared:true,backgroundColor:_0x9b31[22],borderColor:_0x9b31[23],borderRadius:10,shadow:true,useHTML:true,headerFormat:_0x9b31[24],pointFormat:_0x9b31[25]+ _0x9b31[26],footerFormat:_0x9b31[27]},legend:{layout:_0x9b31[28],align:_0x9b31[29]}}
    
    // For Checkbox
    var _0x9886=["\uAC00\uACA9\uBE44\uAD50","\uD310\uB9E4\x20\uC218\x20\uBE44\uAD50","\x20\uC218\x20\uBE44\uAD50","\uB9AC\uBDF0\x20\uC218\x20\uBE44\uAD50","\x63\x68\x65\x63\x6B\x65\x64\x20\x3D\x20","\x6C\x6F\x67"];const optionsCheckbox=[{label:_0x9886[0],value:_0x9886[0]},{label:_0x9886[1],value:_0x9886[2]},{label:_0x9886[3],value:_0x9886[3]}];function onChange(_0x247dx3){console[_0x9886[5]](_0x9886[4],_0x247dx3)}

    return (
        <div className="chart">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
            <Row gutter={32} style={{ marginBottom: '1rem' }}>
                <Col span={3}>
                    <h1 style={{ fontWeight: 700, fontSize: '14px' }}>상품 비교</h1>
                </Col>
                <Col span={21}>
                    <Checkbox.Group options={optionsCheckbox} onChange={onChange} />
                </Col>
            </Row>
            <HighchartsReact
                highcharts={Highcharts}
                options={optionsLineChart2}
            />
        </div>
    )
}

export default Chart
