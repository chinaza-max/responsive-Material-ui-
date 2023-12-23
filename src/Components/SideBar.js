import { GroupAdd, Home, Pages, Person2, Settings, Shop } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import Brightness2Icon from '@mui/icons-material/Brightness2';
import React from 'react'

export default function SideBar({mode,setMode}) {
  return (
    <Box   flex={1} p={2} sx={{display:{xs:"none",sm:"block" }}}>
        <Box  position={"fixed"} sx={{width:"100px"}}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href='#home'>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText sx={{display:{sm:"none",lg:"block"}}} primary="Homepage" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href='#home'>
                <ListItemIcon>
                  <Pages />
                </ListItemIcon>
                <ListItemText sx={{display:{sm:"none",lg:"block"}}} primary="Pages" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href='#home'>
                <ListItemIcon>
                  <GroupAdd />
                </ListItemIcon>
                <ListItemText sx={{display:{sm:"none",lg:"block"}}} primary="Gorups" />
              </ListItemButton>
            </ListItem> 
            <ListItem disablePadding>
              <ListItemButton component="a" href='#home'>
                <ListItemIcon>
                  <Shop />
                </ListItemIcon>
                <ListItemText sx={{display:{sm:"none",lg:"block"}}} primary="Marketplace" />
              </ListItemButton>
            </ListItem> <ListItem disablePadding>
              <ListItemButton component="a" href='#home'>
                <ListItemIcon>
                  <Person2 />
                </ListItemIcon>
                <ListItemText sx={{display:{sm:"none",lg:"block"}}} primary="Friends" />
              </ListItemButton>
            </ListItem> <ListItem disablePadding>
              <ListItemButton component="a" href='#home'>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText sx={{display:{sm:"none",lg:"block"}}} primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href='#home'>
                <ListItemIcon>
                  <Person2 />
                </ListItemIcon>
                <ListItemText sx={{display:{sm:"none",lg:"block"}}} primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href='#home'>
                <ListItemIcon>
                <Brightness2Icon />

                </ListItemIcon>
                <Switch onChange={()=>setMode(mode==='light'?'dark':'light')} sx={{display:{sm:"none",lg:"block"}}}/>
              </ListItemButton>
            </ListItem>

            
          </List>
        </Box>
    </Box>
  )
}
