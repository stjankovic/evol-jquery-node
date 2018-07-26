
module.exports = {

	// Path to REST API
	apiPath: '/api/v1/evolutility/',
	apiPort: 3000,

	// DB connection
	connectionString: process.env.DATABASE_URL || 'postgres://postgres@localhost:5432/local',
	schema: 'evol_demo',

	// Pagination and maximum number of rows
	pageSize: 50,
	lovSize: 100,
	csvSize: 1000,
	csvHeader: 'label', // possible values: id, label

	// - Timestamp columns u_date and c_date w/ date of record creation and last update 
	wTimestamp: true,
	// - "WhoIs" columns u_uid and c_uid w/ userid of creator and last modifier
	wWhoIs: false,

	// - Comments & Ratings (community feature) 
	wComments: false,
	wRating: false,

	// Directory for uploaded files
	uploadPath: '../evolutility-ui-react/public/pix/',

	// Console log
	consoleLog: true,

};
