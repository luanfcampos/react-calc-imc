import styles from './App.module.css'
import logo from './assets/powered.png'
import leftArrow from "./assets/leftarrow.png"
import { useState } from 'react'
import { GridItem } from './components/GridItem'

import { levels, calculateImc, level } from './helpers/imc'

const App = () => {

  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)
  const [toShow, setToShow] = useState<level | null>(null)

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField))
    } else {
      alert("Prrencha todos os campos")
    }
  }

  const handleBackButton = () => {
    setToShow(null)
    setHeightField(0)
    setWeightField(0)
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logo} alt=""/>
        </div>
      </header>
      <section className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          <input
            type="number"
            placeholder='Digite a sua altura. Ex: 1.6 (em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <input
            type="number"
            placeholder='Digite o seu peso. Ex: 80 (em kilogramas)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button onClick={handleCalculateButton}
          disabled={toShow ? true : false}>
            Calcular
          </button>
        </div>


        <div className={styles.rightSide}>
          {!toShow &&
          <div className={styles.grid}>
            {levels.map((item, key)=>(
              <GridItem key={key} item={item}/>
            ))}
          </div>
          }
          {toShow &&
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleBackButton}>
              <img src={leftArrow} alt="" width={25}/>
            </div>
            <GridItem item={toShow} />
          </div>

          }
        </div>
      </section>
    </div>
  )
}

export default App