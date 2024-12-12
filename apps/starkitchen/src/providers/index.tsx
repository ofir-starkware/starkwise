import { RouterProvider } from './RouterProvider';
import { combineProviders } from './combine-providers';
import { StarknetProvider } from './StarknetProvider';

export const Providers = combineProviders([StarknetProvider, RouterProvider]);
