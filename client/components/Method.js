import React, { PureComponent } from "react";
import { INPUT_HEIGHT } from "./constants/variables";
import withTitle from "./presentational/Title";
import { TextField } from "./presentational/Input";

import { InputWrapper, ListWrapper } from "./presentational/Card";
import { CancelButton, AddButton } from "./presentational/Buttons";

const KEY = "method";

class Method extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.onToggleBlock = this.onToggleBlock.bind(this);
    this._isUpdating = {};
  }

  componentDidUpdate(prevProps, prevState) {
    const hasExpanded =
      (this.props.editing && !prevProps.editing) ||
      (!prevState.expanded && this.state.expanded);
    const { height, padding } = getComputedStyle(this._el);
    const scrollHeight = this._input.scrollHeight;
    const computedHeight = +height.slice(0, -2);
    const rate = (60 * (scrollHeight - INPUT_HEIGHT)) / 500;
    let i = hasExpanded ? INPUT_HEIGHT : computedHeight;
    const animateHeight = () => {
      this._el.style.height = `${i}px`;
      this._input.style.height = `${i - padding.slice(0, -2) * 2}px`;
      const condition = hasExpanded ? i < scrollHeight : i > INPUT_HEIGHT;
      if (condition) {
        requestAnimationFrame(animateHeight);
        if (hasExpanded) {
          i += rate;
        } else {
          i -= rate;
        }
      }
    };
    animateHeight();
  }

  onToggleBlock() {
    if (!this.props.editing) {
      this.setState(state => ({
        expanded: !state.expanded
      }));
    }
  }

  render() {
    const {
      method,
      editing,
      editRecipeCollection,
      addToCollection,
      removeFromCollection,
      isLast,
      index
    } = this.props;

    return (
      <InputWrapper
        onClick={this.onToggleBlock}
        expanded={this.state.expanded}
        ref={r => (this._el = r)}
      >
        {editing && (
          <CancelButton onClick={() => removeFromCollection(KEY, index)} />
        )}
        <TextField
          value={method}
          disabled={!editing}
          placeholder="method..."
          onChange={evt => editRecipeCollection(KEY, index, evt.target.value)}
          onKeyDown={e => {
            if (isLast && e.keyCode === 13) {
              addToCollection(KEY);
              this._isUpdating.current = true;
            }
            if (isLast && e.keyCode === 8 && !method) {
              e.preventDefault();
              removeFromCollection(KEY, index);
              this._isUpdating.current = true;
            }
          }}
          ref={r => (this._input = r)}
        />
      </InputWrapper>
    );
  }
}

const Methods = ({ items, editing, addToCollection, ...rest }) => (
  <ListWrapper>
    {items.map((method, i) => (
      <Method
        key={i}
        index={i}
        method={method}
        addToCollection={addToCollection}
        editing={editing}
        {...rest}
        isLast={i === items.length - 1}
      />
    ))}
    {editing && <AddButton onClick={() => addToCollection(KEY)} />}
  </ListWrapper>
);
export default withTitle(Methods);
