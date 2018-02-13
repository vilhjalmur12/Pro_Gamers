import React from 'react';
//import newsService from '../../service/newsService';
import ListViewItem from '../ListViewItem/ListViewItem';

class ListView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: [
              {
                id: 1,
                title: 'Zombie apocalypse!',
                shortDescription: 'A zombie apocalypse has broken loose!',
                category: 'world'
              },
              {
                id: 2,
                title: 'BitCoin has dropped!',
                shortDescription: 'BitCoin took a steep dip this morning going from $8000 to $100.',
                category: 'financial'
              },
              {
                id: 3,
                title: 'PSS has announced it debut',
                shortDescription: 'Sony has annonced the new PSS!',
                category: 'technology'
              }
            ]
        };
    }
    render() {
        return (
            <ul className="list-view">
                {this.state.news.map((newsItem) => {
                    return <ListViewItem info={newsItem} />;
                })}
            </ul>
        )
    }
}

export default ListView;
