import React from 'react'
import { types } from 'react-bricks/frontend'

interface PokemonProps {
  pokemonName: string
  id: number
  name: string
  height: number
  weight: number
  imageUrl: string
}

const Pokemon: types.Brick<PokemonProps> = ({
  id,
  name,
  height,
  weight,
  imageUrl,
}) => {
  if (!id || !name || !height || !weight || !imageUrl) {
    return null
  }
  return (
    <div className="my-6 pb-6 container max-w-3xl mx-auto border-2 border-slate-200">
      <div className="p-2 bg-slate-100 mb-6">
        <p className="text-sm text-slate-700 uppercase tracking-widest font-bold text-center mb-1">
          Test external data
        </p>
        <p className="text-center text-slate-600">
          You will not see this in the frontend, because it is an add-on feature
          on paid plans.
        </p>
      </div>
      <img src={imageUrl} className="mx-auto w-36 mb-4" />

      <h1 className="text-5xl font-extrabold text-center mb-6">{name}</h1>

      <p className="text-center">
        #{id} - Height {height / 10} m - Weight {weight / 10} Kg
      </p>
    </div>
  )
}

Pokemon.schema = {
  name: 'pokemon',
  label: 'Pokemon',
  previewImageUrl: `/bricks-preview-images/pokemon.png`,
  getDefaultProps: () => ({}),
  getExternalData: (page, brickProps) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${brickProps.pokemonName}`)
      .then((response) => response.json())
      .then((data) => ({
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        imageUrl: `https://img.pokemondb.net/artwork/large/${data.name}.jpg`,
      }))
      .catch((error) => {
        return {
          id: 0,
          name: '',
          height: 0,
          weight: 0,
          imageUrl: '',
        }
      }),

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      name: 'pokemonName',
      label: 'Pokemon Name',
      type: types.SideEditPropType.Text,
      helperText:
        'Enter a valid Pokemon name, like "pikachu" or "charizard" and save.',
    },
  ],
}

export default Pokemon
