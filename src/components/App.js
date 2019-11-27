import React, {Component} from "react";
import ShareSortList from "./ShareSortList";
import { connect } from "react-redux";
import ShareSortActionButton from "./ShareSortActionButton";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <h2>ShareSort</h2>
        <div style={ styles.listsContainer }>
          {lists.map(list => (
            <ShareSortList 
              listID={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <ShareSortActionButton list />
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps) (App);
