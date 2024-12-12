import { ReactNode } from 'react';

export const combineProviders = (providers: any[]) =>
  providers.reduce((Combined, Provider) => {
    return ({ children }: { children: ReactNode }) => (
      <Combined>
        <Provider>{children}</Provider>
      </Combined>
    );
  });
