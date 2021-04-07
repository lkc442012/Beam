const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.get('/api/scooter', (req, res) => {
  res.send({
    scooter: [
      {
        coordinate: {
          latitude: 1.294444,
          longitude: 103.846947,
        },
        battery: '25',
        serialCode: '0001',
      },
      {
        coordinate: {
          latitude: 1.394544,
          longitude: 102.356157,
        },
        battery: '58',
        serialCode: '0002',
      },
      {
        coordinate: {
          latitude: 1.446392,
          longitude: 103.780655,
        },
        battery: '63',
        serialCode: '0003',
      },
      {
        coordinate: {
          latitude: 1.273806,
          longitude: 103.817497,
        },
        battery: '12',
        serialCode: '0004',
      },
      {
        coordinate: {
          latitude: 1.212344,
          longitude: 101.646137,
        },
        battery: '66',
        serialCode: '0005',
      },
      {
        coordinate: {
          latitude: 1.282375,
          longitude: 103.864273,
        },
        battery: '70',
        serialCode: '0006',
      },
      {
        coordinate: {
          latitude: 1.366701,
          longitude: 103.800003,
        },
        battery: '99',
        serialCode: '0007',
      },
      {
        coordinate: {
          latitude: 1.287953,
          longitude: 103.851784,
        },
        battery: '85',
        serialCode: '0008',
      },
      {
        coordinate: {
          latitude: 1.34501,
          longitude: 103.983208,
        },
        battery: '100',
        serialCode: '0009',
      },
      {
        coordinate: {
          latitude: 1.262953,
          longitude: 103.541927,
        },
        battery: '16',
        serialCode: '0010',
      },
      {
        coordinate: {
          latitude: 1.294444,
          longitude: 103.846947,
        },
        battery: '68',
        serialCode: '0011',
      },
      {
        coordinate: {
          latitude: 1.369115,
          longitude: 103.845436,
        },
        battery: '55',
        serialCode: '0012',
      },
      {
        coordinate: {
          latitude: 1.371778,
          longitude: 103.893059,
        },
        battery: '45',
        serialCode: '0013',
      },
      {
        coordinate: {
          latitude: 1.351252,
          longitude: 103.832947,
        },
        battery: '52',
        serialCode: '0014',
      },
      {
        coordinate: {
          latitude: 1.31027,
          longitude: 103.851959,
        },
        battery: '87',
        serialCode: '0015',
      },
      {
        coordinate: {
          latitude: 1.28323,
          longitude: 103.815952,
        },
        battery: '90',
        serialCode: '0016',
      },
      {
        coordinate: {
          latitude: 1.361238,
          longitude: 103.826947,
        },
        battery: '82',
        serialCode: '0017',
      },
      {
        coordinate: {
          latitude: 1.347026,
          longitude: 103.724052,
        },
        battery: '96',
        serialCode: '0018',
      },
      {
        coordinate: {
          latitude: 1.347146,
          longitude: 103.724252,
        },
        battery: '63',
        serialCode: '0019',
      },
      {
        coordinate: {
          latitude: 1.347578,
          longitude: 103.784548,
        },
        battery: '35',
        serialCode: '0020',
      },
      {
        coordinate: {
          latitude: 1.293494,
          longitude: 103.85717,
        },
        battery: '89',
        serialCode: '0021',
      },
      {
        coordinate: {
          latitude: 1.298564,
          longitude: 103.837563,
        },
        battery: '57',
        serialCode: '0022',
      },
      {
        coordinate: {
          latitude: 1.293421,
          longitude: 103.832367,
        },
        battery: '70',
        serialCode: '0023',
      },
      {
        coordinate: {
          latitude: 1.37762,
          longitude: 102.861,
        },
        battery: '53',
        serialCode: '0024',
      },
      {
        coordinate: {
          latitude: 1.287356,
          longitude: 103.860353,
        },
        battery: '47',
        serialCode: '0025',
      },
      {
        coordinate: {
          latitude: 1.283574,
          longitude: 103.862542,
        },
        battery: '38',
        serialCode: '0026',
      },
      {
        coordinate: {
          latitude: 1.287953,
          longitude: 103.851784,
        },
        battery: '55',
        serialCode: '0027',
      },
      {
        coordinate: {
          latitude: 1.250111,
          longitude: 103.830933,
        },
        battery: '24',
        serialCode: '0028',
      },
      {
        coordinate: {
          latitude: 1.337578,
          longitude: 103.764548,
        },
        battery: '63',
        serialCode: '0029',
      },
      {
        coordinate: {
          latitude: 1.330231,
          longitude: 103.740812,
        },
        battery: '32',
        serialCode: '0030',
      },
      {
        coordinate: {
          latitude: 1.282302,
          longitude: 103.858528,
        },
        battery: '96',
        serialCode: '0031',
      },
      {
        coordinate: {
          latitude: 1.282321,
          longitude: 103.858541,
        },
        battery: '06',
        serialCode: '0032',
      },
      {
        coordinate: {
          latitude: 1.296568,
          longitude: 103.852119,
        },
        battery: '86',
        serialCode: '0033',
      },
      {
        coordinate: {
          latitude: 1.296572,
          longitude: 103.852193,
        },
        battery: '86',
        serialCode: '0034',
      },
      {
        coordinate: {
          latitude: 1.347026,
          longitude: 103.724052,
        },
        battery: '59',
        serialCode: '0035',
      },
      {
        coordinate: {
          latitude: 1.347053,
          longitude: 103.724023,
        },
        battery: '68',
        serialCode: '0036',
      },
      {
        coordinate: {
          latitude: 1.304833,
          longitude: 103.831833,
        },
        battery: '86',
        serialCode: '0037',
      },
      {
        coordinate: {
          latitude: 1.304885,
          longitude: 103.831875,
        },
        battery: '53',
        serialCode: '0038',
      },
      {
        coordinate: {
          latitude: 1.420181,
          longitude: 103.864555,
        },
        battery: '66',
        serialCode: '0039',
      },
      {
        coordinate: {
          latitude: 1.420173,
          longitude: 103.864523,
        },
        battery: '45',
        serialCode: '0040',
      },
      {
        coordinate: {
          latitude: 1.46378,
          longitude: 103.801811,
        },
        battery: '47',
        serialCode: '0041',
      },
      {
        coordinate: {
          latitude: 1.463762,
          longitude: 103.80189,
        },
        battery: '86',
        serialCode: '0042',
      },
      {
        coordinate: {
          latitude: 1.289688,
          longitude: 103.851562,
        },
        battery: '99',
        serialCode: '0043',
      },
      {
        coordinate: {
          latitude: 1.279695,
          longitude: 103.851523,
        },
        battery: '75',
        serialCode: '0044',
      },
      {
        coordinate: {
          latitude: 1.28871,
          longitude: 103.837372,
        },
        battery: '86',
        serialCode: '0045',
      },
      {
        coordinate: {
          latitude: 1.3667,
          longitude: 103.800003,
        },
        battery: '35',
        serialCode: '0046',
      },
      {
        coordinate: {
          latitude: 1.446392,
          longitude: 103.780655,
        },
        battery: '85',
        serialCode: '0047',
      },
      {
        coordinate: {
          latitude: 1.307222,
          longitude: 103.819725,
        },
        battery: '97',
        serialCode: '0048',
      },
      {
        coordinate: {
          latitude: 1.273857,
          longitude: 103.817463,
        },
        battery: '77',
        serialCode: '0049',
      },
      {
        coordinate: {
          latitude: 1.282312,
          longitude: 103.864212,
        },
        battery: '64',
        serialCode: '0050',
      },
    ],
  });
});

