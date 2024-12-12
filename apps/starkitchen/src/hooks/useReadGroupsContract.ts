import { GROUPS_CONTRACT_ABI, GROUPS_CONTRACT_ADDRESS } from '@/utils/consts';
import { useReadContract } from '@starknet-react/core';

interface IUseReadGroupsContract {
  functionName: string;
  args: any[];
}

export const useReadGroupsContract = ({
  functionName,
  args,
}: IUseReadGroupsContract) => {
  return useReadContract({
    functionName,
    enabled: false,
    abi: GROUPS_CONTRACT_ABI,
    address: GROUPS_CONTRACT_ADDRESS,
    args,
  });
};
