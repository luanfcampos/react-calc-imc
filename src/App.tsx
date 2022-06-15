import styles from './App.module.css'
import logo from './assets/powered.png'


const App = () => {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logo} alt=""/>
        </div>
      </header>
      <section className={styles.container}>
        <div className={styles.leftSide}>
          Esquerda
        </div>
        <div className={styles.rightSide}>
          Direita
        </div>
      </section>
    </div>
  )
}

export default App