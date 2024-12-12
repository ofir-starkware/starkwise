import { useCallback, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useGroupActions } from '@/hooks/useGroupActions';
import { AccountInfo } from '@/types/accountInfo';
import { GroupCreationSuccessModal } from './GroupCreationSuccessModal';
import { ConnectWalletButton } from '../ConnectWalletButton/ConnectWalletButton';
import { UseAccountResult, useDisconnect } from '@starknet-react/core';
import { LogOut } from 'lucide-react';
import { truncateAddress } from '@/utils/string';
import { DisconnectWalletDialog } from '../Dialogs/DisconnectWalletDialog';
import { useAccountInfo } from '@/hooks/useAccountInfo';

type HeaderProps = {
  account: UseAccountResult;
};

enum GroupCreationStatus {
  IDLE,
  PENDING,
  SUCCESS,
}

export function GroupsPageHeader({ account }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [groupId, setGroupId] = useState<undefined | string>();
  const { accountsInfo } = useAccountInfo([account.address!]);

  const [entryAmount, setEntryAmount] = useState(0);
  const [groupCreationStatus, setGroupCreationStatus] = useState(
    GroupCreationStatus.IDLE,
  );

  const [isDisconnectDialogOpen, setIsDisconnectDialogOpen] =
    useState<boolean>(false);
  const { disconnect } = useDisconnect();
  const handleCloseDisconnectDialog = useCallback(() => {
    setIsDisconnectDialogOpen(false);
  }, []);

  const handleDisconnect = useCallback(() => {
    disconnect();
    handleCloseDisconnectDialog();
  }, []);

  const openDisconnectDialog = () => {
    setIsDisconnectDialogOpen(true);
  };

  const { createGroup } = useGroupActions();
  console.log({ accountsInfo });
  const handleCreateGroup = async (e: React.FormEvent) => {
    e.preventDefault();
    const groupId = '1'; // await createGroup({ name: groupName, entryAmount });
    setGroupId(groupId);
    setGroupCreationStatus(GroupCreationStatus.SUCCESS);
    setGroupName('');
    setEntryAmount(0);
  };

  return (
    <header className="bg-background p-4 shadow">
      <h2 className="text-xl font-bold">{accountsInfo[0].name}</h2>
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {account?.isConnected ? (
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <span className="text-sm font-medium text-gray-500">
                {truncateAddress(account?.address ?? '')}
              </span>
              <Button variant="ghost" size="sm" onClick={openDisconnectDialog}>
                <LogOut className="h-4 w-4" />
                <span>Disconnect wallet</span>
              </Button>
            </div>
          ) : (
            <ConnectWalletButton onConnect={() => {}} />
          )}
          <DisconnectWalletDialog
            onDisconnect={handleDisconnect}
            open={isDisconnectDialogOpen}
            onClose={handleCloseDisconnectDialog}
          />
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() =>
                setGroupCreationStatus(GroupCreationStatus.PENDING)
              }
            >
              Create Group
            </Button>
          </DialogTrigger>
          {groupCreationStatus === GroupCreationStatus.PENDING && (
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create a New Group</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleCreateGroup} className="space-y-4">
                <div>
                  <Label htmlFor="groupName">Group Name</Label>
                  <Input
                    id="groupName"
                    value={groupName}
                    onChange={e => setGroupName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="entryAmount">Entry Amount</Label>
                  <Input
                    id="entryAmount"
                    type="number"
                    value={entryAmount}
                    onChange={e => setEntryAmount(Number(e.target.value))}
                    required
                    min="0"
                    step="0.01"
                  />
                </div>
                <Button type="submit">Create</Button>
              </form>
            </DialogContent>
          )}
          {groupCreationStatus === GroupCreationStatus.SUCCESS && groupId && (
            <GroupCreationSuccessModal groupId={groupId} />
          )}
        </Dialog>
      </div>
    </header>
  );
}
