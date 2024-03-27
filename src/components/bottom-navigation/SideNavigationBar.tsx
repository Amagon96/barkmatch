import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PetsIcon from '@mui/icons-material/Pets'
import FavoriteIcon from '@mui/icons-material/Favorite'
import InfoIcon from '@mui/icons-material/Info'
import { AppBar, Toolbar, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom'

const drawerWidth = 240;

export default function SideNavigationBar() {
  const navigate = useNavigate()
  
  return (
    <Box className='side-navigation'>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Welcome to Barkmatch!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
        <ListItem key={'discover'} disablePadding>
            <ListItemButton onClick={() => navigate('/dogs')}>
              <ListItemIcon>
                <PetsIcon />
              </ListItemIcon>
              <ListItemText primary={'Discover'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'favorites'} disablePadding>
            <ListItemButton onClick={() => navigate('/favs')}>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary={'Favorites'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'about'} disablePadding>
            <ListItemButton onClick={() => navigate('/about')}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary={'About'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
