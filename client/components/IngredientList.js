import React, { useRef, useState } from "react";
import { map, debounce } from "lodash";

import { Input } from "./presentational/Input";
import withTitle from "./presentational/Title";
import { CancelButton, AddButton } from "./presentational/Buttons";
import { ListWrapper, InputWrapper } from "./presentational/Card";

const KEY = "ingredients";
const Ingredients = ({
  items,
  editing,
  editRecipeCollection,
  addToCollection,
  removeFromCollection
}) => {
  const _focusLast = useRef(null);
  const _isUpdating = useRef(false);
 
  return (
    <ListWrapper>
      <ul>
        {map(items, (item, index) => {
          const isLast = index === items.length - 1;
          return (
            <InputWrapper key={`ing-${index}`} editing={editing}>
              <Input
                value={item}
                disabled={!editing}
                placeholder="ingredients..."
                onChange={evt =>
                  editRecipeCollection(KEY, index, evt.target.value)
                }
                onKeyDown={e => {
                  if (isLast && e.keyCode === 13) {
                    addToCollection(KEY);
                    _isUpdating.current = true;
                  }
                  if (isLast && e.keyCode === 8 && !item) {
                    e.preventDefault();
                    removeFromCollection(KEY, index);
                    _isUpdating.current = true;
                  }
                }}
                ref={_focusLast}
              />
              {editing && (
                <CancelButton
                  onClick={() => removeFromCollection(KEY, index)}
                  marginTop={20}
                />
              )}
            </InputWrapper>
          );
        })}
        {editing && (
          <AddButton
            onClick={() => addToCollection(KEY)}
            size={18}
            marginRight={16}
          />
        )}
      </ul>
    </ListWrapper>
  );
};

export default withTitle(Ingredients);
