import React from "react";
import Article from "@/components/Article";
import { Zap } from "lucide-react";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

import { ArticleType } from "@/utils/types";

const ARTICLES_QUERY = defineQuery(
  `*[_type == "article"] | order(_createdAt desc)`
);

const ArticleSection = async () => {
  const articles = await sanityFetch({ query: ARTICLES_QUERY });
  return (
    <section className="container py-12">
      <div className="flex items-center gap-2 mb-6">
        <h3 className="font-inter text-3xl text-primary-foreground inline-block font-bold">
          Articles
        </h3>
        <Zap className="w-6 h-6 text-yellow-400" />
      </div>
      <div className="flex flex-col flex-wrap gap-4">
        {articles.data.map((article: ArticleType, index: number) => (
          <Article key={index} article={article} />
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
