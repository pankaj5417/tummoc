import Box from '@mui/material/Box';
import {Button,TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';

const style = {
  position: 'absolute',
  top: '53%',
  left: '47%',
  transform: 'translate(-50%, -50%)',
  transitionDelay: 2000,
  width: 480,
  height:530,
  bgcolor: '#212121',
  borderRadius:"10px",
  border:"none",
  outline:"none",
  p:5,
  boxShadow: 24,
  color:"white",
 
};
const textFieldStyle={
    
    bgcolor:'#424242',
    borderRadius:"8px"
}

export default function LoginModal() {
  const [open, setOpen] = useState(false);
//   const handleOpen = () => setTimeout(() => setOpen(true),2000)
  const handleClose = () => setOpen(false);
  const initialState={}
  const [formData,setFormData]=useState(initialState)
  const handleChange=(e)=>{
   
    const {name,value}=e.target

    setFormData({...formData,[name]:value})

  }

  console.log(formData)
  useEffect(()=>{
    setTimeout(()=>{
      setOpen(true)
    }, 2000)
  }, [])
  return (
    <div>
     
     
      <Modal
        
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" textAlign="center">
            Please fill the details below and get 2 days free trial at any WTF gym near you.
          </Typography>
          <form onSubmit={(e)=>e.preventDefault()} >
          <Box style={{height:"300px",marginTop:"50px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
            <TextField sx={textFieldStyle} name="name" placeholder='Enter Full name *' onChange={handleChange}/>
            <TextField sx={textFieldStyle} name="mobile" placeholder='Mobile number *' onChange={handleChange}/>
            <TextField sx={textFieldStyle} name="email" placeholder='Email id'onChange={handleChange}/>
            <TextField sx={textFieldStyle} name="address" placeholder='Enter your address *' onChange={handleChange}/>

          </Box>
          <Box style={{display:"flex",marginTop:"50px",justifyContent:"space-between"}}>
            <Button style={{backgroundColor:"black",padding:"8px 25px",fontWeight:"400"}} variant='contained' onClick={handleClose}>Cancel</Button>
            <Button type='submit' style={{backgroundColor:"red",padding:"8px 25px",fontWeight:"400"}} variant='contained'>Submit</Button>
          </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
