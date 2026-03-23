import { useState, useRef, useEffect } from "react";
import { Play, X, ExternalLink } from "lucide-react";
import type { Sample } from "../../data/content";

interface VideoCardProps {
  sample: Sample;
}

export default function VideoCard({ sample }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);

  const hasVideo = !!sample.videoSrc && !videoFailed;
  const hasEmbed = !!sample.embedUrl;
  const hasThumbnail = !!sample.thumbnail;

  const linkLabel = sample.embedLabel ?? "Open post";

  const videoPosStyle = sample.videoObjectPosition
    ? { objectPosition: sample.videoObjectPosition }
    : undefined;

  useEffect(() => {
    setVideoFailed(false);
  }, [sample.videoSrc]);

  function handlePlay() {
    if (!hasVideo) return;
    setPlaying(true);
    setTimeout(() => videoRef.current?.play(), 50);
  }

  function handleClose() {
    videoRef.current?.pause();
    setPlaying(false);
  }

  function handleVideoError() {
    setVideoFailed(true);
    setPlaying(false);
  }

  const showEmbedFallback =
    videoFailed || (!sample.videoSrc && hasEmbed && !hasThumbnail);

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-dark-border bg-dark-card transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
      <div className="relative aspect-2/3 w-full shrink-0 bg-dark-hover">
        {playing && hasVideo ? (
          <>
            <video
              ref={videoRef}
              src={sample.videoSrc}
              className="h-full w-full object-cover"
              style={videoPosStyle}
              controls
              playsInline
              onError={handleVideoError}
            />
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-2 top-2 z-10 rounded-full bg-black/60 p-1.5 text-white transition-colors hover:bg-black/80"
            >
              <X className="h-4 w-4" />
            </button>
          </>
        ) : (
          <>
            {showEmbedFallback && hasEmbed ? (
              <a
                href={sample.embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-dark-hover to-dark-card p-6 text-center transition-colors hover:bg-dark-hover/90"
              >
                <ExternalLink className="h-10 w-10 text-accent" />
                <span className="text-sm font-medium text-light-muted">
                  {videoFailed
                    ? "Preview unavailable — open in browser"
                    : linkLabel}
                </span>
                <span className="text-xs text-light-muted/80">
                  {sample.embedUrl?.includes("instagram")
                    ? "Instagram"
                    : "TikTok"}
                </span>
              </a>
            ) : hasThumbnail ? (
              <img
                src={sample.thumbnail}
                alt={sample.title}
                className="h-full w-full object-cover"
                style={
                  sample.thumbnailObjectPosition
                    ? { objectPosition: sample.thumbnailObjectPosition }
                    : { objectPosition: "center top" }
                }
              />
            ) : hasVideo ? (
              <video
                ref={previewRef}
                src={sample.videoSrc}
                className="h-full w-full object-cover"
                style={videoPosStyle}
                muted
                playsInline
                preload="metadata"
                onError={handleVideoError}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-light-muted">
                <Play className="h-8 w-8" />
                <span className="text-xs">Sample coming soon</span>
              </div>
            )}

            {hasVideo && !showEmbedFallback && (
              <button
                type="button"
                onClick={handlePlay}
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-all duration-300 group-hover:bg-black/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-6 w-6 text-white" fill="white" />
                </div>
              </button>
            )}

            {!hasVideo && hasEmbed && hasThumbnail && (
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

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-semibold leading-snug">{sample.title}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-dark-border bg-dark-hover px-2.5 py-0.5 text-xs text-light-muted">
            {sample.brand}
          </span>
          {sample.result && (
            <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 text-xs font-semibold tabular-nums text-accent">
              {sample.result}
            </span>
          )}
        </div>
        {hasEmbed && (
          <a
            href={sample.embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-1.5 pt-3 text-xs font-medium text-accent transition-colors hover:text-accent/85"
          >
            <ExternalLink className="h-3.5 w-3.5 shrink-0" />
            {linkLabel}
          </a>
        )}
      </div>
    </div>
  );
}
