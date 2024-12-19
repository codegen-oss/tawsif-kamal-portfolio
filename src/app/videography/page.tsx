import { sanityFetch } from "@/sanity/lib/live";
import { VIDEOS_QUERY } from "@/lib/queries";
import VideoPlayer from "@/components/VideoPlayer";
import { VideoType } from "@/lib/types";

export default async function VideographyPage() {
  const videos = await sanityFetch({ query: VIDEOS_QUERY });
  console.log(videos.data);

  return (
    <div className="w-3/5 ml-[40%] p-10 overflow-y-auto">
      <div className="space-y-16">
        {videos.data.data.map((video: VideoType) => (
          <div key={video._id} className="space-y-4">
            <VideoPlayer
              videoFile={video.videoFile}
              title={video.title}
              autoPlay={true}
              muted={true}
              loop={true}
            />
            <h2 className="text-xl font-semibold text-gray-900">
              {video.title}
            </h2>
            {video.description && (
              <p className="text-gray-600">{video.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
