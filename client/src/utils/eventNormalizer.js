export default function addNormalizedDateKey (events) {
  const monthIndex = {
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11
    };

  return events.map (event => {
    const month = monthIndex[event.month];

    if (month === undefined) {
      throw new Error (`Invalid month value ${event.month}`)
    }

    return {
      ...event,
      normalizedDateKey: new Date(
        event.year,
        month,
        event.day
      )
    }
  });
}