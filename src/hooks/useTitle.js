import { useEffect } from 'react'

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} | Shopping cart`
    },[title]);
  return null;
}
