import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      return
    }

    const id = location.hash.replace("#", "")
    let attempts = 0

    const tryScroll = () => {
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
        return
      }

      attempts += 1

      if (attempts < 20) {
        window.setTimeout(tryScroll, 100)
      }
    }

    tryScroll()
  }, [location.pathname, location.hash])

  return null
}