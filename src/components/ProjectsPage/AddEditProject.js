import { useEffect, useState } from 'react';
import ProjectForm from './ProjectForm';
import { getProject, createProject, UpdateProject } from '../../functions/Api';

const AddEditProject = (props) => {
  const [project, setProject] = useState(null);
  useEffect(() => {
    if (props.match.params.id) {
      getProject(localStorage.getItem('token'), props.match.params.id).then((res) => {
        setProject(res.data);
      }).catch((e) => {
        // add redirect
        console.log(e);
      });
    }
  }, []);

  const renderHelper = () => {
    console.log(project);
    if (project) {
      return <ProjectForm project={project} ActionMethod={UpdateProject} ActionBtn="Update" />;
    }
    return <ProjectForm ActionMethod={createProject} ActionBtn="Create" />;
  };

  return renderHelper();
};

export default AddEditProject;
