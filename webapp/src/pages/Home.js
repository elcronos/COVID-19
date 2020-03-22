import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import CameraAlt from '@material-ui/icons/CameraAlt';
import AttachFile from '@material-ui/icons/AttachFile';
import { NavLink } from 'react-router-dom';
function Home() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="ai-home">
      <div className="ai-home__content">
        <Box m={3}>
          <NavLink to='/upload'>Upload x-ray picture</NavLink>
        </Box>
      </div>
      <BottomNavigation
        value={currentTab}
        onChange={(event, newValue) => {
          setCurrentTab(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Camera" icon={<CameraAlt />} />
        <BottomNavigationAction label="Attach" icon={<AttachFile />} />
      </BottomNavigation>
    </div>
  );
}

export default Home;