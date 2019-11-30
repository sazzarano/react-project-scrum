import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const CardContainerStyle = styled.div`
    margin-bottom: 8px;
`;

const ShareSortCard = ({ text, id, index }) => {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <CardContainerStyle 
                    ref={provided.innerRef} 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Card>
                        <CardContent>
                            <Typography gutterBottom>
                                { text }
                            </Typography>
                        </CardContent>
                    </Card>
                </CardContainerStyle>  
            )}
        </Draggable>
    );
};

export default ShareSortCard;