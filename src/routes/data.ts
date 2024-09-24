// data.ts

// User roles
export const roles = [
    { id: 1, name: 'Admin', label: 'Admin (Developer)', icon: 'shield' },
    { id: 2, name: 'User', icon: 'user' },
    { id: 3, name: 'Group Admin', label: 'Group Admin', icon: 'user-check' },
    { id: 4, name: 'Group Member', label: 'Group Member', icon: 'user' },
];

// Users
export const users = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        groupId: 1,
        role: roles[2],  // Group Admin
        checkInStatus: 'checked in',
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        age: 30,
        groupId: 2,
        role: roles[3],  // Group Member
        checkInStatus: 'not checked in',
    },
    {
        id: 3,
        firstName: 'Mike',
        lastName: 'Johnson',
        age: 22,
        groupId: null,
        role: roles[1],  // User
        checkInStatus: 'not checked in',
    },
    {
        id: 4,
        firstName: '동욱',
        lastName: '김',
        age: 25,
        groupId: 1,
        role: roles[3],  // Group Member
        checkInStatus: 'checked in',
    },
];

// Groups
export const groups = [
    { id: 1, name: 'Basketball Enthusiasts', createdBy: users[0].id },
    { id: 2, name: '느그리그', createdBy: users[1].id },
];

// Chats
export const chats = [
    {
        groupId: 1,
        messages: [
            { sender: users[0].firstName, message: 'Hey team, game tonight at 7pm!' },
            { sender: users[1].firstName, message: 'Got it! See you there.' },
        ],
    },
    {
        groupId: 2,
        messages: [
            { sender: users[1].firstName, message: 'Anyone up for a game this weekend?' },
        ],
    },
];

// Notifications
export const notifications = [
    { userId: 1, message: 'You have 3 upcoming games.' },
    { userId: 2, message: 'Group "Soccer Lovers" created successfully.' },
    { userId: 3, message: 'Welcome to the platform!' },
];

// Example usage:
// Import these data sets and use them within your components to display mock data in your SvelteKit project.
