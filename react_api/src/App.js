import React from "react";
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
      return <div>Loading ...</div>;
    } else {
      return (
        <div className='App'>
          <ul>
            {items.map(item => {
              return (
                <li key={item.id}>
                  {item.name}| {item.email}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}

export default App;
