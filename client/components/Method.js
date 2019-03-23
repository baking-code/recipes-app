import React, { PureComponent } from "react";
import { INPUT_HEIGHT } from "./constants/variables";
import withTitle from "./presentational/Title";
import { InputWrapper, ListWrapper } from "./presentational/Card";

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
    const rate = 60 * (scrollHeight - INPUT_HEIGHT) / 500;
    let i = hasExpanded ? INPUT_HEIGHT : computedHeight;
    const animateHeight = () => {
      this._el.style.height = `${i}px`;
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
    this.setState(state => ({
      expanded: !state.expanded
    }));
  }

  render() {
    const { method } = this.props;

    return (
      <InputWrapper
        onClick={this.onToggleBlock}
        expanded={this.state.expanded}
        ref={r => (this._el = r)}
      >
        {method}
      </InputWrapper>
    );
  }
}

class Methods extends PureComponent {
  render() {
    const { methods } = this.props;

    return (
      <ListWrapper>
        {methods.map((method, i) => (
          <Method key={i} method={method} />
        ))}
      </ListWrapper>
    );
  }
}

export default withTitle(Methods);
