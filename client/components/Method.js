import React, { PureComponent } from "react";
import styled, { css } from "styled-components";

import { shaded, white40, white } from "./constants/colours";

const HEIGHT = 18;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 460px;
  margin: 24px auto;
`;

const Wrapper = styled.div`
  border: 1px solid ${white40};
  color: ${white};
  height: ${HEIGHT}px;
  padding: 10px;
  margin: 20px 0;
  user-select: none;
  overflow: hidden;
  cursor: pointer;
  ${props =>
    !props.expanded &&
    css`
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
`;

class Method extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.onToggleBlock = this.onToggleBlock.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const hasExpanded = !prevState.expanded && this.state.expanded;
    const { height, padding } = getComputedStyle(this._el);
    const scrollHeight = this._el.scrollHeight - (padding.slice(0, -2) * 2);
    const computedHeight = +height.slice(0, -2);
    const rate = 60 * (scrollHeight - HEIGHT) / 500;
    let i = hasExpanded ? HEIGHT : computedHeight;
    const animateHeight = () => {
      this._el.style.height = `${i}px`;
      const condition = hasExpanded ? i < scrollHeight : i > HEIGHT;
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
    this.setState(state => ({
      expanded: !state.expanded
    }));
  }

  render() {
    const { method } = this.props;

    return (
      <Wrapper
        onClick={this.onToggleBlock}
        expanded={this.state.expanded}
        ref={r => (this._el = r)}
      >
        {method}
      </Wrapper>
    );
  }
}

class Methods extends PureComponent {
  render() {
    const { methods } = this.props;

    return (
      <Container>
        {methods.map((method, i) => (
          <Method key={i} method={method} />
        ))}
      </Container>
    );
  }
}

export default Methods;
