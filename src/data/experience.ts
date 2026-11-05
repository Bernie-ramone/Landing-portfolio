export type Job = {
  id: string;
  period: string;
  role: string;
  company: string;
  summary: string;
  current?: boolean;
};

export const jobs: Job[] = [
  {
    id: "nebula",
    period: "2021 – Present",
    role: "Senior motion designer",
    company: "Nebula Studio",
    summary:
      "Leading motion and interactive projects for global brands and startups.",
    current: true,
  },
  {
    id: "echo",
    period: "2018 – 2021",
    role: "Motion designer",
    company: "Echo Creative",
    summary:
      "Crafted compelling animations and visual content across platforms.",
  },
  {
    id: "playground",
    period: "2016 – 2018",
    role: "Junior designer",
    company: "Playground Collective",
    summary: "Supported creative direction and developed motion graphics.",
  },
];
