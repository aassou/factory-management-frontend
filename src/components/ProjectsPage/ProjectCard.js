import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const ProjectCard = ({ project }) => {
  const [showLinks, setShowLinks] = useState(false);
  const ProjectLinks = (links) => {
    if (links) {
      return (
        <div className="
                bg-white d-flex flex-column
                position-absolute z-index-10 top-100 start-0 w-75 shadow"
        >
          <Link className="text-dark m-2" to={`/projets/${project.id}/gestion`}>Gestion du projet</Link>
          <Link className="text-dark m-2" to="/projets/contrac">Contrat de Construction</Link>
          <Link className="text-dark m-2" to={`/projets/${project.id}/update`}>Modifier</Link>
        </div>
      );
    }
  };

  // hide list of links when click outside the component

  const DetectClickOuside = (ref) => {
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setShowLinks(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };
  const myref = useRef(null);
  DetectClickOuside(myref);

  return (
    <div ref={myref} className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3 pe-2 position-relative px-0" key={project.id}>
      <div
        className={`${showLinks ? 'n-blue-card' : 'darkblue-card'}
        px-2 py-3 text-center rounded clickable`}
        onClick={() => { setShowLinks(!showLinks); }}
      >
        <h4 className="text-uppercase m-0">
          {project.name}
          {' '}
        </h4>
      </div>
      {ProjectLinks(showLinks)}
    </div>
  );
};

export default ProjectCard;
