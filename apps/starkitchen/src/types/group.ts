import { AccountInfo } from './accountInfo';
import { GroupTransaction } from './groupTransaction';

export type Group = {
  id: string;
  name: string;
  accounts: string[];
  admins: string[];
  balance: number;
  transactions: GroupTransaction[];
  entryAmount: number;
};

export type ExtendedGroup = {
  id: string;
  name: string;
  accounts: AccountInfo[];
  admins: AccountInfo[];
  balance: number;
  transactions: GroupTransaction[];
  entryAmount: number;
};
