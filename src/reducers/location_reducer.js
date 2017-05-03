import { combineReducers } from 'redux'
import { actionTypes } from '../actions/LocationActions'

const defaultLocations = [
	{
		name: 'N/A',
		id: 'N/A',
		directions: ''
	},
	{
		name: 'Bigfork',
		id: 'BIGFORK',
		directions: 'We are located in Bigfork at the Marina Cay Resort, 180 Vista Lane. Off of Hwy. 35 turn East on Grand Ave/Holt Dr. Continue on to the school and Grand will curve right, you will see a marked cross walk and the entrance to Marina Cay Resort. Drive all the way down till you see the boats and park anywhere available. (Enter the docks by the shack just past the office and at the end of the second dock you will find your boat & captain.'
	},
	{
		name: 'West Shore',
		id: 'WEST_SHORE',
		directions: 'This time of year due to lake water levels, we will depart from West Shore State Park, 17768 US Hwy. 93, Lakeside.  West Shore is located on Hwy. 93, mile marker 93, about 30 miles North of Polson and 20 miles South of Kalispell.  Once in the park, drive all the way to the water and to your right is parking. There is a map on our home page where you can zoom in for a more clear direction.  Just click on the red marker South of lakeside.'
	},
	{
		name: 'Lakeside - Marina',
		id: 'LAKESIDE_MARINA',
		directions: 'We are located at the Lakeside Marina, 7135 Hwy 93 S, in Lakeside.'
	},
	{
		name: 'Lakeside - Pat',
		id: 'LAKESIDE_PAT',
		directions: 'Hwy. 93 will bring you to our boat in Lakeside.  In Lakeside we are at 688 Lakeside Blvd, not at the Marina.  South of the Marina turn East on Adams Street at the marked cross walk (you will see “By the Lake Realty” &amp; “Volunteer Park”).  The road turns right onto Lakeside Blvd.  Six houses on the right you will see an A Frame house (Park there).  The boat is across from the A Frame house and your Captain will be Pat. There is a map on our home page where you can zoom in on Lakeside for a more clear direction.'
	}
]

const locations = (state = [], action) => {
	switch (action.type) {
		case actionTypes.fetchLocationsSuccess:
			return action.payload.data
		default:
			return state
	}
}

export default combineReducers({
	locations,
})
