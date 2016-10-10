import React, { Component } from "react";
import { WithContext as ReactTags } from "react-tag-input";

class Tags extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: this.props.tags,
      // TODO: Make this suggest based on other tags in store
      suggestions: ["Quick", "Slow-cooker", "Snack", "Brunch"]
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
  }

  handleDelete(i) {
    const tags = this.state.tags;
    tags.splice(i, 1);
    this.props.updateTags(tags);
  }

  handleAddition(tag) {
    const tags = this.state.tags;
    tags.push({
      id: tags.length + 1,
      text: tag
    });
    this.props.updateTags(tags);
  }

  render() {
    const { tags, suggestions } = this.state;
    return (
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
        />
      </div>
    );
  }
}

export default Tags;
