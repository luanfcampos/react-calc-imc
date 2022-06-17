import styles from './App.module.css'
import logo from './assets/powered.png'
import { useState } from 'react'
import { GridItem } from './components/GridItem'

import { levels, calculateImc } from './helpers/imc'

const App = () => {

  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)

  const handleCalculateButton = () => {
    if (heightField && weightField) {

    } else {
      alert("Prrencha todos os campos")
    }
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
            placeholder='Digite a sua altura (cm)'
            value={heightField > 0 ? heightField : 0}
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />

          <input
            type="number"
            placeholder='Digite o seu peso (kg)'
            value={heightField > 0 ? heightField : 0}
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calcular</button>
        </div>


        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, key)=>(
              <GridItem key={key} item={item}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App