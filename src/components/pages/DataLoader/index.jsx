import React from 'react';
import DataProvider from '../../DataProvider';

class DataLoader extends React.Component {
  render() {
    return (
      <div>
        <DataProvider
          loadData={() => {
            return fetch('/users.json').then(res => res.json());
          }}
        >
      
          {
            data => {
              return (<ul>
                { data.map( d => <li>{d.name}</li>)}
              </ul>)
            }
          }
          
        </DataProvider>

        <DataProvider
          loadData={() => {
            return fetch('/phones.json').then(res => res.json());
          }}
        >
      
          {
            data => {
              return (<ol>
                { data.map( d => <li>{ d.model } - {d.price }</li>)}
              </ol>)
            }
          }
          
        </DataProvider>
      </div>
    );
  }
}

export default DataLoader;
