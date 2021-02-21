import React, { useState } from "react";
import { List, ListItem, ListItemText, Button, Modal } from "@material-ui/core";
import BackspaceIcon from "@material-ui/icons/Backspace";
import db from "./firebase";
import { makeStyles } from '@material-ui/core/styles';



function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input,setİnput] = useState('');


  const DeleteButton = () => {
    db.collection("todos").doc(props.todo.id).delete();
  };

  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    },{merge: true})
    setOpen(false);
  }

  const handleOpen = ()=> {
    setOpen(true);
  }
  const classes = useStyles();

  return (
    <List>
      <Modal style={{display:'flex', justifyContent:'center'}}
        open={open}
        onClose={(e)=> setOpen(false)}
      >
        <div className={classes.paper}>
          <h1>model screen</h1>
          <input value={input} placeholder={props.todo.todo}
          onChange={event => setİnput(event.target.value)} ></input>
          <button onClick={updateTodo}>update</button>
        </div>
      </Modal>
      <ListItem>
        <ListItemText primary={props.todo.todo} secondary="Todo App" />
      </ListItem>
      <Button onClick={DeleteButton}>
        <BackspaceIcon />
      </Button>
      <Button onClick={e => setOpen(true)}>
        EDİT
      </Button>
    </List>
  );
}

export default Todo;

const useStyles = makeStyles((theme) => ({
  
  paper: {
    width: 400,
    height:150,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));