import { LucideIcon } from "lucide-react";

export interface Resource {
  label: string;
  href: string;
}

export interface ModuleTopic {
  id: string;
  label: string;
}

export interface PracticeProject {
  label: string;
  description: string;
}

export interface RoadmapModule {
  week: number;
  id: string;
  title: string;
  duration: string;
  icon: LucideIcon;
  topics: string[];
  projects: string[];
  resources: Resource[];
  outcome: string;
  color: string;
}

export interface Roadmap {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  stats: {
    duration: string;
    focus: string;
    level: string;
  };
  modules: RoadmapModule[];
}
