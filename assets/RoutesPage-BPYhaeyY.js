import{a as e,n as t,o as n,r,t as i}from"./index-BW8qr3B5.js";import{t as a}from"./styles-chnh1c0G.js";import{a as o,n as s,o as c,t as l}from"./fa-CISSvroK.js";var u=t.section`
  background-color: var(--color-bg-light);
  border-bottom: 1px solid var(--color-border);
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
`,ee=t.nav`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 35px;

  [aria-current="page"] {
    color: #a71d2c;
  }
`,te=t(r)`
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
`,m=t.h1`
  font-family: "Gosznak", serif;
  font-size: 3.2rem;
  line-height: 1.1;
  color: var(--color-text);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`,h=t.p`
  max-width: 550px;
  color: #4f443b;
  font-size: 1.2rem;
  line-height: 1.9;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.7;
  }
`,g=t.img`
  display: block;
  width: 100%;
  max-width: 650px;
  border-radius: 5%;
  box-shadow: 0 10px 25px rgba(60, 40, 20, 0.2);
  filter: sepia(45%);
`,ne=`/tram-history/assets/routes-hero-tram-C3Qh8LY4.png`,_=i(),re=()=>(0,_.jsx)(u,{children:(0,_.jsxs)(d,{children:[(0,_.jsxs)(f,{children:[(0,_.jsxs)(ee,{"aria-label":`Хлебные крошки`,children:[(0,_.jsx)(te,{to:`/`,children:`Главная`}),` / `,(0,_.jsx)(`span`,{"aria-current":`page`,children:`Маршруты`})]}),(0,_.jsx)(m,{children:`Маршруты Киева`}),(0,_.jsx)(h,{children:`Трамвайные маршруты соединяют районы, людей и поколения. Узнайте историю каждого маршрута и его путь сквозь время.`})]}),(0,_.jsx)(p,{children:(0,_.jsx)(g,{src:ne,alt:`Старый киевский трамвай`})})]})}),v=n(e(),1),y=[{id:1,number:`1`,title:`Михайловская Борщаговка — ул. Старовокзальная`,status:`Действующий`,description:`13 июня 1892 года: Запущен первый в Российской империи электрический трамвай. Линия №1 шла от Контрактовой площади (тогда — Александровской) до Европейской площади (тогда — Царской) по Александровскому спуску. Затем до речки Лыбедь продлили 1934 год: Трамвайное движение убрали с Крещатика. Маршрут пустили по улице Владимирской и улице Льва Толстого до площади Богдана Хмельницкого. 1948 год: Маршрут сократили до площади Льва Толстого. 23 октября 1956 года: Открыт новый вариант маршрута: «Площадь Богдана Хмельницкого — Университет», просуществовавший до 1 октября 1959 года. 6 ноября 1963 года: Маршрут возродили на другом конце города: «Завод „Большевик“ — Кислородный завод». 1 декабря 1970 года:: Трассу изменили на «Дворец спорта — улица Семьи Сосниных» по Брест-Литовскому проспекту. 1 января 1977 / 1978–1979 годы:: Маршрут №1 перевели на новую трассу скоростного трамвая: «Дворец спорта — улица Семьи Сосниных» (позже до улицы Зодчих). 28 декабря 1984 года:  Маршрут продлили до улицы Булгакова в жилмассиве Борщаговка. 2001 год линию сократили до ул. Старовокзальная, убрав рельсы до Дворца Спорта.`,stats:{opened:`1 (13) июня 1892`,length:`11,8 км`,stops:`16`,interval:`7–10 мин`},periods:[{id:`1892-1934`,label:`1892–1934`,title:`1892–1934`,description:`Первоначальный период существования маршрута.`,map:`images/routes/route-1/map1892-1934.png`,photos:[`images/routes/route-1/photo-1.png`,`images/routes/route-1/photo-2.jpg`,`images/routes/route-1/photo-3.png`,`images/routes/route-1/photo-4.png`]},{id:`1934-1948`,label:`1934–1948`,title:`1934–1948`,description:`Изменение маршрута в период войн и масштабного развития городской трамвайной сети.`,map:`images/routes/route-1/map1934-1948.png`,photos:[`images/routes/route-1/photo-8.jpg`,`images/routes/route-1/photo-1.jpg`]},{id:`1948-1959`,label:`1948–1959`,title:`1948–1959`,description:`Послевоенное восстановление и развитие трамвайной сети Киева.`,map:`images/routes/route-1/map1948-1959.png`,photos:[`images/routes/route-1/photo-7.jpg`,`images/routes/route-1/photo-9.jpg`]},{id:`1963-1970`,label:`1963–1970`,title:`1963–1970`,description:`Маршрут в период развития трамвайной сети независимой Украины.`,map:`images/routes/route-1/map1963-1970.png`,photos:[`images/routes/route-1/photo-5.png`,`images/routes/route-1/photo-6.png`]},{id:`1970-1977`,label:`1970–1977`,title:`1970–1977`,description:`Маршрут в период развития трамвайной сети независимой Украины.`,map:`images/routes/route-1/map1970-1977.png`,photos:[`images/routes/route-1/photo-10.jpg`,`images/routes/route-1/photo-12.jpg`]},{id:`2014-current`,label:`2014–наши дни`,title:`2014–наши дни`,description:`Современное состояние маршрута.`,map:`images/routes/route-1/map-current.jpg`,photos:[`images/routes/route-1/photo-11.jpg`,`images/routes/route-1/photo-4.jpg`]}]}],b=`
  padding: 0;
  border: none;
  background: transparent;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
`,x=t.section`
  background: var(--color-bg-section);
  padding: 70px 30px;
  color: var(--color-text);

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`,S=t.div`
  max-width: 1450px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 25px;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,C=t.aside`
  padding: 0 10px;
  align-self: start;

  @media (min-width: 901px) {
    position: sticky;
    top: 20px;
  }
