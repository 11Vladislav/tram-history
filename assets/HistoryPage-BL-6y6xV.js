import{a as e,n as t,o as n,r,t as i}from"./index-BbKL2FjS.js";import{t as a}from"./styles-C_tpvDwJ.js";import{t as o}from"./photos-BopdsMg5.js";import{n as ee,t as te}from"./steam-tram-2-xNz_1odS.js";import{t as ne}from"./petrol-tram-DLf5AzSD.js";import{i as s,r as c,s as l}from"./fa-CB4d1cMY.js";var u=t.section`
  background: url(${`/tram-history/assets/oldpaper-texture-DHFZfLSK.png`}) center / cover no-repeat;
  overflow: hidden;
`,d=t.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px;

  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 80px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
    padding: 50px 20px;
  }
`,f=t.div`
  position: relative;
  z-index: 2;
`,p=t.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`,m=t.nav`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 35px;

  span {
    color: #a71d2c;
  }
`,h=t(r)`
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
`,g=t.h1`
  font-family: "Gosznak", serif;
  font-size: 3.2rem;
  line-height: 1.1;
  color: var(--color-text);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`,_=t.p`
  max-width: 550px;
  color: #4f443b;
  font-size: 1.2rem;
  line-height: 1.9;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.7;
  }
`,v=t.div`
  position: relative;
  padding: 12px;

  background: #fffdf8;
  border-radius: 3px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  transform: rotate(-2deg);

  /* «Подложка» — вторая фотография под первой */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    top: -12px;
    left: 12px;
    z-index: -1;

    background: #e8dccb;
    border-radius: 3px;
    transform: rotate(3deg);
  }
`,y=t.img`
  width: 100%;
  max-width: 650px;
  display: block;
  filter: sepia(45%);
`,b=`/tram-history/assets/history-hero-img-B1Jtm5XS.png`,x=i(),S=()=>(0,x.jsx)(u,{children:(0,x.jsxs)(d,{children:[(0,x.jsxs)(f,{children:[(0,x.jsxs)(m,{"aria-label":`Хлебные крошки`,children:[(0,x.jsx)(h,{to:`/`,children:`Главная`}),` / `,(0,x.jsx)(`span`,{"aria-current":`page`,children:`История`})]}),(0,x.jsxs)(g,{children:[`История`,(0,x.jsx)(`br`,{}),`киевского трамвая`]}),(0,x.jsx)(_,{children:`Более 130 лет киевский трамвай является неотъемлемой частью жизни города. От первых вагонов на конной тяге до современных низкопольных трамваев — это история развития технологий, городской инфраструктуры и людей, которые создавали транспортную систему Киева.`})]}),(0,x.jsx)(p,{children:(0,x.jsx)(v,{children:(0,x.jsx)(y,{src:b,alt:`Старый киевский трамвай`})})})]})}),C=t.section`
  background: var(--color-bg-section);
  padding: 40px 40px 60px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`,w=t.h2`
  text-align: center;
  font-family: "Gosznak", serif;
  font-size: 3rem;
  color: var(--color-text);
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`,T=t.ol`
  max-width: 1400px;
  margin: 0 auto;
  list-style: none;

  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,E=t.div`
  position: relative;
  z-index: 1;

  width: 18px;
  height: 18px;
  margin: 0 auto 25px;

  background: var(--color-red);
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #cbb69f;
`,D=t.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 20px 30px;

  &::before {
    content: "";
    position: absolute;
    top: 8px; /* середина кружка */
    left: 0;
    right: 0;
    height: 2px;
    background: #d8c4ac;
  }

  @media (min-width: 1201px) {
    border-right: 1px solid #e5d9ca;

    &:first-child::before {
      left: 50%;
    }

    &:last-child {
      border-right: none;
    }

    &:last-child::before {
      right: 50%;
    }
  }
`,O=t.h3`
  text-align: center;
  color: var(--color-red);
  font-family: "Gosznak", serif;
  font-size: 2rem;
  margin-bottom: 20px;
`,k=t.h4`
  text-align: center;
  font-size: 1.3rem;
  color: var(--color-text);
  margin-bottom: 15px;
`,A=t.p`
  text-align: center;
  color: #5d5046;
  line-height: 1.7;
`,j=t.img`
  width: 100%;
  max-width: 180px;
  display: block;
  margin: auto auto 0;
  padding-top: 20px;
  filter: sepia(35%);
`,M=[{year:`1891`,title:`Первые трамваи`,description:`30 июля (11 августа) 1891 года в Киеве открылось первое трамвайное движение. Это была линия конного трамвая.`,image:`/tram-history/assets/horse-tram-Dbn11T1V.png`},{year:`1896`,title:`Электрификация`,description:`Все линии трамвая стали электрическими.`,image:`/tram-history/assets/electric-tram-h7eItazC.png`},{year:`1920–1930`,title:`Расширение сети`,description:`Активное развитие маршрутов и строительство новых линий. Строительство депо.`,image:`/tram-history/assets/expansion-tram-CFE98Yb8.png`},{year:`1941–1945`,title:`Военные годы`,description:`Трамвай продолжал работать в суровые военные годы, обеспечивая жизнь города.`,image:`/tram-history/assets/war-tram-U13lXzbA.png`},{year:`1950 – наши дни`,title:`Современный этап`,description:`Обновление подвижного состава и инфраструктуры. Внедрение современных технологий.`,image:`/tram-history/assets/modern-tram-DpjVZChc.png`}],N=()=>(0,x.jsxs)(C,{children:[(0,x.jsx)(w,{children:`Ключевые этапы`}),(0,x.jsx)(T,{children:M.map(e=>(0,x.jsxs)(D,{children:[(0,x.jsx)(E,{"aria-hidden":`true`}),(0,x.jsx)(O,{children:e.year}),(0,x.jsx)(k,{children:e.title}),(0,x.jsx)(A,{children:e.description}),(0,x.jsx)(j,{src:e.image,alt:e.title})]},e.year))})]}),P=t.section`
  background: var(--color-bg-section);
  border-top: 1px solid var(--color-border);
  padding: 50px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`,re=t.h2`
  text-align: center;
  font-family: "Gosznak", serif;
  font-size: 3rem;
  color: var(--color-text);
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
`,F=t.ul`
  max-width: 1400px;
  margin: 0 auto;
  list-style: none;
  text-align: center;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 30px;
  }
`,I=t(r)`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 25px;
  font-weight: 400;
  color: var(--color-text);
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-red);
  }
`,L=t.img`
  width: 250px;
  max-width: 100%;
  height: 200px;
  object-fit: cover;
  margin-top: 20px;
`,R=[{to:`/history/horse`,title:`Конный трамвай`,image:ee},{to:`/history/steam`,title:`Паровой трамвай`,image:te},{to:`/history/petrol`,title:`Бензотрамвай`,image:ne}],z=()=>(0,x.jsxs)(P,{children:[(0,x.jsx)(re,{children:`Виды трамвая в Киеве`}),(0,x.jsx)(F,{children:R.map(({to:e,title:t,image:n})=>(0,x.jsx)(`li`,{children:(0,x.jsxs)(I,{to:e,children:[t,(0,x.jsx)(L,{src:n,alt:``})]})},e))})]}),B=t.section`
  background: var(--color-bg-section);
  border-top: 1px solid var(--color-border);
  padding: 80px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`,V=t.div`
  max-width: 1400px;
  margin: 0 auto;

  display: grid;
  /* minmax(0, 1fr) не даёт галерее распирать колонку */
  grid-template-columns: 420px minmax(0, 1fr);
  gap: 50px;

  @media (max-width: 992px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 30px;
  }
`,H=t.div``,U=t.div`
  background: var(--color-bg-light);
  border: 1px solid #dfd1be;
  border-radius: 10px;
  padding: 24px;

  @media (max-width: 768px) {
    padding: 14px;
  }
`,W=t.h2`
  font-family: "Gosznak", serif;
  font-size: 2.5rem;
  color: #2f241c;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,G=t.div`
  width: 60px;
  height: 3px;
  background: var(--color-red);
  margin-bottom: 30px;
