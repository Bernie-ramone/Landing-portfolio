import { useState } from "react";
import { projects, type Project } from "../../data/projects";
import { PlayIcon } from "../ui/icons";
import { SectionHeader } from "../ui/SectionHeader";
import { TextLink } from "../ui/TextLink";
import { ProjectDialog } from "./ProjectDialog";
import styles from "./FeaturedWork.module.css";

export function FeaturedWork() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className={styles.section} aria-labelledby="work-title">
      <div className="container">
        <SectionHeader
          title="Featured work"
          titleId="work-title"
          action={<TextLink href="#work">View all projects</TextLink>}
        />

        <ul className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelected}
            />
          ))}
        </ul>
      </div>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <li>
      <button
        type="button"
        className={styles.thumb}
        aria-haspopup="dialog"
        aria-label={`Open ${project.title}`}
        onClick={() => onOpen(project)}
      >
        <img src={project.image} alt="" />
        <span className={styles.play} aria-hidden="true">
          <PlayIcon />
        </span>
      </button>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.category}>{project.category}</p>
    </li>
  );
}
