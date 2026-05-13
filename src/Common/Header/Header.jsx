import { useState,useRef,useEffect } from "react"
import classes from './Header.module.css'
import { Photo } from "../../file"
import {Link} from 'react-router-dom'



export default function Header() {
    return(
    <>
    <header>
        <div className={classes.HeaderContainerMain1}>
            <div className={classes.LogoRound}>
                <img src={Photo.LogoMaibHeader} alt="" />
            </div>
            
            <div className={classes.LvlColumn}>

                <div className={classes.LvlRow}>
                <div className={classes.HeaderCenter}>
                    <ul class={classes.menu}>
                        <li><a className={classes.menuactivity} href="ProgramNutrit">Програмы питания</a></li>
                        <li><a className={classes.menuactivity} href="#">Бизнес-ланчи</a></li>
                        <li><a className={classes.menuactivity} href="MainPage1">Gastro Shop</a></li>
                        <li><a className={classes.menuactivity} href="AboutUs">О нас</a></li>
                        <li><a className={classes.menuactivity} href="Blog">Блог</a></li>
                    </ul>
                </div>
                <div className={classes.Number}> 
                    <p>+38 (068) 949 - 49 -19</p>
                </div>
                </div>

                <div className={classes.HeaderBot}>
                    <div className={classes.HeaderBotGde}>
                        <button className={classes.LogoRound3}>RU</button>
                        <button className={classes.LogoRound2}>UA</button>
                        <button className={classes.LogoRound2}>EN</button>
                    </div>
                </div>
            </div>


        </div>
    </header>
    </>
    )
}
