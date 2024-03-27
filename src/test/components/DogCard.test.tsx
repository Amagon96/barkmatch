import '@testing-library/jest-dom/jest-globals'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import DogCard from '../../components/profile-card/DogCard'
import { renderWithProviders } from '../utils/test-utils'

describe('DogCard component', () => {
  test('renders the DogCard component', () => {
    renderWithProviders(<DogCard />)
    // const dogImage = screen.getByTestId('dog-image')
    const nopeButton = screen.getByTestId('nope-button')
    expect(nopeButton).toBeInTheDocument()
    // expect(dogImage).toBeInTheDocument()
  })
})
