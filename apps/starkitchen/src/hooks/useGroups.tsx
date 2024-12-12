import { useAccount } from '@starknet-react/core';
import { useReadGroupsContract } from './useReadGroupsContract';
import { Group } from '@/types/group';

export const useGroups = () => {
  const { address } = useAccount();

  const { data: groups, status } = useReadGroupsContract({
    functionName: 'list_groups_by_account',
    args: [address],
  });

  console.log('groups', { groups, status });

  return {
    groups,
    status,
  };
};

// export const useGroups = () => {
//   const mockGroups: Group[] = [
//     {
//       id: '1',
//       name: 'Group 1',
//       entryAmount: 100,
//       accounts: ['0x1234567890'],
//       admins: ['0x123456'],
//       balance: 100,
//       transactions: [],
//     },
//     {
//       id: '2',
//       name: 'Group 2',
//       entryAmount: 200,
//       accounts: ['0x1234567890'],
//       admins: ['0x123456'],
//       balance: 200,
//       transactions: [],
//     },
//   ];
//   return { groups: mockGroups, status: 'success' };
// };
