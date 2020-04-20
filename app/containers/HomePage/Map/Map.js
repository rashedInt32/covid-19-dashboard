import React from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';

// then import echarts modules those you have used manually.
import echarts from 'echarts/lib/echarts';


import 'echarts/map/js/world';

const Map = () => {
  const getOption = () => {
    return {
      title: [
        {
          textStyle: { color: '#dfdfef', fontSize: 18 },
          subtext: 'Updated 2020-04-20T08:53:46',
          text: 'WORLD Total COVID-19 Cases MAP ',
          top: 'auto',
          subtextStyle: { color: '#dfdfef', fontSize: 12, fontWeight: 'bold' },
          left: 'auto',
        },
      ],
      tooltip: { trigger: 'item' },
      toolbox: {
        show: true,
        orient: 'horizontal',
        bottom: '10%',
        left: 'center',
        feature: { restore: { show: true, title: 'Restore Map' } },
        iconStyle: { color: '#dfdfef' },
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
          zoom: 1.5,
          data: [
            { name: 'USA', value: 764265, code: 'US' },
            { name: 'Spain', value: 198674, code: 'ES' },
            { name: 'Italy', value: 178972, code: 'IT' },
            { name: 'France', value: 152894, code: 'FR' },
            { name: 'Germany', value: 145743, code: 'DE' },
            { name: 'UK', value: 120067, code: 'UK' },
            { name: 'Turkey', value: 86306, code: 'TR' },
            { name: 'China', value: 82747, code: 'CN' },
            { name: 'Iran', value: 82211, code: 'IR' },
            { name: 'Russia', value: 47121, code: 'RU' },
            { name: 'Brazil', value: 38654, code: 'BR' },
            { name: 'Belgium', value: 38496, code: 'BE' },
            { name: 'Canada', value: 35056, code: 'CA' },
            { name: 'Netherlands', value: 32655, code: 'NL' },
            { name: 'Switzerland', value: 27740, code: 'CH' },
            { name: 'Portugal', value: 20206, code: 'PT' },
            { name: 'India', value: 17615, code: 'IN' },
            { name: 'Peru', value: 15628, code: 'PE' },
            { name: 'Ireland', value: 15251, code: 'IE' },
            { name: 'Austria', value: 14749, code: 'AT' },
            { name: 'Sweden', value: 14385, code: 'SE' },
            { name: 'Israel', value: 13654, code: 'IL' },
            { name: 'Japan', value: 10797, code: 'JP' },
            { name: 'S. Korea', value: 10674, code: 'KR' },
            { name: 'Chile', value: 10088, code: 'CL' },
            { name: 'Ecuador', value: 9468, code: 'EC' },
            { name: 'Poland', value: 9453, code: 'PL' },
            { name: 'Saudi Arabia', value: 9362, code: 'SA' },
            { name: 'Romania', value: 8746, code: 'RO' },
            { name: 'Pakistan', value: 8418, code: 'PK' },
            { name: 'Mexico', value: 8261, code: 'MX' },
            { name: 'Singapore', value: 8014, code: 'SG' },
            { name: 'Denmark', value: 7515, code: 'DK' },
            { name: 'Norway', value: 7103, code: 'NO' },
            { name: 'Czechia', value: 6787, code: 'CZ' },
            { name: 'UAE', value: 6781, code: 'AE' },
            { name: 'Indonesia', value: 6760, code: 'ID' },
            { name: 'Australia', value: 6617, code: 'AU' },
            { name: 'Philippines', value: 6459, code: 'PH' },
            { name: 'Serbia', value: 6318, code: 'RS' },
            { name: 'Ukraine', value: 5710, code: 'UA' },
            { name: 'Qatar', value: 5448, code: 'QA' },
            { name: 'Malaysia', value: 5389, code: 'MY' },
            { name: 'Belarus', value: 4779, code: 'BY' },
            { name: 'Dominican Republic', value: 4680, code: 'DO' },
            { name: 'Panama', value: 4467, code: 'PA' },
            { name: 'Colombia', value: 3792, code: 'CO' },
            { name: 'Finland', value: 3783, code: 'FI' },
            { name: 'Luxembourg', value: 3550, code: 'LU' },
            { name: 'South Africa', value: 3158, code: 'ZA' },
            { name: 'Egypt', value: 3144, code: 'EG' },
            { name: 'Argentina', value: 2941, code: 'AR' },
            { name: 'Morocco', value: 2855, code: 'MA' },
            { name: 'Thailand', value: 2792, code: 'TH' },
            { name: 'Algeria', value: 2629, code: 'DZ' },
            { name: 'Moldova', value: 2472, code: 'MD' },
            { name: 'Bangladesh', value: 2456, code: 'BD' },
            { name: 'Greece', value: 2235, code: 'GR' },
            { name: 'Hungary', value: 1984, code: 'HU' },
            { name: 'Kuwait', value: 1915, code: 'KW' },
            { name: 'Bahrain', value: 1881, code: 'BH' },
            { name: 'Croatia', value: 1871, code: 'HR' },
            { name: 'Iceland', value: 1771, code: 'IS' },
            { name: 'Kazakhstan', value: 1757, code: 'KZ' },
            { name: 'Uzbekistan', value: 1565, code: 'UZ' },
            { name: 'Iraq', value: 1539, code: 'IQ' },
            { name: 'Estonia', value: 1535, code: 'EE' },
            { name: 'New Zealand', value: 1440, code: 'NZ' },
            { name: 'Oman', value: 1410, code: 'OM' },
            { name: 'Azerbaijan', value: 1398, code: 'AZ' },
            { name: 'Armenia', value: 1339, code: 'AM' },
            { name: 'Slovenia', value: 1330, code: 'SI' },
            { name: 'Lithuania', value: 1326, code: 'LT' },
            { name: 'Bosnia and Herzegovina', value: 1285, code: 'BA' },
            { name: 'North Macedonia', value: 1207, code: 'MK' },
            { name: 'Slovakia', value: 1161, code: 'SK' },
            { name: 'Ghana', value: 1042, code: 'GH' },
            { name: 'Cuba', value: 1035, code: 'CU' },
            { name: 'Hong Kong', value: 1026, code: 'HK' },
            { name: 'Cameroon', value: 1017, code: 'CM' },
            { name: 'Afghanistan', value: 996, code: 'AF' },
            { name: 'Bulgaria', value: 915, code: 'BG' },
            { name: 'Tunisia', value: 879, code: 'TN' },
            { name: 'Ivory Coast', value: 847, code: 'CI' },
            { name: 'Djibouti', value: 846, code: 'DJ' },
            { name: 'Cyprus', value: 767, code: 'CY' },
            { name: 'Latvia', value: 739, code: 'LV' },
            { name: 'Andorra', value: 713, code: 'AD' },
            { name: 'Diamond Princess', value: 712, code: 'DP' },
            { name: 'Lebanon', value: 673, code: 'LB' },
            { name: 'Costa Rica', value: 660, code: 'CR' },
            { name: 'Niger', value: 648, code: 'NE' },
            { name: 'Nigeria', value: 627, code: 'NG' },
            { name: 'Guinea', value: 579, code: 'GN' },
            { name: 'Burkina Faso', value: 576, code: 'BF' },
            { name: 'Kyrgyzstan', value: 568, code: 'KG' },
            { name: 'Bolivia', value: 564, code: 'BO' },
            { name: 'Albania', value: 562, code: 'AL' },
            { name: 'Uruguay', value: 528, code: 'UY' },
            { name: 'Channel Islands', value: 488, code: '' },
            { name: 'Honduras', value: 477, code: 'HN' },
            { name: 'San Marino', value: 461, code: 'SM' },
            { name: 'Palestine', value: 449, code: 'PS' },
            { name: 'Malta', value: 427, code: 'MT' },
            { name: 'Taiwan', value: 422, code: 'TW' },
            { name: 'Jordan', value: 417, code: 'JO' },
            { name: 'Réunion', value: 408, code: 'RE' },
            { name: 'Georgia', value: 399, code: 'GE' },
            { name: 'Senegal', value: 367, code: 'SN' },
            { name: 'Mauritius', value: 328, code: 'MU' },
            { name: 'DRC', value: 327, code: 'CD' },
            { name: 'Montenegro', value: 311, code: 'ME' },
            { name: 'Isle of Man', value: 298, code: 'IM' },
            { name: 'Sri Lanka', value: 295, code: 'LK' },
            { name: 'Guatemala', value: 289, code: 'GT' },
            { name: 'Mayotte', value: 271, code: 'YT' },
            { name: 'Kenya', value: 270, code: 'KE' },
            { name: 'Vietnam', value: 268, code: 'VN' },
            { name: 'Venezuela', value: 256, code: 'VE' },
            { name: 'Mali', value: 224, code: 'ML' },
            { name: 'El Salvador', value: 218, code: 'SV' },
            { name: 'Paraguay', value: 208, code: 'PY' },
            { name: 'Jamaica', value: 196, code: 'JM' },
            { name: 'Faeroe Islands', value: 185, code: 'FO' },
            { name: 'Tanzania', value: 170, code: 'TZ' },
            { name: 'Somalia', value: 164, code: 'SO' },
            { name: 'Martinique', value: 163, code: 'MQ' },
            { name: 'Guadeloupe', value: 148, code: 'GP' },
            { name: 'Rwanda', value: 147, code: 'RW' },
            { name: 'Congo', value: 143, code: 'CG' },
            { name: 'Brunei', value: 138, code: 'BN' },
            { name: 'Gibraltar', value: 132, code: 'GI' },
            { name: 'Cambodia', value: 122, code: 'KH' },
            { name: 'Madagascar', value: 121, code: 'MG' },
            { name: 'Trinidad and Tobago', value: 114, code: 'TT' },
            { name: 'Myanmar', value: 111, code: 'MM' },
            { name: 'Gabon', value: 109, code: 'GA' },
            { name: 'Ethiopia', value: 108, code: 'ET' },
            { name: 'French Guiana', value: 97, code: 'GF' },
            { name: 'Aruba', value: 97, code: 'AW' },
            { name: 'Monaco', value: 94, code: 'MC' },
            { name: 'Sudan', value: 92, code: 'SD' },
            { name: 'Liberia', value: 91, code: 'LR' },
            { name: 'Bermuda', value: 86, code: 'BM' },
            { name: 'Togo', value: 84, code: 'TG' },
            { name: 'Liechtenstein', value: 81, code: 'LI' },
            { name: 'Equatorial Guinea', value: 79, code: 'GQ' },
            { name: 'Barbados', value: 75, code: 'BB' },
            { name: 'Sint Maarten', value: 67, code: 'SX' },
            { name: 'Guyana', value: 65, code: 'GY' },
            { name: 'Cabo Verde', value: 61, code: 'CV' },
            { name: 'Cayman Islands', value: 61, code: 'KY' },
            { name: 'Zambia', value: 61, code: 'ZM' },
            { name: 'Bahamas', value: 60, code: 'BS' },
            { name: 'French Polynesia', value: 55, code: 'PF' },
            { name: 'Uganda', value: 55, code: 'UG' },
            { name: 'Maldives', value: 52, code: 'MV' },
            { name: 'Libya', value: 51, code: 'LY' },
            { name: 'Guinea-Bissau', value: 50, code: 'GW' },
            { name: 'Haiti', value: 47, code: 'HT' },
            { name: 'Macao', value: 45, code: 'MO' },
            { name: 'Mozambique', value: 39, code: 'MZ' },
            { name: 'Eritrea', value: 39, code: 'ER' },
            { name: 'Syria', value: 39, code: '' },
            { name: 'Saint Martin', value: 37, code: 'MF' },
            { name: 'Benin', value: 35, code: 'BJ' },
            { name: 'Sierra Leone', value: 35, code: 'SL' },
            { name: 'Chad', value: 33, code: 'TD' },
            { name: 'Mongolia', value: 33, code: 'MN' },
            { name: 'Nepal', value: 31, code: 'NP' },
            { name: 'Zimbabwe', value: 25, code: 'ZW' },
            { name: 'Angola', value: 24, code: 'AO' },
            { name: 'Antigua and Barbuda', value: 23, code: 'AG' },
            { name: 'Eswatini', value: 22, code: 'CZ' },
            { name: 'Timor-Leste', value: 22, code: 'TL' },
            { name: 'Botswana', value: 20, code: 'BW' },
            { name: 'Laos', value: 19, code: '' },
            { name: 'Belize', value: 18, code: 'BZ' },
            { name: 'New Caledonia', value: 18, code: 'NC' },
            { name: 'Fiji', value: 18, code: 'FJ' },
            { name: 'Malawi', value: 17, code: 'MW' },
            { name: 'Dominica', value: 16, code: 'DM' },
            { name: 'Namibia', value: 16, code: 'NA' },
            { name: 'Saint Kitts and Nevis', value: 15, code: 'KN' },
            { name: 'Saint Lucia', value: 15, code: 'LC' },
            { name: 'Curaçao', value: 14, code: 'CW' },
            { name: 'Grenada', value: 14, code: 'GD' },
            { name: 'St. Vincent Grenadines', value: 12, code: 'VC' },
            { name: 'CAR', value: 12, code: 'CF' },
            { name: 'Seychelles', value: 11, code: 'SC' },
            { name: 'Falkland Islands', value: 11, code: '' },
            { name: 'Turks and Caicos', value: 11, code: '' },
            { name: 'Greenland', value: 11, code: 'GL' },
            { name: 'Montserrat', value: 11, code: 'MS' },
            { name: 'Nicaragua', value: 10, code: 'NI' },
            { name: 'Gambia', value: 10, code: 'GM' },
            { name: 'Suriname', value: 10, code: 'SR' },
            { name: 'MS Zaandam', value: 9, code: '' },
            { name: 'Vatican City', value: 8, code: 'VA' },
            { name: 'Mauritania', value: 7, code: 'MR' },
            { name: 'Papua New Guinea', value: 7, code: 'PG' },
            { name: 'St. Barth', value: 6, code: 'BL' },
            { name: 'Western Sahara', value: 6, code: 'EH' },
            { name: 'Burundi', value: 5, code: 'BI' },
            { name: 'Bhutan', value: 5, code: 'BT' },
            { name: 'Caribbean Netherlands', value: 5, code: '' },
            { name: 'British Virgin Islands', value: 5, code: 'VG' },
            { name: 'Sao Tome and Principe', value: 4, code: 'ST' },
            { name: 'South Sudan', value: 4, code: 'SS' },
            { name: 'Anguilla', value: 3, code: 'AI' },
            { name: 'Saint Pierre Miquelon', value: 1, code: '' },
            { name: 'Yemen', value: 1, code: 'YE' },
          ],
          label: { emphasis: { show: true } },
          itemStyle: { emphasis: { label: { show: true } } },
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
  };

  const contrastColor = '#fff';
  const colorPalette = [
    '#dd6b66',
    '#759aa0',
    '#e69d87',
    '#8dc1a9',
    '#ea7e53',
    '#eedd78',
    '#73a373',
    '#73b9bc',
    '#7289ab',
    '#91ca8c',
    '#f49f42',
  ];
  const theme = {
    color: colorPalette,
    tooltip: {
      axisPointer: {
        lineStyle: {
          color: contrastColor,
        },
        crossStyle: {
          color: contrastColor,
        },
        label: {
          color: '#000',
        },
      },
    },
    legend: {
      textStyle: {
        color: contrastColor,
      },
    },
    title: {
      textStyle: {
        color: contrastColor,
      },
    },
    toolbox: {
      iconStyle: {
        normal: {
          borderColor: contrastColor,
        },
      },
    },

    // Area scaling controller
    dataZoom: {
      dataBackgroundColor: '#eee', // Data background color
      fillerColor: 'rgba(200,200,200,0.2)', // Fill the color
      handleColor: '#dd6b66', // Handle color
    },

    timeline: {
      itemStyle: {
        color: colorPalette[1],
      },
      lineStyle: {
        color: contrastColor,
      },
      controlStyle: {
        color: contrastColor,
        borderColor: contrastColor,
      },
      label: {
        color: contrastColor,
      },
    },

    line: {
      symbol: 'circle',
    },
    graph: {
      color: colorPalette,
    },

    gauge: {
      axisLine: {
        lineStyle: {
          color: [[0.2, '#dd6b66'], [0.8, '#759aa0'], [1, '#ea7e53']],
          width: 8,
        },
      },
    },

    candlestick: {
      itemStyle: {
        color: '#FD1050',
        color0: '#0CF49B',
        borderColor: '#FD1050',
        borderColor0: '#0CF49B',
      },
    },
  };

  echarts.registerTheme('my_theme', theme);

  return (
    <div className="examples" style={{ width: '100%', height: 400 }}>
      <ReactEchartsCore
        echarts={echarts}
        option={getOption()}
        style={{ height: '500px', width: '100%' }}
        className="react_for_echarts"
        theme="my_theme"
      />
    </div>
  );
};

export default Map;
