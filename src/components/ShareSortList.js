import React from "react";
import ShareSortCard from "./ShareSortCard";
import listsReducer from "../reducers/listsReducer";
import ShareSortActionButton from "./ShareSortActionButton";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 3px;
    height: 100%;
    width: 300px;
    padding: 5px;
    margin-right: 8px;
`;

const ShareSortList = ({ title, cards, listID }) => {
    return (
        <Droppable droppableId={String(listID)}>
            {(provided) => (
                <ListContainer
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
                    <ShareSortActionButton listID={ listID } />
                    { provided.placeholder }
                </ListContainer>
            )}
        </Droppable>
    )
};

export default ShareSortList;