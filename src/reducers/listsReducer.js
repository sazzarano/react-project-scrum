import { CONSTANTS } from "../actions";
import { CardMedia } from "@material-ui/core";

let listID = 2;
let cardID = 4;

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
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            }
            listID += 1;
            return [...state, newList];
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardID
            }
            cardID += 1;

            console.log("action received", action);

            const newState = state.map(list => {
                if(list.id === action.payload.listId) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    };
                } else {
                    return list;
                }
            });
            return newState;
        default:
            return state;
    }
};

export default listsReducer;