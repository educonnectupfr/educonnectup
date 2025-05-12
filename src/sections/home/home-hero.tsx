import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';
import type { MotionProps, MotionValue, SpringOptions } from 'framer-motion';

import { useRef, useState } from 'react';
import { m, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AvatarGroup from '@mui/material/AvatarGroup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar, { avatarClasses } from '@mui/material/Avatar';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _mock } from 'src/_mock';
import { varFade, MotionContainer } from 'src/components/animate';
import Image from 'next/image';
import { varAlpha } from 'minimal-shared/utils';
import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

const smKey: Breakpoint = 'sm';
const mdKey: Breakpoint = 'md';
const lgKey: Breakpoint = 'lg';

const motionProps: MotionProps = {
  variants: varFade('inUp', { distance: 24 }),
};

export function HomeHero({ sx, ...other }: BoxProps) {
  const scrollProgress = useScrollPercent();

  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up(mdKey));

  const distance = mdUp ? scrollProgress.percent : 0;

  const opacity: MotionValue<number> = useTransform(
    scrollProgress.scrollY,
    [0, 1],
    [1, mdUp ? Number((1 - scrollProgress.percent / 100).toFixed(1)) : 1]
  );

  const renderImage = () => (
    <Stack
      component={m.div}
      variants={varFade('inDown', { distance: 24 })}
      sx={[
        (theme) => ({
          alignItems: 'flex-end',
          filter: `drop-shadow(0 24px 48px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)})`,
          ...theme.applyStyles('dark', {
            filter: `drop-shadow(0 24px 48px ${varAlpha(theme.vars.palette.common.blackChannel, 0.16)})`,
          }),
        }),
      ]}
    >
      <Box
        component="img"
        alt="hero image"
        src={`${CONFIG.assetsDir}/assets/images/home/hero.svg`}
        sx={{ width: '100%', objectFit: 'cover' }}
      />
    </Stack>
  );

  return (
    <Box
      ref={scrollProgress.elementRef}
      component="section"
      sx={[
        {
          overflow: 'hidden',
          position: 'relative',
          [theme.breakpoints.up(mdKey)]: {
            minHeight: 760,
            height: '100vh',
            maxHeight: 1440,
            display: 'block',
            willChange: 'opacity',
            mt: 'calc(var(--layout-header-desktop-height) * -1)',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        component={m.div}
        style={{ opacity }}
        sx={{
          width: 1,
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          transition: theme.transitions.create(['opacity']),
          [theme.breakpoints.up(mdKey)]: { height: 1, position: 'fixed', maxHeight: 'inherit' },
        }}
      >
        <Container
          component={MotionContainer}
          sx={{
            py: 3,
            gap: 5,
            zIndex: 9,
            display: 'flex',

            flexDirection: 'column',
            [theme.breakpoints.up(mdKey)]: {
              flex: '1 1 auto',
              justifyContent: 'center',
              py: 'var(--layout-header-desktop-height)',
            },
          }}
        >
          <Grid container spacing={{ xs: 5, md: 8 }} sx={{ position: 'relative', zIndex: 9 }}>
            <Grid size={{ xs: 12, md: 6, lg: 5 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
                <m.div {...motionProps}>
                  <Typography variant="h1" color="secondary">
                    {`L'éducation crée un meilleur avenir`}
                  </Typography>
                </m.div>
                <m.div {...motionProps}>
                  <Typography variant="body1" color="textSecondary">
                    {`The starting point for your next project is based on MUI. \nEasy customization helps you build apps faster and better.`}
                  </Typography>
                </m.div>

                <m.div {...motionProps}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',

                      gap: { xs: 1.5, sm: 2 },
                    }}
                  >
                    <Button
                      component={RouterLink}
                      href={paths.auth.supabase.signUp}
                      color="primary"
                      size="large"
                      variant="contained"
                    >
                      Commencer
                    </Button>

                    <Button
                      color="inherit"
                      size="large"
                      variant="outlined"
                      target="_blank"
                      rel="noopener"
                      href={paths.figmaUrl}
                      sx={{ borderColor: 'text.primary' }}
                    >
                      En savoir plus
                    </Button>
                  </Box>
                </m.div>

                <m.div {...motionProps}>
                  <Box
                    sx={{
                      gap: 1.5,
                      display: 'flex',
                      flexWrap: 'wrap',

                      typography: 'subtitle2',
                    }}
                  >
                    <AvatarGroup sx={{ [`& .${avatarClasses.root}`]: { width: 32, height: 32 } }}>
                      {Array.from({ length: 3 }, (_, index) => (
                        <Avatar
                          key={_mock.fullName(index + 1)}
                          alt={_mock.fullName(index + 1)}
                          src={_mock.image.avatar(index + 1)}
                        />
                      ))}
                    </AvatarGroup>
                    +2500 étudiants nous ont rejoint
                  </Box>
                </m.div>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 7 }}>{renderImage()}</Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

function useTransformY(value: MotionValue<number>, distance: number) {
  const physics: SpringOptions = {
    mass: 0.1,
    damping: 20,
    stiffness: 300,
    restDelta: 0.001,
  };

  return useSpring(useTransform(value, [0, 1], [0, distance]), physics);
}

function useScrollPercent() {
  const elementRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  useMotionValueEvent(scrollY, 'change', (scrollHeight) => {
    let heroHeight = 0;

    if (elementRef.current) {
      heroHeight = elementRef.current.offsetHeight;
    }

    const scrollPercent = Math.floor((scrollHeight / heroHeight) * 100);

    if (scrollPercent >= 100) {
      setPercent(100);
    } else {
      setPercent(Math.floor(scrollPercent));
    }
  });

  return { elementRef, percent, scrollY };
}
