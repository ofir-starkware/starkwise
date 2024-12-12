import { useGroupData } from '@/hooks/useGroupData';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useGroupActions } from '@/hooks/useGroupActions';

export const RegisterToGroupPage = () => {
  const { groupId } = useParams();
  const { group } = useGroupData(groupId!);
  const { registerToGroup } = useGroupActions();

  const onClickJoinGroup = async () => {
    registerToGroup(groupId!);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col min-h-screen">
      <Card className="w-full">
        <CardHeader>
          <h1 className="text-3xl font-bold mb-6">
            Join your friends in {group.name}
          </h1>

          <CardDescription>Group ID: {group.id}</CardDescription>
          <CardDescription>Entry amount: {group.entryAmount}</CardDescription>
          <Button onClick={onClickJoinGroup}>Join Group</Button>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Members</h3>
          <div className="space-y-4">
            {group.accounts.map(account => (
              <div
                key={account.address}
                className="flex items-center space-x-4"
              >
                <Avatar>
                  <AvatarImage
                    src={`https://avatar.vercel.sh/${account.name}`}
                  />
                  <AvatarFallback>
                    {account.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{account.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {account.address}
                  </p>
                </div>
                <div className="ml-auto">
                  {/* <p className="text-sm font-medium">
                  {group.transactions
                    .filter(tx => tx.caller === account.address)
                    .reduce((sum, tx) => sum + tx.amount, 0)}{' '}
                  tokens
                </p> */}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
