import { SingleGroupPage } from '@/components/SingleGroupPage/SingleGroupPage';
import {
  RouterProvider as ReactRouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { GroupsPage } from '../components/GroupsPage/GroupsPage';
import { RegisterToGroupPage } from '@/components/RegisterToGroup/RegisterToGroupPage';
// import { SingleGroupPage } from '@/components/SingleGroupPage';

const router = createBrowserRouter([
  {
    // children: [
    //   {
    //     path: 'faq/*',
    //     element: <FaqPage />,
    //   },
    //   {
    //     path: '*',
    //     element: <AppBackground />,
    //     children: [
    //       {
    //         path: 'contact-us/*',
    //         element: <ContactUsCard />,
    //       },
    //       {
    //         path: '*',
    //         element: <AppLayout />,
    //       },
    //     ],
    //   },
    // ],
  },
  {
    path: '/groups',
    element: <GroupsPage />,
  },
  {
    path: '/groups/:groupId',
    element: <SingleGroupPage />,
  },
  {
    path: '/groups/:groupId/register',
    element: <RegisterToGroupPage />,
  },
]);
export const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};
