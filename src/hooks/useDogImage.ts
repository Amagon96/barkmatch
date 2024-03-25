import { useEffect, useState } from 'react'
import { getRandomDogImage } from '../services/randomDogImage'
import { DogRandomImageInterface } from '../interfaces/DogInterface'

export const useDogImage = () => {
  const [imageUrl, setImageUrl] = useState<string>('')
  const [statusMessage, setStatusMessage] = useState<string>('')
  const [statusCode, setStatusCode] = useState<number>()

  const refreshDog = () => {
    const actualImage = imageUrl
    getRandomDogImage()
      .then((newDog: DogRandomImageInterface) => {
        setImageUrl(newDog.message)
        setStatusMessage(newDog.status)
        setStatusCode(200)
      })
      .catch((error: Error) => {
        setImageUrl(actualImage)
        setStatusCode(404)
        setStatusMessage('Someting went wrong: Dog not found')
        console.error(error)
      })
  }

  useEffect(refreshDog, [])

  return { imageUrl, statusMessage, statusCode, refreshDog }
}
