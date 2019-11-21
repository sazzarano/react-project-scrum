import React from "react";
import ShareSortCard from "./ShareSortCard";
import listsReducer from "../reducers/listsReducer";

const ShareSortList = ({ title, cards }) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            { cards.map(card => (
                <ShareSortCard 
                    text={card.text} 
                />
            )) }
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: "5px",
        marginRight: 8
    }
}

export default ShareSortList;