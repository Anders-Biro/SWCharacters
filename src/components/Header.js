import styles from './Header.module.css';

const Header = ({onSearchInput}) => {
    const onChange =(event) => {
        onSearchInput(event.target.value)
    }
    return (
        <>
            <header className={styles.header}>
                <h1>Star Wars Characters</h1>
                <input type="text" placeholder="Search Character..." onChange={event => onChange(event)}/>
            </header>
        </>
    )
}

export default Header;