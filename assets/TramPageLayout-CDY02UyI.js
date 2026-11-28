import{n as e,r as t,t as n}from"./index-BbKL2FjS.js";var r=e.section`
  background: var(--color-bg-section);
  padding: 40px 40px 70px;

  @media (max-width: 768px) {
    padding: 30px 20px 50px;
  }
`,i=e.div`
  max-width: 1100px;
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
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 25px;
  }
`,c=e.img`
  display: block;
  width: 100%;
  max-height: 750px;
  object-fit: cover;
  border-radius: 6px;
`,l=e.p`
  max-width: 900px;
  margin: 30px 0;
  font-size: 1.2rem;
  line-height: 1.7;
  color: #5c5046;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`,u=e.ul`
  max-width: 900px;
  margin: 30px 0;
  list-style: none;

  display: grid;
  gap: 18px;

  font-size: 1.2rem;
  line-height: 1.7;
  color: #5c5046;

  li {
    padding-left: 18px;
    border-left: 3px solid #d8c4ac;
  }

  strong {
    color: var(--color-text);
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`,d=e.figure`
  margin: 0;
`,f=e.img`
  display: block;
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  object-position: top;
  border-radius: 6px;
`,p=e.figcaption`
  margin-top: 10px;
  font-size: 1rem;
  font-style: italic;
  line-height: 1.5;
  color: #6a5d52;
`,m=e.div`
  display: grid;
  grid-template-columns: minmax(0, 45%) minmax(0, 1fr);
  gap: 30px;
  align-items: center;
  margin: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,h=e.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
  margin: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,g=e.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
  margin: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
  }
`,_=e(t)`
  display: inline-block;
  margin-top: 40px;
  font-weight: 600;
  color: var(--color-text);
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-red);
  }
`,v=n(),y=({title:e,crumb:t,children:n})=>(0,v.jsx)(r,{children:(0,v.jsxs)(i,{children:[(0,v.jsxs)(a,{"aria-label":`Хлебные крошки`,children:[(0,v.jsx)(o,{to:`/`,children:`Главная`}),` / `,(0,v.jsx)(o,{to:`/history`,children:`История`}),` /`,` `,(0,v.jsx)(`span`,{"aria-current":`page`,children:t})]}),(0,v.jsx)(s,{children:e}),n,(0,v.jsx)(_,{to:`/history`,children:`← Вернуться к истории`})]})});export{d as a,h as c,f as i,m as l,u as n,g as o,p as r,c as s,y as t,l as u};