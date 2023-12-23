/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import NewFlatData from "../../../data/new-flats-data"
import NewFlatCard from "../../blocks/new-flats/new-flats";
import './new-flats-list.css'

const NewflatCards = NewFlatData.map((NewFlatData) => {
    return (
        <section className="flats-list" key={NewFlatData.id}>
            <NewFlatCard data={NewFlatData}/>
        </section>
    )
  });


export default function NewFlatsList() {
    return (
        <div className="flats-list">
            <h2 className="flats-list__title">Новобудови Києва</h2>
            <div className="flats__list-cards">
                {NewflatCards}
            </div>
        </div>
    )
}