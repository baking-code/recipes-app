import React from "react";
import styled from "styled-components";

import Dropzone from "react-dropzone";
import Card from "./Card";
import { RemoveImage, AddButton } from "./Buttons";

export const Image = (props) => {
  const { recipe } = props;
  return recipe.image ?
    (
      <ImageArea>
        <img src={recipe.image} width={240} height={200}/>
        <RemoveImage onClick={() => props.removeImage()} />
      </ImageArea>
    ) :
    (
      <ImageArea>
        <Dropzone
          accept="image/*"
          onDrop={(f) => props.addImage(f)}
          style={{
            "height": "200px",
            "width": "240px"
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
