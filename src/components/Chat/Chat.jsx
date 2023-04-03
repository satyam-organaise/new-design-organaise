import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import { Box, Typography,Button } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import CallIcon from '@mui/icons-material/Call';
import ListModal from './Modal/ListModal';

const Chat = () => {
  return (
    <LeftSideBar>
        <Box>

            {/* Top Bar */}
            <Box height={'3rem'} display='flex' justifyContent={'space-between'} borderBottom={'1px solid #F1F1F1'}>

              <Box flex='0.2' display={'flex'}>
                
                <Box flex='0.4' ml='1rem' display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  <Typography fontSize={'20px'} fontWeight={600}>#General</Typography>
                </Box>

                <Box flex='0.6' display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600"/>
              </AvatarGroup>
                </Box>

              </Box>            
              
              <Box flex='0.25' display={'flex'} alignItems={'center'} justifyContent={'space-around'}>
                <Button variant="outlined" startIcon={<CallIcon />}>
                  Start Call
                </Button>
                  <ListModal/>
              </Box>            

            </Box>


        </Box>
    </LeftSideBar>
  )
}

export default Chat