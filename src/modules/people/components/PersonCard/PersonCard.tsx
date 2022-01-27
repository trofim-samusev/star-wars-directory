import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Tooltip,
} from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Link } from 'react-router-dom';

import {
  getGenderTitle,
  getBirthYearTooltipTitle,
  getPersonHairColorTitle,
  getPersonId,
} from '../../helpers';
import { PersonFeature } from '../PersonFeature';
import { Person } from '../../types';

type Props = {
  person: Person;
};

export const PersonCard = (props: Props) => {
  const { person } = props;
  const id = getPersonId(person.url);

  return (
    <Card sx={{ minWidth: 240 }}>
      <CardHeader title={person.name} />
      <CardContent>
        <PersonFeature title="Gender:" value={getGenderTitle(person.gender)} />
        <PersonFeature title="Year of birth:" value={`👶 ${person.birth_year}`}>
          {person.birth_year !== 'unknown' ? (
            <Tooltip title={getBirthYearTooltipTitle(person.birth_year)}>
              <HelpOutlineOutlinedIcon sx={{ ml: 1 }} fontSize="small" />
            </Tooltip>
          ) : null}
        </PersonFeature>
        <PersonFeature title="Height:" value={`📏 ${person.height} cm`} />
        <PersonFeature title="Mass:" value={`⚖️ ${person.mass} kg`} />
        <PersonFeature title="Eyes:" value={`👀 ${person.eye_color}`} />
        <PersonFeature
          title="Hair:"
          value={getPersonHairColorTitle(person.hair_color)}
        />
      </CardContent>
      {id && (
        <CardActions>
          <Button component={Link} size="small" to={`/people/${id}`}>
            Learn More
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
