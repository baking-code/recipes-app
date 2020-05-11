import React, { useEffect, useState } from "react";
import useDebounce from "../../utils/debounce";

import List from "@material-ui/core/List";
import TextField from "@material-ui/core/TextField";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./index.css";

interface Tag {
  id: number;
  text: string;
}
interface Item {
  name: string;
  description?: string;
  tags?: Tag[];
}
export interface Props {
  items: Array<Item>;
}
export default ({ items }: Props) => {
  const [searchTerm, value, setValue] = useDebounce<string>("", 100);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  useEffect(() => {
    setFilteredItems(
      items.filter((item: Item) => {
        const { name = "", description = "", tags = [] } = item;
        return (
          name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tags.some((tag: Tag) => tag.text.includes(searchTerm.toLowerCase()))
        );
      })
    );
  }, [searchTerm]);

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
        {filteredItems.map((item: Item, i: number) => (
          <ListItem key={i} className="List">
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
