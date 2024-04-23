import React from 'react'
import HighlightCard from '../cards/HighlightCard'

const Highlights = () => {
  return (
    <section className="highlight-div">
      <h4 className='py-4'>Today's Highlights</h4>
      <div className="d-flex justify-content-evenly flex-wrap">
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </div>
    </section>
  );
}

export default Highlights