'use client';
import { QRCodeSVG } from 'qrcode.react';
import { CardContent } from '@/components/ui/card';
import { useGroupData } from '@/hooks/useGroupData';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { baseDomain } from '@/utils/consts';

interface GroupQRCodePageProps {
  groupId: string;
}

export function GroupCreationSuccessModal({ groupId }: GroupQRCodePageProps) {
  const { group } = useGroupData(groupId);
  const shareLink = `${baseDomain}/groups/${groupId}/register`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Let's add your friends!</DialogTitle>
      </DialogHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <div className="text-center">
          <p>Balance: ${group.balance.toFixed(0)}</p>
        </div>
        <QRCodeSVG value={shareLink} size={200} />
        <div className="flex items-center space-x-2">
          <a onClick={handleCopy} className="text-blue-500 hover:underline">
            copy link
          </a>
          <button onClick={handleCopy}>
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/copy-icon.png"
              alt="Copy Link"
              height={15}
              width={15}
            />
          </button>
        </div>
      </CardContent>
    </DialogContent>
  );
}
