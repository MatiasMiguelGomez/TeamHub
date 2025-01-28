import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import { FavoriteTable } from './FavoriteTable';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { Notification, ButtonFav } from '@/styled-components';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';

const NavBar: React.FC = () => {
  const favoritePersons = useSelector((store: AppStore) => store.favorites);

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            TeamHub
          </Typography>
          <ButtonFav>
            <IconButton
              color='secondary'
              aria-label='favorites'
              component='label'
              onClick={handleClick}
            >
              <FavoriteIcon />
            </IconButton>
            {favoritePersons.length > 0 ? (
              <Notification>
                <p>{favoritePersons.length}</p>
              </Notification>
            ) : (
              ''
            )}
          </ButtonFav>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
