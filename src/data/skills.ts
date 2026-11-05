export type Skill = {
  name: string;
  level: number;
};

export const SKILL_MAX = 7;

export const skills: Skill[] = [
  { name: "After Effects", level: 7 },
  { name: "Cinema 4D", level: 6 },
  { name: "Blender", level: 5 },
  { name: "TouchDesigner", level: 5 },
  { name: "JavaScript / p5.js", level: 5 },
  { name: "Figma", level: 6 },
  { name: "Illustrator", level: 6 },
];
