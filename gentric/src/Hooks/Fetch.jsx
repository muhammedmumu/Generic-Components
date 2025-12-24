import { useEffect, useState } from 'react';
import { rows as mockRows, columns as mockColumns, mockTables as mockTablesData } from '../Mock/mock.js';

function useFetch() {
    const [data, setData] = useState({
        mockTables: [],
        columns: [],
        rows: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        // Try to fetch from API, fallback to mock data
        Promise.all([
            fetch('http://localhost:3000/mockTables')
                .then(res => res.json())
                .catch(() => mockTablesData),
            fetch('http://localhost:3000/columns')
                .then(res => res.json())
                .catch(() => mockColumns),
            fetch('http://localhost:3000/rows')
                .then(res => res.json())
                .catch(() => mockRows),
        ])
            .then(([mockTables, columns, rows]) => {
                setData({ mockTables, columns, rows });
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // Fallback to mock data
                setData({
                    mockTables: mockTablesData,
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