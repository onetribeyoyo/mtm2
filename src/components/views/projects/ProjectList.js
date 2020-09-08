import * as React from "react";
import { Card } from "semantic-ui-react";

const projects = [
  {
    header: "Project XYZ",
    description: "blah blah blahbitty blah",
    meta: "some details"
  }
];

const ProjectList = () => <Card.Group items={projects} />;

export default ProjectList;
