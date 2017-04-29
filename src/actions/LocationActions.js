export const actionTypes = {
	fetchLocations: 'FETCH_LOCATIONS',
}

export const fetchLocations = () => {
	return {
		type: actionTypes.fetchLocations,
	}
}