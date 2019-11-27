import React from "react";
import ShareSortCard from "./ShareSortCard";
import listsReducer from "../reducers/listsReducer";
import ShareSortActionButton from "./ShareSortActionButton";

const ShareSortList = ({ title, cards, listID }) => {
    return (
        <div style={ styles.container }>
            <h4>{ title }</h4>
            { cards.map(card => (
                <ShareSortCard 
                    key={ card.id }
                    text={ card.text } 
                />
            ))}
            <ShareSortActionButton listID={ listID } />
        </div>
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