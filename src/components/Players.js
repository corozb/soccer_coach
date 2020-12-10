import React, { useEffect, createRef } from 'react'
import { connect } from 'react-redux'

function Players({ players, addTitular, addSubstitute }) {
  const gridPlayers = createRef()

  useEffect(() => {
    setScrollContainer()
    document.addEventListener('click', setScrollContainer)
  }, [])

  // Function to fix the width of players
  const setScrollContainer = (desktop = true) => {
    let container = gridPlayers.current
    if (container) {
      const generatedGrid = () => {
        let items = container.getElementsByClassName('player')
        let itemsLength = items.length
        let bp = window.matchMedia('(min-width: 640px)').matches
          ? window.matchMedia('(min-width: 1024px)').matches
            ? 4
            : 2
          : 1

        const getWidth = () => {
          let n = bp + (itemsLength > bp ? 0.3 : 0)
          return (itemsLength / n) * 100
        }
        return `
                display: grid;
                grid-template-columns: repeat(${itemsLength}, 225px);
                grid-gap: 1rem;
                width : ${getWidth()}%;
              `
      }
      let styles =
        !desktop && window.matchMedia('(min-width: 1024px)').matches
          ? `display: grid; grid-row-gap: 1rem;`
          : generatedGrid()
      container.setAttribute('style', styles)
    }
  }

  return (
    <section>
      <h2>Players</h2>
      <div className='container__players'>
        <div ref={gridPlayers} onClick={() => setScrollContainer.bind(this)}>
          {players.map((player) => (
            <article className='player' key={player.id}>
              <img src={player.picture} alt={player.name} />
              <h3>{player.name}</h3>
              <div>
                <button onClick={() => addTitular(player)}>Titular</button>
                <button onClick={() => addSubstitute(player)}>
                  Substitute
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  players: state.players,
})

const mapDispatchToProps = (dispatch) => ({
  addTitular(player) {
    dispatch({
      type: 'add_titular',
      player,
    })
  },
  addSubstitute(player) {
    dispatch({
      type: 'add_substitute',
      player,
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Players)
