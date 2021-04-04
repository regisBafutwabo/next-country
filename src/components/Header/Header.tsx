import {Typography} from '@material-ui/core';
import {HeaderProps} from './Header.interface';
import {Container} from './styles';

export const Header = (props: HeaderProps) => {
  const {title} = props;

  return (
    <Container>
      <Typography color="primary" variant="h4">
        {title}
      </Typography>
    </Container>
  );
};
