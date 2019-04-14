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
    console.log("SS", scrollHeight, computedHeight, this._input.scrollHeight);
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
      removeFromCollection
    } = this.props;

    return (
      <InputWrapper
        onClick={this.onToggleBlock}
        expanded={this.state.expanded}
        ref={r => (this._el = r)}
      >
        <TextField
          value={method}
          disabled={!editing}
          placeholder="ingredients..."
          onChange={evt => editRecipeCollection(KEY, index, evt.target.value)}
          onKeyDown={e => {
            if (isLast && e.keyCode === 13) {
              addToCollection(KEY);
              this._isUpdating.current = true;
            }
            if (isLast && e.keyCode === 8 && !item) {
              e.preventDefault();
              removeFromCollection(KEY, index);
              this._isUpdating.current = true;
            }
          }}
          ref={r => (this._input = r)}
        />
        {editing && (
          <CancelButton onClick={() => removeFromCollection(KEY, index)} />
        )}
      </InputWrapper>
    );
  }
}

class Methods extends PureComponent {
  render() {
    const { methods, editing, addToCollection, ...rest } = this.props;

    return (
      <ListWrapper>
        {methods.map((method, i) => (
          <Method
            key={i}
            method={method}
            addToCollection={addToCollection}
            editing={editing}
            {...rest}
            isLast={i === methods.length - 1}
          />
        ))}
        {editing && (
          <AddButton
            onClick={() => addToCollection(KEY)}
            size={18}
            marginRight={11}
          />
        )}
      </ListWrapper>
    );
  }
}

export default withTitle(Methods);
