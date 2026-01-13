import { useEffect, useState } from 'react';
import { rows as mockRows, columns as mockColumns } from '../Mock/mock.js';

function useFetch() {
    const [data, setData] = useState({
        columns: [],
        rows: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        // Helper function to fetch with fallback
        const fetchWithFallback = async (url, fallbackData) => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return await response.json();
            } catch (error) {
                // Silently fallback to mock data - API server is not required
                return fallbackData;
            }
        };

        // Try to fetch from API, fallback to mock data
        Promise.all([
            fetchWithFallback('http://localhost:3000/columns', mockColumns),
            fetchWithFallback('http://localhost:3000/rows', mockRows),
        ])
            .then(([columns, rows]) => {
                setData({ columns, rows });
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // Fallback to mock data
                setData({
                    columns: mockColumns,
                    rows: mockRows,
                });
                setError(error);
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
}

export default useFetch;