import {getAllEvents} from '../../dummy-data';
import {useRouter} from 'next/router';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

const AllEventsPage = () => {

  const events = getAllEvents();
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  }


  return (
    <div>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
