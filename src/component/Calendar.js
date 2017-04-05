import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(
	BigCalendar.momentLocalizer(moment)
);

class Calendar extends Component {

	render() {
		const myEventsList = [
			{
				'title': 'DTS ENDS',
				'start': new Date(2017, 3, 6, 0, 0, 0),
				'end': new Date(2017, 3, 6, 14, 0, 0)
			},
			{
				'title': 'Some Event',
				'start': new Date(2017, 3, 9, 0, 0, 0),
				'end': new Date(2017, 3, 9, 0, 0, 0)
			},
			{
				'title': 'Trip',
				'start': new Date(),
				'end': new Date(),
				'id': 12345
			}
		]

		return (
			<div style={{ height: 'calc(100% - 100px)', padding: '0 50px', boxSizing: 'border-box' }}>
				<BigCalendar
					events={myEventsList}
					startAccessor='start'
					endAccessor='end'
					defaultDate={new Date()}
					onSelecting={(event, e) => { console.log('event', event)}}
					onSelectSlot={(event) => { console.log('slot selected', event)}}
				/>
			</div>
		)
	}
}

export default Calendar