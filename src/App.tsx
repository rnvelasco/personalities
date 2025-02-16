import { useState } from 'react';
import { softwareDeveloperList } from './data';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import "./App.css";

import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const hasNext = index < softwareDeveloperList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    if (index == 0) {
      setIndex(softwareDeveloperList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let softwareDeveloper = softwareDeveloperList[index];

  return (
    <Card variant="outlined" sx={{ maxWidth: 600, minHeight: 400}}>
      <CardHeader
        title="SOFTWARE DEVELOPERS"
        subheader="Juan Dela Cruz - C-PEITEL3"
      />
      <CardActions disableSpacing>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={handleBackClick}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNextClick}>
            Next
          </Button>
        </Stack>
      </CardActions>
      <CardMedia
        component="img"
        height="250"
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        image={softwareDeveloper.url}
        alt={softwareDeveloper.alt}
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
        {softwareDeveloper.name}
        </Typography>
        <Typography variant="h5" gutterBottom>
        {index + 1 + " of " + softwareDeveloperList.length}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ fontSize: 50 }}/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>{softwareDeveloper.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
