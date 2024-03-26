import { DogRandomFactInterface } from "../interfaces/DogInterface"

const DOG_RANDOM_FACT_URL = 'https://dogapi.dog/api/v2/facts'

export const getRandomDogFact = async (): Promise<DogRandomFactInterface> => {
  const res = await fetch(DOG_RANDOM_FACT_URL)
  const data = await res.json()
  console.log(data)
  return { ...data }
}
