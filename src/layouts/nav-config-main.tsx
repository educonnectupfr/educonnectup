import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

import type { NavMainProps } from './main/nav/types';

// ----------------------------------------------------------------------

export const navData: NavMainProps['data'] = [
  { title: 'Accueil', path: '/', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },

  {
    title: 'Solutions',
    path: '/pages',
    icon: <Iconify width={22} icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: 'Other',
        items: [
          { title: 'Formations', path: paths.about },
          { title: 'Écoles', path: paths.contact },
          { title: 'Entreprises', path: paths.faqs },
        ],
      },
    ],
  },

  {
    title: 'Tarifs',
    path: paths.pricing,
    icon: <Iconify width={22} icon="solar:atom-bold-duotone" />,
  },
  {
    title: 'Contact',
    icon: <Iconify width={22} icon="solar:notebook-bold-duotone" />,
    path: paths.contact,
  },
  {
    title: 'À propos de nous',
    icon: <Iconify width={22} icon="solar:notebook-bold-duotone" />,
    path: paths.about,
  },
];
