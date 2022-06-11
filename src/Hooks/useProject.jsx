import { useState, useEffect } from "react";
const useProject = (id) => {
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch(`https://whispering-dawn-97364.herokuapp.com/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [project]);
  return [project, setProject];
};
export default useProject;
