import Box from '@eduzz/houston-ui/Box';
import Button from '@eduzz/houston-ui/Button';
import Column from '@eduzz/houston-ui/Grid/Column';
import Container from '@eduzz/houston-ui/Grid/Container';
import Row from '@eduzz/houston-ui/Grid/Row';
import Tooltip from '@eduzz/houston-ui/Tooltip';

export default function TooltipExample() {
  return (
    <Container>
      <Box>
        <Row>
          <Column>
            <Tooltip title='Lorem Ipsum dolor'>
              <Button>teste</Button>
            </Tooltip>
          </Column>

          <Column>
            <Tooltip title='Lorem Ipsum dolor' disabled>
              <Button>disabled</Button>
            </Tooltip>
          </Column>

          <Column>
            <Tooltip title='Lorem Ipsum dolor' placement='right'>
              <Button>right</Button>
            </Tooltip>
          </Column>

          <Column>
            <Tooltip title='Lorem Ipsum dolor' open placement='bottom'>
              <Button>opened</Button>
            </Tooltip>
          </Column>
        </Row>
      </Box>
    </Container>
  );
}
