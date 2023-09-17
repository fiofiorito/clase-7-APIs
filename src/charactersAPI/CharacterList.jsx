const CharacterList = ({ characters, handleClickAdd, handleClickSub }) => {
    return <>
        <button onClick={handleClickAdd}>Next Page</button>
        <button onClick={handleClickSub}>Previous Page</button>
        {
            characters.map((character) => {
                return <div key={character.id}>
                    <h3>{character.name}</h3>
                    <img src={character.image} />
                    <p>{character.species}</p>
                    <p>{character.status}</p>
                </div>

            })
        }
    </>
}

export default CharacterList;