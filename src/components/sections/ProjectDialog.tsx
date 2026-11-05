import { useEffect, useRef } from "react";
import type { Project } from "../../data/projects";
import { PlusIcon } from "../ui/icons";
import styles from "./ProjectDialog.module.css";

type ProjectDialogProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  const closeDialog = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDialog();
      }}
    >
      {project && (
        <>
          <img src={project.image} alt="" className={styles.image} />
          <div className={styles.body}>
            <p className={styles.meta}>
              {project.category} · {project.year}
            </p>
            <h2 id="project-dialog-title" className={styles.title}>
              {project.title}
            </h2>
            <p className={styles.summary}>{project.summary}</p>
          </div>
          <button type="button" className={styles.close} onClick={closeDialog}>
            <PlusIcon />
            <span className="sr-only">Close</span>
          </button>
        </>
      )}
    </dialog>
  );
}
