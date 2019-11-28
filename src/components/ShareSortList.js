import React from "react";
import ShareSortCard from "./ShareSortCard";
import listsReducer from "../reducers/listsReducer";
import ShareSortActionButton from "./ShareSortActionButton";
import { Droppable } from "react-beautiful-dnd";

const ShareSortList = ({ title, cards, listID }) => {
    return (
        <Droppable droppableId={String(listID)}>
            {(provided) => (
                <div 
                    {...provided.droppableProps} 
                    ref={provided.innerRef} 
                    style={ styles.container }
                >
                    <h4>{ title }</h4>
                    {cards.map((card, index) => (
                        <ShareSortCard 
                            key={ card.id }
                            index= { index }
                            text={ card.text } 
                            id={ card.id }
                        />
                    ))}
                    <ShareSortActionButton listID={ listID } />
                    { provided.placeholder }
                </div>
            )}
        </Droppable>
    )
}

const styles = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        height: "100%",
        width: 300,
        padding: "5px",
        marginRight: 8
    }
}

export default ShareSortList;