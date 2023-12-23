import React from "react";
import './header.css'

import logoHealth from "../../../assets/health.svg";
import logoPerson from "../../../assets/person.svg";

export default function Header(){
    return (
        <header className="header">
            <h1 className="header__logo">U.Flat</h1>
            <nav className="header__nav nav">
                <li className="nav__item"><a className="nav__link" href="#">Про нас</a></li>
                <li className="nav__item"><a className="nav__link" href="#">Продаж</a></li>
                <li className="nav__item"><a className="nav__link" href="#">Оренда</a></li>
                <li className="nav__item"><a className="nav__link" href="#">Агенти</a></li>
                <li className="nav__item"><a className="nav__link" href="#">Власникам</a></li>
            </nav>
            <div className="header__buttons">
                <p>Укр</p>
                <img src={logoHealth} alt="" />
                <img src={logoPerson} alt="" />
            </div>
        </header>
    )
}