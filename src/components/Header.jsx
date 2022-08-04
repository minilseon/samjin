import React from "react";

export default function Header() {
  
  const liGnbs = [
    {id: 'gnb-01', gnb: '로그인'},
    {id: 'gnb-02', gnb: '회원가입'},
    {id: 'gnb-03', gnb: '장바구니'},
  ]
  
  return (
    <header className="header">
      <div className="header__container">
        <nav className="gnb">
          <ul>
            {
              liGnbs.map((liGnb) => {
                return (
                  <li key={liGnb.id}>{liGnb.gnb}</li>
                )
              })
            }
          </ul>
        </nav>

        <div className="logo">
          <h2>삼진어묵</h2>
        </div>

        <nav className="lnb">
          <ul>
            <li>베스트상품</li>
            <li>신상품</li>
            <li>기획전</li>
            <li>이벤트/혜택</li>
            <li>금복레시피</li>
            <li>레시피공모전</li>
          </ul>
        </nav>
        
      </div>
    </header>
  )
}