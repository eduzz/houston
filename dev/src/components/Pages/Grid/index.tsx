import React, { Fragment, memo, useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { GridItemsAlignment, GridJustification } from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Button from '@eduzz/houston-ui/Button';
import Column from '@eduzz/houston-ui/Grid/Column';
import Container from '@eduzz/houston-ui/Grid/Container';
import Row from '@eduzz/houston-ui/Grid/Row';

import Toolbar from 'components/Layout/Toolbar';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      flexFlow: 'column wrap'
    },
    column: {
      padding: 12,
      background: '#eee',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 500,
      height: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '&.--diff': {
        height: 50
      }
    },
    code: {
      margin: 0,
      fontSize: 16,
      background: '#333',
      color: 'white',
      borderRadius: 4,
      padding: 20
    }
  })
);

const GridPage = memo(() => {
  const classes = useStyles();

  const [type, setType] = useState<any>('confortable');
  const [columns, setColumns] = useState<number>(12);
  const [fluid, setFluid] = useState<boolean>(false);
  const [align, setAlign] = useState<GridItemsAlignment>('center');
  const [justify, setJustify] = useState<GridJustification>('center');

  return (
    <Fragment>
      <Toolbar title='Grid' />

      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5'>
            Examples
          </Typography>
        </CardContent>

        <CardContent>
          <Container spacing='cozy' layout='fluid'>
            <Row>
              <Column xs={12}>
                <FormLabel>Row type (type)</FormLabel>
                <RadioGroup
                  name='type'
                  value={type.toString()}
                  onChange={(_: React.ChangeEvent<HTMLInputElement>, value: any) => setType(value)}
                  row
                >
                  {['confortable', 'cozy', 'compact'].map(value => (
                    <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
                  ))}
                </RadioGroup>
              </Column>
            </Row>

            <br />

            <Row>
              <Column xs={12}>
                <FormLabel>Columns</FormLabel>
                <RadioGroup
                  name='columns'
                  value={columns.toString()}
                  onChange={(_: React.ChangeEvent<HTMLInputElement>, value: string) => setColumns(Number(value))}
                  row
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(value => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </Column>
            </Row>

            <br />

            <Row>
              <Column xs={12}>
                <FormLabel>Fluid</FormLabel>
                <RadioGroup
                  name='fluid'
                  value={fluid ? 'true' : 'false'}
                  onChange={(_: React.ChangeEvent<HTMLInputElement>, value: string) => setFluid(value === 'true')}
                  row
                >
                  {['true', 'false'].map(value => (
                    <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
                  ))}
                </RadioGroup>
              </Column>
            </Row>

            <br />

            <Row>
              <Column xs={12}>
                <FormLabel>Align (alignItems)</FormLabel>
                <RadioGroup
                  name='align'
                  value={align}
                  onChange={(_: React.ChangeEvent<HTMLInputElement>, value: GridItemsAlignment) => setAlign(value)}
                  row
                >
                  {['flex-start', 'center', 'flex-end', 'stretch', 'baseline'].map(value => (
                    <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
                  ))}
                </RadioGroup>
              </Column>
            </Row>

            <br />

            <Row>
              <Column xs={12}>
                <FormLabel>Justify (justify)</FormLabel>
                <RadioGroup
                  name='justify'
                  value={justify}
                  onChange={(_: React.ChangeEvent<HTMLInputElement>, value: GridJustification) => setJustify(value)}
                  row
                >
                  {['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'].map(value => (
                    <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
                  ))}
                </RadioGroup>
              </Column>
            </Row>
          </Container>
        </CardContent>

        <CardContent className={classes.container}>
          <Row style={{ background: '#073b4c' }} alignItems={align} justify={justify}>
            {new Array(columns).fill('').map((_, index) => (
              <Column xs={true} key={index + 1}>
                <div className={`${classes.column} ${index % 2 === 0 ? '--diff' : ''}`}>{index + 1}</div>
              </Column>
            ))}
          </Row>
        </CardContent>

        <CardContent className={classes.container}>
          <Row style={{ background: '#073b4c' }} alignItems={align} justify={justify}>
            {new Array(2).fill('').map((_, index) => (
              <Column xs={true} key={index + 1}>
                <div className={`${classes.column} ${index % 2 === 0 ? '--diff' : ''}`}>{index + 1}</div>
              </Column>
            ))}
          </Row>
        </CardContent>

        <CardContent>
          <Button
            onClick={() =>
              window.open('https://github.com/eduzz/houston/tree/master/packages/ui-components/Grid', '_blank')
            }
          >
            Documentation
          </Button>
        </CardContent>
      </Card>
    </Fragment>
  );
});

export default GridPage;
