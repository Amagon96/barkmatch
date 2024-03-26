export interface DogRandomImageInterface {
    message: string,
    status: string
}

export interface DogRandomFactInterface {
    data: DogFactBodyInterface[]
}

export interface DogFactBodyInterface {
    id: string,
    type: string,
    attributes: {
        body: string
    }
}
