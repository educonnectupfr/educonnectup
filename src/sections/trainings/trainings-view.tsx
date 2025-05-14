'use client';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';

import { _jobs, _roles } from 'src/_mock';
import { EmptyContent } from 'src/components/empty-content';
import { Container, Pagination, PaginationItem } from '@mui/material';
import { TraningList } from './traning-list';
import { TrainingSearch } from './training-search';
import { TraningItemType } from 'src/types/traning';
import TrainingDetails from './traning-details';
import { TrainingSort } from './training-sort';
import { TRAINING_SORT_OPTIONS } from 'src/_mock/_traning';

// ----------------------------------------------------------------------
const trainingData = [
  {
    id: '1',
    title: 'Informations pratiques',
    createdAt: '30-05-2025',
    duration: 24,
    startDate: '30-05-2025',
    limitDate: '30-05-2025',
    level: 'BTC',
    type: 'Alternance',
    prcie: 0,
    description:
      'Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.',
    domains: ['Commerce', 'Marketing', 'Vente'],
    school: {
      address: 'Paris 10080',
      logo: 'https://copyrightservice.co.uk/_f/4815/9197/8330/logo-1933884_640.jpg',
      name: 'Scholia',
      phoneNumber: '+33885522998',
    },
  },
  {
    id: '1',
    title: 'Informations pratiques',
    createdAt: '30-05-2025',
    duration: 24,
    startDate: '30-05-2025',
    limitDate: '30-05-2025',
    level: 'BTC',
    type: 'Alternance',
    prcie: 0,
    description:
      'Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.',
    domains: ['Commerce', 'Marketing', 'Vente'],
    school: {
      address: 'Paris 10080',
      logo: 'https://copyrightservice.co.uk/_f/4815/9197/8330/logo-1933884_640.jpg',
      name: 'Scholia',
      phoneNumber: '+33885522998',
    },
  },
  {
    id: '1',
    title: 'Informations pratiques',
    createdAt: '30-05-2025',
    duration: 24,
    startDate: '30-05-2025',
    limitDate: '30-05-2025',
    level: 'BTC',
    type: 'Alternance',
    prcie: 0,
    description:
      'Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.',
    domains: ['Commerce', 'Marketing', 'Vente'],
    school: {
      address: 'Paris 10080',
      logo: 'https://copyrightservice.co.uk/_f/4815/9197/8330/logo-1933884_640.jpg',
      name: 'Scholia',
      phoneNumber: '+33885522998',
    },
  },
  {
    id: '1',
    title: 'Informations pratiques',
    createdAt: '30-05-2025',
    duration: 24,
    startDate: '30-05-2025',
    limitDate: '30-05-2025',
    level: 'BTC',
    type: 'Alternance',
    prcie: 0,
    description:
      'Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.',
    domains: ['Commerce', 'Marketing', 'Vente'],
    school: {
      address: 'Paris 10080',
      logo: 'https://copyrightservice.co.uk/_f/4815/9197/8330/logo-1933884_640.jpg',
      name: 'Scholia',
      phoneNumber: '+33885522998',
    },
  },
];
export function TraningsView() {
  const [sortBy, setSortBy] = useState(TRAINING_SORT_OPTIONS[0].label);
  const [trainings, setTrainings] = useState<TraningItemType[]>(trainingData);
  const [selectedTraning, setSelectedTraning] = useState<TraningItemType>(trainings[0]);
  const notFound = !trainings.length;

  const handleSortBy = useCallback((newValue: string) => {
    setSortBy(newValue);
  }, []);

  return (
    <Container sx={{ paddingBlock: '2rem' }}>
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
          <TrainingSort sort={sortBy} onSort={handleSortBy} sortOptions={TRAINING_SORT_OPTIONS} />
        </Box>
      </Box>
      {notFound ? (
        <EmptyContent filled sx={{ py: 10 }} />
      ) : (
        <Box sx={{ display: 'flex', paddingBlock: '2rem', gap: '1rem' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              rowGap: '1.5rem',
            }}
          >
            <TraningList trainings={trainings} />
            <Pagination page={1} count={4} color="primary"></Pagination>
          </Box>
          <TrainingDetails
            trainig={selectedTraning}
            sx={{
              padding: '1.5rem',
              flex: 1,
              display: { xs: 'none', md: 'block' },
            }}
          />
        </Box>
      )}
    </Container>
  );
}
