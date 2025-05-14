import { Avatar, Box, Button, Card, CardProps, Chip, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Iconify } from 'src/components/iconify';
import { TraningItemType } from 'src/types/traning';
import Grid from '@mui/material/Grid2';
type Props = CardProps & {
  trainig: TraningItemType;
};
const TrainingDetails = ({ trainig, sx, ...other }: Props) => {
  return (
    <Card sx={sx} {...other}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', columnGap: '1rem' }}>
          <Avatar
            alt="logo"
            src={trainig.school.logo}
            title={trainig.school.name}
            sx={{ width: 64, height: 64 }}
            variant="rounded"
          />
          <Box>
            <Typography variant="h5">{trainig.title}</Typography>
            <Typography variant="body1" color="textDisabled">
              {trainig.school.address}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', columnGap: '0.6rem' }}>
          <Button variant="contained" color="primary" size="large">
            Postuler
          </Button>
          <Button variant="outlined" color="inherit" size="large">
            <Iconify icon="solar:bookmark-outline" width={'1.5rem'} />
          </Button>

          <Button variant="outlined" color="inherit" size="large">
            <Iconify icon="solar:share-outline" width={'1.5rem'} />
          </Button>
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ marginBlock: '2rem' }}>
        <Grid size={6} sx={{ display: 'flex', columnGap: '0.8rem' }}>
          <Iconify icon={'solar:calendar-bold'} width={'1.5rem'} />
          <Box>
            <Typography variant="body2" color="textSecondary">
              Date de rentrée
            </Typography>
            <Typography variant="subtitle2">{trainig.startDate}</Typography>
          </Box>
        </Grid>

        <Grid size={6} sx={{ display: 'flex', columnGap: '0.8rem' }}>
          <Iconify icon={'solar:calendar-bold'} width={'1.5rem'} />
          <Box>
            <Typography variant="body2" color="textSecondary">
              Date limite
            </Typography>
            <Typography variant="subtitle2">{trainig.limitDate}</Typography>
          </Box>
        </Grid>

        <Grid size={6} sx={{ display: 'flex', columnGap: '0.8rem' }}>
          <Iconify icon={'f7:doc-text-fill'} width={'1.5rem'} />
          <Box>
            <Typography variant="body2" color="textSecondary">
              Type de formation
            </Typography>
            <Typography variant="subtitle2">{trainig.type}</Typography>
          </Box>
        </Grid>
        <Grid size={6} sx={{ display: 'flex', columnGap: '0.8rem' }}>
          <Iconify icon={'tabler:clock-filled'} width={'1.5rem'} />
          <Box>
            <Typography variant="body2" color="textSecondary">
              Durée du formation
            </Typography>
            <Typography variant="subtitle2">{trainig.type}</Typography>
          </Box>
        </Grid>
        <Grid size={6} sx={{ display: 'flex', columnGap: '0.8rem' }}>
          <Iconify icon={'f7:money-euro-circle-fill'} width={'1.5rem'} />
          <Box>
            <Typography variant="body2" color="textSecondary">
              Coût de la formation
            </Typography>
            <Typography variant="subtitle2">{trainig.prcie} €/an</Typography>
          </Box>
        </Grid>
        <Grid size={6} sx={{ display: 'flex', columnGap: '0.8rem' }}>
          <Iconify icon={'ri:graduation-cap-fill'} width={'1.5rem'} />
          <Box>
            <Typography variant="body2" color="textSecondary">
              Niveau de diplôme
            </Typography>
            <Typography variant="subtitle2">{trainig.level}</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '0.8rem' }}>
        <Typography variant="h6">Description</Typography>
        <Typography variant="body1">{trainig.description}</Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '0.8rem' }}>
        <Typography variant="h6">Domaines de formation</Typography>
        <Box sx={{ display: 'flex', columnGap: '0.8rem' }}>
          {trainig.domains.map((title, index) => (
            <Chip key={index} label={title} variant="soft" />
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export default TrainingDetails;
