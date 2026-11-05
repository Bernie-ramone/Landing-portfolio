import work1 from "../assets/images/work-1.jpg";
import work2 from "../assets/images/work-2.jpg";
import work3 from "../assets/images/work-3.jpg";
import work4 from "../assets/images/work-4.jpg";

export type Project = {
  id: string;
  title: string;
  category: string;
  year: number;
  summary: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "future-human",
    title: "Future human",
    category: "Title sequence",
    year: 2025,
    summary:
      "An opening title sequence blending scanned portraits with generative geometry, built for a sci-fi anthology series.",
    image: work1,
  },
  {
    id: "nexus",
    title: "Nexus",
    category: "Brand film",
    year: 2024,
    summary:
      "A 60-second brand film for an architecture studio, translating their design principles into rhythm, light, and form.",
    image: work2,
  },
  {
    id: "lunar-paths",
    title: "Lunar paths",
    category: "Interactive experience",
    year: 2024,
    summary:
      "A browser-based journey across the moon, where scrolling drives the camera and ambient sound reacts to the terrain.",
    image: work3,
  },
  {
    id: "voltage",
    title: "Voltage",
    category: "Product explainer",
    year: 2023,
    summary:
      "An animated explainer for an energy startup, turning a complex battery system into a clear two-minute story.",
    image: work4,
  },
];
