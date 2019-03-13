import React from 'react';

import FoodGridView from './grid_view'
import AfterSearchView from './aftersearch_view'

export default class FoodDisplay extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data: null
        };
      }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/getDishesByIngredientsDemo', {
            method: 'GET',
            headers: {
              'Accept': 'application/json'
            },
            mode: 'cors',
          }).then(response => {
              console.log(response);
              return response.json()
            })
            .then(data => {
                this.setState({ 
                    data: data
                })
                console.log(this.state);
            });
    }

    render() {
        if (this.state.data !== null) {
            return (
                <div>
                    <AfterSearchView />
                    <FoodGridView data={this.state.data}/>
                </div>
            );
        } else {
            return (
                <div>
                    <AfterSearchView />
                </div>
            )
        }
      }
}