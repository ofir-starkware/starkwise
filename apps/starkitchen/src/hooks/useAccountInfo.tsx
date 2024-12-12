import { useContract } from '@starknet-react/core';
import type { Address } from '@starknet-react/core';
import { GROUPS_CONTRACT_ABI, GROUPS_CONTRACT_ADDRESS } from '@/utils/consts';
import { shortString, TypedContractV2 } from 'starknet';
import { useEffect, useState } from 'react';
import { AccountInfo } from '@/types/accountInfo';

// export const useAccountInfo = (addresses: Address[]) => {
//   const [accountsInfo, setAccountsInfo] = useState<AccountInfo[]>([]);

//   const { contract } = useContract({
//     abi: GROUPS_CONTRACT_ABI,
//     address: GROUPS_CONTRACT_ADDRESS,
//   }) as { contract?: TypedContractV2<typeof GROUPS_CONTRACT_ABI> };

//   const getOrCreateName = async (address: Address) => {
//     try {
//       console.log('getOrCreateName');
//       return contract?.get_name(address) ?? Promise.resolve('Ofir');
//     } catch (e) {
//       contract?.set_name(shortString.encodeShortString('Ofir'));
//       return Promise.resolve('Ofir');
//     }
//   };

//   useEffect(() => {
//     const fetchAccountsInfo = async () => {
//       if (contract) {
//         console.log('fetchAccountsInfo');
//         const displayNames = await Promise.all(
//           addresses.map((address: Address) => getOrCreateName(address)),
//         );

//         const accountsInfo: AccountInfo[] = addresses.map((address, index) => ({
//           address,
//           name: shortString.decodeShortString(displayNames[index] as string),
//         }));

//         console.log('accountsInfoaccountsInfoaccountsInfo', { accountsInfo });
//         setAccountsInfo(accountsInfo);
//       }
//     };

//     fetchAccountsInfo();
//   }, [contract, addresses]);

//   return {
//     accountsInfo,
//   };
// };

export const useAccountInfo = (addresses: string[]) => {
  const mockAccountInfo = [
    {
      address:
        '0x06c119992e38874fb586586d3135a1db2952c87e6312a69eb7a03a1f53a30b45',
      name: 'Alice',
    },
  ];
  return { accountsInfo: mockAccountInfo };
};
