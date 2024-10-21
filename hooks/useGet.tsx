import { useState, useEffect } from 'react';
import axios from 'axios';
import { Product, UseGetData } from '@/typescript/useGet';

export default function useGet (url: string): UseGetData {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [url]);

  return { data };
};