`,w=t.h2`
  font-family: "Gosznak", serif;
  font-size: 1.5rem;
  margin: 0 0 20px;
`,T=t.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 900px) {
    max-height: 320px;
    overflow-y: auto;
  }
`,E=t.button`
  ${b}

  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  min-height: 70px;
  padding: 14px 12px;

  border: 1px solid ${({$active:e})=>e?`#a52a25`:`#dfcdb6`};
  border-radius: 6px;
  background: ${({$active:e})=>e?`#fbf3e6`:`transparent`};

  transition: 0.25s;

  &:hover {
    background: #fbf3e6;
    border-color: #b56a5e;
  }
`,D=t.div`
  min-width: 35px;
  color: var(--color-red);
  font-family: "Gosznak", serif;
  font-size: 1.8rem;
`,O=t.div`
  flex: 1;
`,k=t.div`
  font-family: "Gosznak", serif;
  font-size: 0.95rem;
  line-height: 1.3;
`,A=t.div`
  margin-top: 6px;
  font-size: 0.8rem;
  color: #745d4c;
`,j=t.div`
  font-size: 1.5rem;
  color: #a37852;
`,M=t.button`
  width: 100%;
  margin-top: 16px;
  padding: 12px;

  border: 1px solid #d8bfa0;
  border-radius: 5px;
  background: transparent;

  color: #7d342e;
  font: inherit;
  cursor: pointer;

  transition: background 0.25s;

  &:hover {
    background: #fbf3e6;
  }
`,N=t.div`
  min-width: 0;
  background: rgba(255, 250, 241, 0.35);
  padding: 5px 15px;

  @media (max-width: 768px) {
    padding: 5px 0;
  }
