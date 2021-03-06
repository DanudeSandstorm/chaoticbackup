import React from 'react';
import API from '../../SpreadsheetData';
import { observer, inject } from 'mobx-react';
import { Rarity, Unique, Name, Ability, BattlegearIcon } from '../../Snippets';

@inject((stores, props, context) => props) @observer
export default class Battlegear extends React.Component {

  render() {
    const { card } = this.props;

    if (this.props.ext == false) return (
      <div className="card battlegear">
        <img className="thumb" style={{ float: 'left' }} src={API.base_image + (card.gsx$thumb||API.thumb_missing)} onClick={() => this.props.setImage(API.cardImage(card))} />
        <div className="left">
          <Name name={card.gsx$name} /><br />
          <Rarity set={card.gsx$set} rarity={card.gsx$rarity} /><br />
          <span><BattlegearIcon /> Battlegear{card.gsx$types.length > 0 ? " - " + card.gsx$types : null}</span>
        </div>
        <div className="right" >
          <Ability ability={card.gsx$ability} />
          <Unique data={{ unique: card.gsx$unique, loyal: card.gsx$loyal, legendary: card.gsx$legendary }} />
          <span className="flavortext">{card.gsx$flavortext}</span>
        </div>
      </div>
    );
    else return (
      <div className="card battlegear">
        <div className="fullcard"><img src={API.cardImage(card)} /></div>
        <div className="right" >
          <Name name={card.gsx$name} /><br />
          <Ability ability={card.gsx$ability} />
          <Unique data={{ unique: card.gsx$unique, loyal: card.gsx$loyal, legendary: card.gsx$legendary }} />
          {card.gsx$flavortext && <>
            <span className="flavortext">{card.gsx$flavortext}</span><br />
          </>}
          <span>Art By: {card.gsx$artist}</span>
        </div>
      </div>
    );
  }

}
