import {
  Address,
  useAccount,
  useConnect,
  useInjectedConnectors,
} from '@starknet-react/core';
import { GroupsPageHeader } from './GroupsPageHeader';
import { useGroups } from '@/hooks/useGroups';
import { useAccountInfo } from '@/hooks/useAccountInfo';
import { GroupList } from './GroupList';
import { useEffect } from 'react';
import { FullScreenLoader } from '../FullscreenLoaderModal/FullscreenLoaderModal';

const mockUseAccount = () => {
  const address: Address =
    '0x06c119992e38874fb586586d3135a1db2952c87e6312a69eb7a03a1f53a30b45';
  return { address };
};

export const GroupsPage = () => {
  const account = useAccount();

  const { groups, status } = useGroups();

  const { accountsInfo } = useAccountInfo([account.address!]);
  const currentAccount = accountsInfo[0];

  useEffect(() => {
    console.log('groups', { groups, status });
  }, [groups, status]);

  if (status === 'pending') {
    return <FullScreenLoader text="Loading your groups..." />;
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col min-h-screen">
      <GroupsPageHeader account={account} />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Your Groups</h1>
        <GroupList groups={groups} currentAccount={currentAccount} />
      </main>
    </div>
  );
};
