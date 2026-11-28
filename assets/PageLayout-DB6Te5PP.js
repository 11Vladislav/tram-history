import{n as e,r as t,t as n}from"./index-BbKL2FjS.js";var r=e.section`
  background: var(--color-bg-section);
  padding: 50px 40px 80px;
 
  @media (max-width: 768px) {
    padding: 30px 20px 50px;
  }
`,i=e.div`
  max-width: ${({$wide:e})=>e?`1400px`:`900px`};
  margin: 0 auto;
`,a=e.nav`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 25px;
 
  [aria-current="page"] {
    color: #a71d2c;
  }
`,o=e(t)`
  position: relative;
  color: var(--color-text);
  transition: color 0.3s ease;
 
  &:hover {
    color: var(--color-red);
  }
 
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0%;
    height: 2px;
    background: var(--color-red);
    transition: width 0.3s ease;
  }
 
  &:hover::after {
    width: 100%;
  }
`,s=e.h1`
  text-align: center;
  font-family: "Gosznak", serif;
  font-size: 3rem;
  color: var(--color-text);
  margin-bottom: 20px;
 
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,c=e.p`
  max-width: 700px;
  margin: 0 auto 40px;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.7;
  color: #5c5046;
 
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`,l=e.h2`
  font-family: "Gosznak", serif;
  font-size: 2rem;
  color: var(--color-text);
  margin: 50px 0 25px;
 
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin: 35px 0 20px;
  }
`,u=e.p`
  margin: 0 0 20px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #5c5046;
 
  a {
    color: var(--color-red);
    font-weight: 600;
    text-decoration: underline;
  }
`,d=e.ul`
  margin: 0 0 20px 22px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #5c5046;
 
  a {
    color: var(--color-red);
    font-weight: 600;
    text-decoration: underline;
  }
`,f=e.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 30px 0;
`,p=e.a`
  display: inline-block;
  min-width: 190px;
  padding: 15px 30px;
  border-radius: 8px;
 
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
 
  background: ${({$primary:e})=>e?`var(--color-red)`:`rgba(255, 255, 255, 0.7)`};
  color: ${({$primary:e})=>e?`#fff`:`var(--color-text)`};
  border: 1px solid ${({$primary:e})=>e?`transparent`:`#bca894`};
 
  transition: background 0.3s ease, transform 0.3s ease;
 
  &:hover {
    background: ${({$primary:e})=>e?`var(--color-red-dark)`:`#fff`};
    transform: translateY(-2px);
  }
`,m=e.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
`,h=e.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
 
  background: var(--color-bg-light);
  border: 1px solid #dfd1be;
  border-radius: 10px;
 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
 
  /* hover только у карточек-ссылок (as={Link}) */
  &:is(a):hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(60, 40, 20, 0.15);
  }
`,g=e.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  filter: sepia(25%);
`,_=e.div`
  padding: 18px;
`,v=e.h3`
  font-family: "Gosznak", serif;
  font-size: 1.3rem;
  color: var(--color-text);
`,y=e.p`
  margin-top: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-red);
`,b=e.p`
  margin-top: 10px;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #5c5046;
`,x=e.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
`,S=e.button`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  text-align: left;
  font: inherit;
  color: inherit;
  cursor: pointer;
`,C=e.img`
  display: block;
  width: 100%;
  height: 210px;
  object-fit: cover;
  border-radius: 6px;
  filter: sepia(35%);
  transition: filter 0.3s ease, transform 0.3s ease;
 
  ${S}:hover & {
    filter: sepia(0%);
    transform: scale(1.02);
  }
`,w=e.span`
  display: block;
  margin-top: 10px;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #5c5046;
`,T=e.article`
  margin-bottom: 30px;
  padding: 20px 24px;
  background: var(--color-bg-light);
  border-left: 4px solid var(--color-red);
  border-radius: 0 8px 8px 0;
`,E=e.p`
  margin-bottom: 10px;
  font-weight: 600;
  color: var(--color-red);
`,D=e.div`
  padding: 40px 24px;
  text-align: center;
  border: 2px dashed #cbb69f;
  border-radius: 10px;
  color: #5c5046;
  line-height: 1.7;
`,O=e.p`
  text-align: center;
  font-family: "Gosznak", serif;
  font-size: 6rem;
  line-height: 1;
  color: var(--color-red);
  margin-bottom: 10px;
`,k=n(),A=({title:e,crumb:t,lead:n,wide:l=!1,children:u})=>(0,k.jsx)(r,{children:(0,k.jsxs)(i,{$wide:l,children:[(0,k.jsxs)(a,{"aria-label":`Хлебные крошки`,children:[(0,k.jsx)(o,{to:`/`,children:`Главная`}),` /`,` `,(0,k.jsx)(`span`,{"aria-current":`page`,children:t??e})]}),(0,k.jsx)(s,{children:e}),n&&(0,k.jsx)(c,{children:n}),u]})});export{C as _,h as a,E as b,g as c,v as d,D as f,x as g,w as h,f as i,y as l,S as m,O as n,_ as o,d as p,p as r,m as s,A as t,b as u,l as v,u as x,T as y};