import React from 'react';
import ReactPlayer from 'react-player';

function VideoPage() {
  return (
    <div>
      <ReactPlayer url={require('../video/party.mp4')} controls />
    </div>
  );
}

export default VideoPage;
