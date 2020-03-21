import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import CameraAlt from '@material-ui/icons/CameraAlt';
import AttachFile from '@material-ui/icons/AttachFile';
function Home() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="ai-home">
      <div className="ai-home__content">

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