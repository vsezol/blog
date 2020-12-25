import { Typography } from '@material-ui/core';

export interface IDescriptionProps {
  description: string;
  date: string;
  time: number;
}

export default function Description({
  description,
  date,
  time,
}: IDescriptionProps) {
  return (
    <div>
      <Typography variant="subtitle1" component="h4">
        {description}
      </Typography>
      {date} ☕️{time}
    </div>
  );
}
