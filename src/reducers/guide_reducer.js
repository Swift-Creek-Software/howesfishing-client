import { combineReducers } from 'redux'

const defaultGuides = [
	{
		id: 1,
		name: 'Mike Howe'
	},
	{
		id: 2,
		name: 'Clay Anderson'
	},
	{
		id: 3,
		name: 'Pat Campanella'
	}
]

const guides = (state = defaultGuides, action) => {
	switch (action.type) {
		default:
			return state
	}
}
const guideReducer = combineReducers({
	guides,
})

export default guideReducer