`,P=t.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
  }
`,F=t.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,I=t.div`
  width: 55px;
  height: 55px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #d9b991;
  border-radius: 6px;

  color: var(--color-red);
  font-family: "Gosznak", serif;
  font-size: 2rem;
`,L=t.div``,R=t.h2`
  margin: 0;
  font-family: "Gosznak", serif;
  font-size: 1.8rem;
  line-height: 1.2;
`,z=t.div`
  margin-top: 4px;
  color: var(--color-red);
  font-weight: 600;
`,B=t.span`
  padding: 7px 12px;
  border-radius: 6px;
  background: #edf0d9;
  color: #66703c;
  font-size: 0.85rem;
`,V=t.p`
  max-width: 850px;
  margin: 0 0 20px;
  line-height: 1.7;
  font-size: 1rem;
  color: #4c4036;
`,H=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  margin-bottom: 20px;
  border-top: 1px solid #e1d1bc;
  border-bottom: 1px solid #e1d1bc;
`,ie=t.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 8px;
`,U=t.div`
  width: 38px;
  height: 38px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: #eadcc7;
  color: #775b3e;
`,W=t.div`
  min-width: 0;
`,G=t.div`
  font-size: 0.8rem;
  color: #806d5b;
  margin-bottom: 3px;
`,K=t.div`
  font-size: 0.9rem;
  font-weight: 600;
`,q=t.button`
  ${b}

  position: relative;
  display: block;
  width: 100%;
  overflow: hidden;

  border: 1px solid #d6c2a8;
  border-radius: 6px;
  background: #e9ddca;
  cursor: zoom-in;

  &::after {
    content: "Нажмите для увеличения";
    position: absolute;
    right: 12px;
    bottom: 12px;
    padding: 6px 10px;
    border-radius: 4px;
    background: rgba(55, 40, 25, 0.75);
    color: #fff;
    font-size: 0.75rem;
    opacity: 0;
    transition: opacity 0.25s;
    pointer-events: none;
  }

  &:hover::after,
  &:focus-visible::after {
    opacity: 1;
  }
`,J=t.img`
  display: block;
  width: 100%;
  height: 390px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${q}:hover & {
    transform: scale(1.01);
  }

  @media (max-width: 768px) {
    height: 280px;
  }
`,Y=t.div`
  display: flex;
  align-items: flex-start;
  padding: 15px 25px 0;
  overflow-x: auto;
`,X=t.button`
  ${b}

  position: relative;
  flex: 1;
  min-width: 110px;
  text-align: center;
`,ae=t.div`
  position: relative;
  z-index: 2;
  width: 10px;
  height: 10px;
  margin: 0 auto 10px;
  border-radius: 50%;
  background: ${({$active:e})=>e?`var(--color-red)`:`#f7f0e4`};
  border: 2px solid #a9845f;
`,oe=t.div`
  position: absolute;
  top: 4px;
  left: calc(50% + 5px);
  width: calc(100% - 10px);
  height: 1px;
  background: #c9b496;
`,se=t.div`
  font-size: 0.8rem;
  font-weight: ${({$active:e})=>e?600:400};
  color: ${({$active:e})=>e?`var(--color-red)`:`#6d5744`};
  transition: color 0.2s;

  ${X}:hover & {
    color: var(--color-red);
  }
`,ce=t.div`
  margin-top: 25px;
  padding: 15px;
  border: 1px solid #dfcdb6;
  border-radius: 6px;
  background: rgba(250, 244, 233, 0.7);
