(()=>{"use strict";var e,t,l,a={2322:(e,t,l)=>{var a=l(7378),n=l(1542),r=l(5785);const c=JSON.parse('{"name":"Имя: ","bithday":"Дата рождения: ","age":"Возраст: ","location":"Текущая локация: ","resume":"Резюме","portfolio":"Портфолио","about":"Обо мне:","qualities":"Личные качества","skills":"Опыт & навыки","interest":"Прочие интересы","stack":"Используемый стек","my-name":"Сабуров Юрий","my-position":"Фронтенд разработка","my-bithday":"22 Апреля","my-age":"25 лет","my-location":"Сибирь, г.Белово","description-first":"Frontend-разработчик, без серьезного коммерческого опыта. Знаю некоторые принципы разработки, технологии. На данный момент нахожусь на стадии, когда хочу и жажду получить опыт в команде. Касаемо технологий, что-то понимаю хорошо или имею неглубокий опыт. В целом, у всех технологий однотипная документация, с которой при необходимости не сложно разобраться.","description-second":"После двух месяцах стажировки в Эстонской компании нахожусь в поиске реальных проектов. Желаю не просто писать код, а участвовать в решении бизнес задач. Есть большое желание в будущем овладеть подходом разработки - DDD(Domain Driven Design). Буду рад стать частью коллектива, где проводят code review, менторят, дают теорию и задают вектор развития. И было бы здорово, если будет возможность практиковать разговорный английский.","description-qualities":"Во время работы я сосредоточен, спокоен и нацелен на результат. Самостоятельный, все имеющийся навыки и знания приобрел сам. Благодаря постоянству и отношению к делу.","description-ps":"p.s Готов к переезду, если это потребуется.","li-skill-first":"HTML, CSS(SCSS), JS - способность написать простые скрипты","li-skill-second":"Имеется опыт создание SPA на ReactJS","li-skill-third":"Кросс-браузерная и адаптивная верстка","li-skill-four":"Опыт использование NPM-зависимостей и GIT","li-skill-five":"Gulp и Webpack, для автоматизации процессов разработки","li-skill-six":"Знаком с Redux, TypeScript, Jest-unit, MaterialUI, но опыт использования неглубокий","li-skill-seven":"Знание английского на среднем уровне","li-skill-eight":"Базовое понимание REST API и опыт использование","interest-left":"Физическое и ментальное здоровье","interest-middle":"Инвестирование, web 3.0","interest-right":"Фундументальные знания"}'),i=JSON.parse('{"name":"Name: ","bithday":"Birthday: ","age":"Age:  ","location":"Current location: ","resume":"Resume","portfolio":"Portfolio","about":"About me","qualities":"Personal qualities","skills":"Experience & skills","interest":"Other interests","stack":"Used stack","my-name":"Yury Saburov","my-position":"Frontend development","my-bithday":"22 April","my-age":"25 years old","my-location":"Belovo, Kemerovo, Siberia","description-first":"I\'m a Frontend developer with no serious commercial experience. I know some principles of development, technologies. At the moment I\'m at the stage when I want and crave to gain experience in the team. With regard to technology, I understand something well or have shallow experience. In general, all technologies have the same type of documentation which if necessary isn\'t difficult to figure out.","description-second":"After two months of internship in an Estonian company, I\'m looking for new opportunities. I wish not just to write code but to participate in solving business tasks. There\'s a great desire in the future to master the development approach - DDD(Domain Driven Design). I\'ll be glad to become a part of the team, where code review is conducted, mentor, give theory and set the vector of development.","description-qualities":"While working, I\'m focused, calm and focused on results. Independent, the skills/knowledge that I have - I acquired myself. Thanks to constancy and attitude to business.","description-ps":"p.s Ready to move if needed.","li-skill-first":"HTML, CSS(SCSS), JS - ability to write simple scripts","li-skill-second":"I\'ve experience in creating a SPA on ReactJS","li-skill-third":"Cross-browser and adaptive layout","li-skill-four":"I\'ve experience using NPM-dependencies and GIT","li-skill-five":"Gulp and Webpack for automating some processes","li-skill-six":"Shallow usage experience: Redux, TypeScript, Just-unit, MaterialUI","li-skill-seven":"Knowledge of English at an average level","li-skill-eight":"Basic understanding of REST API and usage experience.","interest-left":"Physical and mental health","interest-middle":"Investing, web 3.0","interest-right":"Fundamental knowledge"}'),s=a.createContext(),m=navigator.language;let o;o="en"===m?i:c;const p=e=>{const[t,l]=(0,a.useState)(m),[n,p]=(0,a.useState)(o);return a.createElement(s.Provider,{value:{locale:t,setLang:e=>{const t=e.target.value;l(t),p("en"===t?i:c)}}},a.createElement(r.Z,{messages:n,locale:t},e.children))};var u=l(4289),E=l(9635),d=l(4800),h=l.n(d),f=l(1558);const g=l.p+"assets/imgs/me.ca22b6f4.webp",_=l.p+"assets/imgs/me.7c808749.jpg",v=()=>{const e=(0,a.useContext)(s);return a.createElement("aside",{className:"profile"},a.createElement("div",{className:"profile__inner"},a.createElement("section",{className:"profile__header"},a.createElement("div",null,a.createElement("h1",{className:"profile__name"},a.createElement(f.Z,{id:"my-name"})),a.createElement("p",{className:"profile__position",style:{marginBottom:"1rem"}},a.createElement(f.Z,{id:"my-position"}))),a.createElement("div",{className:"profile__lang"},a.createElement("svg",{viewBox:"0 0 496 512"},a.createElement("path",{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"})),a.createElement("select",{className:"profile__select",value:e.locale,onChange:e.setLang},a.createElement("option",{value:"ru"},"RU"),a.createElement("option",{value:"en"},"EN")))),a.createElement("picture",null,a.createElement("source",{srcSet:g,type:"image/webp"}),a.createElement("img",{className:"profile__photo",src:_,alt:"myphoto"})),a.createElement("ul",{className:"profile__info"},a.createElement("li",{className:"profile__item"},a.createElement(f.Z,{id:"name"}),a.createElement("span",null,a.createElement(f.Z,{id:"my-name"}))),a.createElement("li",{className:"profile__item"},a.createElement(f.Z,{id:"bithday"}),a.createElement("span",null,a.createElement(f.Z,{id:"my-bithday"}))),a.createElement("li",{className:"profile__item"},a.createElement(f.Z,{id:"age"}),a.createElement("span",null,a.createElement(f.Z,{id:"my-age"}))),a.createElement("li",{className:"profile__item"},"E-mail:",a.createElement("a",{className:"profile__email",href:"mailto:the.saburchik@gmail.com"},"the.saburchik@gmail.com")),a.createElement("li",{className:"profile__item"},a.createElement(f.Z,{id:"location"}),a.createElement("span",null,a.createElement(f.Z,{id:"my-location"}))))))},b=()=>{const[e,t]=(0,a.useState)("");return a.createElement("header",{className:"header"},a.createElement("div",{className:"header__inner"},a.createElement(u.rU,{className:"header__btn home__btn",to:"/"},a.createElement("svg",{viewBox:"0 0 576 512"},a.createElement("path",{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}))),a.createElement("label",{className:"header__btn burger__btn",htmlFor:"burger"},a.createElement("div",{className:"hamburger"+e,onClick:()=>t(e?"":" open")},a.createElement("span",{className:"lines half top"}),a.createElement("span",{className:"lines"}),a.createElement("span",{className:"lines half bottom"}))),a.createElement("input",{type:"checkbox",id:"burger",style:{display:"none"}}),a.createElement("nav",{className:"nav__inner"},a.createElement("ul",{className:"nav__tabs"},a.createElement("li",null,a.createElement(u.rU,{className:"tab__btn",to:"/resume"},a.createElement(f.Z,{id:"resume"}))),a.createElement("li",null,a.createElement(u.rU,{className:"tab__btn",to:"/portfolio"},a.createElement(f.Z,{id:"portfolio"})))),a.createElement("ul",{className:"nav__media"},a.createElement("li",null,a.createElement("a",{className:"nav__link",href:"https://github.com/saburchik",rel:"noreferrer",target:"_blank"},a.createElement("svg",{style:{fill:"#8c8c8c"},viewBox:"0 0 496 512"},a.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})))),a.createElement("li",null,a.createElement("a",{className:"nav__link",href:"https://vk.com/saburchik_chsv",rel:"noreferrer",target:"_blank"},a.createElement("svg",{style:{fill:"#597da3"},viewBox:"0 0 576 512"},a.createElement("path",{d:"M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"})))),a.createElement("li",null,a.createElement("a",{className:"nav__link",href:"https://www.instagram.com/saburchik_chsv",rel:"noreferrer",target:"_blank"},a.createElement("svg",{style:{fill:"#be2c6b"},viewBox:"0 0 448 512"},a.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})))),a.createElement("li",null,a.createElement("a",{className:"nav__link",href:"https://t.me/saburchik_chsv",rel:"noreferrer",target:"_blank"},a.createElement("svg",{style:{fill:" #597da3"},viewBox:"0 0 448 512"},a.createElement("path",{d:"M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"}))))))))},k=l.p+"assets/imgs/republic.a369204a.jpg",N=l.p+"assets/imgs/republic.555179df.webp",y=l.p+"assets/imgs/chelsea.c465d5f3.jpg",w=l.p+"assets/imgs/chelsea.183c3879.webp",S=l.p+"assets/imgs/helmda.317594c3.jpg",Z=()=>a.createElement("ul",{className:"portfolio__inner"},a.createElement("li",{className:"portfolio__items"},a.createElement("a",{className:"portfolio__link",href:"https://saburchik-helmda.herokuapp.com/",rel:"noreferrer",target:"_blank"},a.createElement("picture",{className:"images__inner"},a.createElement("source",{srcSet:S,type:"image/webp"}),a.createElement("img",{src:S,alt:"Изоб-ние проекта"})),a.createElement("p",{className:"portfolio__title"},"— Web-application | HelmDA"),a.createElement("ul",{className:"portfolio__stack-item"},a.createElement("li",{className:"portfolio__suptitle"},a.createElement("p",null,a.createElement(f.Z,{id:"stack"}),":")),a.createElement("li",null,"HTML"),a.createElement("li",null,"SCSS"),a.createElement("li",null,"React.js"),a.createElement("li",null,"Webpack")))),a.createElement("li",{className:"portfolio__items"},a.createElement("a",{className:"portfolio__link",href:"https://saburchik.github.io/landing-page-chelsea",rel:"noreferrer",target:"_blank"},a.createElement("picture",{className:"images__inner"},a.createElement("source",{srcSet:w,type:"image/webp"}),a.createElement("img",{src:y,alt:"Изоб-ние проекта"})),a.createElement("p",{className:"portfolio__title"},"— Landing-Page FC Chelsea"),a.createElement("ul",{className:"portfolio__stack-item"},a.createElement("li",{className:"portfolio__suptitle"},a.createElement("p",null,a.createElement(f.Z,{id:"stack"}),":")),a.createElement("li",null,"HTML"),a.createElement("li",null,"SCSS"),a.createElement("li",null,"JS"),a.createElement("li",null,"Gulp"),a.createElement("li",null,"AnyChart.js")))),a.createElement("li",{className:"portfolio__items"},a.createElement("a",{className:"portfolio__link",href:"https://republic-shop.herokuapp.com",rel:"noreferrer",target:"_blank"},a.createElement("picture",{className:"images__inner"},a.createElement("source",{srcSet:N,type:"image/webp"}),a.createElement("img",{src:k,alt:"Изоб-ние проекта"})),a.createElement("p",{className:"portfolio__title"},"— Shopping Market | Republic"),a.createElement("ul",{className:"portfolio__stack-item"},a.createElement("li",{className:"portfolio__suptitle"},a.createElement("p",null,a.createElement(f.Z,{id:"stack"}),":")),a.createElement("li",null,"HTML"),a.createElement("li",null,"SCSS"),a.createElement("li",null,"React.js"),a.createElement("li",null,"Redux.js"))))),x=()=>a.createElement("section",{className:"tabs__content"},a.createElement("h2",{className:"title"},"— ",a.createElement(f.Z,{id:"about"})),a.createElement("div",null,a.createElement("p",{className:"description"},a.createElement(f.Z,{id:"description-first"})),a.createElement("p",{className:"description"},a.createElement(f.Z,{id:"description-second"})),a.createElement("p",{className:"description"},a.createElement(f.Z,{id:"description-ps"})),a.createElement("article",null,a.createElement("h3",{className:"suptitle"},a.createElement(f.Z,{id:"qualities"})),a.createElement("p",{className:"description"},a.createElement(f.Z,{id:"description-qualities"}))))),M=()=>a.createElement("section",{className:"tabs__content"},a.createElement("h2",{className:"title"},"— ",a.createElement(f.Z,{id:"resume"}),":"),a.createElement("article",{style:{marginBottom:"2rem"}},a.createElement("h3",{className:"suptitle"},a.createElement(f.Z,{id:"skills"}),":"),a.createElement("ul",{className:"list__skills"},a.createElement("li",null,a.createElement(f.Z,{id:"li-skill-first"}),";"),a.createElement("li",null,a.createElement(f.Z,{id:"li-skill-second"}),";"),a.createElement("li",null,a.createElement(f.Z,{id:"li-skill-third"}),";"),a.createElement("li",null,a.createElement(f.Z,{id:"li-skill-four"}),";"),a.createElement("li",null,a.createElement(f.Z,{id:"li-skill-five"}),";"),a.createElement("li",null,a.createElement(f.Z,{id:"li-skill-six"}),";"),a.createElement("li",null,a.createElement(f.Z,{id:"li-skill-seven"}),";"),a.createElement("li",null,a.createElement(f.Z,{id:"li-skill-eight"}),"."))),a.createElement("article",null,a.createElement("h3",{className:"suptitle"},a.createElement(f.Z,{id:"interest"}),":"),a.createElement("ul",{className:"list__interest"},a.createElement("li",null,a.createElement("svg",{viewBox:"0 0 448 512"},a.createElement("path",{d:"M448 358.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16q0-9.6-9.6-19.2c-3.2-16-3.2-60.8 0-73.6q9.6-4.8 9.6-19.2zM144 168a8 8 0 0 1 8-8h56v-56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56h-56a8 8 0 0 1-8-8zm236.8 280H96c-19.2 0-32-12.8-32-32s16-32 32-32h284.8z"})),a.createElement("p",null,a.createElement(f.Z,{id:"interest-left"}))),a.createElement("li",null,a.createElement("svg",{viewBox:"0 0 576 512"},a.createElement("path",{d:"M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z"})),a.createElement("p",null,a.createElement(f.Z,{id:"interest-middle"}))),a.createElement("li",null,a.createElement("svg",{viewBox:"0 0 576 512"},a.createElement("path",{d:"M571.31 251.31l-22.62-22.62c-6.25-6.25-16.38-6.25-22.63 0L480 274.75l-46.06-46.06c-6.25-6.25-16.38-6.25-22.63 0l-22.62 22.62c-6.25 6.25-6.25 16.38 0 22.63L434.75 320l-46.06 46.06c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L480 365.25l46.06 46.06c6.25 6.25 16.38 6.25 22.63 0l22.62-22.62c6.25-6.25 6.25-16.38 0-22.63L525.25 320l46.06-46.06c6.25-6.25 6.25-16.38 0-22.63zM552 0H307.65c-14.54 0-27.26 9.8-30.95 23.87l-84.79 322.8-58.41-106.1A32.008 32.008 0 0 0 105.47 224H24c-13.25 0-24 10.74-24 24v48c0 13.25 10.75 24 24 24h43.62l88.88 163.73C168.99 503.5 186.3 512 204.94 512c17.27 0 44.44-9 54.28-41.48L357.03 96H552c13.25 0 24-10.75 24-24V24c0-13.26-10.75-24-24-24z"})),a.createElement("p",null,a.createElement(f.Z,{id:"interest-right"})))))),z=()=>a.createElement("section",{className:"tabs__content"},a.createElement("h2",{className:"title"},"— ",a.createElement(f.Z,{id:"portfolio"}),":"),a.createElement("div",{className:"portfolio"},a.createElement(Z,null))),C=()=>{const[e,t]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{t(!0),setTimeout((()=>{t(!1)}),300)}),[]),a.createElement(u.UT,null,e?a.createElement("div",{className:"loadingpage"},a.createElement(h(),{color:"#fff",loading:e,size:15})):a.createElement("div",{className:"wrapper"},a.createElement("div",{className:"container",id:"tabs"},a.createElement(v,null),a.createElement("section",{className:"information"},a.createElement(b,null),a.createElement("main",{className:"main"},a.createElement("div",{style:{opacity:"0",position:"absolute",top:"-5000px"}},a.createElement(Z,null)),a.createElement(E.rs,null,a.createElement(E.AW,{exact:!0,path:"/",component:x}),a.createElement(E.AW,{exact:!0,path:"/resume",component:M}),a.createElement(E.AW,{exact:!0,path:"/portfolio",component:z})))))))};n.render(a.createElement(p,null,a.createElement(C,null)),document.getElementById("root"))}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var l=n[e]={exports:{}};return a[e].call(l.exports,l,l.exports,r),l.exports}r.m=a,e=[],r.O=(t,l,a,n)=>{if(!l){var c=1/0;for(o=0;o<e.length;o++){for(var[l,a,n]=e[o],i=!0,s=0;s<l.length;s++)(!1&n||c>=n)&&Object.keys(r.O).every((e=>r.O[e](l[s])))?l.splice(s--,1):(i=!1,n<c&&(c=n));if(i){e.splice(o--,1);var m=a();void 0!==m&&(t=m)}}return t}n=n||0;for(var o=e.length;o>0&&e[o-1][2]>n;o--)e[o]=e[o-1];e[o]=[l,a,n]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},l=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var n=Object.create(null);r.r(n);var c={};t=t||[null,l({}),l([]),l(l)];for(var i=2&a&&e;"object"==typeof i&&!~t.indexOf(i);i=l(i))Object.getOwnPropertyNames(i).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,r.d(n,c),n},r.d=(e,t)=>{for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var l=t.getElementsByTagName("script");l.length&&(e=l[l.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})(),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,l)=>{var a,n,[c,i,s]=l,m=0;if(c.some((t=>0!==e[t]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(s)var o=s(r)}for(t&&t(l);m<c.length;m++)n=c[m],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(o)},l=globalThis.webpackChunk=globalThis.webpackChunk||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})(),r.O(void 0,[591],(()=>r(1202)));var c=r.O(void 0,[591],(()=>r(2322)));c=r.O(c)})();
//# sourceMappingURL=main.js.map