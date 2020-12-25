export interface IPostMicroProps {
  date: string;
  content: string;
}

export default function Micro({ date, content }: IPostMicroProps) {
  return (
    <div>
      {date}
      {content}
    </div>
  );
}
