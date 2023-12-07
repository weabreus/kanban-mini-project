import { useState } from 'react'
import Layout from './components/layout/Layout'
import BoardsList from './components/BoardList/BoardsList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <BoardsList />
      </Layout>
    </>
  )
}

export default App
