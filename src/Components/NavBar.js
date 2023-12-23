import { AppBar, InputBase, Toolbar, Typography, styled , Box, IconButton , Badge, Avatar, MenuItem, Menu } from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import { Mail, Notifications} from '@mui/icons-material';


const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
})
const Search=styled("div")(({theme})=>({
    background:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%",

}))

const Icons=styled(Box)(({theme})=>({
    display:"none",
    gap:"6px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}))

const UserBox=styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))

export default function NavBar() {
    const [open,setOpen]=useState(false)
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6'  sx={{display:{xs:"none",sm:"block"}}}>
                chinaza dev
            </Typography>
            <PetsIcon sx={{display:{xs:"block",sm:"none"}}}/>
            <Search >
                <InputBase sx={{color:"black"}} placeholder='Search....' />
            </Search> 

            
            <Icons>
                <IconButton sx={{ color: 'white' }}>
                    <Badge badgeContent={4} color="error">
                        <Mail  />
                    </Badge>
                </IconButton>
                <IconButton sx={{ color: 'white' }} >
                    <Badge badgeContent={4}  color="error">
                        <Notifications />
                    </Badge>
                </IconButton>
                <Avatar   sx={{ width: 35, height: 35 }} onClick={()=>{setOpen(true)}}
 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4UUQMYsxMUWE5m8zzN6ny_j_Dfsw38gsk-w&usqp=CAU' />

            </Icons>
            <UserBox>
                    <Avatar   sx={{ width: 35, height: 35 }}onClick={()=>{setOpen(true)}}
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4UUQMYsxMUWE5m8zzN6ny_j_Dfsw38gsk-w&usqp=CAU' />
                    <Typography variant='span'> Chinaza
                    </Typography>
            </UserBox>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={()=>setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </StyledToolbar>
      
    </AppBar>
  )
}
