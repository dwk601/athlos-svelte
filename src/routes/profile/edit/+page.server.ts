import type { PageServerLoad, Actions } from './$types';
import { users } from '../../data';

export const load: PageServerLoad = async ({ locals }) => {
  // In a real application, you would fetch the user data from the database
  // For now, we'll use a mock user object
  const user = users[0];

  return { user };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const iconFile = formData.get('icon') as File;

    let iconChanged = false;

    if (iconFile.size > 0) {
      // Simulate icon change without actually saving the file
      iconChanged = true;
    }

    // In a real application, you would update the user data in the database
    // For now, we'll just log the changes
    console.log('Updating user profile:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Icon changed:', iconChanged);

    // Simulate a successful update
    return { 
      success: true,
      user: {
        name,
        email,
        ...(iconChanged ? { icon: 'new-icon-url.jpg' } : {})
      }
    };
  }
};
