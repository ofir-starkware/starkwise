import { useGroupData } from '@/hooks/useGroupData';
import { SingleGroupInfo } from './SingleGroupInfo';
import SingleGroupFooter from './SingleGroupFooter';
import { useParams } from 'react-router-dom';
import { useAccount } from '@starknet-react/core';
import { useEffect } from 'react';
import { FullScreenLoader } from '../FullscreenLoaderModal/FullscreenLoaderModal';

export const SingleGroupPage = () => {
  const { groupId } = useParams();
  const { group, status } = useGroupData(groupId!);
  const { address: accountAddress } = useAccount();

  useEffect(() => {
    console.log('groups', { group, status });
  }, [group, status]);

  if (status === 'pending') {
    return <FullScreenLoader text="Loading your group..." />;
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col min-h-screen">
      <SingleGroupInfo group={group} accountAddress={accountAddress!} />
      <div className="flex-grow" />
      <SingleGroupFooter group={group} accountAddress={accountAddress!} />
    </div>
  );
};
