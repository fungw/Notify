import React from 'react';
import Vimeo from '@u-wave/react-vimeo';
import textData from '../Data/textData.json';
import './VideoShowcase.sass';

const VideoShowcase = () => {
  const vimeoVideoId = textData['Media']['vimeoId'];
  const videoSize = getVideoRenderSize();

  return (
    <div className="VideoShowcase">
      <Vimeo video={ vimeoVideoId } height={ videoSize[1] } width={ videoSize[0] }/>
    </div>
  )
}

const getVideoRenderSize = () => {
  var windowSize = window.innerWidth;
  if (windowSize > 1024) {
    return [480, 270];
  } else if (windowSize > 512) {
    return [320, 180];
  } else {
    return [240, 135];
  }
}

export default VideoShowcase;