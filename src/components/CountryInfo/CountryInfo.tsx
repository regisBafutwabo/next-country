import {CardContent, CardMedia, Grid, Typography} from '@material-ui/core';
import numeral from 'numeral';

import {CountryInfoProps} from './CountryInfo.interface';
import {CardComponent, Label, Row, Value} from './styles';

export const CountryInfo = (props: CountryInfoProps) => {
  const {Country} = props;
  return (
    <CardComponent elevation={3}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} md={4}>
            <CardMedia
              style={{width: '100%', height: 300}}
              image={Country.flag?.svgFile}
              title={`${Country.name} Flag`}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Row container>
              <Label item xs={3}>
                Native Name:
              </Label>
              <Value item xs={9}>
                {Country.nativeName}
              </Value>
            </Row>
            <Row container>
              <Label item xs={3}>
                Capital:
              </Label>
              <Value item xs={9}>
                {Country.capital}
              </Value>
            </Row>
            <Row container>
              <Label item xs={3}>
                Area:
              </Label>

              <Value item xs={9}>
                {numeral(Country.area).format('0,0')} km<sup>2</sup>
              </Value>
            </Row>
            {Country.callingCodes && Country.callingCodes[0] ? (
              <Row container>
                <Label item xs={3}>
                  Calling Code:
                </Label>

                <Value item xs={9}>
                  +{Country.callingCodes[0].name}
                </Value>
              </Row>
            ) : (
              <></>
            )}

            <Row container>
              <Label item xs={3}>
                Population:
              </Label>
              <Value item xs={9}>
                {numeral(Country.population).format('0,0')}
              </Value>
            </Row>

            <Row container>
              <Label item xs={3}>
                Currency:
              </Label>
              <Value item xs={9}>
                {Country.currencies?.map((currency) => (
                  <Typography key={currency?.name}>
                    {`${currency?.name} (${currency?.symbol})`}
                  </Typography>
                ))}
              </Value>
            </Row>
            <Row container>
              <Label item xs={3}>
                Languages:
              </Label>

              <Value item xs={9}>
                {Country.officialLanguages?.map((language) => (
                  <Typography key={language?.name}>{language?.name}</Typography>
                ))}
              </Value>
            </Row>
            {Country.borders && Country.borders[0] ? (
              <Row container>
                <Label item xs={3}>
                  Neighbours:
                </Label>

                <Value item xs={9}>
                  {Country.borders?.map((neighbour) => (
                    <Typography key={neighbour?.name}>
                      {neighbour?.name}
                    </Typography>
                  ))}
                </Value>
              </Row>
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </CardComponent>
  );
};
