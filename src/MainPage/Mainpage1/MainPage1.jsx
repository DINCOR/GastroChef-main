import classes from './MainPage1.module.css';
import { Link } from 'react-router-dom';

// ─── Данные ───────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  'Как осуществляется доставка правильного питания?',
  'Можно ли менять время доставки/место?',
  'Как и в чем приезжает еда?',
  'Когда Вы готовите?',
  'Какие продукты Вы используете?',
  'Я буду есть одно и то же?',
  'У меня аллергия и непереносимость определенных продуктов',
  'В какой очередности всё есть?',
  'Можно ли замораживать программу?',
];

const LEFT_MENU_ICONS = [
  { src: '/src/assets/Ккал.png',        alt: 'Калории'  },
  { src: '/src/assets/fish_1.png',      alt: 'Рыба'     },
  { src: '/src/assets/carrot.png',      alt: 'Морковь'  },
  { src: '/src/assets/bottle.png',      alt: 'Бутылка'  },
  { src: '/src/assets/meat.png',        alt: 'Мясо'     },
  { src: '/src/assets/Group 233.png',   alt: 'Группа'   },
];

// ─── Компонент ────────────────────────────────────────────────────────────────

export default function MainPage1() {
  return (
    <>
      {/* Левое боковое меню */}
      <div className={classes.LeftMenu}>
        {LEFT_MENU_ICONS.map(({ src, alt }) => (
          <div key={src} className={classes.LeftMenuCircle}>
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>

      {/* Hero-секция */}
      <main className={classes.Main}>
        <section className={classes.MainGde}>
          <div className={classes.conteiner2}>

            {/* Левая часть — текст и кнопка */}
            <div className={classes.conteiner21}>
              <div className={classes.conteiner21text}>
                <div className={classes.detoxtext}>
                  Detox программа –{' '}
                  <span className={classes.greendetox}>вкусное очищение</span>{' '}
                  организма
                </div>
                <p className={classes.butilka}>
                  8 бутылочек <span className={classes.gren}>натуральных</span> смузи и фрешей.
                </p>
              </div>

              <div className={classes.conteiner211}>
                <button>Заказать</button>
                <div className={classes.conteiner212}>
                  <p>Пробный день всего:</p>
                  <p className={classes.conteiner212Green}>427 грн</p>
                </div>
              </div>
            </div>

            {/* Правая часть — картинка */}
            <div className={classes.conteiner22}>
              <div className={classes.avokado}>
                <img src="/src/assets/AvaCado.png" alt="AvoCado" />
              </div>
              <div className={classes.conteiner22Round} />
            </div>

          </div>
        </section>
      </main>

      <section className={classes.Fintesmain}>
        <div className={classes.infomarketing}>
          <div className={classes.card1}>
            <img src="/src/assets/imgcard1.png" alt="" />
            <p className={classes.card1text1}>Бережём природу. Эко-тара и проборы.</p>
          </div>
          <div className={classes.card2}>
            <img src="/src/assets/imgcard2.png" alt="" />
            <p className={classes.card2text2}>28 дней без повторения, более 300 блюд!</p>
          </div>
          <div className={classes.card3}>
            <img src="/src/assets/imgcard3.png" alt="" />
            <p className={classes.card3text3}>Бесплатно заменяем блюда и ингредиенты.</p>
          </div>
          <div className={classes.card4}>
            <img src="/src/assets/imgcard4.png" alt="" />
            <p className={classes.card4text4}>Готовим ночью, упаковываем и отправляем Вам!</p>
          </div>
          <div className={classes.card5}>
            <img src="/src/assets/imgcard5.png" alt="" />
            <p className={classes.card5text5}>Ежедневная удобная и бесплатная доставка с 6:00 до 10:00</p>
          </div>
          <div className={classes.card6}>
            <img src="/src/assets/imgcard6.png" alt="" />
            <p className={classes.card6text6}>Сохраняем Вашу энергию и до 14 часов в неделю освобождая от готовки!</p>
          </div>
        </div>

        <div className={classes.buttons}>
          <button className={classes.grenbtnpit}>
            <p>Программы питания</p>
          </button>
          <button className={classes.graybtnpit}>
            <p>Специальные программы</p>
          </button>
        </div>

        <div className={classes.categoryprogram}>
          <div className={classes.cat1}>
            <p>EXPRESS FIT</p>
            <p className={classes.cattext}>800 ккал</p>
          </div>
          <div className={classes.cat2}>
            <p>SLIM</p>
            <p className={classes.cattext}>1000 ккал</p>
          </div>
          <div className={classes.cat3}>
            <p>FITNESS</p>
            <p className={classes.cattext}>1300 ккал</p>
          </div>
          <div className={classes.cat4}>
            <p>BALANCE</p>
            <p className={classes.cattext}>1600 ккал</p>
          </div>
          <div className={classes.cat5}>
            <p>BALANCE+</p>
            <p className={classes.cattext}>1800 ккал</p>
          </div>
          <div className={classes.cat6}>
            <p>STRONG</p>
            <p className={classes.cattext}>2000 ккал</p>
          </div>
          <div className={classes.cat7}>
            <p>MAXI FIT</p>
            <p className={classes.cattext}>2400 ккал</p>
          </div>
        </div>

        <div className={classes.programcontent}>
          <div className={classes.GreencardFitness}>
            <div className={classes.GreencardFitnessdiv}>
              <span className={classes.grencardtext1}>FITNESS</span>
              <span className={classes.grencardtext2}>1300 ккал</span>
            </div>
            <p className={classes.greencardtext3}>Программа здорового питания Express Fit. Идеально для: похудения в кратчайшие сроки, повышения энергии и сил, снижения веса при сидячем образе жизни.</p>

            <div className={classes.priceList}>
              <div className={classes.priceRow}>
                <span className={classes.priceLabel}>Тестовый день</span>
                <span className={classes.oldPrice}>510 грн</span>
                <span className={classes.currentPrice}>357 грн</span>
              </div>
              <div className={classes.priceRow}>
                <span className={classes.priceLabel}>1 день</span>
                <span className={classes.oldPrice}></span>
                <span className={classes.currentPrice}>510 грн</span>
              </div>
              <div className={classes.priceRow}>
                <span className={classes.priceLabel}>от 7 дней</span>
                <span className={classes.oldPrice}>510 грн</span>
                <span className={classes.currentPrice}>490 грн</span>
              </div>
              <div className={classes.priceRow}>
                <span className={classes.priceLabel}>от 14 дней</span>
                <span className={classes.oldPrice}>510 грн</span>
                <span className={classes.currentPrice}>470 грн</span>
              </div>
              <div className={classes.priceRow}>
                <span className={classes.priceLabel}>от 30 дней</span>
                <span className={classes.oldPrice}>510 грн</span>
                <span className={classes.currentPrice}>445 грн</span>
              </div>
              <div className={classes.priceRow}>
                <span className={classes.priceLabel}>Завтрак и ужин</span>
                <span className={classes.oldPriceNone}>-15%</span>
                <span className={classes.currentPrice}>433 грн</span>
              </div>
            </div>
          </div>

          {/* rightside оборачивает и calendary, и mealSchedule */}
          <div className={classes.rightside}>
            <div className={classes.calendary}>
              <div className={classes.calendarytext}>
                <p className={classes.cale1}>ПН</p>
                <p className={classes.cale2}>ВТ</p>
                <p className={classes.cale3}>СР</p>
                <p className={classes.cale4}>ЧТ</p>
                <p className={classes.cale5}>ПТ</p>
                <p className={classes.cale6}>СБ</p>
                <p className={classes.cale7}>ВС</p>
              </div>
            </div>

            <div className={classes.mealSchedule}>
              {/* Завтрак */}
              <div className={classes.scheduleItem}>
                <div className={classes.mealMeta}>
                  <p className={classes.mealTitle}>Завтрак</p>
                  <p className={classes.mealTime}>7:00 - 9:00</p>
                </div>
                <div className={classes.mealDishes}>
                  <p>- Фриттата с сыром и кабачками</p>
                </div>
                <div className={classes.mealWeights}>
                  <p>170гр</p>
                </div>
              </div>

              {/* 2-й завтрак */}
              <div className={classes.scheduleItem}>
                <div className={classes.mealMeta}>
                  <p className={classes.mealTitle}>2-й завтрак</p>
                  <p className={classes.mealTime}>10:00 - 12:00</p>
                </div>
                <div className={classes.mealDishes}>
                  <p>- Фермерский йогурт</p>
                  <p>- Полезное печенье из сухофруктов и орехов</p>
                </div>
                <div className={classes.mealWeights}>
                  <p>200гр</p>
                  <p>2 шт</p>
                </div>
              </div>

              {/* Обед */}
              <div className={classes.scheduleItem}>
                <div className={classes.mealMeta}>
                  <p className={classes.mealTitle}>Обед</p>
                  <p className={classes.mealTime}>13:00 - 15:00</p>
                </div>
                <div className={classes.mealDishes}>
                  <p>- Люля-кебаб из индейки</p>
                  <p>- Летний салат с маслинами и сыром</p>
                </div>
                <div className={classes.mealWeights}>
                  <p>100гр</p>
                  <p>100гр</p>
                </div>
              </div>

              {/* Полдник */}
              <div className={classes.scheduleItem}>
                <div className={classes.mealMeta}>
                  <p className={classes.mealTitle}>Полдник</p>
                  <p className={classes.mealTime}>16:00 - 17:30</p>
                </div>
                <div className={classes.mealDishes}>
                  <p>- Творожное суфле с какао и вишней</p>
                </div>
                <div className={classes.mealWeights}>
                  <p>100гр</p>
                </div>
              </div>

              {/* Ужин */}
              <div className={classes.scheduleItem}>
                <div className={classes.mealMeta}>
                  <p className={classes.mealTitle}>Ужин</p>
                  <p className={classes.mealTime}>19:00 - 20:00</p>
                </div>
                <div className={classes.mealDishes}>
                  <p>- Рыбный терин</p>
                  <p>- Овощи гриль</p>
                </div>
                <div className={classes.mealWeights}>
                  <p>100гр</p>
                  <p>150гр</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className={classes.wallphoto}>
        <div className={classes.titlephoto}>
          <span className={classes.titletext}>Фото блюд</span>
        </div>
        <div className={classes.photoscroll}>
          <img className={classes.photoscroll1} src="/src/assets/1Z5A6121.png" alt="" />
          <img className={classes.photoscroll1} src="/src/assets/1Z5A6413.png" alt="" />
          <img className={classes.photoscroll1} src="/src/assets/1Z5A6181.png" alt="" />
          <img className={classes.photoscroll1} src="/src/assets/1Z5A6526.png" alt="" />
          <img className={classes.photoscroll1} src="/src/assets/1Z5A6346.png" alt="" />
          <img className={classes.photoscroll1} src="/src/assets/1Z5A6084.png" alt="" />
        </div>
      </section>

      {/* Секция — Оформить заказ + FAQ */}
      <section className={classes.orderFaqSection}>
        <div className={classes.orderFaqContainer}>

          {/* Левая колонка — форма */}
          <div className={classes.formCol}>
            <p className={classes.formTitle}>Оформить заказ</p>
            <p className={classes.formSubtitle}>
              Обсудите все детали заказа по телефону<br />
              или сами укажите все подробности онлайн
            </p>

            <div className={classes.fieldGroup}>
              <p className={classes.fieldLabelGreen}>Имя</p>
              <div className={classes.inputWrapper}>
                <input className={classes.input} defaultValue='Иван' />
                <span className={classes.inputDotGreen} />
              </div>
            </div>

            <div className={classes.fieldGroup}>
              <p className={classes.fieldLabelRed}>Номер телефона</p>
              <div className={classes.inputWrapper}>
                <input className={classes.input} defaultValue='097214063 2' />
                <span className={classes.inputDotRed} />
              </div>
            </div>

            <div className={classes.checkboxGroup}>
              <div className={classes.checkboxRow}>
                <span className={classes.checkDotGreen} />
                <p className={classes.checkLabel}>Тест-день! Получить скидку -30%?</p>
              </div>
              <div className={classes.checkboxRow}>
                <span className={classes.checkDotGreen} />
                <p className={classes.checkLabel}>
                  Согласен с <span className={classes.checkLink}>условиями сотрудничества</span>
                </p>
              </div>
            </div>

            <button className={classes.btnOutline}>Заказ по телефону</button>
            <p className={classes.orDivider}>ИЛИ</p>
            <button className={classes.btnFilled}>Онлайн заказ</button>
          </div>

          {/* Правая колонка — FAQ */}
          <div className={classes.faqCol}>
            <p className={classes.faqTitle}>Часто задаваемые вопросы</p>
            <div className={classes.faqList}>
              {FAQ_ITEMS.map((question, i) => (
                <div key={i} className={classes.faqItem}>
                  <span className={classes.faqText}>{question}</span>
                  <span className={classes.faqArrow}>›</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}