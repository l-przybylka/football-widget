import styles from "./Container.module.css"

export const Container = ({ children }) => {
  return (
    <div data-testid="page-container" className={styles.container}>{ children }</div>
  )
}