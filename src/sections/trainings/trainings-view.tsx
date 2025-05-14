'use client';

import type { IJobItem, IJobFilters } from 'src/types/job';

import { orderBy } from 'es-toolkit';
import { useState, useCallback } from 'react';
import { useBoolean, useSetState } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { paths } from 'src/routes/paths';
import {
  _jobs,
  _roles,
  JOB_SORT_OPTIONS,
  JOB_BENEFIT_OPTIONS,
  JOB_EXPERIENCE_OPTIONS,
  JOB_EMPLOYMENT_TYPE_OPTIONS,
} from 'src/_mock';

import { EmptyContent } from 'src/components/empty-content';

import { JobSort } from '../job/job-sort';

import { Container } from '@mui/material';
import { TraningList } from './traning-list';
import { TrainingSearch } from './training-search';
import { TraningItemType } from 'src/types/traning';

// ----------------------------------------------------------------------

export function TraningsView() {
  const [sortBy, setSortBy] = useState('latest');
  const [trainings, setTrainings] = useState<TraningItemType[]>([
    {
      id: '1',
      title: 'Informations pratiques',
      createdAt: '30-05-2025',
      duration: 24,
      startDate: '30-05-2025',
      limitDate: '30-05-2025',
      level: 'BTC',
      type: 'Alternance',
      school: {
        address: 'Paris 10080',
        logo: 'https://copyrightservice.co.uk/_f/4815/9197/8330/logo-1933884_640.jpg',
        name: 'Scholia',
        phoneNumber: '+33885522998',
      },
    },
  ]);

  const notFound = !trainings.length;

  const handleSortBy = useCallback((newValue: string) => {
    setSortBy(newValue);
  }, []);

  return (
    <Container sx={{ paddingBlock: '2rem' }}>
      {notFound && <EmptyContent filled sx={{ py: 10 }} />}
      <Box
        sx={{
          gap: 3,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-end', sm: 'center' },
        }}
      >
        <TrainingSearch />

        <Box sx={{ gap: 1, flexShrink: 0, display: 'flex' }}>
          <JobSort sort={sortBy} onSort={handleSortBy} sortOptions={JOB_SORT_OPTIONS} />
        </Box>
      </Box>
      <TraningList trainings={trainings} />
    </Container>
  );
}
