import { useState, useCallback } from "react";

const useSwapi = (applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        const results = [];
        let url = "https://swapi.dev/api/people"

        try {
            do {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Request failed');
                }

                const data = await response.json();
                url = data.next;
                results.push(...data.results);
            } while (url);

            applyData(results);

        } catch (err) {
            setError(err.message || "Something went wrong");
        }
        setIsLoading(false);
    }, [applyData])

    return {
        isLoading,
        error,
        sendRequest
    }
};

export default useSwapi;
