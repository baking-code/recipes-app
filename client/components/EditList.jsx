import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import { Input } from "./presentational/Input";
import Card from "./presentational/Card";
import { CancelButton, AddButton } from "./presentational/Buttons";

class EditList extends Component {

  componentDidUpdate() {
    if (this._isUpdating) {
      this.focus();
      this._isUpdating = false;
    }
  }

  focus() {
    if (this._focus) {
      ReactDOM.findDOMNode(this._focus).focus();
    }
  }

  render() {
    const { items, title, editRecipeCollection, removeFromCollection, addToCollection } = this.props;
    return (
      <div>
        <h4>{title}</h4>
        {_.map(items, (item, index) => {
          const isLast = index === items.length - 1;
          return (
            <Card
              key={`ing-${index}`}
            >
            <Input
              listItem
              value={item}
              placeholder="Enter value"
              onChange={(evt) => editRecipeCollection(title.toLowerCase(), index, evt.target.value)}
              onKeyDown={(e) => {
                if (isLast && e.keyCode === 13) {
                  addToCollection(title.toLowerCase());
                  this._isUpdating = true;
                }
                if (isLast && e.keyCode === 8 && !item) {
                  e.preventDefault();
                  removeFromCollection(title.toLowerCase(), index);
                  this._isUpdating = true;
                }
              }}
              ref={(r) => {
                if (isLast) {
                  this._focus = r;
                }
              }}
            />
          <CancelButton onClick={() => removeFromCollection(title.toLowerCase(), index)} marginTop={20} />
          </Card>
          );
        })}
        <AddButton onClick={() => addToCollection(title.toLowerCase())} size={18} marginRight={16} />
      </div>
    );
  }
}

EditList.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  editRecipeCollection: PropTypes.func,
  removeFromCollection: PropTypes.func,
  addToCollection: PropTypes.func
};

export default EditList;
