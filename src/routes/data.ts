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
		groupId: 1,
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
		groupId: 2,
		role: roles[2], // User
		checkInStatus: 'not checked in',
		avatar: 'https://avatars.dicebear.com/api/avataaars/bobdavis.svg'
	}
];

// Groups
export const groups = [
	{ id: 1, name: 'Basketball Enthusiasts', createdBy: users[0].id },
	{ id: 2, name: '느그리그', createdBy: users[1].id },
	{ id: 3, name: 'Soccer Lovers', createdBy: users[2].id }
];

// Games
export const games = [
	{
		id: 1,
		groupId: 1,
		name: '예전 축구',
		date: '2024-08-15',
		time: '06:00',
		type: 'past',
		location: 'Provo, UT',
		attenders: [users[0], users[4]] // Only group members
	},
	{
		id: 2,
		groupId: 3,
		name: '예전 다른거',
		date: '2024-08-10',
		time: '07:00',
		type: 'past',
		location: 'Provo, UT',
		attenders: [] // No group members
	},
	{
		id: 3,
		groupId: 1,
		name: '예전 또다른거',
		date: '2024-08-05',
		time: '21:00',
		type: 'past',
		location: 'Provo, UT',
		attenders: [users[3]] // Only group members
	},
	{
		id: 4,
		groupId: 2,
		name: '축구',
		date: '2024-10-15',
		time: '06:00',
		type: 'upcoming',
		location: 'Provo, UT',
		attenders: [users[0], users[4]] // Only group members
	},
	{
		id: 5,
		groupId: 3,
		name: '다른거',
		date: '2024-10-18',
		time: '07:00',
		type: 'upcoming',
		location: 'Salt Lake City, UT',
		attenders: [] // No group members
	},
	{
		id: 6,
		groupId: 1,
		name: '또다른거',
		date: '2024-10-20',
		time: '21:00',
		type: 'upcoming',
		location: 'Ogden, UT',
		attenders: [users[3]] // Only group members
	},
	{
		id: 7,
		groupId: 1,
		name: 'Basketball Game',
		date: '2024-11-01',
		time: '18:00',
		type: 'upcoming',
		location: 'Provo, UT',
		attenders: [users[0], users[4]] // Only group members
	},
	{
		id: 8,
		groupId: 1,
		name: 'Chess Tournament',
		date: '2024-10-05',
		time: '19:00',
		type: 'upcoming',
		location: 'Provo, UT',
		attenders: [users[3], users[4]] // Only group members
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
		groupId: 3,
		messages: [
			{ sender: users[2].firstName, message: 'Soccer practice tomorrow at 6pm.' },
			{ sender: users[4].firstName, message: 'I will join!' }
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
