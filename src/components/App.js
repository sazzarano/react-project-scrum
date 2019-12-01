import React, {Component} from "react";
import ShareSortList from "./ShareSortList";
import { connect } from "react-redux";
import ShareSortActionButton from "./ShareSortActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  onDragEnd = (result) => {
    const { destination, source, draggableID, type } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableID, 
        type
      )
    );
  }

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <h2>ShareSort</h2>
        <Droppable 
          droppableId="all-lists"
          direction="horizontal"
          type="list"
        > 
        {provided => (
            <ListContainer 
              {...provided.droppableProps} 
              ref={provided.innerRef}
            >
              {lists.map((list, index) => (
                <ShareSortList 
                  listID={list.id}
                  key={list.id}
                  title={list.title}
                  cards={list.cards}
                  index={index}
                />
              ))}
              {provided.placeholder}
              <ShareSortActionButton list />
            </ListContainer>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps) (App);
