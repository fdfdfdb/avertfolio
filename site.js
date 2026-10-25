const projects = [
  {
    id:"telegram-bots", type:"code", title:"Telegram-боты для городского канала", category:"Личный проект", period:"2026",
    short:"Два бота: один собирает новости от читателей, второй принимает обращения по рекламе и сотрудничеству.",
    tags:["Telegram Bot API","Cloudflare"], image:"assets/bots-profile.png",
    lead:"Два связанных инструмента для небольшого канала о Санкт-Петербурге.",
    features:["Бот новостей принимает сообщения читателей и показывает редактору очередь предложений.","Бот обратной связи разделяет рекламу, сотрудничество и другие обращения.","Редактор может отвечать автору, просматривать статистику и управлять очередью."],
    role:"Разработала двух ботов для канала: спроектировала диалоги и кнопки, написала обработку сообщений, очередь предложений и действия редактора. Подключила Telegram Bot API и Cloudflare, проверила отправку, ответы и работу разных веток диалога.",
    note:"Личный проект для небольшого канала; данных об активном массовом использовании пока нет.",
    gallery:[["assets/bots-profile.png","Бот обратной связи"],["assets/bots-flow.png","Выбор темы и отправка обращения"],["assets/bots-admin.png","Очередь предложений для редактора"]]
  },
  {
    id:"colour-study", type:"code", title:"paletter", category:"Личный проект", period:"2026",
    short:"Генератор палитр из фотографии: основные оттенки, сочетания и готовая карточка для скачивания.",
    tags:["HTML","CSS","JavaScript"], image:"assets/colour-study-interface.png",
    lead:"Одностраничный инструмент, который превращает фотографию в палитру и готовую визуальную карточку.",
    features:["Выделение от 2 до 12 оттенков из загруженной фотографии.","Замена любого оттенка цветом с фотографии при помощи пипетки.","Близкие по тону цвета, варианты сочетаний и экспорт PNG с исходным фото."],
    role:"Разработала генератор палитр на HTML, CSS и JavaScript: загрузку фотографии, выделение оттенков, замену цвета пипеткой, подбор сочетаний и экспорт PNG-карточки. Оформила интерфейс и адаптировала его под разные размеры экрана.",
    demo:"https://fdfdfdb.github.io/paletter/",
    gallery:[["assets/colour-study-interface.png","Генератор с загруженной фотографией"],["assets/colour-study-card.png","Скачиваемая карточка палитры"]]
  },
  {
    id:"loto", type:"code", title:"Английское лото", category:"Курсовой проект", period:"2025",
    short:"Игра для повторения английских слов с режимом лото, переводом карточек и результатами занятий.",
    tags:["C#","Windows Forms",".NET 8"], image:"assets/loto-board-new.png",
    lead:"Учебная игра для тренировки перевода английских слов в двух форматах.",
    features:["Режим лото с набором карточек и одной попыткой на каждую.","Режим перевода, словари и изображения к словам.","Результаты раундов и история занятий."],
    role:"Разработала игру на C# и Windows Forms: собрала два игровых режима, логику карточек и проверки ответов, работу со словами и изображениями, экраны результатов. Оформила интерфейс и прошла разные сценарии игрового раунда.",
    gallery:[["assets/loto-board-new.png","Режим лото"],["assets/loto-translation.png","Перевод карточки"],["assets/loto-game-new.png","Экран игры"],["assets/loto-round.png","Игровой раунд"],["assets/loto-login.png","Начальный экран"]]
  },
  {
    id:"newsletter", type:"code", title:"Система рассылки новостей", category:"Курсовой проект", period:"2025",
    short:"Приложение для учёта новостей и подписчиков и подготовки выпусков в базе SQL Server.",
    tags:["C#","Windows Forms","SQL Server"], image:"assets/newsletter-operations.png",
    lead:"Информационная система для работы с новостями, подписчиками и выпусками.",
    features:["Формы для пользователей, новостей и подписчиков.","Поиск, фильтрация, операции и запросы к SQL Server.","Создание выпуска и записей очереди; фактическая отправка писем не выполняется."],
    role:"Разработала приложение на C# и Windows Forms и структуру базы в SQL Server. Сделала формы входа, новостей и подписчиков, запросы, поиск и фильтрацию, создание выпусков и записей очереди. Проверила операции на демонстрационных данных.",
    gallery:[["assets/newsletter-operations.png","Добавление данных и создание выпуска"],["assets/newsletter-admin.png","Таблицы системы"],["assets/newsletter-queries.png","Запросы и фильтры"],["assets/newsletter-register.png","Регистрация"],["assets/newsletter-login.png","Вход в систему"]]
  },
  {
    id:"library", type:"code", title:"Библиотечная система", category:"Практика в колледже", period:"2026",
    short:"Учебный прототип для просмотра, поиска и фильтрации библиотечных данных.",
    tags:["C#","Windows Forms","SQL Server"], image:"assets/library-home.png",
    lead:"Прототип интерфейса библиотеки, созданный в рамках практики.",
    features:["Разделы читателей, каталога, выдач и отчётов.","Просмотр, поиск и фильтрация записей.","Подключение к локальной базе SQL Server и демонстрационные данные."],
    role:"Разработала прототип библиотечной системы на C# и Windows Forms: экраны авторизации, читателей, каталога, выдач и отчётов, поиск и фильтрацию записей. Подключила локальную базу SQL Server и подготовила демонстрационные данные. Часть команд в прототипе осталась без полной реализации.",
    note:"Операции выдачи, возврата и экспорта в исходном проекте показывают заглушки.",
    gallery:[["assets/library-home.png","Главный экран системы"],["assets/library-catalog.png","Каталог книг"],["assets/library-reports.png","Отчёты"],["assets/library-roles.png","Роли пользователей"],["assets/library-login.png","Авторизация"]]
  },
  {
    id:"minehelp", type:"code", title:"MineHelp", category:"Практика в колледже", period:"2024",
    short:"Многостраничный справочный сайт по Minecraft с навигацией, таблицами и формой обращения.",
    tags:["HTML","CSS","Веб-дизайн"], image:"assets/minehelp-home.png",
    lead:"Учебный сайт со справочной информацией по игре.",
    features:["Шесть страниц с общим стилем.","Навигация, таблицы, формы и изображения.","Вёрстка на HTML и CSS."],
    role:"Сверстала многостраничный справочный сайт на HTML и CSS: общий стиль, навигацию, таблицы с материалами и форму обращения. Подготовила страницы про крафт, зельеварение, зачарования и торговлю. Отдельного публичного демо сейчас нет.",
    gallery:[["assets/minehelp-home.png","Главная страница"],["assets/minehelp-news.png","Новости"],["assets/minehelp-crafts.png","Раздел крафтов"],["assets/minehelp-potions.png","Зельеварение"],["assets/minehelp-enchantments.png","Зачарования"],["assets/minehelp-trading.png","Торговля"],["assets/minehelp-support.png","Форма обращения"]]
  },
  {
    id:"design", type:"design", title:"Визуальные макеты", category:"Дизайн-эксперименты", period:"2025–2026",
    short:"Афиши, брошюры и материалы для учебных занятий: типографика, сетка и цвет.",
    tags:["Графика","Типографика","Макеты"], image:"assets/design-senior.png",
    lead:"Подборка графических работ для учебных и личных задач.",
    features:["Афиши образовательных событий.","Брошюры и материалы об онлайн-собеседовании.","Эксперименты с типографикой, цветом и композицией."],
    role:"Придумала композицию и собрала афиши, брошюры и учебные материалы: подбирала шрифты, цвет, изображения и иерархию текста. Пробовала разные форматы и способы уместить много информации без перегруза.",
    note:"Адреса, даты и контакты на некоторых учебных макетах условные.",
    gallery:[["assets/design-senior.png","Цифровые льготы"],["assets/design-interview-new.png","Брошюра об онлайн-собеседовании"],["assets/design-brochure-new.png","Брошюра"],["assets/design-checklist.png","Чек-лист для собеседования"],["assets/design-cloud-new.png","Афиша курса об облачных сервисах"],["assets/design-cyber-new.png","Афиша вебинара по безопасности"],["assets/design-card-new.png","Поздравительная открытка"]]
  }
];

