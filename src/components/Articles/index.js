import { Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import "./styles.scss"

export const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const apiUrl = "https://api.spaceflightnewsapi.net/v3/articles";
    
    const getArticles = async () => {
        try {
            setLoading(true);
            const responce = await fetch(apiUrl);
            if(!responce.ok) {
                throw new Error("Request error: " + responce.status);
            }
            const result = await responce.json();
            setArticles(result);
        } catch (e) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    // const getArticles = () => {
    //     setLoading(true);
    //     fetch(apiUrl)
    //         .then((response) => {
    //             if(!response.ok) {
    //                 throw new Error("Request error: " + response.status);
    //             }
    //             return response.json();
    //         })
    //         .then((result) => {
    //             console.log('result', result);
    //             setArticles(result);
    //         })
    //         .catch((err) => {
    //             setError(true);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // }

    useEffect(() => {
        getArticles()
    }, []);
    return (
        <div>
        <h3>ARTICLES</h3>

        {loading && <CircularProgress/>}
        {!error ? (
            <ol className="articles-list">
            { articles.map(({id,title}) => (
                <li key={id}> {title} </li>
            ))}
        </ol>
        ) : 
        (<>
            <h4>Error</h4>
            <Button variant="contained" onClick={getArticles}>
                try again
            </Button>
        </>
        )}
        </div>
    )
}