import React from 'react';
import { shallow } from 'enzyme';

import UsersList from '../UsersList';
import renderer from 'react-test-renderer';

const users = [
    {
        'active': true,
        'email': 'argipapaefstathiou@gmail.com',
        'id': 1,
        'username': 'argi'
    },
    {
        'active': true,
        'email': 'jodi@gmail.com',
        'id': 2,
        'username': 'jodi'
    }
];

test('UsersList renders properly', () => {
    const wrapper = shallow(<UsersList users={users}/>);
    const element = wrapper.find('h4');
    expect(element.length).toBe(2);
    expect(element.get(0).props.className).toBe('well');
    expect(element.get(0).props.children).toBe('argi');
});

test('UsersList renders a snapshot properly', () => {
    const tree = renderer.create(<UsersList users={users}/>).toJSON();
    expect(tree).toMatchSnapshot();
});