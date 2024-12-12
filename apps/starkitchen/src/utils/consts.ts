import { Abi } from '@starknet-react/core';

/// A prefix to be added to the src path of resources (images, etc.) in order to correctly load them.
/// Production mode is when deploying the app to a server, github pages in our case.
export const baseDomain =
  import.meta.env.MODE === 'production'
    ? 'https://ofir-starkware.github.io/starkwise'
    : 'http://localhost:5173';

/// The address of the deployed contract.
export const GROUPS_CONTRACT_ADDRESS =
  '0x079c2142585298c3b59511c89ddf36ab7d6e36529c4d4e2474c948a5ee33e263';
/// The ABI of the deployed contract. Can be found on starkscan.
/// For the above contract, the ABI can be found at:
/// https://sepolia.starkscan.co/contract/0x049c75609bb077a9427bc26a9935472ec75e5508ed216ef7f7ad2693397deebc
/// And the ABI is accessible under the 'Class Code/History' tab -> 'Copy ABI Code' button.
export const GROUPS_CONTRACT_ABI = [
  {
    type: 'impl',
    name: 'XpensePoolImpl',
    interface_name: 'contracts::xpensepool::interface::IXpensePool',
  },
  {
    type: 'struct',
    name: 'contracts_commons::types::time::Timestamp',
    members: [
      {
        name: 'seconds',
        type: 'core::integer::u64',
      },
    ],
  },
  {
    type: 'struct',
    name: 'contracts::xpensepool::interface::TxInfo',
    members: [
      {
        name: 'caller',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'recipient',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'amount',
        type: 'core::integer::u128',
      },
      {
        name: 'timestamp',
        type: 'contracts_commons::types::time::Timestamp',
      },
      {
        name: 'group_id',
        type: 'core::felt252',
      },
    ],
  },
  {
    type: 'struct',
    name: 'contracts::xpensepool::interface::GroupMetaData',
    members: [
      {
        name: 'display_name',
        type: 'core::felt252',
      },
      {
        name: 'entry_amount',
        type: 'core::integer::u128',
      },
      {
        name: 'max_n_accounts',
        type: 'core::integer::u16',
      },
      {
        name: 'balance',
        type: 'core::integer::u128',
      },
    ],
  },
  {
    type: 'struct',
    name: 'contracts::xpensepool::interface::GroupInfoExternal',
    members: [
      {
        name: 'admins',
        type: 'core::array::Array::<core::starknet::contract_address::ContractAddress>',
      },
      {
        name: 'members',
        type: 'core::array::Array::<core::starknet::contract_address::ContractAddress>',
      },
      {
        name: 'tx_history',
        type: 'core::array::Array::<contracts::xpensepool::interface::TxInfo>',
      },
      {
        name: 'metadata',
        type: 'contracts::xpensepool::interface::GroupMetaData',
      },
    ],
  },
  {
    type: 'interface',
    name: 'contracts::xpensepool::interface::IXpensePool',
    items: [
      {
        type: 'function',
        name: 'create_group',
        inputs: [
          {
            name: 'display_name',
            type: 'core::felt252',
          },
          {
            name: 'entry_amount',
            type: 'core::integer::u128',
          },
          {
            name: 'max_n_accounts',
            type: 'core::integer::u16',
          },
        ],
        outputs: [
          {
            type: 'core::felt252',
          },
        ],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'get_group',
        inputs: [
          {
            name: 'group_id',
            type: 'core::felt252',
          },
        ],
        outputs: [
          {
            type: 'contracts::xpensepool::interface::GroupInfoExternal',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'list_groups_by_account',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::array::Array::<contracts::xpensepool::interface::GroupInfoExternal>',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'register_to_group',
        inputs: [
          {
            name: 'group_id',
            type: 'core::felt252',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'transfer_from_group',
        inputs: [
          {
            name: 'group_id',
            type: 'core::felt252',
          },
          {
            name: 'recipient',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'amount',
            type: 'core::integer::u128',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'set_name',
        inputs: [
          {
            name: 'name',
            type: 'core::felt252',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'get_name',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::felt252',
          },
        ],
        state_mutability: 'view',
      },
    ],
  },
  {
    type: 'impl',
    name: 'ReplaceabilityImpl',
    interface_name:
      'contracts_commons::components::replaceability::interface::IReplaceable',
  },
  {
    type: 'struct',
    name: 'core::array::Span::<core::felt252>',
    members: [
      {
        name: 'snapshot',
        type: '@core::array::Array::<core::felt252>',
      },
    ],
  },
  {
    type: 'struct',
    name: 'contracts_commons::components::replaceability::interface::EICData',
    members: [
      {
        name: 'eic_hash',
        type: 'core::starknet::class_hash::ClassHash',
      },
      {
        name: 'eic_init_data',
        type: 'core::array::Span::<core::felt252>',
      },
    ],
  },
  {
    type: 'enum',
    name: 'core::option::Option::<contracts_commons::components::replaceability::interface::EICData>',
    variants: [
      {
        name: 'Some',
        type: 'contracts_commons::components::replaceability::interface::EICData',
      },
      {
        name: 'None',
        type: '()',
      },
    ],
  },
  {
    type: 'enum',
    name: 'core::bool',
    variants: [
      {
        name: 'False',
        type: '()',
      },
      {
        name: 'True',
        type: '()',
      },
    ],
  },
  {
    type: 'constructor',
    name: 'constructor',
    inputs: [
      {
        name: 'token_address',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'governance_admin',
        type: 'core::starknet::contract_address::ContractAddress',
      },
    ],
  },
] as const satisfies Abi;
