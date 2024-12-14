export type SanityImageType = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type SanityIconType = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type ProjectType = {
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  projectName: string;
  projectDescription: string;
  link: string;
  skillTags: string[];
  thumbnailImage: SanityImageType;
  linkIcon: SanityIconType;
  prize?: string;
};

export type WorkExperienceType = {
  _id: string;
  _type: "workExperience";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  companyName: string;
  position: string;
  logo: SanityImageType;
  startDate: string;
  isPresent: boolean;
  endDate?: string;
  description: string;
  technologies: string[];
};

export type ArticleType = {
  _id: string;
  _type: "article";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  articleName: string;
  link: string;
  articleIcon: SanityIconType;
};

export interface Profile {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  name: string;
  bio: string;
  school: string;
  currentJob: string;
  profileImage: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
}
