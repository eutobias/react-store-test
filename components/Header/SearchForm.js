import styles from './SearchForm.module.scss'

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <label htmlFor="searchInput">Busca</label>
      <input id="searchInput" type="text" placeholder="Busca"></input>
    </form>
  );
}

export default SearchForm;