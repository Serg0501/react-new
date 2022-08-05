import React, {Component} from 'react';
import CardContest from './CardContest';
import styles from './ManagedContest.module.css';
//import { render } from '@testing-library/react'


const db = [
  {
      head: "Consultant led",
      body: "Work one-on-one with a Squadhelp branding consultant",
      iconSrc: "#"
  },
  {
      head: "Crowd powered",
      body: "Work with our top rated Creatives and receive a huge breadth of ideas.",
      iconSrc: "#"
  },
  {
      head: "Trademark Reports",
      body: "Comprehensive trademark screening on your shortlisted names",
      iconSrc: "#"
  },
  {
      head: "Audience testing",
      body: "Get rapid feedback from real people on your shortlist of business names.",
      iconSrc: "#"
  },
  
];


export default class ManagedContest extends Component {
  render() {
    return (
      <>
        <div className={styles.mainConteiner}>
        <div className={styles.headConteiner}>
          <h1>Managed Contests</h1>
          <h3>A Naming Agency Experience (minus the Agency-level price tag)</h3>
          <p>Our hybrid-solution partners you with a trained Squadhelp branding consultant who will guide your crowdsourcing process step-by-step to get the best results possible.</p>
        </div>
            <div className={styles.cardConteiner}>
              <CardContest data = {db[0]} />
              <CardContest data = {db[1]} />
              <CardContest data = {db[2]} />
              <CardContest data = {db[3]} />
            </div>
            <button className={styles.buttonConteiner}>Learn More About Managed Contests</button>
          </div>
      </>
    )
  }
}