import React, { useEffect, useState } from 'react';
import PageWrapper from '../components/page-wrapper/PageWrapper';
import SearchBar from '../components/search-bar/SearchBar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Giphy } from '../../../../shared/types/giphy';
import axios from 'axios';

const Search = (): JSX.Element => {
    const [searchParams] = useSearchParams();
  const navigate = useNavigate();
    const [results, setResults] = useState<Giphy[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const query = searchParams.get('q') || '';

  const handleSearch = (query: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('q', query);
    navigate(`?${newParams.toString()}`);
  };

    useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`http://localhost:4000/local/giphy/search?query=${encodeURIComponent(query)}`);
        setResults(response.data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);
  
  
  return (
  <PageWrapper title="Home">
    <>
     <SearchBar onSearch={handleSearch} placeholder="Search something..." />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && results.length > 0 && (
        <ul style={{ marginTop: '1rem' }}>
          {results.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
      {!loading && !error && results.length === 0 && query && <p>No results found.</p>}
    </>
  </PageWrapper>
)};

export default Search;
