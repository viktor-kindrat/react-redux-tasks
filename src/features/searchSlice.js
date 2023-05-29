let initalValue = {
    dataArray: [
        "The sky is blue.",
        "I love eating pizza.",
        "Today is a beautiful day.",
        "She sings beautifully.",
        "The cat is sleeping.",
        "He enjoys playing soccer.",
        "The book is on the table.",
        "We went to the beach yesterday.",
        "The flowers are blooming in the garden.",
        "He always makes me laugh.",
        "She is a talented artist.",
        "The dog is chasing its tail.",
        "I need to buy some groceries.",
        "He plays the guitar very well.",
        "The movie was amazing.",
        "She won the competition.",
        "I can't wait for the weekend.",
        "He is studying for his exams.",
        "The coffee tastes delicious.",
        "She is a good friend.",
        "I enjoy going for long walks.",
        "The car broke down on the way.",
        "He loves watching movies.",
        "The party starts at 8 p.m.",
        "She likes to read books.",
        "I want to travel the world.",
        "The rain is pouring outside.",
        "He is a skilled programmer.",
        "The baby is crying.",
        "She dances gracefully.",
        "I need to finish this task.",
        "He is going on vacation next week."
      ],
    searchingResult: []
}

let reducer = (state = initalValue, action) => {
    switch (action.type) {
        case "searchEngine/input": 
            return({
                ...state, 
                searchingResult: [...state.dataArray].filter(item => {
                    return new RegExp(`${action.payload}`, "gi").test(item)
                })
            })
        default: 
            return state
    }
}

export default reducer