import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";

function todo({ todo }) {
  return (
    <>
      <List key={todo.id}>
        <ListItem>
          <ListItemText primary={todo} />
        </ListItem>
      </List>
    </>
  );
}

export default todo;
