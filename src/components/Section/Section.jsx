import React from 'react'
import "./Section.css";
import { Link } from 'react-router-dom';



const Section = (props) => {
  return (
    <section>
        <div className="sec-left">
          <p className='sec-heading'>{props.heading}</p>
          <p className='sec-desc'>{props.desc}

          </p>
          <Link to="/">{props.btn}
          </Link>
        </div>
        <div className="sec-right">
          <img src={props.img} alt="" />
        </div>
        <div className='white-sec'>
              <div className='sec-1'></div>
              <div className='sec-2'></div>
        </div>
    </section>
  )
}

export default Section