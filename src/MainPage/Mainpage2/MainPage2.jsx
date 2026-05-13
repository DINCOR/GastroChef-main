import { useState } from "react"
import classes from './MainPage2.module.css'
import styles from "./MainPage2.module.css";
import { Photo } from "../../file"
import { Link } from 'react-router-dom'
import React from "react";


const FAQ_ITEMS = [
  'Как осуществляется доставка правильного питания?',
  'Можно ли менять время доставки\\место?',
  'Как и в чем приезжает еда?',
  'Когда Вы готовите?',
  'Какие продукты Вы используете?',
  'Я буду есть одно и то же?',
  'У меня аллергия и непереносимость определенных продуктов',
  'В какой очередности все есть?',
  'Можно ли замораживать программу?',
];

export default function OrderSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        <div className={styles.formBlock}>
          <h2 className={styles.formTitle}>Оформить заказ</h2>
          <p className={styles.formSubtitle}>
            Обсудите все детали заказа по телефону

            или сами укажите все подробности онлайн
          </p>

          <div className={styles.field}>
            <label className={`${styles.label} ${styles.labelValid}`}>Имя</label>
            <div className={styles.inputWrap}>
              <input className={styles.input} type="text" defaultValue="Иван" />
              <span className={`${styles.dot} ${styles.dotGreen}`} />
            </div>
          </div>

          <div className={styles.field}>
            <label className={`${styles.label} ${styles.labelError}`}>Номер телефона</label>
            <div className={styles.inputWrap}>
              <input className={styles.input} type="text" defaultValue="097214063 2" />
              <span className={`${styles.dot} ${styles.dotRed}`} />
            </div>
          </div>

          <div className={styles.checkboxes}>
            <label className={styles.checkboxRow}>
              <span className={`${styles.checkboxDot} ${styles.checkboxDotGreen}`} />
              <span className={styles.checkboxText}>Тест-день! Получить скидку -30%?</span>
            </label>
            <label className={styles.checkboxRow}>
              <span className={`${styles.checkboxDot} ${styles.checkboxDotGreen}`} />
              <span className={styles.checkboxText}>
                Согласен с <a className={styles.link} href="#">условиями сотрудничества</a>
              </span>
            </label>
          </div>

          <button className={`${styles.btn} ${styles.btnOutline}`}>Заказ по телефону</button>
          <div className={styles.or}>ИЛИ</div>
          <button className={`${styles.btn} ${styles.btnFilled}`}>Онлайн заказ</button>
        </div>

        <div className={styles.faqBlock}>
          <h2 className={styles.faqTitle}>Часто задаваемые вопросы</h2>
          <div className={styles.faqList}>
            {FAQ_ITEMS.map((q, i) => (
              <div className={styles.faqItem} key={i}>
                <span className={styles.faqText}>{q}</span>
                <span className={styles.faqArrow}>›</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}