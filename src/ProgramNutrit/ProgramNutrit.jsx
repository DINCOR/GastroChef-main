import { useState } from "react"
import classes from './ProgramNutrit.module.css'
import { Photo } from "../file"
import { Link } from 'react-router-dom'

const relatedArticles = [
    { 
      id: 1, 
      title: 'Как поменять свои пищевые привычки?', 
      date: '25.05.2020',
      imageUrl: 'src/assets/1Z5A5988 (1).png' 
    },
    { 
      id: 2, 
      title: 'Как поменять свои пищевые привычки?', 
      date: '25.05.2020',
      imageUrl: '/src/assets/11122.png' 
    },
    { 
      id: 3, 
      title: 'Как поменять свои пищевые привычки?', 
      date: '25.05.2020',
      imageUrl: '/src/assets/11123.png' 
    },
  ];


export default function ProgramNutrit() {
return (
<div className={classes.pageContainer}>
    <section className={classes.articleContent}>
      <div className={classes.heroImagePlaceholder}>
        <img src="src\assets\1Z5A5988 (1).png" alt="" />
      </div>

      
    
        <section className={classes.articleHeader}>
          <div className={classes.titleRow}>
            <div className={classes.titleLeft}>
              <button className={classes.iconButton} aria-label="Назад">&lt;</button>
              <h1 className={classes.title}>Как поменять свои пищевые привычки?</h1>
            </div>
            <div className={classes.shareBlock}>
              <span className={classes.shareText}>Поделиться:</span>
              <img src="src/assets/Mask Group (1).png" ></img>
              <img src="src/assets/Mask Group (2).png" ></img>
            </div>
          </div>
          <div className={classes.dateBlock}>
            <span className={classes.date}>25.05.2020</span>
          </div>
        </section>

        <div className={classes.textContent}>
          <p>Привычка — это неосознанное, то, что мы делаем на автомате.</p>
          <p>Например, это такая обыденная вещь как чистка зубов утром или пристегнуться, садясь в автомобиль.</p>
          <p>Большинство из этих привычек мы не осознаем. И в этом кроется как огромная польза, так и главная опасность: то, что мы делаем неосознанно, очень легко и просто изменить, эту самую привычку ничего не стоит.</p>
          <p>В какой момент наш мозг выруливает и снимает ногу с тормоза. Он просто берет и делает. Пищевые привычки действуют так же.</p>

   
          <div className={classes.inlineImagePlaceholder}>
            <img src="/src/assets/11122.png" alt="" />
          </div>

          <p>Их трудно перевести на осознанность. И если вы считаете, что для этого нужна огромная сила воли или сверхстрогий самоконтроль, то вовсе нет. У меня для вас есть несколько простых и постепенных шагов, которые помогут вам изменить свои пищевые привычки без лишений и самоограничений.</p>
          
          <p>Первое. С чего стоит начать — это прекратить покупать вредные продукты. Запомните: то, чего нет, того и не съешь. В свою очередь, ставим на стол на самое видное место тарелочку с ломтиками моркови, сухофруктами и орешками.</p>
          
          <p>Второе — это создайте себе препятствия на пути к вредностям — ходите домой другой дорогой, проходите мимо отдела сладостей или офисной кухни, если ощущаете манящий запах выпечки — просто понюхайте запястье, на которое утром нанесли духи.</p>
          
          <p>Третье и очень важное правило — полезные продукты в вашей квартире и на работе должны стать доступными. Нарезанные соломкой свежая морковь, мытые яблоки и мандарины на столе, сделайте заготовку из нарезанных листьев салатов в холодильнике, заранее очистите овощи и нарежьте ломтиками.</p>

          <div className={classes.inlineImagePlaceholder}>
            <img src="/src/assets/11123.png"></img>
          </div>

          <p>Четвертое — используйте посуду для еды меньшего размера. Да, да, придется отказаться от любимых больших мисок/тарелок, но оно того стоит. Таким не хитрым действом (ведь многие исследованиями доказывают, что мы делаем выводы о своем насыщении, основываясь не на своих чувствах сытости, а видя, что тарелка уже пуста.</p>
          
          <p>Пятое — всегда начинайте еду с овощей.</p>
          
          <p>Очень рекомендую завести дневник питания (хотя бы на одну-две недели). Понимание что, как и сколько — очень важно будет для вас.</p>
          
          <p>И, конечно же, для смены пищевых привычек очень рекомендуем попробовать рационы здорового питания GastroChef.</p>
        </div>

        <div className={classes.footerActions}>
          <button className={classes.backButtonText}>&lt; Назад</button>
          <button className={classes.ctaButton}>Программы питания</button>
          <div className={classes.shareBlock}>
            <span className={classes.shareText}>Поделиться:</span>
            <img src="src/assets/Mask Group (1).png" ></img>
            <img src="src/assets/Mask Group (2).png" ></img>
          </div>
        </div>
      </section>

      <section className={classes.relatedSection}>
        <h2 className={classes.relatedTitle}>Вас может заинтересовать:</h2>
        <div className={classes.cardsGrid}>



          
          {relatedArticles.map((article) => (
            <div key={article.id} className={classes.card}>
              <div className={classes.cardImageWrapper}>
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className={classes.cardImage} 
                />
              </div>

              <h3 className={classes.cardTitle}>{article.title}</h3>
              <div className={classes.cardFooter}>
                <span className={classes.date}>{article.date}</span>
                <button className={classes.moreButton}>Подробнее &gt;</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
