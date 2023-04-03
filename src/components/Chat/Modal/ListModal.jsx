import * as React from 'react';
import { IconButton,Box,Button,Typography,Modal,InputAdornment,OutlinedInput,Badge,Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  padding:'1.6rem 2rem',
  borderRadius:"10px"
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      // animation: 'ripple 1.2s infinite ease-in-out',
      // border: '1px solid currentColor',
      content: '""',
    },
  },
}));


export default function ListModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>List of People</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        
        
        <Box sx={{...style, width: {xs:300,sm:350,md:400,xl:450} }}>
        <IconButton
          style={{ position: "absolute", top: "3%", right: "4%",boxShadow:'2px 2px 10px rgba(0, 0, 0, 0.2)',outline:'none'}}
          onClick={() => setOpen(false)}
        >
          <CloseIcon sx={{p:0,fontSize:'20px'}}/>
        </IconButton>
          
          <Typography id="modal-modal-title" color={'black'} fontSize={'24px'} mb='.5rem'>
            List of People
          </Typography>
          
          <Box  mb={".6rem"} display={'flex'} justifyContent={'space-between'}>
            <Typography id="modal-modal-title" variant="p" color={'#448DF0'} fontSize={'18px'}>
              # General
            </Typography>
            <Typography  variant="p" color={'#BEBEBE'} fontSize={'16px'}>3 people</Typography>
          </Box>

          <Box my={".6rem"}>
                <OutlinedInput
                  id="input-with-icon-adornment"
                  fullWidth
                  size='small'
                  placeholder="Search people here..."
                  startAdornment={<InputAdornment position="start"><SearchIcon sx={{color:'#BEBEBE'}}/></InputAdornment>}
                />
          </Box>
          
          <Box my='1.2rem'>
          
          <IconButton aria-label="add" size="small" sx={{color:'#A9A9A9',border:'1px solid #A9A9A9',borderRadius:'5px',outline:'none !important'}}>
            <AddIcon fontSize="inherit"/>
          </IconButton>
          
          <Button sx={{p:0,px:1,color:'black',fontSize:'20px',textTransform:'capitalize',outline:'none !important' }}>
              Add People
          </Button>
          </Box>

            <User name="John Carter" role="front end developer" online={true}/>
            <User name="Nick Jonas" role="UI/UX Designer" online={false}/>
            <User name="Tony Stark" role="HR Intern" online={false}/>
            <User name="Steve Rogers" role="Back end developer" online={true}/>
          

        
        </Box>
      </Modal>
    </div>
  );
}






const User=({name,role,online=false})=>{
  return (
    <Box display={'flex'} justifyContent={'space-between'} my='1rem'>

        <Box display={'flex'} alignItems={'center'}>
        {
          online?<StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2068343/pexels-photo-2068343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </StyledBadge>:<Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2068343/pexels-photo-2068343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        }
        

        <Typography pl='8px' color="black" fontSize={'18px'} textTransform={'capitalize'}>{name}</Typography>
      </Box>

        <Box display={'flex'} alignItems={'center'}>
          <Typography pl='8px' color=" #A1A1A1" fontSize={'15px'} textTransform={'capitalize'}>{role}</Typography>
        </Box>

      </Box>
  )
}