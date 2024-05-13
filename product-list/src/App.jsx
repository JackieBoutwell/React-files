
import './App.css'

import FilterProductTable from './components/FilterProductTable'

import PRODUCTS from "./data"

function App() {

  return (
    <>
      <FilterProductTable products={PRODUCTS} />
    </>
  )
}

export default App