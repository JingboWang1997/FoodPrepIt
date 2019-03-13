import React from 'react';

import FoodGridView from '../views/grid_view'
import AfterSearchView from '../views/aftersearch_view'

export default class FoodDisplay extends React.Component {

    render() {
        return (
            <div>
                <AfterSearchView />
                <FoodGridView />
            </div>
        );
      }
}