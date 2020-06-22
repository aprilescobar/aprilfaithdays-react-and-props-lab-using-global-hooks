import React, { useEffect, useContext } from 'react'
import { PetsContext, FilterContext } from './Store'
import Pet from './Pet'

const PetBrowser = () => {
  const [pets, setPets] = useContext(PetsContext)
  const [filter] = useContext(FilterContext)

  useEffect(() => { 
    getList()
    // eslint-disable-next-line
  }, [filter])

  const listUrl = () => {
    const url = '/api/pets'
    if (filter !== 'all') {
      return `${url}?type=${filter}`
    }
    return url
  }

  const getList = () => {
    const url = listUrl()
    fetch(url)
    .then(res => res.json())
    .then(list => setPets(list))
  }

  const adoptPet = e  => {
    const id = e.target.value
    const list = [...pets]
    const updated = list.map(pet => {
      if(pet.id === id) {
        return {...pet, adopted: true}
      } 
      return pet
    })
    setPets(updated)
  }

  const renderPets = () => {
    const list = [...pets]
    return list.map(pet => {
      return <Pet pet={pet} key={pet.id} adoptPet={adoptPet} />
    })
  }

  return (
    <div className="ui cards">
      {renderPets()}
    </div>
  )   
}
export default PetBrowser
