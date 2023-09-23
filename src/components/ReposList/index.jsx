import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({userName}) => {
    const [repos, setRepos] = useState([]);
    const [ isLoading, setIsLoading] = useState();

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://api.github.com/users/${userName}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setIsLoading(false);
                setRepos(resJson);
            }, 2000);
        })
    }, [userName])

    return (
        <div className="container">
            {isLoading ? (
                <h2>Carregando...</h2>
            ):(
                <ul className={styles.list}>
                {repos.map(({id, name, language, homepage, html_url}) => (
                    <li className={styles.listItem} key={id}>
                        <div  className={styles.itemName}>
                            <b>Nome: </b>
                            {name}
                        </div>
                        <div className={styles.itemLanguage}>
                        <b>Linguagem:</b>
                        {language}
                        </div>
                        <a className={styles.itemLink} target="_blank" href={homepage}>Visitar</a>
                        <a className={styles.itemLink} target="_blank" href={html_url}>Ver código no GitHub</a>
                    </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList;