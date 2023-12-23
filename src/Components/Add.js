import React,{useState} from 'react'
import {Add as AddIcon, DateRange, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material"
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import styled from '@emotion/styled';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const UserBox=styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"10px"
})
export default function Add() {
    const [open,setOpen]=useState(false)
  return (
    <>
        <Tooltip title="Delete"
            onClick={()=>setOpen(true)}
            sx={{
                position:"fixed",
                bottom:20,
                left:{xs:"calc(50% - 25px)",md:30}
            }}>
            <Fab color="primary" aria-label="add">
            <AddIcon />
            </Fab>
        </Tooltip>

        <Modal
            open={open}
            onClose={()=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" color="grey" textAlign="center">
                    Create post
                    </Typography>
                    <UserBox>
                    <Typography id="modal-modal-title" variant="h6" color="grey" textAlign="center">

                    </Typography>
                        <Avatar 
                        src='https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_640.jpg'
                        sx={{width:30,height:30}}/>
                            <Typography  fontWeight={500} variant="span" color={'text.primary'}>
                                John Doe
                            </Typography>

                           
                    </UserBox>
                    <TextField
                            sx={{width:"100%"}}
                                id="standard-multiline-static"
                                multiline
                                rows={3}
                                placeholder="What is on your mind"
                                variant="standard"
                                />

                            <Stack  direction="row" gap={1} mt={2} mb={3}>
                                <EmojiEmotionsIcon color='primary'/>
                                <Image color='secondry'/>
                                <VideoCameraBack color='success'/>
                                <PersonAdd color='error'/>

                            </Stack>

                            <ButtonGroup
                            fullWidth
                            variant="contained" 
                            aria-label="outlined primary button group">
                                <Button>Post </Button>
                                <Button sx={{width:"100px"}}>                                
                                    <DateRange/> 
                                </Button>

                            </ButtonGroup>
        

                </Box>
            </Modal>
    </>
  )
}
