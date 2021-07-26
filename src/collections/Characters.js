import React, { useState, useEffect, useCallback } from "react";
import Loader from "../components/loader/Loader";
import CharacterList from "../components/CharacterList";
import { Pagination } from "../components/pagination/Pagination";
import useSwapi from "../hooks/use-swapi";

const Characters = ({ searchTerm }) => {
    const [chars, setChars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charsPerPage] = useState(12);

    const getData = useCallback(charObj => {
        setChars(charObj);
    }, [])

    const { isLoading, sendRequest: fetchTasks } = useSwapi(getData);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // Filter out returned characters with search term
    let filteredPeople = chars.filter(char =>
        char.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //Get current characters
    const indexofLastChar = currentPage * charsPerPage;
    const indexOfFirstChar = indexofLastChar - charsPerPage;
    const currentChars = filteredPeople.slice(indexOfFirstChar, indexofLastChar);

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <CharacterList characters={currentChars} searchTerm={searchTerm} />
                    <Pagination charsPerPage={charsPerPage} totalChars={filteredPeople.length} paginate={paginate} />
                </>
            )}
        </div>
    )
};

export default Characters;