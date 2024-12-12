import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGroupActions } from '@/hooks/useGroupActions';
import { ExtendedGroup } from '@/types/group';
import { Address } from '@starknet-react/core';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type SingleGroupFooterProps = {
  group: ExtendedGroup;
  accountAddress: Address;
};

export default function SingleGroupFooter({
  group,
  accountAddress,
}: SingleGroupFooterProps) {
  const isAdmin = true;
  group.admins.findIndex(admin => admin.address === accountAddress) !== -1;
  const [isOpen, setIsOpen] = useState(false);
  const [recepient, setRecepient] = useState('');
  const [amount, setAmount] = useState(0);

  const { transferFromGroup } = useGroupActions();

  const onClickSettle = async () => {
    transferFromGroup(group.id, recepient, amount);
  };

  return (
    <Card className="w-full mt-8">
      <CardHeader>
        <CardTitle>Total Amount</CardTitle>
        <p className="text-4xl font-bold text-center">{group.balance} tokens</p>

        {isAdmin && (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button>Transfer to someone</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Transfer from {group.name}</DialogTitle>
              </DialogHeader>
              <form onSubmit={onClickSettle} className="space-y-4">
                <div>
                  <Label htmlFor="recepient">Recepient</Label>
                  <Input
                    id="recepient"
                    value={recepient}
                    onChange={e => setRecepient(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}
                    required
                    min="0"
                    step="0.01"
                  />
                </div>
                <Button type="submit">Transfer</Button>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </CardHeader>
    </Card>
  );
}
