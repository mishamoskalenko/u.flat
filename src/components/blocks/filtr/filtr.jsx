import React from "react";
import './filtr.css'

export default function Filtr() {
    return (
        <section className="filtr">
            <h2 className="filtr__title">Тiльки премiальна нерухомiсть</h2>
            <div className="filtr__search filtr-search">
                <select className="filtr-search__select filtr-search__select-trade" name="trade">
                    <option value="sell">Продаж</option>
                    <option value="buy">Купівля</option>
                </select>
                <select className="filtr-search__select filtr-search__select-flat" name="type">
                    <option value="all">Всі об'єкти</option>
                    <option value="new">Новобуд</option>
                    <option value="old">Вторинне</option>
                </select>
                <button className="filtr-search__settings"></button>
                <button className="filtr-search__button">Знайти</button>
            </div>
        </section>
    )
}