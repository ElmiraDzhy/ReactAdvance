import React  from 'react';
import Tree from './components/Tree';
import { UserContext } from './contexts';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        name: 'test',
        surname: 'testovich',
        avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
      }
    }
  }
  

  render() {
    const { user } = this.state;
    return (
      <UserContext.Provider value={user}>
          <Tree />
      </UserContext.Provider>)
  }
}

export default App;

