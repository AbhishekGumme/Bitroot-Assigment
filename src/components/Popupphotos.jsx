import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import '../../src/components/photopopup.css'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius:'30px',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
 
  boxShadow: 24,
  pt: 2,
  px: 12,
  pb: 2,
};


function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal({item,handleClosePopup}) {
    console.log(item)
  const [open, setOpen] = React.useState(false);
  const [propdata,setpropdata]=React.useState(true)
   const handleOpen = () => {
     setOpen(true);
   };
  const handleClose = () => {
    setOpen(false);
    handleClosePopup();
  };

  return (
    <>
    <div>
     
      <Modal
        open={propdata}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="modal-box">
        <IconButton 
              aria-label="close"
              onClick={handleClose} // Add your close handler function here
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'inherit',
              }}
            >
              <CloseIcon/>
            </IconButton>
            <div className='containers'>
            <div className="image-containers">
          
            <div  className="image-cards" >
              <img src={item.thumbnail.large} id='main' alt="Image "/>
              <div className="card-contents">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className='imagescontainers'>
      <img src={item.author.avatar} className='image-author' />
      <div className='author-info'>
        <span>{item.author.name}: {item.author.role}</span>
      </div>
    </div>
              </div>
            
            </div>
            </div>
          
        </div>
          <ChildModal />
        </Box>
      </Modal>
    </div>
    </>
  );
}