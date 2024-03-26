import { Badge, Button } from '@chakra-ui/react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleDecrement = () => {
        count <= 0 ? count : setCount(count - 1)
    }

    const handleIncrement = () => {
        setCount(count + 1)
    }

    return (
        <>
            <Button onClick={handleDecrement} colorScheme='blue' variant='solid'>
                Decrement
            </Button>
            <Badge fontSize='lg' colorScheme='yellow' color='black' variant='solid' p='2' m='3' >{count}</Badge>
            <Button onClick={handleIncrement} colorScheme='red' variant='solid'>
                Increment
            </Button>
        </>
    )
}

export default Counter