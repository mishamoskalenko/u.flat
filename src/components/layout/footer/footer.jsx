import React from "react";
import './footer.css'

import logoHealth from "../../../assets/health.svg";
import logoPerson from "../../../assets/person.svg";

export default function Footer(){
    return (
        <footer className="footer">
            <p className="footer__logo">U.Flat</p>
            <div className="footer__company footer-company">
                <p className="footer-company__title">Компанія</p>
                <ul className="footer-company__list footer-company-list">
                    <li className="footer-company__list footer-company-list__item">Про нас</li>
                    <li className="footer-company__list footer-company-list__item">Власникам</li>
                </ul>
            </div>
            <div className="footer__category footer-category">
                <p className="footer-category__title">Категорії нерухомостей</p>
                <div className="footer-category__group">
                    <ul className="footer-category__list footer-category-list">
                        <li className="footer-category__list footer-category-list__item">Продаж квартир</li>
                        <li className="footer-category__list footer-category-list__item">Продаж будинків</li>
                        <li className="footer-category__list footer-category-list__item">Продаж комерційних<br></br>приміщень</li>
                    </ul>
                    <ul className="footer-category__list footer-category-list">
                        <li className="footer-category__list footer-category-list__item">Оренда квартир</li>
                        <li className="footer-category__list footer-category-list__item">Оренда будинків</li>
                        <li className="footer-category__list footer-category-list__item">Оренда комерційних<br></br>приміщень</li>
                    </ul>
                </div>
            </div>
            <div className="footer__contacts footer-contacts">
                <p className="footer-contacts__title">Контакти</p>
                <ul className="footer-contacts__list footer-contacts-list footer-contacts__list--location">
                    <li className="footer-contacts__list footer-contacts-list__item">м. Київ, вул. Тростянецька, 5а</li>
                    <li className="footer-contacts__list footer-contacts-list__item">м. Львів, вул. Миру, 56</li>
                    <li className="footer-contacts__list footer-contacts-list__item">м. Одесса, вул. Київська, 55</li>
                </ul>
                <ul className="footer-contacts__list footer-contacts-list footer-contacts__list-phone">
                    <li className="footer-contacts__list footer-contacts-list__item">+ 380 (98) 567 87 99</li>
                    <li className="footer-contacts__list footer-contacts-list__item">+ 380 (97) 678 22 01</li>
                    <li className="footer-contacts__list footer-contacts-list__item">+ 380 (99) 688 02 01</li>
                </ul>
            </div>
        </footer>
    )
}