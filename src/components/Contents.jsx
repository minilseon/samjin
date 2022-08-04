import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  width: 50%;
  height: 50px;
  border-radius: 0;
  border: 1px solid #ccc;
  background-color: #eee;
  transition: all 0.3s;
  :hover {
    background-color: #999;
  }
`

export default function Contents() {

  const bests = [
    {
      id: 'best-01',
      image: '/images/best_01.png',
      desc: '쫄깃하고 탱글탱글한 식감이 일품!',
      title: '캠핑어묵탕(순한맛)',
      price: '8,900원'
    },
    {
      id: 'best-02',
      image: '/images/best_02.png',
      desc: '간편하게 어묵탕을 만들 수 있는 모듬어묵',
      title: '어묵탕모듬어묵 플러스',
      price: '19,000원'
    },
    {
      id: 'best-03',
      image: '/images/best_03.png',
      desc: '시장에서 맛 보았던 추억의 어묵 무듬',
      title: '[삼진어묵 창립 69주년 행사]실속모듬어묵',
      price: '19,900원'
    },
    {
      id: 'best-04',
      image: '/images/best_04.png',
      desc: '인기 고급제품으로 구성된 선물 세트',
      title: '1953세트 2호',
      price: '36,000원'
    },
    {
      id: 'best-05',
      image: '/images/best_05.png',
      desc: '팔도비빔장으로 어묵볶음을 간편하게',
      title: '딱한끼 볶음요리용(팔도)',
      price: '4,980원'
    },
    {
      id: 'best-06',
      image: '/images/best_06.png',
      desc: '가정에서 소량으로 즐기는 꼬치어묵',
      title: '[냉동]딱한끼 사각꼬치',
      price: '5,500원'
    },
    {
      id: 'best-07',
      image: '/images/best_07.png',
      desc: '어묵 고유의 탱글하고 담백한 맛',
      title: '딱한끼 어묵탕(순한맛)',
      price: '4,000원'
    },
    {
      id: 'best-08',
      image: '/images/best_08.png',
      desc: '간식어묵 6종을 한번에 즐길수 있는 제품',
      title: '어부의바 6종 세트',
      price: '9,900원'
    },
  ]

  const [count, setCount] = useState([0,0,0,0,0,0,0,0])

  return (
    <>
      <section className="visual-main">
        <img src={process.env.PUBLIC_URL+"/images/visual_main_01.jpg"} alt="visual_img01" />
      </section>

      <div className="wrap">
        <section className="best-container">
          <h2 className="best-container__title">삼진어묵 베스트</h2>
          <div className="best-container__thumb">
            {
              bests.map((best, i) => {
                return (
                  <div className="best" key={best.id}>
                    <img src={best.image} alt='best_img1' style={{width: '280px', height: '280px'}} />
                    <p className="best__desc">{best.desc}</p>
                    <h4 className="best__subtitle">{best.title}</h4>
                    <p className="best__price">{best.price}</p>
                    <div className="best__btn">

                      <Button style={{borderRight:'none'}} onClick={()=>{
                        let countCopy = [...count]
                        countCopy[i] += 1
                        setCount(countCopy)
                      }} >🤍찜하기 {count[i]}</Button>
                      
                      <Button>🛒장바구니</Button>
                    </div>
                  </div>
                )
              })
            }
          </div>
       </section>
      </div>
    </>
  )
}