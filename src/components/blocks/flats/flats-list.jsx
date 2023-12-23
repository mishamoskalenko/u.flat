/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import flatData from "../../../data/flats-data"
import FlatCard from "../../blocks/flats/flats";
import './flats-list.css'


const flatCards = flatData.map((flatData) => {
    return (
        <section className="flats-list" key={flatData.id}>
            <FlatCard data={flatData}/>
        </section>
    )
  });


export default function FlatsList() {
    return (
        <div className="flats-list">
            <h2 className="flats-list__title">Квартири Києва</h2>
            <div className="flats__list-cards">
                {flatCards}
            </div>
        </div>
    )
}