app.get('/api/trip', (req, res) => {
  res.send({
    trip: [
      {
        tripDate: '01/01/2021',
        tripDuration: '30',
        vehicleId: 'ABC123',
      },
      {
        tripDate: '01/01/2021',
        tripDuration: '45',
        vehicleId: 'EIO135',
      },
      {
        tripDate: '02/01/2021',
        tripDuration: '45',
        vehicleId: 'PGE580',
      },
      {
        tripDate: '02/01/2021',
        tripDuration: '30',
        vehicleId: 'AFP325',
      },
      {
        tripDate: '02/01/2021',
        tripDuration: '60',
        vehicleId: 'PTG352',
      },
      {
        tripDate: '03/01/2021',
        tripDuration: '60',
        vehicleId: 'GPE125',
      },
      {
        tripDate: '03/01/2021',
        tripDuration: '30',
        vehicleId: 'PDM359',
      },
      {
        tripDate: '05/01/2021',
        tripDuration: '45',
        vehicleId: 'LEM350',
      },
      {
        tripDate: '06/01/2021',
        tripDuration: '90',
        vehicleId: 'PLF105',
      },
      {
        tripDate: '06/01/2021',
        tripDuration: '30',
        vehicleId: 'HTM321',
      },
      {
        tripDate: '06/01/2021',
        tripDuration: '30',
        vehicleId: 'MSU694',
      },
      {
        tripDate: '06/01/2021',
        tripDuration: '45',
        vehicleId: 'LAT318',
      },
      {
        tripDate: '07/01/2021',
        tripDuration: '30',
        vehicleId: 'KAQ868',
      },
      {
        tripDate: '07/01/2021',
        tripDuration: '45',
        vehicleId: 'KCT129',
      },
      {
        tripDate: '08/01/2021',
        tripDuration: '30',
        vehicleId: 'CXM960',
      },
      {
        tripDate: '08/01/2021',
        tripDuration: '30',
        vehicleId: 'XTA059',
      },
      {
        tripDate: '08/01/2021',
        tripDuration: '45',
        vehicleId: 'TXR680',
      },
      {
        tripDate: '08/01/2021',
        tripDuration: '30',
        vehicleId: 'LXP590',
      },
      {
        tripDate: '09/01/2021',
        tripDuration: '30',
        vehicleId: 'PKX900',
      },
      {
        tripDate: '09/01/2021',
        tripDuration: '60',
        vehicleId: 'GXP023',
      },
      {
        tripDate: '10/01/2021',
        tripDuration: '30',
        vehicleId: 'PXM853',
      },
      {
        tripDate: '10/01/2021',
        tripDuration: '30',
        vehicleId: 'QST323',
      },
      {
        tripDate: '11/01/2021',
        tripDuration: '45',
        vehicleId: 'XMP053',
      },
      {
        tripDate: '12/01/2021',
        tripDuration: '30',
        vehicleId: 'XMT583',
      },
      {
        tripDate: '12/01/2021',
        tripDuration: '45',
        vehicleId: 'GXM590',
      },
      {
        tripDate: '13/01/2021',
        tripDuration: '30',
        vehicleId: 'RZT531',
      },
      {
        tripDate: '14/01/2021',
        tripDuration: '30',
        vehicleId: 'KXM850',
      },
      {
        tripDate: '15/01/2021',
        tripDuration: '45',
        vehicleId: 'SVA499',
      },
      {
        tripDate: '16/01/2021',
        tripDuration: '30',
        vehicleId: 'JXM950',
      },
      {
        tripDate: '17/01/2021',
        tripDuration: '30',
        vehicleId: 'BSM933',
      },
      {
        tripDate: '18/01/2021',
        tripDuration: '45',
        vehicleId: 'LWE466',
      },
      {
        tripDate: '18/01/2021',
        tripDuration: '60',
        vehicleId: 'LWD930',
      },
      {
        tripDate: '19/01/2021',
        tripDuration: '30',
        vehicleId: 'CNS883',
      },
      {
        tripDate: '20/01/2021',
        tripDuration: '30',
        vehicleId: 'ZMP939',
      },
      {
        tripDate: '20/01/2021',
        tripDuration: '30',
        vehicleId: 'SKD221',
      },
      {
        tripDate: '20/01/2021',
        tripDuration: '30',
        vehicleId: 'ZMR303',
      },
      {
        tripDate: '21/01/2021',
        tripDuration: '45',
        vehicleId: 'XMK850',
      },
      {
        tripDate: '22/01/2021',
        tripDuration: '30',
        vehicleId: 'KZM558',
      },
      {
        tripDate: '22/01/2021',
        tripDuration: '30',
        vehicleId: 'KTP220',
      },
      {
        tripDate: '23/01/2021',
        tripDuration: '45',
        vehicleId: 'SXW776',
      },
      {
        tripDate: '24/01/2021',
        tripDuration: '30',
        vehicleId: 'ZJM933',
      },
      {
        tripDate: '24/01/2021',
        tripDuration: '30',
        vehicleId: 'LAJ690',
      },
      {
        tripDate: '25/01/2021',
        tripDuration: '45',
        vehicleId: 'KXM770',
      },
      {
        tripDate: '26/01/2021',
        tripDuration: '30',
        vehicleId: 'ZNF853',
      },
      {
        tripDate: '26/01/2021',
        tripDuration: '30',
        vehicleId: 'JAD422',
      },
      {
        tripDate: '27/01/2021',
        tripDuration: '30',
        vehicleId: 'KSN832',
      },
      {
        tripDate: '27/01/2021',
        tripDuration: '30',
        vehicleId: 'OAL354',
      },
      {
        tripDate: '28/01/2021',
        tripDuration: '60',
        vehicleId: 'HSQ853',
      },
      {
        tripDate: '29/01/2021',
        tripDuration: '30',
        vehicleId: 'QXW003',
      },
      {
        tripDate: '30/01/2021',
        tripDuration: '30',
        vehicleId: 'TWQ380',
      },
    ],
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
