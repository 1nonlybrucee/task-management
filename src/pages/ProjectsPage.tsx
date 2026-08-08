import { useState } from "react";
import { projectService } from "../services/projectService";
import type { Project } from "../types/project";
import CreateProjectForm from "../components/CreateProjectForm";
import Modal from "../components/ui/Modal";
import ProjectsList from "../components/ProjectsList";
import EditProjectForm from "../components/EditProjectForm";
import EmptyProjects from "../components/EmptyProject";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(
    projectService.getProjects(),
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toEdit, setToEdit] = useState<Project | undefined>(undefined);

  const handleEdit = (id: string) => {
    const project = projects.find((project) => project.id === id);

    if (!project) return;

    setToEdit(project);
    setIsModalOpen(true);
  };

  const editProject = (updatedProject: Project) => {
    projectService.update(updatedProject.id, updatedProject.name);

    setProjects((prev) =>
      prev.map((project) =>
        project.id === updatedProject.id ? updatedProject : project,
      ),
    );

    setToEdit(undefined);
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    projectService.delete(id);

    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const handleCreateProject = (name: string) => {
    const newProject = projectService.create(name);

    setProjects((prev) => [...prev, newProject]);
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="h-full min-h-0">
        {projects.length === 0 ? (
          <EmptyProjects onCreateProject={openModal} />
        ) : (
          <ProjectsList
            projects={projects}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onAdd={openModal}
          />
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {toEdit ? (
          <EditProjectForm
            key={toEdit.id}
            project={toEdit}
            onSave={editProject}
          />
        ) : (
          <CreateProjectForm onCreate={handleCreateProject} />
        )}
      </Modal>
    </>
  );
}
