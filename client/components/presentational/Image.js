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
        <img src={recipe.image} width={240} height={200}/>
        <CancelButton onClick={() => props.removeImage()} marginTop={4} marginRight={4} />
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
          <AddButton marginTop={4} marginRight={4} />
        </Dropzone>
      </ImageArea>
    );
};

export const ImageArea = styled(Card)`
  padding: 0px;
`;