`,K=t.p`
  line-height: 1.9;
  color: #4f443b;
  font-weight: 600;
  margin-bottom: 40px;
`,q=t.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 25px;
`,J=t.li`
  display: flex;
  align-items: center;
  gap: 18px;
`,Y=t.div`
  flex-shrink: 0;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #e8dccb;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #4c3b30;
  font-size: 1.3rem;
`,X=t.div`
  font-size: 1.05rem;
  color: var(--color-text);
`,Z=n(e(),1),ie=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`,ae=t.h3`
  margin: 0;
  font-family: "Gosznak", serif;
  font-size: 2rem;
  color: var(--color-text);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,oe=t(r)`
  flex-shrink: 0;
  color: var(--color-red);
  font-size: 1rem;
  font-weight: 600;
  transition: color 0.3s;

  &:hover {
    color: var(--color-red-dark);
  }
`,Q=t.button`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  overflow: hidden;
  border-radius: 10px;
  cursor: zoom-in;
`,$=t.img`
  display: block;
  width: 100%;
  height: 420px;
  object-fit: cover;
  filter: sepia(60%);
  transition: transform 0.4s;

  ${Q}:hover & {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`,se=t.p`
  margin-top: 10px;
  font-size: 0.95rem;
  font-style: italic;
  color: #6a5d52;
`,ce=t.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 10px;
`,le=t.button`
  padding: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;

  border: ${({$active:e})=>e?`3px solid var(--color-red)`:`2px solid transparent`};

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,ue=t.img`
  display: block;
  width: 100%;
  height: 80px;
  object-fit: cover;
  filter: sepia(60%);
`,de=o.map(({src:e,title:t})=>({src:e,alt:t,title:t})),fe=()=>{let[e,t]=(0,Z.useState)(0),[n,r]=(0,Z.useState)(!1),i=o[e];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(ie,{children:[(0,x.jsx)(ae,{children:`Исторические фотографии`}),(0,x.jsx)(oe,{to:`/archive`,children:`Смотреть все`})]}),(0,x.jsx)(Q,{type:`button`,onClick:()=>r(!0),"aria-label":`Открыть фото на весь экран`,children:(0,x.jsx)($,{src:i.src,alt:i.title})}),(0,x.jsx)(se,{children:i.title}),(0,x.jsx)(ce,{children:o.map((n,r)=>(0,x.jsx)(le,{type:`button`,$active:e===r,"aria-label":`Показать фото: ${n.title}`,"aria-pressed":e===r,onClick:()=>t(r),children:(0,x.jsx)(ue,{src:n.src,alt:``,loading:`lazy`})},n.src))}),(0,x.jsx)(a,{open:n,close:()=>r(!1),index:e,slides:de,on:{view:({index:e})=>t(e)}})]})},pe=[{icon:(0,x.jsx)(l,{}),text:`Соединял районы и людей`},{icon:(0,x.jsx)(c,{}),text:`Отражал развитие технологий`},{icon:(0,x.jsx)(s,{}),text:`Оставил тёплые воспоминания в сердцах киевлян`}],me=()=>(0,x.jsx)(B,{children:(0,x.jsxs)(V,{children:[(0,x.jsxs)(H,{children:[(0,x.jsx)(W,{children:`Трамвай и город`}),(0,x.jsx)(G,{}),(0,x.jsx)(K,{children:`Трамвай стал не просто транспортом, а частью культурного и исторического наследия Киева. Он пережил войны, смену эпох и технологий, но всегда оставался рядом с киевлянами.`}),(0,x.jsx)(q,{children:pe.map(({icon:e,text:t})=>(0,x.jsxs)(J,{children:[(0,x.jsx)(Y,{"aria-hidden":`true`,children:e}),(0,x.jsx)(X,{children:t})]},t))})]}),(0,x.jsx)(U,{children:(0,x.jsx)(fe,{})})]})}),he=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(S,{}),(0,x.jsx)(N,{}),(0,x.jsx)(z,{}),(0,x.jsx)(me,{})]});export{he as default};