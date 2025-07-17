"use client";

import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

// Type Definitions
type VideoJsPlayer = ReturnType<typeof videojs>;
type VideoJsOptions = NonNullable<Parameters<typeof videojs>[1]>;

interface VideoPlayerProps {
  options: VideoJsOptions;
}

const VideoPlayer = ({ options }: VideoPlayerProps) => {
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  useEffect(() => {
    if (!playerRef.current && videoWrapperRef.current) {
      const videoElement = document.createElement("video");
      // Add a custom theme class for styling
      videoElement.className =
        "video-js vjs-big-play-centered vjs-theme-etutor";
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
            "fullscreenToggle",
          ],
          seekButtons: { forward: 10, back: 10 },
        },
      };

      const player = videojs(videoElement, finalOptions, () => {
        console.log("Player is ready");
      });
      playerRef.current = player;

      // Keyboard Event Handling (no changes here)
      player.on("keydown", (event: KeyboardEvent) => {
        switch (event.code) {
          case "Space":
            event.preventDefault();
            if (player.paused()) player.play();
            else player.pause();
            break;
          case "ArrowRight": {
            const currentTime = player.currentTime();
            if (typeof currentTime === "number")
              player.currentTime(currentTime + 10);
            break;
          }
          case "ArrowLeft": {
            const currentTime = player.currentTime();
            if (typeof currentTime === "number")
              player.currentTime(currentTime - 10);
            break;
          }
        }
      });
    } else {
      // Update logic (no changes here)
      const player = playerRef.current;
      if (player && !player.isDisposed()) {
        if (options.sources) player.src(options.sources);
        if (options.poster) player.poster(options.poster);
        if (options.tracks) {
          const existingTracks = player.remoteTextTracks();
          // @ts-expect-error hhhhhh
          while (existingTracks.length > 0) {
            // @ts-expect-error hhhhhh
            player.removeRemoteTextTrack(existingTracks[0]);
          }

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
    <>
      {/* === CUSTOM STYLES ADDED HERE === */}
      <style jsx global>{`
        .vjs-theme-etutor .vjs-big-play-button {
          background-color: rgba(
            255,
            102,
            54,
            0.8
          ) !important; /* Your primary orange, slightly transparent */
          border-color: rgba(255, 255, 255, 0.5) !important;
          border-width: 3px !important;
          width: 80px !important;
          height: 80px !important;
          border-radius: 50% !important;
          margin-top: -40px !important; /* Center it */
          margin-left: -40px !important; /* Center it */
        }
        .vjs-theme-etutor:hover .vjs-big-play-button {
          background-color: rgba(
            255,
            102,
            54,
            1
          ) !important; /* Solid on hover */
        }
        .vjs-theme-etutor .vjs-play-progress {
          background-color: #ff6636 !important; /* Progress bar color */
        }
        .vjs-theme-etutor .vjs-volume-level {
          background-color: #ff6636 !important; /* Volume bar color */
        }
        .vjs-theme-etutor .vjs-slider {
          background-color: rgba(255, 255, 255, 0.3) !important;
        }
        .vjs-theme-etutor .vjs-loading-spinner {
          border-color: #ff6636 !important; /* Loader color */
        }
        .vjs-theme-etutor .vjs-control-bar {
          background-color: rgba(
            29,
            32,
            38,
            0.85
          ) !important; /* Control bar background */
        }
      `}</style>

      <div data-vjs-player className="w-full h-full">
        <div ref={videoWrapperRef} className="w-full h-full" />
      </div>
    </>
  );
};

export default VideoPlayer;
