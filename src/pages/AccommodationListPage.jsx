import React from 'react';
import FilterSidebar from '../components/FilterSidebar';
import AccommodationCard from '../components/AccommodationCard';
import { fetchVenues} from '../services/venues';

function AccommodationListPage() {
  const [venues, setVenues] = React.useState([]);

  React.useEffect(() => {
    fetchVenues().then(setVenues);
  }, []);

  return (
    <div className="flex">
      <FilterSidebar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {venues.map(venue => (
          <AccommodationCard key={venue.id} venue={venue} />
        ))}
      </div>
    </div>
  );
}

export default AccommodationListPage;