import axios from 'axios'

export const howesFishingClient = axios.create({ //all axios can be used, shown in axios documentation
	baseURL:'http://45.55.2.165',
	responseType: 'json',
	headers: {'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4Y2RhMmU2NGExZDY0NjY0ZDM5ZDA1MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTQ4OTg3MTU5MCwiZXhwIjoxNDk3MDcxNTkwfQ.WsO1amERJklG_fjakG0f4zMVQYRjr_Mpufw4a3PJBTE"}
});
