import React from "react";
import './about.css'
import aboutImage from "../../../assets/about.jpg";

export default function About(){
    return(
        <section className="about">
            <div className="about__description about-text">
                <h3 className="about-text__title">Про нас</h3>
                <p className="about-text__description">Ласкаво просимо до нашого агентства нерухомості "U.Flat" - місце, де ваші мрії про свій ідеальний будинок стають реальністю!<br></br>Ми - команда професіоналів, які цінують кожного клієнта 
                та прагнуть зробити процес купівлі, продажу чи оренди нерухомості максимально комфортним 
                та безтурботним для вас. Наш досвід та знання ринку нерухомості дозволяють нам надавати високоякісні послуги та завжди бути на крок попереду у динамічній сфері нерухомості.</p>
            </div>
            <div className="about__image">
                <img src={aboutImage} alt="" />
            </div>

        </section>
    )
}