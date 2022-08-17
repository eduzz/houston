import Typography from '../../Typography';

const Title = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Typography as='h6' size='sm'>
      {children}
    </Typography>
  );
};

export default Title;
