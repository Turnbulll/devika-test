import React, { useEffect, useRef, useState } from 'react';
import PageWrapper from '../components/page-wrapper/PageWrapper';
import SearchBar from '../components/search-bar/SearchBar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Giphy } from '../../../../shared/types/giphy';
import axios from 'axios';
import ImageGrid from '../components/image-grid/ImageGrid';
import Title from '../components/title/Title';

const Search = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState<Giphy[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const initialLoad = useRef(true);

  const query = searchParams.get('q') || '';

  const handleSearch = (newQuery: string) => {
    const newParams = new URLSearchParams();
    newParams.set('q', newQuery);
    navigate(`?${newParams.toString()}`);
    setResults([]);
  };

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        initialLoad.current = false;
        setError(null);
        const BASE_URL = process.env.REACT_APP_API_URL;
        const response = await axios.get(`${BASE_URL}giphy/search?query=${encodeURIComponent(query)}`);
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
        <Title />
        <SearchBar onSearch={handleSearch} initalState={query} placeholder="🚀🆒🧊 Search for super cool GIF's 🧊🆒🚀" />
        <ImageGrid
          items={results}
          loading={loading}
          error={error}
          initialLoad={initialLoad.current}
          emptyMessage="No results found" />
      </>
    </PageWrapper>
  );
};

export default Search;