import React from "react";
import { ArticleType } from "../utils/types";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";

const Article = ({ article }: { article: ArticleType }) => {
  return (
    <Link href={article.link} target="_blank" className="block">
      <div className="flex items-center gap-2 group">
        <ArrowRightCircle className="w-5 h-5 text-primary-foreground/70 transition-all duration-700 ease-out group-hover:text-tertiary-foreground group-hover:translate-x-2 group-hover:rotate-12 group-hover:scale-110" />
        <h3 className="font-inter text-lg text-primary-foreground inline-block transition-all duration-700 ease-out group-hover:text-tertiary-foreground group-hover:translate-x-1">
          {article.articleName}
        </h3>
      </div>
    </Link>
  );
};

export default Article;
