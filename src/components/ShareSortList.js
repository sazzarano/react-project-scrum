import React from "react";
import ShareSortCard from "./ShareSortCard";

const ShareSortList = ({title}) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            <ShareSortCard />
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300,
        padding: "5px"
    }
}

export default ShareSortList;