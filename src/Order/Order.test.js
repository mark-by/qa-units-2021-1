import React from 'react'
import {shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Order from "./Order";
import {fakeOrders} from "../data/fakeOrders";

jest.mock('../utils/getDate');
/* eslint-disable import/first */
import {getDate} from '../utils/getDate';

configure({adapter: new Adapter()});

describe('Order.js', () => {
    beforeEach(() => {
        getDate.mockReturnValue('11 марта, чт, 2021 год');
    })

    afterEach(() => {
        jest.resetAllMocks();
    })

    it('right render', () => {
        const wrapper = shallow(<Order order={fakeOrders[0]}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('render without items', () => {
        const wrapper = shallow(<Order order={
            {
                id: 123,
                date: 1544356800000,
                shop: 'Alihandro Express',
            }
        }/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('render without shop', () => {
        const wrapper = shallow(<Order order={
            {
                id: 1,
                date: 1544356800000,
                items: [
                    'item1',
                    'item2'
                ]
            }
        }/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('render without order', () => {
        const wrapper = shallow(<Order/>);
        expect(wrapper).toMatchSnapshot();
    });
});

