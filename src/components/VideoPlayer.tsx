"use client";
import { useEffect, useRef, useState } from "react";
import { fileUrl } from "@/sanity/lib/file";

interface VideoPlayerProps {
  videoFile: {
    _type: 'file';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  title: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

const VideoPlayer = ({
  videoFile,
  title,
  autoPlay = true,
  muted = false, // Start with sound on
  loop = true,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Get video URL using fileUrl helper
  const videoUrl = fileUrl(videoFile.asset._ref);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "100px", // Start loading earlier
      threshold: 0.1, // Trigger earlier
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) {
          // Only autoplay with sound after user interaction
          if (hasInteracted) {
            videoRef.current.muted = false;
          }
          videoRef.current.play().catch((error) => {
            console.log("Video autoplay failed:", error);
          });
          setIsPlaying(true);
        } else if (videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [hasInteracted]);

  // Enable sound on first click anywhere in the document
  useEffect(() => {
    const enableSound = () => {
      setHasInteracted(true);
      if (videoRef.current) {
        videoRef.current.muted = false;
      }
      document.removeEventListener('click', enableSound);
    };

    document.addEventListener('click', enableSound);
    return () => document.removeEventListener('click', enableSound);
  }, []);

  return (
    <div 
      className="relative w-full overflow-hidden bg-black"
      style={{ aspectRatio: '16/9' }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        muted={!hasInteracted} // Start muted until interaction
        loop={loop}
        playsInline
        controls={false} // Hide controls for cleaner look
      >
        <source src={videoUrl} type="video/mp4" />
        {title}
      </video>
      
      {/* Hover overlay with minimal info */}
      <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-white text-lg font-medium">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
