import "./App.css";

import React from "react";
import { Button, Card, Divider, Header, Icon, List } from "semantic-ui-react";

import { ProjectList } from "components/views/projects/ProjectList";

class ProjectCard extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <Card>
        <Card.Content header="{product.header}" />
        <Card.Content description="{product.description}" />
        <Card.Content extra>
          <List bulleted size="tiny">
            <List.Item> Priority </List.Item>
            <List.Item> Marketing </List.Item>
          </List>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Story Map
            </Button>
            <Button basic color="red">
              Configuration
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

const items = [
  { header: "Project XYZ", description: "summary description." },
  { header: "Project PDQ", description: "summary description." },
  { header: "Project ABC", description: "summary description." }
];

const CardExampleGroupProps = () => <Card.Group items={items} />;

function App() {
  return (
    <div className="App">
      <Header as="h1">
        MTM
        <sub>
          <small>2</small>
        </sub>
      </Header>
      <Divider />
      <Card.Group centered>
        <Card>
          <Card.Content header="Project XYZ" />
          <Card.Content description="summary description" />
          <Card.Content extra>
            <List bulleted size="tiny">
              <List.Item> Priority </List.Item>
              <List.Item> Marketing </List.Item>
            </List>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Story Map
              </Button>
              <Button basic color="red">
                Configuration
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content header="Project PDQ" />
          <Card.Content description="summary description" />
          <Card.Content extra>
            <List bulleted size="tiny">
              <List.Item> Priority </List.Item>
              <List.Item> Marketing </List.Item>
            </List>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Story Map
              </Button>
              <Button basic color="red">
                Configuration
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content header="Project ABC" />
          <Card.Content description="summary description" />
          <Card.Content extra>
            <List bulleted size="tiny">
              <List.Item> Priority </List.Item>
              <List.Item> Marketing </List.Item> <List.Item> Team </List.Item>
              <List.Item> Status </List.Item>
            </List>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Story Map
              </Button>
              <Button basic color="red">
                Configuration
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
      <Divider />
      <Button icon labelPosition="left">
        <Icon name="plus" />
        New Map
      </Button>
    </div>
  );
}

export default App;