const esc = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
const icon = name => `<span data-lucide="${name}" aria-hidden="true"></span><span class="icon-fallback" aria-hidden="true">${({"arrow-left":"←","arrow-right":"→","arrow-up-right":"↗"})[name] || "•"}</span>`;
const url = p => `project.html?id=${encodeURIComponent(p.id)}`;

function projectRow(p,i) {
  return `<article class="project-row" data-category="${p.type}"><a class="project-preview" href="${url(p)}" aria-label="Смотреть проект ${esc(p.title)}"><img src="${p.image}" alt="${esc(p.title)}" loading="lazy"><span class="project-preview-index">${String(i+1).padStart(2,"0")} / ${String(projects.length).padStart(2,"0")}</span></a><div class="project-row-text"><span class="project-type">${esc(p.category)} · ${esc(p.period)}</span><h2>${esc(p.title)}</h2><p>${esc(p.short)}</p><ul class="tag-list">${p.tags.map(t=>`<li>${esc(t)}</li>`).join("")}</ul><a class="text-link" href="${url(p)}">Смотреть проект ${icon("arrow-up-right")}</a></div></article>`;
}
function detail(p) {
  return `<section class="detail-head wrap"><a class="back-link" href="projects.html">${icon("arrow-left")} Все проекты</a><p class="section-kicker">${esc(p.category)} · ${esc(p.period)}</p><h1>${esc(p.title)}</h1><p class="lead">${esc(p.lead)}</p>${p.demo ? `<a class="button button-primary" href="${esc(p.demo)}">Открыть генератор ${icon("arrow-up-right")}</a>`:""}</section><section class="gallery-section wrap" aria-label="Изображения проекта"><div class="gallery-heading"><h2>Проект в кадре</h2><span class="slide-count" aria-live="polite"></span></div><div class="carousel"><button class="carousel-arrow" type="button" data-prev aria-label="Предыдущее изображение" title="Предыдущее изображение">${icon("arrow-left")}</button><button class="carousel-image" type="button" data-lightbox aria-label="Увеличить изображение"><img alt=""></button><button class="carousel-arrow" type="button" data-next aria-label="Следующее изображение" title="Следующее изображение">${icon("arrow-right")}</button></div><div class="carousel-caption" aria-live="polite"></div></section><section class="detail-info wrap"><div class="detail-meta"><span>Инструменты</span><strong>${p.tags.map(esc).join(" · ")}</strong></div><div class="detail-body"><div><h2>Моя работа</h2><p>${esc(p.role)}</p>${p.note ? `<p class="detail-note">${esc(p.note)}</p>`:""}</div><div><h2>Что внутри</h2><ol class="feature-list">${p.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ol></div></div></section><section class="contact-band"><div class="wrap contact-band-inner"><h2>Ещё работы</h2><a class="button button-primary" href="projects.html">Все проекты ${icon("arrow-up-right")}</a></div></section>`;
}
function setupMenu() {
  const button=document.querySelector(".menu-toggle"), nav=document.querySelector(".site-nav");
  if (!button || !nav) return;
  button.addEventListener("click",()=>{const open=nav.classList.toggle("open");button.setAttribute("aria-expanded",String(open));});
}
function setupLightbox() {
  const dialog=document.querySelector("#lightbox");
  if (!dialog) return;
  document.querySelectorAll("[data-lightbox]").forEach(button=>button.addEventListener("click",()=>{
    const image=button.querySelector("img");
    dialog.querySelector("img").src=image ? image.src : button.dataset.lightbox;
    dialog.querySelector("img").alt=image ? image.alt : button.dataset.caption || "Изображение";
    dialog.querySelector("p").textContent=image ? image.alt : button.dataset.caption || "";
    dialog.showModal();
  }));
  dialog.querySelector(".lightbox-close").addEventListener("click",()=>dialog.close());
  dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close();});
}
function setupCarousel(gallery) {
  const image=document.querySelector(".carousel-image img");
  if (!image || !gallery?.length) return;
  let current=0;
  const render=()=>{
    image.src=gallery[current][0]; image.alt=gallery[current][1];
    document.querySelector(".carousel-caption").textContent=gallery[current][1];
    document.querySelector(".slide-count").textContent=`${current+1} / ${gallery.length}`;
  };
  document.querySelector("[data-prev]").addEventListener("click",()=>{current=(current-1+gallery.length)%gallery.length;render();});
  document.querySelector("[data-next]").addEventListener("click",()=>{current=(current+1)%gallery.length;render();});
  document.addEventListener("keydown",event=>{
    if(document.querySelector("#lightbox")?.open)return;
    if(event.key==="ArrowLeft"){current=(current-1+gallery.length)%gallery.length;render();}
    if(event.key==="ArrowRight"){current=(current+1)%gallery.length;render();}
  });
  render();
}
function setupFilters() {
  document.querySelectorAll("[data-filter]").forEach(button=>button.addEventListener("click",()=>{
    document.querySelectorAll("[data-filter]").forEach(item=>{item.classList.toggle("active",item===button);item.setAttribute("aria-pressed",String(item===button));});
    document.querySelectorAll(".project-row").forEach(row=>row.hidden=button.dataset.filter!=="all"&&row.dataset.category!==button.dataset.filter);
  }));
}
document.addEventListener("DOMContentLoaded",()=>{
  setupMenu();
  const list=document.querySelector("#project-list");
  if(list){list.innerHTML=projects.map(projectRow).join("");setupFilters();}
  const container=document.querySelector("#project-detail");
  if(container){
    const p=projects.find(item=>item.id===new URLSearchParams(location.search).get("id"));
    if(p){container.innerHTML=detail(p);document.title=`${p.title} — Влада Аверьянова`;setupCarousel(p.gallery);}
    else container.innerHTML='<section class="page-head wrap"><h1>Проект не найден</h1><a class="text-link" href="projects.html">Все проекты</a></section>';
  }
  setupLightbox();
  if(window.lucide)window.lucide.createIcons();
});
