"use client";

import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

// Type Definitions
type VideoJsPlayer = ReturnType<typeof videojs>;
type VideoJsOptions = NonNullable<Parameters<typeof videojs>[1]>;

interface VideoPlayerProps {
  options: VideoJsOptions;
  onNext?: () => void;
  onPrev?: () => void;
}

const VideoPlayer = ({ options, onNext, onPrev }: VideoPlayerProps) => {
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  useEffect(() => {
    if (!playerRef.current && videoWrapperRef.current) {
      const videoElement = document.createElement("video");
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

      player.ready(() => {
        const controlBarEl = player.el().querySelector(".vjs-control-bar");
        const seekButtonEl = controlBarEl?.querySelector(".vjs-seek-button");

        if (controlBarEl && seekButtonEl) {
          // Create Previous Button
          if (onPrev) {
            const prevButtonEl = videojs.dom.createEl("button", {
              className: "vjs-control vjs-button",
              title: "Previous Lesson",
              innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon></svg>`,
            }) as HTMLButtonElement;

            prevButtonEl.onclick = onPrev;
            controlBarEl.insertBefore(prevButtonEl, seekButtonEl);
          }

          // Create Next Button
          if (onNext) {
            const nextButtonEl = videojs.dom.createEl("button", {
              className: "vjs-control vjs-button",
              title: "Next Lesson",
              innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><polygon points="19 5 19 19"></polygon></svg>`,
            }) as HTMLButtonElement;

            nextButtonEl.onclick = onNext;
            seekButtonEl.parentNode?.insertBefore(
              nextButtonEl,
              seekButtonEl.nextSibling
            );
          }
        }
      });

      // Keyboard Event Handling
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
      const player = playerRef.current;
      if (player && !player.isDisposed()) {
        if (options.sources) player.src(options.sources);
        if (options.poster) player.poster(options.poster);
        if (options.tracks) {
          const existingTracks = player.remoteTextTracks();
          // @ts-expect-error jjjjj
          while (existingTracks.length > 0) {
            // @ts-expect-error jjjjj
            player.removeRemoteTextTrack(existingTracks[0]);
          }

          player.addRemoteTextTrack(options.tracks[0], false);
        }
      }
    }

    return () => {
      const player = playerRef.current;
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [options, onNext, onPrev]);

  return (
    <>
      <style jsx global>{`
        .vjs-theme-etutor .vjs-big-play-button {
          background-color: rgba(255, 102, 54, 0.8) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
          border-width: 3px !important;
          width: 50px !important;
          height: 50px !important;
          border-radius: 50% !important;
          margin-top: -40px !important;
          margin-left: -40px !important;
        }
        .vjs-theme-etutor:hover .vjs-big-play-button {
          background-color: rgba(255, 102, 54, 1) !important;
        }
        .vjs-theme-etutor .vjs-play-progress,
        .vjs-theme-etutor .vjs-volume-level {
          background-color: #ff6636 !important;
        }
        .vjs-theme-etutor .vjs-slider {
          background-color: rgba(255, 255, 255, 0.3) !important;
        }
        .vjs-theme-etutor .vjs-loading-spinner {
          border-color: #ff6636 !important;
        }
        .vjs-theme-etutor .vjs-control-bar {
          background-color: rgba(29, 32, 38, 0.85) !important;
        }
      `}</style>

      <div data-vjs-player className="w-full h-full">
        <div ref={videoWrapperRef} className="w-full h-full" />
      </div>
    </>
  );
};

export default VideoPlayer;
