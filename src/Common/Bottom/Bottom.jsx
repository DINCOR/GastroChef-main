import { useState } from "react"
import classes from './Bottom.module.css'
import { Photo } from "../../file"
import { Link } from 'react-router-dom'


export default function Bottom() {
return (
    <>
        <footer>
            <div className={classes.MainBottom}>
                <div className={classes.MainBottomGde}> 
                    <div className={classes.BottomContent}>
                        <ul class={classes.menu}>
                            <li><a href="PageTree">Програмы питания</a></li>
                            <li><a href="AboutUs">О нас</a></li>
                            <li><a href="#" >Бизнес-ланчи</a></li>
                            <li><a href="MainPage1">Gastro Shop</a></li>
                            <li><a href="Blog">Блог</a></li>
                        </ul>
                    </div>
                    <div className={classes.BottomContent}>
                        <img src={Photo.LogoMaibHeader} alt="" />
                        <p>сервис здорового питания</p>
                    </div>
                    <div className={classes.BottomContent3}>
                        <p>Условия сотрудничества</p>
                        <p>FAQ</p>
                        <img src={Photo.socseti} alt="" />
                        <div className={classes.greensss}>
                        <p >+38 (068) 949 - 49 - 19</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
)
}