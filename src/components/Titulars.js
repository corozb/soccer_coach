import React from 'react'
import { connect } from 'react-redux'

import field from '../static/soccer_field.svg'

function Titulars({ titulars, removeTitular }) {
  return (
    <section>
      <h2>Team Selected</h2>
      <div className='field'>
        {titulars.map((titular) => (
          <article className='titular' key={titular.id}>
            <div>
              <img src={titular.picture} alt={titular.name} />
              <button onClick={() => removeTitular(titular)}>X</button>
            </div>
            <p>{titular.name}</p>
          </article>
        ))}
      </div>
      <img src={field} alt='soccer field' />
    </section>
  )
}

const mapStateToProps = (state) => ({
  titulars: state.titulars,
})

const mapDispatchToProps = (dispatch) => ({
  removeTitular(player) {
    dispatch({
      type: 'remove_titular',
      player,
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulars)
