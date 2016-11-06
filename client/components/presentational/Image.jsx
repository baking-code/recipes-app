import React from "react";
import styled from "styled-components";

import Dropzone from "react-dropzone";
import Card from "./Card";
import { CancelButton, AddButton } from "./Buttons";

export const Image = (props) => {
  const { recipe } = props;
  return recipe.image ?
    (
      <ImageArea>
        <CancelButton onClick={() => props.removeImage()} image/>
        <img src={recipe.image} width={240} height={200}/>
      </ImageArea>
    ) :
    (
      <ImageArea>
        <Dropzone
          accept="image/*"
          onDrop={(f) => props.addImage(f)}
          style={{
            "height": "204px",
            "width": "100%"
          }}
        >
          <AddButton />
        </Dropzone>
      </ImageArea>
    );
};

export const ImageArea = styled(Card)`
  padding: 0px;
`;
