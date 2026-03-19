import { useState, useRef } from "react";
import { Play, X, ExternalLink } from "lucide-react";
import type { Sample } from "../../data/content";

interface VideoCardProps {
  sample: Sample;
}

export default function VideoCard({ sample }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);

  const hasVideo = !!sample.videoSrc;
  const hasEmbed = !!sample.embedUrl;
  const hasThumbnail = !!sample.thumbnail;

  function handlePlay() {
    if (!hasVideo) return;
    setPlaying(true);
    setTimeout(() => videoRef.current?.play(), 50);
  }

  function handleClose() {
    videoRef.current?.pause();
    setPlaying(false);
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-dark-border bg-dark-card transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
      <div className="relative aspect-9/16 w-full bg-dark-hover">
        {playing && hasVideo ? (
          <>
            <video
              ref={videoRef}
              src={sample.videoSrc}
              className="h-full w-full object-cover"
              controls
              playsInline
            />
            <button
              onClick={handleClose}
              className="absolute right-2 top-2 z-10 rounded-full bg-black/60 p-1.5 text-white transition-colors hover:bg-black/80"
            >
              <X className="h-4 w-4" />
            </button>
          </>
        ) : (
          <>
            {hasThumbnail ? (
              <img
                src={sample.thumbnail}
                alt={sample.title}
                className="h-full w-full object-cover object-top"
              />
            ) : hasVideo ? (
              <video
                ref={previewRef}
                src={sample.videoSrc}
                className="h-full w-full object-cover"
                muted
                playsInline
                preload="metadata"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-light-muted">
                <Play className="h-8 w-8" />
                <span className="text-xs">Sample coming soon</span>
              </div>
            )}

            {hasVideo && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-all duration-300 group-hover:bg-black/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-6 w-6 text-white" fill="white" />
                </div>
              </button>
            )}

            {!hasVideo && hasEmbed && (
              <a
                href={sample.embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-all duration-300 group-hover:bg-black/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <ExternalLink className="h-6 w-6 text-white" />
                </div>
              </a>
            )}
          </>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold">{sample.title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="rounded-full border border-dark-border bg-dark-hover px-2.5 py-0.5 text-xs text-light-muted">
            {sample.brand}
          </span>
          {sample.result && (
            <span className="text-xs font-medium text-accent">
              {sample.result}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
