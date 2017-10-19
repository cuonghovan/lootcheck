import React from 'react';
import { Observable } from 'rxjs';
import ReduxTdd from 'redux-tdd';

import SearchBar from './../../views/components/search-bar';
import WeatherInfo from './../../views/components/weather-info';
import { weatherActions } from './actions';
import { weatherReducer } from './reducer';

describe('<Weather />', () => {
    it('should test flow', () => {
        const fetchWeatherInfoMock = jest.fn(payload => weatherActions.fetchWeatherInfo(payload));
        ReduxTdd({}, state => shallow(
            <SearchBar />
        ))
        .view()
            .contains(<input />)
            .contains(<button>Search</button>)
            // .simulate(wrapper => wrapper.find('button').simulate('click'))
    });
})
