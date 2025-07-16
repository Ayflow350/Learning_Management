"use client";

import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

// Type definitions for Video.js
type VideoJsPlayer = ReturnType<typeof videojs>;
type VideoJsOptions = NonNullable<Parameters<typeof videojs>[1]>;

interface VideoPlayerProps {
  options: VideoJsOptions;
}

const VideoPlayer = ({ options }: VideoPlayerProps) => {
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  useEffect(() => {
    // Initialize player
    if (!playerRef.current && videoWrapperRef.current) {
      const videoElement = document.createElement("video");
      videoElement.className = "video-js vjs-big-play-centered";
      videoWrapperRef.current.appendChild(videoElement);

      const finalOptions: VideoJsOptions = {
        ...options,
        playbackRates: [0.5, 1, 1.5, 2],
        controlBar: {
          children: [
            "playToggle",
            "volumePanel",
            "progressControl",
            "currentTimeDisplay",
            "timeDivider",
            "durationDisplay",
            "customControlSpacer",
            "seekButton",
            "customControlSpacer",
            "playbackRateMenuButton",
            "captionsButton",
            "chaptersButton",
            "descriptionsButton",
            "subtitlesButton",
            "fullscreenToggle",
          ],
          seekButtons: { forward: 10, back: 10 },
        },
      };

      const player = videojs(videoElement, finalOptions, () => {
        console.log("Player is ready");
      });
      playerRef.current = player;
    } else {
      // Update existing player
      const player = playerRef.current;
      if (player && !player.isDisposed()) {
        if (options.sources) {
          player.src(options.sources);
        }

        // === THIS IS THE DEFINITIVE FIX USING @ts-ignore ===
        if (options.tracks) {
          const existingTracks = player.remoteTextTracks();

          // Use a while loop which is safest for live lists.
          // We ignore the TS error for `.length` because we know it exists at runtime.
          // @ts-expect-error this night cause error
          while (existingTracks.length > 0) {
            // We ignore the TS error for bracket access `[0]` as well.
            // @ts-expect-error this night cause error
            player.removeRemoteTextTrack(existingTracks[0]);
          }

          // Add the new track.

          player.addRemoteTextTrack(options.tracks[0], false);
        }
      }
    }

    // Cleanup
    return () => {
      const player = playerRef.current;
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [options]);

  return (
    <div data-vjs-player className="w-full h-full">
      <div ref={videoWrapperRef} className="w-full h-full" />
    </div>
  );
};

export default VideoPlayer;
