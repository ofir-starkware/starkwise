import { useReadGroupsContract } from './useReadGroupsContract';
import { useAccountInfo } from './useAccountInfo';
import { ExtendedGroup } from '@/types/group';

// export const useGroupData = (groupId: string) => {
//   // Simulated data
//   return {
//     group: {
//       id: groupId,
//       entryAmount: 100,
//       name: 'Example Group',
//       accounts: [
//         { address: '0x1234...5678', name: 'Alice' },
//         { address: '0x5678...9abc', name: 'Bob' },
//       ],
//       admins: [{ address: '0x1234...5678', name: 'Alice' }],
//       balance: 1000,
//       transactions: [
//         {
//           caller: '0x5678...9abc',
//           name: 'Pay to restaurant',
//           amount: 500,
//           recepient: '0x5678...9abc',
//           timestamp: new Date(),
//         },
//         {
//           caller: '0x1234...5678',
//           name: 'Pay for groceries',
//           amount: 500,
//           recepient: '0x1234...5678',
//           timestamp: new Date(),
//         },
//       ],
//     },
//   };
// };

export const useGroupData = (groupId: string) => {
  console.log('here');
  const { data: group, status } = useReadGroupsContract({
    functionName: 'get_group',
    args: [groupId],
  });

  const accountsInfo = useAccountInfo(group?.accounts);
  const adminsInfo = useAccountInfo(group?.admins);

  const groupWithInfo: ExtendedGroup = {
    ...group,
    accountsInfo,
    adminsInfo,
  };

  return { group: groupWithInfo, status };
};
