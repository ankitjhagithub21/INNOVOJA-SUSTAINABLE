import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchAbout = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/about`);
        if (response.data.success) {
          setAbout(response.data.about);
        }
      } catch (err) {
        setError('Error fetching about data');
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  return { about, loading, error };
};

export default useFetchAbout;
