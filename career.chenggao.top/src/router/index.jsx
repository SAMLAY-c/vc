import { lazy } from 'react';

// 懒加载页面组件
const HomePage = lazy(() => import('../components/HomePage'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));
const InternshipDetail = lazy(() => import('../pages/InternshipDetail'));
const ContactFormPage = lazy(() => import('../pages/ContactFormPage'));

const routes = [
  {
    path: '/',
    element: <HomePage />,
    exact: true
  },
  {
    path: '/project/:projectId',
    element: <ProjectDetail />
  },
  {
    path: '/internship/:internshipId',
    element: <InternshipDetail />
  },
  {
    path: '/contact-form',
    element: <ContactFormPage />
  }
];

export default routes;