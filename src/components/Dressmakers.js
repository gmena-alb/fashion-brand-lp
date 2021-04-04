import React, { useState } from 'react';
import woman1 from '../assets/woman1.jpg';
import woman2 from '../assets/woman2.jpg';

const Dressmakers = () => {
  return (
    <section id="dressmakers-section" className="section-dressmakers">
      <h1 className="title">who we are</h1>
      <div className="articles">
        <article>
          <img className="image" src={woman1}></img>
          <h3>Cristina de las Gafas</h3>
          <h4>Stylist</h4>
          <p>
            inspiration: cray schlitz la croix pickled mlkshk lomo twee
            distillery. Freegan farm-to-table tilde polaroid, intelligentsia
            yuccie shaman mixtape befo
          </p>
          <p>working on blabla since 2014</p>
        </article>
        <article>
          <img className="image" src={woman2}></img>
          <h3>Manolita Zapatos</h3>
          <h4>Fashion Buyer</h4>
          <p>
            inspiration: cray schlitz la croix pickled mlkshk lomo twee
            distillery. Freegan farm-to-table tilde polaroid, intelligentsia
            yuccie shaman mixtape befo
          </p>
          <p>working on blabla since 2014</p>
        </article>
      </div>
    </section>
  );
};

export default Dressmakers;
