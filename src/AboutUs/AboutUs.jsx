import { useState } from "react"
import classes from './AboutUs.module.css'
import { Photo } from "../file"
import { Link } from 'react-router-dom'


export default function AboutUs() {
return (
<>
    <div className={classes.LeftMenu}>
        <div className={classes.LeftMenuCircle}><img src="src\assets\Ккал.png" alt="" /></div>
        <div className={classes.LeftMenuCircle}><img src="src\assets\fish_1.png" alt="" /></div>
        <div className={classes.LeftMenuCircle}><img src="src\assets\carrot.png" alt="" /></div>
        <div className={classes.LeftMenuCircle}><img src="src\assets\bottle.png" alt="" /></div>
        <div className={classes.LeftMenuCircle}><img src="src\assets\meat.png" alt="" /></div>
        <div className={classes.LeftMenuCircle}><img src="src\assets\Group 233.png" alt="" /></div>
    </div>
<section className={classes.AboutUsOne}>

        <div className={classes.LeftMain}>
            <div className={classes.LeftMainGde}>
                <div className={classes.LeftTxtgde}>
                    Здравствуйте! Меня зовут{' '}
                    <span className={classes.greenText}>Кобьлинский Кирилл</span>
                    {', и я являюсь основателем '}
                    <span className={classes.greenText}>GastroChef</span>
                </div>
                <div>
                    <p  className={classes.LeftTxtgde2}>
                        Я Мастер Спорта Украины по тяжёлой атлетике,
                        а так же состоял в составе сборной Украины. 
                    </p>
                </div>
                <div>
                    <p  className={classes.LeftTxtgde3}>
                        У меня высшее образование национального университета физического воспитания 
                        и спорта Украины (НФВСУ), а так же в 
                        прошлом я профессиональный фитнес тренер!  
                    </p>
                </div>
                <div>
                    <p  className={classes.LeftTxtgde4}>
                        И я хочу Вам рассказать побольше о GastroChef.
                    </p>
                </div>

            </div>
        </div>

        <div className={classes.RightMain}>
            <div className={classes.RightRight}>
                <div className={classes.circle}>
                    <img src="/src/assets/KirilFartuk.png" alt="" />
                </div> 
            </div>
        </div>
</section>
<section className={classes.AboutUsTwo}>
    <div className={classes.BigTwo}>
        <div className={classes.Bag}><img src="src\assets\Group 234.png" alt="" /></div>
        <div className={classes.HistoryTxt}>
            <p className={classes.HistoryTop}>История GastroChef началась более 6-ти лет назад... </p>
                <div className={classes.HistoryMidGde}>
                    <p className={classes.HistoryMid}>Долгое время я наблюдал как людям не хватает времени 
                    для правильного и здорового питания, какое правильного, просто питания регулярного.</p>
                    <p className={classes.HistoryMid}>Они могли позавтракать, в обед съесть что-то типа шаурмы или снэка, а вечером в силу голода наесться, что плохо сказывалось на их обмене веществ и естественно здоровье. </p>
                    <p className={classes.HistoryMid}>Желание хоть как-то изменить ситуацию и помочь людям не давало мне покоя и я решил открыть доставку 
                    еды правильного питания. </p>
                    <p className={classes.HistoryMid}>Я со своим 17-и летним опытом в спорте 
                    и проф. образованием, вместе с диетологом разработали рационы правильного питания 
                    с подсчетом калорий (КБЖУ).
                    </p>
                </div>
            <p className={classes.HistoryBot}>Знакомтесь! Команда GastroChef!</p>
        </div>
    </div>
</section >

<section className={classes.AboutUsImg}>
    <img src="src\assets\image 10.png" alt="" />
</section>

<section className={classes.AboutUsTree}>
    <div className={classes.BigTwotree}>
        
        <div className={classes.HistoryTxttree}>
            <p className={classes.HistoryToptree}>«GastroChef - легко для занятых»
</p>
                <div className={classes.HistoryMidGdetree}>
                    <p className={classes.HistoryMidtree}>GastroChef - правильное питание с доставкой на дом, создано что бы облегчить жизнь, освободить время от готовки, от ненужных перекусов, фастфудов и дать возможность чувствовать себя легко и полным энергии, сил, для новых свершений и побед.</p>
                    <p className={classes.HistoryMidtree}>Все продукты для приготовления правильного питания закупаются только с сертификатами, а рационы готовятся на современной и безопасной кухне ночью перед приездом к Вам!</p>
                    <p className={classes.HistoryBottreebolt}>Друзья, если у Вас остались вопросы Вы с легкостью можете позвонить нам или написать мне лично в Инстаграм или Фейсбук.
                    </p>
                </div>
            <p className={classes.HistoryBottree}>С уважением, Кобылинский Кирилл.</p>

            <div className={classes.BotSocSety}>
                <img src="src\assets\Group 236.png" alt="" />
                <p>- Я в социальных сетях</p>
            </div>
        </div>
        <div className={classes.Bagtree}><img src="src\assets\Group 235.png" alt="" /></div>
    </div>
</section >
</>
)
}