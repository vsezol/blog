import { Typography } from '@material-ui/core';
import Description, { IDescriptionProps } from '@/components/simple/Post/Description';

export interface IPostShortProps extends Omit<IDescriptionProps, 'time'> {
  title: string;
}

export default function Short({ title, description, date }: IPostShortProps) {
  return (
    <div>
      <Typography variant="h6" component="h2">
        {{ title }}
        <Description description={description} date={date} time={5}/>
      </Typography>
    </div>
  );
}
