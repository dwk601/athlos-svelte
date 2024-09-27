// data.ts

// User roles
export const roles = [
	{ id: 1, name: 'Admin', label: 'Admin (Developer)', icon: 'shield' },
	{ id: 2, name: 'User', icon: 'user' },
	{ id: 3, name: 'Group Admin', label: 'Group Admin', icon: 'user-check' },
	{ id: 4, name: 'Group Member', label: 'Group Member', icon: 'user' }
];

// Users
export const users = [
	{
		id: 1,
		firstName: 'John',
		lastName: 'Doe',
		age: 25,
		groupId: 1,
		role: roles[2], // Group Admin
		checkInStatus: 'checked in',
		avatar: 'https://avatars.dicebear.com/api/avataaars/johndoe.svg'
	},
	{
		id: 2,
		firstName: 'Jane',
		lastName: 'Smith',
		age: 30,
		groupId: 2,
		role: roles[3], // Group Member
		checkInStatus: 'not checked in',
		avatar: 'https://avatars.dicebear.com/api/avataaars/janesmith.svg'
	},
	{
		id: 3,
		firstName: 'Mike',
		lastName: 'Johnson',
		age: 22,
		groupId: null,
		role: roles[1], // User
		checkInStatus: 'not checked in',
		avatar: 'https://avatars.dicebear.com/api/avataaars/mikejohnson.svg'
	},
	{
		id: 4,
		firstName: '동욱',
		lastName: '김',
		age: 25,
		groupId: 1,
		role: roles[3], // Group Member
		checkInStatus: 'checked in',
		avatar: 'https://avatars.dicebear.com/api/avataaars/dongwookkim.svg'
	},
	{
		id: 5,
		firstName: 'Alice',
		lastName: 'Brown',
		age: 28,
		groupId: 3,
		role: roles[3], // Group Member
		checkInStatus: 'checked in',
		avatar: 'https://avatars.dicebear.com/api/avataaars/alicebrown.svg'
	},
	{
		id: 6,
		firstName: 'Bob',
		lastName: 'Davis',
		age: 35,
		groupId: 4,
		role: roles[2], // User
		checkInStatus: 'not checked in',
		avatar: 'https://avatars.dicebear.com/api/avataaars/bobdavis.svg'
	}
];

// Groups
export const groups = [
	{ id: 1, name: 'Basketball Enthusiasts', createdBy: users[0].id },
	{ id: 2, name: '느그리그', createdBy: users[1].id },
	{ id: 3, name: 'Soccer Lovers', createdBy: users[2].id },
	{ id: 4, name: '테스트', createdBy: users[3].id },
	{ id: 5, name: 'Chess Club', createdBy: users[4].id }
];

// Games
export const games = [
	{
		id: 1,
		name: '예전 축구',
		date: '2024-08-15',
		type: 'past',
		location: 'Provo, UT',
		attenders: [users[0], users[1], users[4]]
	},
	{
		id: 2,
		name: '예전 다른거',
		date: '2024-08-10',
		type: 'past',
		location: 'Provo, UT',
		attenders: [users[1], users[2]]
	},
	{
		id: 3,
		name: '예전 또다른거',
		date: '2024-08-05',
		type: 'past',
		location: 'Provo, UT',
		attenders: [users[2], users[3]]
	},
	{
		id: 4,
		name: '축구',
		date: '2024-09-15',
		type: 'upcoming',
		location: 'Provo, UT',
		attenders: [users[0], users[1], users[4]]
	},
	{
		id: 5,
		name: '다른거',
		date: '2024-09-18',
		type: 'upcoming',
		location: 'Salt Lake City, UT',
		attenders: [users[1], users[2]]
	},
	{
		id: 6,
		name: '또다른거',
		date: '2024-09-20',
		type: 'upcoming',
		location: 'Ogden, UT',
		attenders: [users[2], users[3]]
	},
	{
		id: 7,
		name: 'Basketball Game',
		date: '2024-10-01',
		type: 'upcoming',
		location: 'Provo, UT',
		attenders: [users[0], users[4], users[5]]
	},
	{
		id: 8,
		name: 'Chess Tournament',
		date: '2024-10-05',
		type: 'upcoming',
		location: 'Provo, UT',
		attenders: [users[3], users[4], users[5]]
	}
];

// Chats
export const chats = [
	{
		groupId: 1,
		messages: [
			{ sender: users[0].firstName, message: 'Hey team, game tonight at 7pm!' },
			{ sender: users[1].firstName, message: 'Got it! See you there.' },
			{ sender: users[4].firstName, message: 'I will be there too!' }
		]
	},
	{
		groupId: 2,
		messages: [{ sender: users[1].firstName, message: 'Anyone up for a game this weekend?' }]
	},
	{
		groupId: 3,
		messages: [
			{ sender: users[2].firstName, message: 'Soccer practice tomorrow at 6pm.' },
			{ sender: users[4].firstName, message: 'I will join!' }
		]
	},
	{
		groupId: 4,
		messages: [
			{ sender: users[3].firstName, message: 'Chess club meeting on Friday.' },
			{ sender: users[5].firstName, message: 'Looking forward to it!' }
		]
	}
];

// Notifications
export const notifications = [
	{ userId: 1, message: 'You have 3 upcoming games.' },
	{ userId: 2, message: 'Group "Soccer Lovers" created successfully.' },
	{ userId: 3, message: 'Welcome to the platform!' },
	{ userId: 4, message: 'You have a new message from the Chess Club.' },
	{ userId: 5, message: 'Your game is scheduled for tomorrow.' },
	{ userId: 6, message: 'You have been added to the Chess Club group.' }
];

// Example usage:
// Import these data sets and use them within your components to display mock data in your SvelteKit project.
