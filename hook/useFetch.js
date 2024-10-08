import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = ({ endpoint, query }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            'x-rapidapi-key': '6d2d73df88msh04aa04063e8d584p1cef17jsnb77303466f79',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
          }
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert(`There is an error: ${error.response?.status} - ${error.response?.statusText}`);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;
