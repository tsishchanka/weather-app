import { apiCalendar } from './googleCalendarApi';

const { listUpcomingEvents } = apiCalendar;

const getEvents = async () => {
  try {
    const res = await listUpcomingEvents(3);
    const { result } = res;
    const { items } = result;
    return items;
  } catch (err){
    return err;}
};

export default getEvents;
