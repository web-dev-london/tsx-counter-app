import './App.css'
import Counter from './Components/Counter'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <ChakraProvider>
                <Counter />
            </ChakraProvider>
        </>
    )
}

export default App
