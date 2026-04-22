import { useState, useRef, useEffect } from "react";
import { Play, X, Volume2, VolumeX } from "lucide-react";
import type { Sample } from "../../data/content";

interface VideoCardProps {
  sample: Sample;
}

export default function VideoCard({ sample }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoPosStyle = sample.videoObjectPosition
    ? { objectPosition: sample.videoObjectPosition }
    : undefined;

  useEffect(() => {
    if (!playing) return;
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
    v.play().catch(() => {
      // Some browsers block autoplay unless muted; fallback to muted playback.
      v.muted = true;
      setMuted(true);
      v.play().catch(() => {});
    });
  }, [playing, muted]);

  function handlePlay() {
    setPlaying(true);
  }

  function handleClose() {
    videoRef.current?.pause();
    setPlaying(false);
  }

  return (
    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-dark-card shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-accent/10">
      <div className="relative aspect-9/16 w-full overflow-hidden bg-dark-hover">
        {playing ? (
          <>
            <video
              ref={videoRef}
              src={sample.videoSrc}
              poster={sample.thumbnail}
              className="h-full w-full object-cover"
              style={videoPosStyle}
              controls
              playsInline
              autoPlay
              muted={muted}
            />
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-2 top-2 z-20 rounded-full bg-black/70 p-1.5 text-white backdrop-blur transition-colors hover:bg-black/90"
              aria-label="Close video"
            >
              <X className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              className="absolute left-2 top-2 z-20 rounded-full bg-black/70 p-1.5 text-white backdrop-blur transition-colors hover:bg-black/90"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={handlePlay}
            className="relative block h-full w-full cursor-pointer text-left"
            aria-label={`Play ${sample.title}`}
          >
            {sample.thumbnail ? (
              <img
                src={sample.thumbnail}
                alt={sample.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                style={videoPosStyle}
              />
            ) : (
              <video
                src={sample.videoSrc}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                style={videoPosStyle}
                muted
                playsInline
                preload="metadata"
              />
            )}

            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/10" />

            <div className="pointer-events-none absolute left-3 right-3 top-3 flex items-start justify-between gap-2">
              {sample.result && (
                <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent backdrop-blur">
                  {sample.result}
                </span>
              )}
              {sample.category && (
                <span className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-2.5 py-0.5 text-[11px] font-medium text-white/85 backdrop-blur">
                  {sample.category}
                </span>
              )}
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="absolute h-20 w-20 rounded-full bg-accent/25 blur-2xl transition-opacity duration-300 group-hover:opacity-100 sm:h-24 sm:w-24" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-xl ring-1 ring-black/10 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                <Play
                  className="ml-0.5 h-6 w-6 fill-dark text-dark sm:h-7 sm:w-7"
                  strokeWidth={0}
                />
              </span>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
              <p className="text-[11px] font-medium uppercase tracking-wider text-white/70">
                {sample.brand}
              </p>
              <h3 className="mt-1 text-sm font-semibold leading-snug text-white sm:text-base">
                {sample.title.replace(`${sample.brand} — `, "")}
              </h3>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
