import React from 'react';
import { shallow } from 'enzyme';
import mockdate from 'mockdate';
import obj from '../app/components/calendarGrid';
import ReservationData from './test_data/reservationData';

const { CalendarGrid, getActualDate, getDateClass } = obj;

describe('<CalendarGrid /> Component', () => {
  beforeAll(() => {
    mockdate.set('1/1/2018');
  });

  it('Passing in a check in and check out date should render with dates selected', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<CalendarGrid
      onDateClick={mockFunc}
      dates={{
        checkInDate: ReservationData['0-2018'][2],
        checkOutDate: ReservationData['0-2018'][3],
        lastPossibleCheckInDate: ReservationData['0-2018'][2],
        lastPossibleCheckOutDate: ReservationData['0-2018'][5],
      }}
      reservationData={ReservationData['0-2018']}
      checkInActive={false}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('ActualDate method should return date object represented by the input month, day, and year', () => {
    expect(getActualDate({
      day: 2,
      month: 5,
      year: 2018,
    })).toEqual(new Date('5/2/2018'));
  });

  it('getDateClass method should return date-selected when input day is a check in or check out date', () => {
    expect(getDateClass(2, ReservationData['0-2018'], {
      checkInDate: ReservationData['0-2018'][2],
      checkOutDate: ReservationData['0-2018'][3],
      lastPossibleCheckInDate: ReservationData['0-2018'][2],
      lastPossibleCheckOutDate: ReservationData['0-2018'][5],
    }, true)).toBe('date-selected');
    expect(getDateClass(3, ReservationData['0-2018'], {
      checkInDate: ReservationData['0-2018'][2],
      checkOutDate: ReservationData['0-2018'][3],
      lastPossibleCheckInDate: ReservationData['0-2018'][2],
      lastPossibleCheckOutDate: ReservationData['0-2018'][5],
    }, true)).toBe('date-selected');
  });

  it('getDateClass method should return between-selected when day is between check in and check out date', () => {
    expect(getDateClass(3, ReservationData['0-2018'], {
      checkInDate: ReservationData['0-2018'][2],
      checkOutDate: ReservationData['0-2018'][5],
      lastPossibleCheckInDate: ReservationData['0-2018'][2],
      lastPossibleCheckOutDate: ReservationData['0-2018'][5],
    }, true)).toBe('between-selected');
  });

  it('getDateClass method should return between-selected when day is between check in and check out date', () => {
    expect(getDateClass(3, ReservationData['0-2018'], {
      checkInDate: ReservationData['0-2018'][2],
      checkOutDate: ReservationData['0-2018'][5],
      lastPossibleCheckInDate: ReservationData['0-2018'][2],
      lastPossibleCheckOutDate: ReservationData['0-2018'][5],
    }, false)).toBe('between-selected');
  });

  it('getDateClass method should return not available for any dates prior to check in date if check out is active', () => {
    expect(getDateClass(1, ReservationData['0-2018'], {
      checkInDate: ReservationData['0-2018'][2],
      checkOutDate: ReservationData['0-2018'][5],
      lastPossibleCheckInDate: ReservationData['0-2018'][0],
      lastPossibleCheckOutDate: ReservationData['0-2018'][5],
    }, false)).toBe('not-available');
    expect(getDateClass(0, ReservationData['0-2018'], {
      checkInDate: ReservationData['0-2018'][2],
      checkOutDate: ReservationData['0-2018'][5],
      lastPossibleCheckInDate: ReservationData['0-2018'][0],
      lastPossibleCheckOutDate: ReservationData['0-2018'][5],
    }, false)).toBe('not-available');
  });

  it('getDateClass method should return available for any dates prior to check in date that are available if check in is active', () => {
    expect(getDateClass(1, ReservationData['0-2018'], {
      checkInDate: ReservationData['0-2018'][7],
      checkOutDate: ReservationData['0-2018'][8],
      lastPossibleCheckInDate: ReservationData['0-2018'][5],
      lastPossibleCheckOutDate: ReservationData['0-2018'][8],
    }, true)).toBe('not-available');
    expect(getDateClass(6, ReservationData['0-2018'], {
      checkInDate: ReservationData['0-2018'][7],
      checkOutDate: ReservationData['0-2018'][8],
      lastPossibleCheckInDate: ReservationData['0-2018'][5],
      lastPossibleCheckOutDate: ReservationData['0-2018'][8],
    }, true)).toBe('');
  });

  it('getDateClass method should return not available for any dates greater than last possible check out if check out is active', () => {
    expect(getDateClass(6, ReservationData['0-2018'], {
      checkInDate: ReservationData['0-2018'][2],
      checkOutDate: ReservationData['0-2018'][5],
      lastPossibleCheckInDate: ReservationData['0-2018'][0],
      lastPossibleCheckOutDate: ReservationData['0-2018'][5],
    }, false)).toBe('not-available');
    expect(getDateClass(7, ReservationData['0-2018'], {
      checkInDate: ReservationData['0-2018'][2],
      checkOutDate: ReservationData['0-2018'][5],
      lastPossibleCheckInDate: ReservationData['0-2018'][0],
      lastPossibleCheckOutDate: ReservationData['0-2018'][5],
    }, false)).toBe('not-available');
    expect(getDateClass(8, ReservationData['0-2018'], {
      checkInDate: ReservationData['0-2018'][2],
      checkOutDate: ReservationData['0-2018'][5],
      lastPossibleCheckInDate: ReservationData['0-2018'][0],
      lastPossibleCheckOutDate: ReservationData['0-2018'][5],
    }, false)).toBe('not-available');
  });

  it('getDateClass method should return not available for any dates greater than last possible check out if check in is active', () => {
    expect(getDateClass(6, ReservationData['0-2018'], {
      checkInDate: ReservationData['0-2018'][2],
      checkOutDate: ReservationData['0-2018'][5],
      lastPossibleCheckInDate: ReservationData['0-2018'][0],
      lastPossibleCheckOutDate: ReservationData['0-2018'][5],
    }, true)).toBe('not-available');
    expect(getDateClass(7, ReservationData['0-2018'], {
      checkInDate: ReservationData['0-2018'][2],
      checkOutDate: ReservationData['0-2018'][5],
      lastPossibleCheckInDate: ReservationData['0-2018'][0],
      lastPossibleCheckOutDate: ReservationData['0-2018'][5],
    }, true)).toBe('not-available');
    expect(getDateClass(8, ReservationData['0-2018'], {
      checkInDate: ReservationData['0-2018'][2],
      checkOutDate: ReservationData['0-2018'][5],
      lastPossibleCheckInDate: ReservationData['0-2018'][0],
      lastPossibleCheckOutDate: ReservationData['0-2018'][5],
    }, true)).toBe('not-available');
  });

  it('getDateClass method should return available for dates where the day before is available, checkOut is active, and no check in is selected', () => {
    expect(getDateClass(5, ReservationData['0-2018'], {
      checkInDate: undefined,
      checkOutDate: ReservationData['0-2018'][8],
      lastPossibleCheckInDate: ReservationData['0-2018'][6],
      lastPossibleCheckOutDate: undefined,
    }, false)).toBe('');
  });

  it('getDateClass method should return not-available for dates where the day before is not available, checkOut is active, and no check in is selected', () => {
    expect(getDateClass(6, ReservationData['0-2018'], {
      checkInDate: undefined,
      checkOutDate: ReservationData['0-2018'][8],
      lastPossibleCheckInDate: ReservationData['0-2018'][6],
      lastPossibleCheckOutDate: undefined,
    }, false)).toBe('not-available');
    expect(getDateClass(6, ReservationData['0-2018'], {
      checkInDate: undefined,
      checkOutDate: undefined,
      lastPossibleCheckInDate: undefined,
      lastPossibleCheckOutDate: undefined,
    }, false)).toBe('not-available');
  });

  it('getDateClass method should return available when it is first day of month and day before is available, checkOut is active, and no check in selected', () => {
    expect(getDateClass(0, ReservationData['1-2018'], {
      checkInDate: undefined,
      checkOutDate: undefined,
      lastPossibleCheckInDate: undefined,
      lastPossibleCheckOutDate: undefined,
    }, false, ReservationData['0-2018'][30])).toBe('');
    expect(getDateClass(0, ReservationData['1-2018'], {
      checkInDate: undefined,
      checkOutDate: ReservationData['1-2018'][7],
      lastPossibleCheckInDate: ReservationData['1-2018'][6],
      lastPossibleCheckOutDate: undefined,
    }, false, ReservationData['0-2018'][30])).toBe('');
  });

  it('getDateClass method should return not-available when it is first day of month and day before is not-available, checkOut is active, and no check in selected', () => {
    expect(getDateClass(0, ReservationData['1-2018'], {
      checkInDate: undefined,
      checkOutDate: undefined,
      lastPossibleCheckInDate: undefined,
      lastPossibleCheckOutDate: undefined,
    }, false, ReservationData['0-2018'][25])).toBe('not-available');
    expect(getDateClass(0, ReservationData['1-2018'], {
      checkInDate: undefined,
      checkOutDate: ReservationData['1-2018'][7],
      lastPossibleCheckInDate: ReservationData['1-2018'][6],
      lastPossibleCheckOutDate: undefined,
    }, false, ReservationData['0-2018'][25])).toBe('not-available');
  });

  it('getDateClass method should return not-available when it is first day of month and day before is undefined, checkOut is active, and no check in selected', () => {
    expect(getDateClass(0, ReservationData['1-2018'], {
      checkInDate: undefined,
      checkOutDate: undefined,
      lastPossibleCheckInDate: undefined,
      lastPossibleCheckOutDate: undefined,
    }, false, undefined)).toBe('not-available');
    expect(getDateClass(0, ReservationData['1-2018'], {
      checkInDate: undefined,
      checkOutDate: ReservationData['1-2018'][7],
      lastPossibleCheckInDate: ReservationData['1-2018'][6],
      lastPossibleCheckOutDate: undefined,
    }, false, undefined)).toBe('not-available');
  });

  it('getDateClass method should return not-available when day is unavailable, check in is active, land astPossibleCheckIn/Out are both undefined', () => {
    expect(getDateClass(6, ReservationData['1-2018'], {
      checkInDate: undefined,
      checkOutDate: undefined,
      lastPossibleCheckInDate: undefined,
      lastPossibleCheckOutDate: undefined,
    }, true)).toBe('not-available');
  });
});
