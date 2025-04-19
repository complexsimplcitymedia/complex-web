import React from 'react';
import YouTube from 'react-youtube';
import type { YouTubeEvent } from 'react-youtube';

interface VideoPlayerProps {
  videoId: string;
  onReady: (event: YouTubeEvent) => void;
  onEnd: () => void;
  isReady: boolean;
  isMobile: boolean;
}

export function VideoPlayer({ videoId, onReady, onEnd, isReady, isMobile }: VideoPlayerProps) {
  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      mute: 1, // Always muted
      playsinline: 1,
      rel: 0,
      showinfo: 0,
      loop: 1
    }
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={onReady}
      onEnd={onEnd}
      className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2"
      iframeClassName={`w-full h-full object-cover ${isMobile ? 'scale-150' : ''}`}
    />
  );
}
