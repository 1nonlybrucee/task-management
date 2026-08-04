import { useEffect, useState } from "react";
import { projectService } from "../services/projectService";
import type { Project } from "../types/project";
import CreateProjectForm from "../components/CreateProjectForm";
import Modal from "../components/ui/Modal";
import ProjectsList from "../components/ProjectsList";
import AddProjectButton from "../components/AddProjectButton";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(
    projectService.getProjects(),
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  useEffect(() => {
    if (projects.length === 0) {
      setIsModalOpen(true);
    }
  }, []);
  return (
    <>
      <div className="flex">
        <ProjectsList projects={projects} onDelete={handleDelete} />
        <AddProjectButton onClick={openModal} />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <CreateProjectForm onCreate={handleCreateProject} />
      </Modal>
    </>
  );
}
