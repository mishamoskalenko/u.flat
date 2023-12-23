/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import AgentsData from "../../../data/agents-data"
import AgentsCard from "../../blocks/agents/agents";
import './agents-list.css'


const agentsCards = AgentsData.map((AgentsData) => {
    return (
        <section className="flats-list" key={AgentsData.id}>
            <AgentsCard data={AgentsData}/>
        </section>
    )
  });


export default function AgentsList() {
    return (
        <div className="agents-list">
            <div className="agents-list__group">
                <h2 className="agents-list__title">Наші агенти</h2>
                <p className="agents-list__description">
                    Ми дбаємо про те, щоб ви купували тільки перевірене<br></br>у перевірених. Тому хочемо порекомендувати вам своїх<br></br>найкращих агентів.
                </p>
            </div>
            <p className="agents-list__more">Дивитись більше</p>
            <div className="agents__list-cards">
                {agentsCards}
            </div>
        </div>
    )
}