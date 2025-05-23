import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { TraningItem } from './training-item';
import { TraningItemType } from 'src/types/traning';

// ----------------------------------------------------------------------

type Props = {
  trainings: TraningItemType[];
};

export function TraningList({ trainings }: Props) {
  return (
    <Box sx={{ flex: 1 }}>
      <Box
        sx={{
          gap: 3,

          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)' },
        }}
      >
        {trainings.map((trainig) => (
          <TraningItem
            key={trainig.id}
            trainig={trainig}
            sx={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '1rem' }}
          />
        ))}
      </Box>

      {trainings.length > 8 && (
        <Pagination
          count={8}
          sx={{
            mt: { xs: 8, md: 8 },
            [`& .${paginationClasses.ul}`]: { justifyContent: 'center' },
          }}
        />
      )}
    </Box>
  );
}
