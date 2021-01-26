import React from 'react'
import { Dropdown, Menu } from 'antd'

const CategoryList = (props) => {
  const selectCategory = (e) => {
    props.onChangeCategory(e.currentTarget.textContent)
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
  )

  return (
    <Dropdown overlay={menu}>
      <span className="ant-dropdown-link">{props.category}</span>
    </Dropdown>
  )
}

export default CategoryList
