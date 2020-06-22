import React from 'react'

const Pet = props => {
  const pet = props.pet

  return (
    <div className="card">
      <div className="content">
        <h5 className="header" >
          {/* '♀' OR '♂' */}
          {pet.name}
          {pet.gender === 'male' ? ' ♂' : ' ♀'}
        </h5>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {pet.adopted ? <button className="ui disabled button">Already adopted</button> : 
        <button className="ui primary button" value={pet.id} onClick={props.adoptPet}>Adopt pet</button>}
      </div>
    </div>
  )
}

export default Pet
