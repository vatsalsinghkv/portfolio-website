import {
  CTAType,
  ExperienceType,
  FeaturedProjectType,
  NavLinkType,
  ProjectType,
  SocialLinkType,
  // SoftwareSkillType is kept as it's used by components/skills/Skill.tsx via types/index.ts
  // Unused types (ExperienceType, FeaturedProjectType, ProjectType, SocialLinkType, NavLinkType, CTAType)
  // might also be candidates for removal if their respective content/components are fully gone
  // and not planned for re-purposing. For now, focusing on the explicitly listed section types.
  SoftwareSkillType,
  ExperienceType,        // Keep for now, Experience.ts was deleted, but ExperienceType itself might be generic
  FeaturedProjectType,   // Keep, used in FeaturedProjectsSectionType (aliased as FeaturedVideosSectionType)
  ProjectType,           // Keep, used in FeaturedProjectsSectionType
  SocialLinkType,        // Keep for now, Social.ts was deleted, but SocialLinkType might be generic
  NavLinkType,           // Keep, used in NavbarSectionType
  CTAType,               // Keep, used in NavbarSectionType & HeroSectionType
} from '.';

export interface Section {
  title: string;
}

export interface NavbarSectionType {
  navLinks: NavLinkType[];
  cta?: CTAType; // Made CTA optional as it was removed from navbar.ts content
}

export interface HeroSectionType extends Section {
  subtitle?: string;
  tagline: string;
  description?: string;
  specialText?: string;
  cta?: CTAType & {
    hideInDesktop?: boolean;
    sameTab?: boolean; // Added sameTab as it was used in hero.ts
  };
}

// AboutSectionType removed

// SkillType (internal alias) removed
// SkillsSectionType removed

// ExperienceSectionType removed

// ProjectsSectionType (for general projects) removed

export interface FeaturedProjectsSectionType extends Section {
  // Changed 'projects' to 'videos' to match featured-videos.ts content structure
  // Also, the items inside should match the video structure (id, name, description, img, genre, duration, url)
  // This might mean FeaturedProjectType needs adjustment or a new VideoItemType should be used.
  // For now, keeping 'projects: FeaturedProjectType[]' but noting this discrepancy.
  // In featured-videos.ts, this was aliased as FeaturedVideosSectionType and the array was named 'videos'.
  // The actual type of items in 'videos' array in featured-videos.ts is effectively ProjectType plus genre and duration.
  videos: FeaturedProjectType[]; // Or a more specific VideoType[]
}

// ContactSectionType removed

// SocialSectionType removed

// FooterSectionType (old one) removed
// The new footer structure is defined inline in footer.ts
