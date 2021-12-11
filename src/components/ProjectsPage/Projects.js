import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProjects } from '../../functions/Api';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    getAllProjects(localStorage.getItem('token')).then((res) => {
      setProjects(res.data);
    }).catch((e) => {
      console.log(e);
    });
  }, []);
  const getNumberOFProjects = (projects) => {
    if (projects) {
      return projects.length;
    }
  };
  const renderHelper = (projects) => {
    if (projects) {
      const res = projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ));
      return res;
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-between bg-light">
        <h4 className="m-4 ms-0">
          {getNumberOFProjects(projects)}
          {' '}
          projets
        </h4>
        <Link className="btn bg-light-blue text-white m-4 me-0" to="/projets/create">Ajouté un projet</Link>
      </div>
      <div className="pb-5 row border-bottom border-2 ">
        {renderHelper(projects)}
      </div>
    </div>
  );
};

export default Projects;
