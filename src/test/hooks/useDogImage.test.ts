import { renderHook, waitFor } from "@testing-library/react"
import { useDogImage } from "../../hooks/useDogImage"
import { enableFetchMocks } from 'jest-fetch-mock'

enableFetchMocks()

describe('useDogImage hook tests', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation( 
      jest.fn(
        () => Promise.resolve({ json: () => Promise.resolve(
          {
            "message": "https://images.dog.ceo/breeds/dalmatian/cooper1.jpg",
            "status": "success"
          }
        ), 
      }), 
    ) as jest.Mock ) 
  });

  afterEach(() => {
      jest.restoreAllMocks();
  })
  test('useDogImage test', async () => {
    const { result } = renderHook(() => useDogImage())
    await waitFor(() => expect(result.current['imageUrl']).toBeTruthy());
  })
})