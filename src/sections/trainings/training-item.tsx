import type { IJobItem } from 'src/types/job';
import type { CardProps } from '@mui/material/Card';

import { usePopover } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';

import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';
import { Iconify } from 'src/components/iconify';
import { TraningItemType } from 'src/types/traning';
import { Button, Chip, Typography } from '@mui/material';

// ----------------------------------------------------------------------

type Props = CardProps & {
  trainig: TraningItemType;
};

export function TraningItem({ trainig, sx, ...other }: Props) {
  const menuActions = usePopover();

  return (
    <>
      <Card sx={sx} {...other}>
        <IconButton onClick={menuActions.onOpen} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <Iconify icon="solar:bookmark-outline" width={'1.5rem'} />
        </IconButton>

        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Avatar
            alt={trainig.school.name}
            src={trainig.school.logo}
            variant="rounded"
            sx={{ width: 48, height: 48 }}
          />
          <Box>
            <Typography variant="subtitle1">{trainig.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {trainig.school.address}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '0.5rem' }}>
          <Chip label={trainig.type} variant="soft" icon={<Iconify icon={'f7:doc-text-fill'} />} />
          <Chip
            label={`${trainig.duration} mois`}
            variant="soft"
            icon={<Iconify icon={'tabler:clock-filled'} />}
          />
          <Chip
            label={trainig.level}
            variant="soft"
            icon={<Iconify icon={'ri:graduation-cap-fill'} />}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" color="textDisabled">
            il y a 3 jours
          </Typography>
          <Button variant="contained" color="primary">
            Voir
          </Button>
        </Box>
      </Card>

      {}
    </>
  );
}
