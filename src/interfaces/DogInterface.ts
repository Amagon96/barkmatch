export interface DogRandomImageInterface {
    message: string,
    status: string
}

// everytinh down here is deprecated
export interface ExpensesInterface {
    expenses: {
        [index: string] : ExpenseInterface[]
    }
}

export interface ExpenseInterface {
    id: string,
    message: string,
    status: string,
    data: {
        accountName: string,
        amount: number,
        date: string,
        description: string,
        expenseId: string, //TODO -> Install dependency for uuid objects
        type: string,
        user: string
    }
}

export interface UseExpensesInterface {
    query? : string,
    range? : number[]
}

export interface CustomSliderInterface {
    handleSliderChange: (event: Event, newValue: number | number[], activeThumb: number) => void,
    value: number[],
    marks: [
        {
            value: number,
            label: string
        }
    ]
}