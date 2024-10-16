// routes/groups/[groupId]/edit/+page.server.ts
import type { PageServerLoad, Actions } from './$types';
import { groups, groupMembers, users, games } from '../../../data';
import { error, redirect } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';

export const load: PageServerLoad = async ({ params }) => {
  const { groupId } = params;

  // Find the group by ID
  const group = groups.find((g) => g.id === Number(groupId));

  if (!group) {
    throw error(404, 'Group not found');
  }

  // Fetch group members
  const members = groupMembers
    .filter((gm) => gm.group_id === Number(groupId))
    .map((gm) => {
      const user = users.find((u) => u.id === gm.user_id);
      return {
        ...user,
        role: gm.role,
        joined_at: gm.joined_at,
      };
    });

  // Fetch all users
  const allUsers = users;

  // Fetch group games
  const groupGames = games
    .filter((game) => game.group_id === Number(groupId))
    .map((game) => ({
      ...game,
      date_time: game.date_time.toISOString(),
    }));

  return {
    group,
    members,
    allUsers,
    groupGames,
  };
};

export const actions: Actions = {
  updateGroup: async ({ request, params }) => {
    const { groupId } = params;
    const formData = await request.formData();

    const name = formData.get('name') as string;
    const description = formData.get('description') as string;

    // Find and update the group
    const group = groups.find((g) => g.id === Number(groupId));

    if (!group) {
      throw error(404, 'Group not found');
    }

    group.name = name;
    group.description = description;
    group.updated_at = new Date();

    // Redirect to the group page
    throw redirect(303, `/groups/${groupId}`);
  },

  addMember: async ({ request, params }) => {
    const { groupId } = params;
    const formData = await request.formData();
    const newMemberId = formData.get('newMemberId') as string;

    // Check if the user already exists in the group
    const existingMember = groupMembers.find(
      (gm) => gm.group_id === Number(groupId) && gm.user_id === newMemberId
    );

    if (!existingMember) {
      groupMembers.push({
        id: uuidv4(),
        group_id: Number(groupId),
        user_id: newMemberId,
        role: 'member',
        joined_at: new Date(),
      });
    }

    throw redirect(303, `/groups/${groupId}/edit`);
  },

  removeMember: async ({ request, params }) => {
    const { groupId } = params;
    const formData = await request.formData();
    const memberId = formData.get('memberId') as string;

    // Remove the member from the group
    const index = groupMembers.findIndex(
      (gm) => gm.group_id === Number(groupId) && gm.user_id === memberId
    );

    if (index !== -1) {
      groupMembers.splice(index, 1);
    }

    throw redirect(303, `/groups/${groupId}/edit`);
  },

  // Add similar actions for adding and removing games if needed
};
