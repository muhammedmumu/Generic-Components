// import BaseMenu from "./base";
// import { TextButton } from 'components/button';

// export default function Menu(props){
//     return <BaseMenu {...props} ButtonComponent={TextButton} />
// }

import React,{useEffect} from 'react';
import Button from '@mui/material/Button';
import { TextButton } from "components/button"
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import makeStyles from '@mui/styles/makeStyles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  activeIcon:{
    marginRight: theme.spacing(1)

  },
  buttonElipses: {
    maxWidth: "100px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  }
}));

export default function MenuListComposition({width=200,renderOptions,defaultSelected=0,defaultlabel,...restProps}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [buttonLabel,setButtonLabel] = React.useState(defaultlabel || "Menu")
  const [selected,setSelected] = React.useState(defaultSelected);


  useEffect(() => {
    setButtonLabel(defaultlabel) 
  }, [defaultlabel])

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);




  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          endIcon={<KeyboardArrowDownIcon color="primary"/>}
          
          {...restProps}
        >{<span className={classes.buttonElipses}>{buttonLabel}</span>} </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper {...{  
    style: {  
      width: width,  
    },  
 }} >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    {renderOptions && renderOptions({handleClose,setButtonLabel,setSelected,selected,classes})}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}