import React from "react";
import { Card, Segment, Dimmer, Loader } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

const url = "https://jsonplaceholder.typicode.com/users";

class App extends React.Component {
  state = {
    items: [],
    isLoaded: false
  };

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return (
        <Dimmer active>
          <Loader content='Loading' />
        </Dimmer>
      );
    } else {
      return (
        <div className='App'>
          <Segment>
            <Card.Group itemsPerRow={4}>
              {items.map(item => {
                return (
                  <Card
                    color='red'
                    key={item.id}
                    header={`${item.name} ${" "} ${item.email}`}
                    meta={item.username}
                    description={`Address: ${item.address.street} ${
                      item.address.suite
                    }`}
                  />
                );
              })}
            </Card.Group>
          </Segment>
        </div>
      );
    }
  }
}

export default App;
