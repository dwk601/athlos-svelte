# Athlos - Soccer Team Management Web App

Athlos is a web application designed to streamline the management of soccer games and teams. Built with modern technologies, it aims to solve common issues faced by soccer enthusiasts who organize regular games.

## Features

- **Team Member Management**: Easily add, remove, and update team members.
- **Check-in System**: Track player attendance for each game.
- **Rating System**: Implement a fair team division based on player ratings.
- **Upcoming Games**: View and manage scheduled matches.
- **Recent Activities**: Keep track of past games and player performances.
- **User Authentication**: Secure user authentication powered by Kinde Auth.
- **Group Management**: Create and join groups for organizing games.
- **Game Management**: Create and manage games within groups.

## Tech Stack

- **Frontend**: SvelteKit
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Backend**: Supabase
- **Authentication**: Kinde Auth

## Getting Started

### Next.js Project

1. Clone the repository:
   ```bash
   git clone https://github.com/dwk601/athlos-svelte
   ```

2. Install dependencies:
   ```bash
   cd athlos
   npm install
   ```

3. Set up Supabase:
   - Create a Supabase project
   - Copy your Supabase URL and anon key
   - Create a `.env.local` file in the root directory and add your Supabase credentials:
     ```bash
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
     ```

4. Set up Kinde Auth:
   - Create a Kinde account and set up your application
   - Add the following environment variables to your `.env.local` file:
     ```bash
     KINDE_CLIENT_ID=your-kinde-client-id
     KINDE_CLIENT_SECRET=your-kinde-client-secret
     KINDE_ISSUER_URL=your-kinde-issuer-url
     KINDE_SITE_URL=http://localhost:3000
     KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
     KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard
     ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:5173/](http://localhost:5173/) in your browser to see the application.

## Project Structure

### SvelteKit

- [`src/routes/`]: Contains the main pages and routing logic
- [`src/lib/components/`]: Reusable Svelte components
- `src/lib/utils/`: Utility functions
- [`static/`]: Static assets

## API Routes

Athlos includes several API routes to handle various functionalities:

- **Groups**
  - `POST /api/groups/create`: Create a new group
  - `POST /api/groups/join`: Join an existing group
  - `GET /api/groups/list`: List all groups

- **Games**
  - `POST /api/games/create`: Create a new game
  - `POST /api/games/attendees`: Manage game attendees
  - `GET /api/games/list`: List games for a specific group

- **Users**
  - `GET /api/users/current`: Get the current authenticated user's data

These API routes are secured using Kinde Auth and interact with the Supabase database.

## Authentication

This project uses Kinde Auth for secure user authentication. Kinde provides a robust and easy-to-implement authentication solution. For more information on how to use and customize Kinde Auth in your Next.js application, please refer to the [Kinde Next.js SDK documentation](https://kinde.com/docs/developer-tools/nextjs-sdk/).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.