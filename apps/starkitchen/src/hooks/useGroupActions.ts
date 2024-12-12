import { useContract } from '@starknet-react/core';
import { GROUPS_CONTRACT_ABI, GROUPS_CONTRACT_ADDRESS } from '@/utils/consts';
import { TypedContractV2 } from 'starknet';

export interface CreatedGroupInfo {
  name: string;
  entryAmount: number;
}

export const useGroupActions = () => {
  const { contract } = useContract({
    abi: GROUPS_CONTRACT_ABI,
    address: GROUPS_CONTRACT_ADDRESS,
  }) as { contract?: TypedContractV2<typeof GROUPS_CONTRACT_ABI> };

  const createGroup = ({ name, entryAmount }: CreatedGroupInfo) => {
    if (contract) {
      return contract.create_group(name, entryAmount, 10);
    }
  };

  const registerToGroup = (groupId: string) => {
    if (contract) {
      return contract.register_to_group(groupId);
    }
  };

  const transferFromGroup = (
    groupId: string,
    recipient: string,
    amount: number,
  ) => {
    if (contract) {
      return contract.transfer_from_group(groupId, recipient, amount);
    }
  };

  return {
    createGroup,
    registerToGroup,
    transferFromGroup,
  };
};
