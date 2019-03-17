import React, { useRef, useState } from "react";
import { map, debounce } from "lodash";
import styled from "styled-components";

import { Input } from "./presentational/Input";
import withTitle from "./presentational/Title";
import Card from "./presentational/Card";
import { shaded, white40, white } from "./constants/colours";
import { ITEM_WIDTH } from "./constants/variables";
import { CancelButton, AddButton } from "./presentational/Buttons";

const Wrapper = styled.div`
  min-width: ${ITEM_WIDTH}px;
  margin: 0 auto;
  text-align: center;
  font-size: 2em;
  border: 1px solid ${white40};
  border-radius: 2px;
`;

const KEY = "ingredients";
const Ingredients = ({
  items,
  editing,
  editRecipeCollection,
  addToCollection,
  removeFromCollection
}) => {
  const _focusLast = useRef(null);
  let _isUpdating = null;
 
  return (
    <Wrapper>
      <ul>
        {map(items, (item, index) => {
          const isLast = index === items.length - 1;
          return (
            <Card key={`ing-${index}`}>
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
                    _isUpdating = true;
                  }
                  if (isLast && e.keyCode === 8 && !item) {
                    e.preventDefault();
                    removeFromCollection(KEY, index);
                    _isUpdating = true;
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
            </Card>
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
    </Wrapper>
  );
};

// export default withTitle(Ingredients);


function Ingredients2() {
  const [hello] = useState(0);

  return <div> HELLY {hello}</div>;
}
export default Ingredients2;
