import React, {Component} from "react";
import ShareSortList from "./ShareSortList";
import { connect } from "react-redux";
import ShareSortActionButton from "./ShareSortActionButton";
import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {

  onDragEnd = () => {

  }

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
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
      </DragDropContext>
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
