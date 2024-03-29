import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './CardContest.module.css'


export default class CardContest extends Component {
  render(){  
  return (
    <>


        <div className={styles.cardConteiner}>
          <h3>{this.props.data.head}</h3>
          <p>{this.props.data.body}</p>
        </div> 
    </>
  )
  }
} 

CardContest.propTypes = {
  data: PropTypes.shape({
      head: PropTypes.string,
      content: PropTypes.string
  })
};

CardContest.defaultProps = {
  data: {
      head: 'default',
      content: 'default'
  }
};

