import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product, UseGetData } from '@/typescript/useGet';

export default function useGet(url: string): UseGetData {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        await AsyncStorage.setItem(url, JSON.stringify(response.data)); 
      } catch (err) {
        console.error(err);
        const cachedData = await AsyncStorage.getItem(url);
        if (cachedData) {
          setData(JSON.parse(cachedData)); 
        }
      }
    };

    fetchData();
  }, [url]);

  return { data };
}