`,Z=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`,le=t.h3`
  margin: 0;
  font-family: "Gosznak", serif;
  font-size: 1.1rem;
`,ue=t.button`
  ${b}
  flex-shrink: 0;
  color: var(--color-red);
  font-size: 0.85rem;
  font-weight: 600;
`,de=t.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,fe=t.button`
  ${b}

  display: block;
  overflow: hidden;
  border-radius: 5px;

  img {
    display: block;
    width: 100%;
    height: 110px;
    object-fit: cover;
    filter: sepia(25%);
    transition: transform 0.25s ease, filter 0.25s ease;
  }

  &:hover img {
    transform: scale(1.03);
    filter: sepia(0%);
  }
`,Q=8,pe=`1892 – наши дни`,me=[{key:`opened`,label:`Открыт`,Icon:l},{key:`length`,label:`Длина маршрута`,Icon:c},{key:`stops`,label:`Остановок`,Icon:o},{key:`interval`,label:`Интервал движения`,Icon:s}],$=e=>`/tram-history/${e.replace(/^\//,``)}`,he=()=>{let[e,t]=(0,v.useState)(y[0]),[n,r]=(0,v.useState)(y[0].periods[0]),[i,o]=(0,v.useState)(!1),[s,c]=(0,v.useState)(null),l=i?y:y.slice(0,Q),u=e=>{t(e),r(e.periods[0])},d=e=>e.years??pe,f=n.photos.map(t=>({src:$(t),alt:`Историческая фотография маршрута №${e.number}`})),p=[{src:$(n.map),alt:`Карта маршрута №${e.number}`}];return(0,_.jsxs)(x,{children:[(0,_.jsxs)(S,{children:[(0,_.jsxs)(C,{children:[(0,_.jsx)(w,{children:`Все маршруты`}),(0,_.jsx)(T,{children:l.map(t=>{let n=e.id===t.id;return(0,_.jsxs)(E,{type:`button`,$active:n,"aria-current":n?`true`:void 0,onClick:()=>u(t),children:[(0,_.jsx)(D,{children:t.number}),(0,_.jsxs)(O,{children:[(0,_.jsx)(k,{children:t.title}),(0,_.jsx)(A,{children:d(t)})]}),(0,_.jsx)(j,{"aria-hidden":`true`,children:`›`})]},t.id)})}),y.length>Q&&(0,_.jsx)(M,{type:`button`,onClick:()=>o(!i),children:i?`Свернуть список`:`Показать все маршруты`})]}),(0,_.jsxs)(N,{children:[(0,_.jsxs)(P,{children:[(0,_.jsxs)(F,{children:[(0,_.jsx)(I,{children:e.number}),(0,_.jsxs)(L,{children:[(0,_.jsx)(R,{children:e.title}),(0,_.jsx)(z,{children:d(e)})]})]}),e.status&&(0,_.jsx)(B,{children:e.status})]}),(0,_.jsx)(V,{children:e.description}),(0,_.jsx)(H,{children:me.filter(({key:t})=>e.stats?.[t]).map(({key:t,label:n,Icon:r})=>(0,_.jsxs)(ie,{children:[(0,_.jsx)(U,{"aria-hidden":`true`,children:(0,_.jsx)(r,{})}),(0,_.jsxs)(W,{children:[(0,_.jsx)(G,{children:n}),(0,_.jsx)(K,{children:e.stats[t]})]})]},t))}),(0,_.jsx)(q,{type:`button`,"aria-label":`Увеличить карту маршрута`,onClick:()=>c({slides:p,index:0}),children:(0,_.jsx)(J,{src:$(n.map),alt:`Карта маршрута №${e.number}`})}),(0,_.jsx)(Y,{children:e.periods.map((t,i)=>{let a=n.id===t.id;return(0,_.jsxs)(X,{type:`button`,"aria-pressed":a,onClick:()=>r(t),children:[(0,_.jsx)(ae,{$active:a}),i<e.periods.length-1&&(0,_.jsx)(oe,{}),(0,_.jsx)(se,{$active:a,children:t.label})]},t.id)})}),n.photos.length>0&&(0,_.jsxs)(ce,{children:[(0,_.jsxs)(Z,{children:[(0,_.jsx)(le,{children:`Исторические фотографии маршрута`}),(0,_.jsx)(ue,{type:`button`,onClick:()=>c({slides:f,index:0}),children:`Смотреть все`})]}),(0,_.jsx)(de,{children:n.photos.map((t,n)=>(0,_.jsx)(fe,{type:`button`,"aria-label":`Открыть фото ${n+1}`,onClick:()=>c({slides:f,index:n}),children:(0,_.jsx)(`img`,{src:$(t),alt:`Историческая фотография маршрута №${e.number}`,loading:`lazy`})},t))})]})]})]}),(0,_.jsx)(a,{open:s!==null,close:()=>c(null),slides:s?.slides??[],index:s?.index??0})]})},ge=()=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(re,{}),(0,_.jsx)(he,{})]});export{ge as default};