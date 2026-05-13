import { useState } from "react"
import classes from './Blog.module.css'
import { Photo } from "../file"
import { Link } from 'react-router-dom'
const Card = () => {
  return (
    <div className={classes.card}>
      <img src="src\assets\DSC09021 (1).png"
        className={classes.cardImage}
      />

      <h3>Имбирные конфеты с апельсином</h3>

      <p className={classes.desc}>
        Состав: Подсушенный миндаль, медовые финики, пряный имбирь,
        апельсин, миндальные лепестки. Не содержит сахара!
      </p>

      <p className={classes.nutrition}>
        Белки - 8 &nbsp;&nbsp; Жиры - 20 &nbsp;&nbsp; Углеводы - 36 &nbsp;&nbsp; 346 ккал
      </p>

      <div className={classes.cardBottom}>
        <div className={classes.counter}>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <span className={classes.price}>26 грн / 1 шт</span>
      </div>
    </div>
  );
};

export default function Blog() {
  return (
    <div className={classes.page}>
      <section className={classes.hero}>
        <div className={classes.overlay}>
          <h1>Полезные конфеты</h1>
          <p>
            Представляем сладкую коллекцию полезных конфет. Созданы с любовью
            и изготовлены из натуральных продуктов без добавления сахара.
          </p>
        </div>
      </section>

      
      <div className={classes.actions}>
        <button className={classes.back}>← Назад</button>
        <button className={classes.orderBtn}>Оформить заказ</button>
      </div>

      <div className={classes.grid}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <section className={classes.blog}>
        <h2>Фото блог</h2>

        <div className={classes.blogGrid}>
          <img src="src\assets\1Z5A6413.png" alt="" />
          <img src="src\assets\1Z5A6346.png" alt="" />
          <img src="src\assets\1Z5A6181.png" alt="" />
          <img src="src\assets\1Z5A6526.png" alt="" />
          <img src="src\assets\1Z5A6084.png" alt="" />
        </div>
      </section>
    </div>
  );
}