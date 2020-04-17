export const renderableData = (latest, previous, today) => {
  if (latest && previous) {
    const render = {
      latest: {
        cases: today ? latest.todayCases : latest.cases,
        active: today ? null : latest.active,
        recovered: today ? null : latest.recovered,
        deaths: today ? latest.todayDeaths : latest.deaths,
        critical: today ? latest.critical : null,
      },
      previous: {
        cases: today ? previous.todayCases : previous.cases,
        active: today ? null : previous.active,
        recovered: today ? null : previous.recovered,
        deaths: today ? previous.todayDeaths : previous.deaths,
        critical: today ? previous.critical : null,
      },
    };

    return render;
  }
  return null;
};
