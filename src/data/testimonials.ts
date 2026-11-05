import avatar1 from "../assets/images/avatar-1.jpg";
import avatar2 from "../assets/images/avatar-2.jpg";
import avatar3 from "../assets/images/avatar-3.jpg";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "maya",
    quote:
      "Rhea is a rare blend of artistic vision and technical skill. Her work elevates every project she touches.",
    name: "Maya Elson",
    role: "Creative Director",
    company: "Nebula Studio",
    avatar: avatar1,
  },
  {
    id: "jordan",
    quote:
      "Super collaborative, fast, and endlessly creative. Rhea brings ideas to life we didn't even know were possible.",
    name: "Jordan Pierce",
    role: "Founder",
    company: "Drift Labs",
    avatar: avatar2,
  },
  {
    id: "alex",
    quote:
      "The attention to detail and storytelling in her animations is next level. A true professional.",
    name: "Alex Morgan",
    role: "Marketing Lead",
    company: "Voltware",
    avatar: avatar3,
  },
];
