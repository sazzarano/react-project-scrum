import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 5;

const initialState = [
    {
        title: "Initial List",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "1st Static List/Card"
            },
            {
                id: `card-${1}`,
                text: "2nd Static List/Card"
            }
        ]
    },
    {
        title: "Second List",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: "3rd Static List/Card"
            },
            {
                id: `card-${3}`,
                text: "4th Static List/Card"
            },
            {
                id: `card-${4}`,
                text: "5th Static List/Card"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            }
            listID += 1;
            return [...state, newList];
            
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
            }
            cardID += 1;

            console.log("action received", action);

            const newState = state.map(list => {
                if(list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });

            return newState;

            case CONSTANTS.DRAG_HAPPENED: {
                const {
                    droppableIdStart, 
                    droppableIdEnd, 
                    droppableIndexStart,
                    droppableIndexEnd,
                    draggableId
                } = action.payload;
                const newState = [...state];

                if (droppableIdStart === droppableIdEnd) {
                    //Same Id = Same List
                    const list = state.find(list => droppableIdStart === list.id);
                    const card = list.cards.splice(
                        droppableIndexStart, 1)
                        list.cards.splice(
                            droppableIndexEnd, 0, ...card)
                }

                return newState;
            }

        default:
            return state;
    }
};

export default listsReducer;