import React from 'react';
//import newsService from '../../service/newsService';

class ListView extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="list-view"></ul>
    )
  }
}

export default ListView;
