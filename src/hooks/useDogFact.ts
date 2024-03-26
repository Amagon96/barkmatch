import { useEffect, useState } from "react"
import { getRandomDogFact } from "../services/randomDogFact"
import { DogRandomFactInterface } from "../interfaces/DogInterface"

export const useDogFact = () => {
  const [dogFact, setDogFact] = useState<string>('')
  const [errorOnFact, setErrorOnFact] = useState<boolean>(false)
  const refreshDogFact = () => {
    getRandomDogFact()
      .then((newFact: DogRandomFactInterface) => {
        setDogFact(newFact.data[0].attributes.body.substring(0, 45) + '...')
        setErrorOnFact(false)
      })
      .catch((error: Error) => {
        console.error(error);
        setErrorOnFact(true)
      })
  }

  useEffect(refreshDogFact, [])

  return { dogFact, errorOnFact, refreshDogFact }
}