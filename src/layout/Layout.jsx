import { Outlet } from "react-router-dom";
import { imprimirLog } from "../utils/test";
import { useEffect, useState } from "react";
import { getUsers } from "../api/testAPi";
import { styled, useTheme } from '@mui/material/styles';

import {
  IconButton,
  Box,
  Drawer,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon
} from "@mui/material";

import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import GroupIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LanIcon from '@mui/icons-material/Lan';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),

);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({

  background: '#F5F5F5',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const LinkMenu = styled(Link)(() => ({
  textDecoration: 'none',
  fontWeight: 'bold',
  color: '#D9D9D9',
}));

// Componente para las opciones de menu
const ChoiseMenu = ({ section_name, choises }) => {
  return (
    <List>
      <Typography variant="h7" color={"#6D6D6D"} fontWeight={"bold"}>
        {section_name}
      </Typography>
      {choises.map((obj, index) => (
        <ListItem key={index} disablePadding>
          <LinkMenu to={obj.path}>
            <ListItemButton>
              <ListItemIcon>
                {obj.icon}
              </ListItemIcon>
              <ListItemText primary={obj.name} />
            </ListItemButton>

          </LinkMenu>
        </ListItem>
      ))}
    </List>
  )
}

const Layout = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  useEffect(() => {

    getUsers()
      .then(data => {
        const { data: results } = data
        console.log(results);
      })
      .catch(error => console.log(error))
  })

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          <Typography variant="h6" color={"#D43535"} fontWeight={"bold"}>
            MundoVinyl
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>

        <Divider />
        <ChoiseMenu section_name="Módulos" choises={[
          {
            name: 'Compras',
            icon: <ShoppingBagIcon sx={{ color: "#D9D9D9" }} />,
            path: "/compras"
          },
          {
            name: 'Ventas',
            icon: <PointOfSaleIcon sx={{ color: "#D9D9D9" }} />,
            path: "/ventas"
          }
        ]} />

        <Divider />

        <ChoiseMenu section_name="Catálogos" choises={[
          {
            name: 'Clientes',
            icon: <GroupIcon sx={{ color: "#D9D9D9" }} />,
            path: "/clientes"
          },
          {
            name: 'Productos',
            icon: <InventoryIcon sx={{ color: "#D9D9D9" }} />,
            path: "/productos"
          },
          {
            name: 'Proveedores',
            icon: <LocalShippingIcon sx={{ color: "#D9D9D9" }} />,
            path: "/proveedores"
          }
        ]} />

        <Divider />

        <ChoiseMenu section_name="Usuarios" choises={[
          {
            name: 'Empleados',
            icon: <GroupIcon sx={{ color: "#D9D9D9" }} />,
            path: "/empleados"
          },
          {
            name: 'Roles',
            icon: <LanIcon sx={{ color: "#D9D9D9" }} />,
            path: "/roles"
          },
          {
            name: 'Salir',
            icon: <LogoutIcon sx={{ color: "#D9D9D9" }} />,
            path: "/"
          }
        ]} />

      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>


    </Box>
  );
};

export default Layout;