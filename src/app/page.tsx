import "./globals.css";

import RightContainer from "./_sections/rightContainer";
import LeftContainer from "./_sections/leftContainer";

import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

const PROFILE_QUERY = defineQuery(
  `*[_type == "profile"] | order(_createdAt desc)`
);

export default async function Home() {
  const profile = await sanityFetch({ query: PROFILE_QUERY });

  return (
    <div className="flex min-h-screen">
      <LeftContainer profile={profile.data[0]} />
      <RightContainer profile={profile.data[0]} />
    </div>
  );
}
