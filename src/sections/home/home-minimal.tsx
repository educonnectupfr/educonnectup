import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { SvgColor } from 'src/components/svg-color';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { CircleSvg } from './components/svg-elements';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Iconify } from 'src/components/iconify';

export function HomeMinimal({ sx, ...other }: BoxProps) {
  const renderDescription = () => (
    <>
      <Stack spacing={6} sx={{ maxWidth: { sm: 560, md: 400 }, mx: { xs: 'auto', md: 'unset' } }}>
        {ITEMS.map((item) => (
          <Box
            component={m.div}
            variants={varFade('inUp', { distance: 24 })}
            key={item.title}
            sx={[{ gap: 3, display: 'flex' }]}
          >
            <Iconify icon={item.icon} fontSize={40} width={'2.5rem'} color="#005EFD" />
            <Stack spacing={1}>
              <Typography variant="h5" component="h6">
                {item.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </>
  );

  const renderImage = () => (
    <Stack
      component={m.div}
      variants={varFade('inRight', { distance: 24 })}
      sx={{
        height: '100%',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Box
        component="img"
        alt="students"
        src={`${CONFIG.assetsDir}/assets/images/home/features.svg`}
        sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </Stack>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          overflow: 'hidden',
          position: 'relative',
          py: { xs: 10, md: 20 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        <Container>
          <SectionTitle
            title="Nos fonctionnalités "
            txtGradient="clés"
            description="Découvrez les outils puissants qui rendent notre plateforme simple, rapide et efficace."
            sx={{ mb: 8, textAlign: 'center' }}
          />
        </Container>

        <Container>
          <Grid container columnSpacing={{ xs: 0, md: 8 }} sx={{ position: 'relative', zIndex: 9 }}>
            <Grid size={{ xs: 12, md: 6, lg: 7 }}>{renderDescription()}</Grid>

            <Grid sx={{ display: { xs: 'none', md: 'block' } }} size={{ md: 6, lg: 5 }}>
              {renderImage()}
            </Grid>
          </Grid>

          <CircleSvg variants={varFade('in')} sx={{ display: { xs: 'none', md: 'block' } }} />
        </Container>
      </MotionViewport>
    </Box>
  );
}

// ----------------------------------------------------------------------

const ITEMS = [
  {
    icon: `pepicons-pencil:cv`,
    title: 'Améliorer votre Cv',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus felis ante, at molestie nibh feugiat non.',
  },
  {
    icon: `solar:calendar-linear`,
    title: 'Organiser vos démarche',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus felis ante, at molestie nibh feugiat non.',
  },
  {
    icon: `ph:users-three`,
    title: 'Créer votre réseaux',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus felis ante, at molestie nibh feugiat non.',
  },
];
