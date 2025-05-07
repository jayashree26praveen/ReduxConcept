// app/API/api.js or wherever you prefer
'use client';

import axios from 'axios';

const UNSPLASH_API_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

export const fetchProductImages = async () => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos', {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
      },
    });

    // Log response data in console
    console.log('Unsplash API Response:', response.data);

    // Optional: return the data
    return response.data;
  } catch (error) {
    console.error('Error fetching product images:', error);
  }
};
