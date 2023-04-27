import React from 'react';
import Spinner from '../UserList/Spinner';

class DataProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      isfetching: true,
    };
  }

  componentDidMount = () => {
    this.props
      .loadData()
      .then(data =>
        this.setState({
          data: data,
        })
      )
      .catch(e => {
        this.setState({
          error: e,
        });
      })
      .finally(
        this.setState({
          isFetching: false,
        })
      );
  };

  render() {

    const { error, isFetching, data } = this.state;

    return (
      <>
        {error && <div>OOPs</div>}
        {isFetching && <Spinner />}
        {this.props.children(data)}
      </>
    );
  }
}

export default DataProvider;
