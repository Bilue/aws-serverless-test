import { HttpClient } from '../utils/httpClient'
import { handler } from '../handlers/weather';

const mockEvent = {
	headers: {
		Authorization: ``,
		'x-api-key': ``
	},
	requestContext: {
		identity: {},
		authorizer: {},
	},
	isBase64Encoded: false,
	pathParameters: {},
	queryStringParameters: {
		zipCode: '2000',
		countryCode: 'au'
	},
};
const mockResponse = {
	"coord": {
		"lon": 151.2025,
		"lat": -33.8699
	},
	"weather": [
		{
			"id": 800,
			"main": "Clouds",
			"description": "few clouds",
			"icon": "01n"
		}
	],
	"base": "stations",
	"main": {
		"temp": 297.29,
		"feels_like": 297.4,
		"temp_min": 295.27,
		"temp_max": 298.65,
		"pressure": 1018,
		"humidity": 63
	},
	"visibility": 10000,
	"wind": {
		"speed": 1.54,
		"deg": 10
	},
	"clouds": {
		"all": 1
	},
	"dt": 1680573008,
	"sys": {
		"type": 2,
		"id": 2075535,
		"country": "GB",
		"sunrise": 1680586188,
		"sunset": 1680633422
	},
	"timezone": 3600,
	"id": 2643743,
	"name": "London",
	"cod": 200
};
const expectedResponse = {
	statusCode: 200,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Credentials': true
	},
	body: {
		lon: 151.2025,
		lat: -33.8699,
		main: 'Clouds',
		description: 'few clouds',
		temp: 297.29,
		feels_like: 297.4,
		temp_min: 295.27,
		temp_max: 298.65,
		pressure: 1018,
		humidity: 63
	}
};

describe('Weather API', () => {

	jest
		.spyOn(HttpClient.prototype, 'get')
		.mockImplementation(async () => ({ statusCode: 200, data: mockResponse}));

	it('should return the correct values', async () => {
		expect(await handler(mockEvent, {})).toEqual(expectedResponse);
	})
})