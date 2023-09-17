import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";

const CharacterListContainer = () => {
    // para q la info sea perdurable, se debe usar estados!!
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    // esto sirve para obtener la info de la API
    // poner fetch dentro de una funcion nos permite utilizarlo a lo largo de todo el codigo
    function getData() {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            // NO PONGAS {} PORQUE SINO NO TE PASA EL JSON Y LA CONSOLA TIRA UNDEFINED EN DATA!!!
            .then((response) => response.json())
            .then((data) => {
                setData(data.results)
                console.log(data.results);
            })
            .catch(console.log(error => console.log(error)))
    }
    useEffect(() => {
        getData();
    }, [page]);

    const handleClickPlusOne = () => {
        if (page === 42) {
            setPage(42)
            alert("max page reached");
        } else {
            setPage(page + 1);
        }
        console.log(page);
    }

    const handleClickMinusOne = () => {
        if (page === 1) {
            setPage(1);
            alert("minimun page reached");
        } else {
            setPage(page - 1);
        }
        console.log(page);
    }

    return <>
        <h1>Hello</h1>
        <CharacterList characters={data} handleClickAdd={handleClickPlusOne} handleClickSub={handleClickMinusOne} />
    </>
}

export default CharacterListContainer;