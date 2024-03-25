import { DogRandomImageInterface } from "../interfaces/DogInterface"

const DOG_RANDOM_IMAGE_URL = 'https://dog.ceo/api/breeds/image/random'

export const getRandomDogFact = async (): Promise<DogRandomImageInterface> => {
  const res = await fetch(DOG_RANDOM_IMAGE_URL)
  const data = await res.json()
  return { ...data }
}
