import MenuItem from './MenuItem';
import type { TMenuItem } from './Menu';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Menu() {
  const [goodies, setGoodies] = useState<TMenuItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/products');
      setGoodies(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {goodies.map(item => (
        <MenuItem
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}
