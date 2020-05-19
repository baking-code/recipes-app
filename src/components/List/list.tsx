import React, { useEffect, useState } from "react";
import useDebounce from "../../utils/debounce";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import TextField from "@material-ui/core/TextField";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./list.css";
export interface Props {
  items: Array<Recipe>;
}

export default ({ items }: Props) => {
  const [searchTerm, value, setValue] = useDebounce<string>("", 100);
  const [filteredItems, setFilteredItems] = useState<Recipe[]>([]);

  useEffect(() => {
    setFilteredItems(
      items.filter((item: Recipe) => {
        const { name = "", description = "", tags = [] } = item;
        return (
          name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tags.some((tag: Tag) => tag.text.includes(searchTerm.toLowerCase()))
        );
      })
    );
  }, [items, searchTerm]);

  return (
    <div className="Main">
      <TextField
        label="Search"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="searchbox"
        inputProps={{ "data-testid": "searchbox" }}
        autoFocus
      />
      <List>
        {filteredItems.map((item: Recipe, i: number) => (
          <Link to={item.id} key={i}>
            <ListItem className="List">
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};
