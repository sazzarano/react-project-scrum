import React from "react";
import ShareSortCard from "./ShareSortCard";
import listsReducer from "../reducers/listsReducer";
import ShareSortActionButton from "./ShareSortActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 3px;
    height: 100%;
    width: 300px;
    padding: 5px;
    margin-right: 8px;
`;

const ShareSortList = ({ title, cards, listID, index }) => {
    return (
        <Draggable 
            draggableId={String(listID)} 
            index={index}> 
            {provided => (
                <ListContainer
                    {...provided.draggableProps} 
                    ref={provided.innerRef} 
                    {...provided.dragHandleProps}
                >
                <Droppable droppableId={String(listID)}>
                    {provided => (
                        <div
                            {...provided.droppableProps} 
                            ref={provided.innerRef}
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
                            { provided.placeholder }
                            <ShareSortActionButton listID={ listID } />
                        </div>
                    )}
                </Droppable>
                </ListContainer>
            )}
        </Draggable>
    );
};

export default ShareSortList;