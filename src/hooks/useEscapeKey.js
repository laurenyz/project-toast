import React from 'react'

const useEscapeKey = ({callback}) => {
    React.useEffect(() => {
        const handleEscapeKey = (e) => {
          if (e.key === 'Escape') {
            callback([])
          }
        }
        window.addEventListener('keydown', handleEscapeKey)
        return () => {
          window.removeEventListener('keydown', handleEscapeKey)
        }
      }, [callback])
    return
}

export default useEscapeKey