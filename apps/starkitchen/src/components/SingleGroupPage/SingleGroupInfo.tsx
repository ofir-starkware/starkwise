import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ExtendedGroup } from '@/types/group';
import { Address } from '@starknet-react/chains';

type SingleGroupInfoProps = {
  group: ExtendedGroup;
  accountAddress: Address;
};

export function SingleGroupInfo({
  group,
  accountAddress,
}: SingleGroupInfoProps) {
  const isAdmin =
    group.admins.findIndex(admin => admin.address === accountAddress) !== -1;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{group.name}</CardTitle>
        <CardDescription>Group ID: {group.id}</CardDescription>
        <CardDescription>Entry amount: {group.entryAmount}</CardDescription>
        <CardDescription>Role: {isAdmin ? 'Admin' : 'Member'}</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">Members</h3>
        <div className="space-y-4">
          {group.accounts.map(account => (
            <div key={account.address} className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={`https://avatar.vercel.sh/${account.name}`} />
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
              <div className="ml-auto"></div>
            </div>
          ))}
          <h3 className="text-lg font-semibold mb-2">Group Activity</h3>
          {group.transactions.map(tx => {
            return (
              <div
                key={tx.timestamp.getTime()}
                className="flex items-center space-x-4"
              >
                <div>
                  <p className="text-sm font-medium">{tx.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {tx.timestamp.toLocaleString()}
                  </p>
                </div>
                <div className="ml-auto">
                  <p className="text-sm font-medium">{tx.amount} tokens</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
