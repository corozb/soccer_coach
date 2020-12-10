import React from 'react'
import { connect } from 'react-redux'

function Substitutes({ substitutes, removeSubstitute }) {
  return (
    <section>
      <h2>Substitutes</h2>
      <div className='field'>
        {substitutes.map((substitute) => (
          <article className='substitute' key={substitute.id}>
            <div>
              <img src={substitute.picture} alt={substitute.name} />
              <button onClick={() => removeSubstitute(substitute)}>X</button>
            </div>
            <p>{substitute.name}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  substitutes: state.substitutes,
})

const mapDispatchToProps = (dispatch) => ({
  removeSubstitute(player) {
    dispatch({
      type: 'remove_substitute',
      player,
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Substitutes)
