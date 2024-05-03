import { useEffect, useState } from "react"

const followMouse = () => {
  return (<>
    <div style={{
      position: 'absolute',
      backgroudColor: 'rgba(0,0,0,0.5)',
      border: '2px solid #222',
      borderRadius: '50%',
      opacity: '0.8',
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
      transform: `translate(${position.x} , ${position.y})`
    }} />


    <button onClick={() => setEnabled(!enabled)} >
      {enabled ? 'Desactivar' : 'Activar'} seguimiento
    </button>
  </>
  )
}

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useEffect(true)

  useEffect(() => {
    console.log('effect', { enabled })

    const handleMove = (event) => {
      const { clienteX, clienteY } = event
      console.log('handleMove', { clienteX, clienteY })
      setPosition({ x: clienteX, y: clienteY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  return (

    <main>
      {/* <h3>Complejo del Ratón</h3> */}
      <followMouseouse />
    </main>



  )
}

export default App
