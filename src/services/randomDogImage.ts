const DOG_RANDOM_IMAGE_URL = 'https://dog.ceo/api/breeds/image/random'

export const getRandomDog = async () => {
  const res = await fetch(DOG_RANDOM_IMAGE_URL)
  const data = await res.json()
  return { ...data }
}
