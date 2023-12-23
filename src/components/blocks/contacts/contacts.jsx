import React from "react";
import './contacts.css'
import contactsImage from "../../../assets/contacts.jpg";

export default function Conctacts(){
    return(
        <section className="contacts">
            <div>
                <h3 className="contacts__title">Контакти</h3>
                <ul className="contacts__list contacts-list contacts__list--location">
                    <li className="contacts-list__item">м. Київ, вул. Тростянецька, 5а</li>
                    <li className="contacts-list__item">м. Львів, вул. Миру, 56</li>
                    <li className="contacts-list__item">м. Одесса, вул. Київська, 55</li>
                </ul>
                <ul className="contacts__list contacts-list contacts__list--phone">
                    <li className="contacts-list__item">+ 380 (98) 567 87 99</li>
                    <li className="contacts-list__item">+ 380 (97) 678 22 01</li>
                    <li className="contacts-list__item">+ 380 (99) 688 02 01</li>
                </ul>
            </div>
            <div className="contacts__image">
                <img src={contactsImage} alt="" />
            </div>

        </section>
    )
}