const initialState = [
    {
        title: "Initial List",
        id: 0,
        cards: [
            {
                id: 0,
                text: "1st Static List/Card"
            },
            {
                id: 1,
                text: "2nd Static List/Card"
            }
        ]
    },
    {
        title: "Second List",
        id: 1,
        cards: [
            {
                id: 0,
                text: "3rd Static List/Card"
            },
            {
                id: 1,
                text: "4th Static List/Card"
            },
            {
                id: 2,
                text: "5th Static List/Card"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default listsReducer;