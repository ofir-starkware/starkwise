import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AccountInfo } from '@/types/accountInfo';
import { Group } from '@/types/group';
import { Link } from 'react-router-dom';

type GroupListProps = {
  groups: Group[];
  currentAccount: AccountInfo;
};

export function GroupList({ groups, currentAccount }: GroupListProps) {
  return (
    <div className="space-y-4">
      {groups.map(group => (
        <Link to={`/groups/${group.id}`} key={group.id} className="block">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{group.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-bold">
                  ${group.balance.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Entry: ${group.entryAmount.toFixed(2)}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                {group.admins.some(admin => admin === currentAccount.address)
                  ? 'Admin'
                  : 'Member'}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
