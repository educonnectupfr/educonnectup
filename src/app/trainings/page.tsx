import type { Metadata } from 'next';

import { CONFIG } from 'src/global-config';
import { TraningsView } from 'src/sections/trainings/trainings-view';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `Formations - ${CONFIG.appName}` };

export default function Page() {
  return <TraningsView />;
}
