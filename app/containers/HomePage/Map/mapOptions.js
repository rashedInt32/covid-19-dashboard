export const mapOptions = countries => {
  const data = countries.map(country => {
    const d = {
      name: country.country,
      value: country.cases,
      code: country.countryInfo.iso2,
    };
    return d;
  });
  const options = {
    tooltip: { trigger: 'item' },
    toolbox: {
      show: false,
    },
    visualMap: {
      left: 'left',
      top: '50%',
      min: 0,
      max: 15000,
      text: ['High', 'Low'],
      realtime: false,
      calculable: true,

      textStyle: { color: '#fff' },
    },
    series: [
      {
        mapType: 'world',
        roam: 'scale',
        zoom: 1,
        roam: 'move',
        data,
        label: { emphasis: { show: true } },
        itemStyle: {
          emphasis: {
            label: { show: true },
            areaColor: '#f9345e',
          },
        },
        name: '',
        type: 'map',
        nameMap: {
          'United States': 'USA',
          Korea: 'S. Korea',
          'North Macedonia': 'Macedonia',
          'Bosnia and Herzegovina': 'Bosnia and Herz.',
          'United Kingdom': 'UK',
          Czechia: 'Czech Rep.',
          'S. Sudan': 'S. Sudan',
          'Lao PDR': 'Laos',
          Macedonia: 'North Macedonia',
          'Bosnia and Herz.': 'Bosnia and Herzegovina',
          'Czech Rep.': 'Czechia',
          'Dominican Rep.': 'Dominican Republic',
          "Côte d'Ivoire": 'Ivory Coast',
          'Eq. Guinea': 'Equatorial Guinea',
          'Dem. Rep. Congo': 'DRC',
          'Central African Rep.': 'CAR',
        },
      },
    ],
  };
  return options;
};
