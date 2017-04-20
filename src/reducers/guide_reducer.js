import { combineReducers } from 'redux'
import { actionTypes } from '../actions/GuideActions'

const defaultGuides = [
	{
		id: 1,
		name: 'Mike Howe',
		emails: [
			'Mike@hoesfishing.com',
			'Cindy@howesfishing.com'
		],
		phones: [
			14062490556,
			14062496345
		]
	},
	{
		id: 2,
		name: 'Clay Anderson',
		emails: [
			'anderson.clayw@gmail.com',
			'anderson.kaylajo@gmail.com'
		],
		phones: [
			14063145529,
			14063143535
		]
	},
	{
		id: 3,
		name: 'Pat Campanella',
		emails: [
			'patcampanella@gmail.com',
			'tobicampanella@gmail.com'
		],
		phones: [
			14068718244,
			14068719834
		]
	},
	{
		id: 4,
		name: 'Jr. Garrison',
		emails: [
			'wjrgarrison@gmail.com',
			'tammy_heftved2010@yahoo.com'
		],
		phones: [
			14062121462,
			14064717272
		]
	},
	{
		id: 5,
		name: 'Matt McComb',
		emails: [
			'jourdansean@gmail.com'
		],
		phones: [
			14062616980,
			14062129784
		]
	},
	{
		id: 6,
		name: 'Tom Cobianco',
		emails: [
			'tomsueco14@gmail.com'
		],
		phones: [
			14062530547,
		]
	},
	{
		id: 7,
		name: 'Chris Mischke',
		emails: [
			'bigskyfishingcharters@gmail.com',
			'bonnieblue@centurytel.net'
		],
		phones: [
			14062701649,
			14062492494
		]
	},
	{
		id: 8,
		name: 'Jason Mundel',
		emails: [
			'rippnlippsguideservice@gmail.com'
		],
		phones: [
			14062127153,
			14062533028
		]
	}
]

const guides = (state = defaultGuides, action) => {
	switch (action.type) {
		default:
			return state
	}
}
const currentGuide = (state = null, action) => {
	switch (action.type) {
		case actionTypes.setCurrentGuide :
			return action.payload
		default:
			return state
	}
}

const guideReducer = combineReducers({
	guides,
	currentGuide
})

export default guideReducer
