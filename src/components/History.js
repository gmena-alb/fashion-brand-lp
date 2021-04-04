import React, { useState } from 'react';
import women from '../assets/womenworking.jpg';
import boxes from '../assets/boxes.jpg';
import clothes from '../assets/clothes.jpg';

const History = () => {
  return (
    <section id="process-section" className="section-process">
      <h1 className="title">WHAT WE DO</h1>
      <div className="articles">
        <article className="article">
          <div className="description">
            <h4>WHATEVER</h4>
            <p>
              cray schlitz la croix pickled mlkshk lomo twee distillery. Freegan
              farm-to-table tilde polaroid, intelligentsia yuccie shaman mixtape
              before they sold out. Glossier readymade street art fashion axe
              ugh tofu mustache roof party snackwave master cleanse chartreuse.
            </p>
          </div>
          <img src={women}></img>
        </article>
        <article className="article">
          <img src={boxes}></img>
          <div className="description">
            <h4>WHATEVER</h4>
            <p>
              cray schlitz la croix pickled mlkshk lomo twee distillery. Freegan
              farm-to-table tilde polaroid, intelligentsia yuccie shaman mixtape
              before they sold out. Glossier readymade street art fashion axe
              ugh tofu mustache roof party snackwave master cleanse chartreuse.
            </p>
          </div>
        </article>
        <article className="article">
          <img src={clothes}></img>
          <div className="description">
            <h4>WHATEVER</h4>
            <p>
              cray schlitz la croix pickled mlkshk lomo twee distillery. Freegan
              farm-to-table tilde polaroid, intelligentsia yuccie shaman mixtape
              before they sold out. Glossier readymade street art fashion axe
              ugh tofu mustache roof party snackwave master cleanse chartreuse.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default History;
