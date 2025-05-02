import { useState } from "react"

export default function Practice2() {
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const [favorite, setFavorite] = useState([])
  
  function addFavoriteThing() {
    if (favorite.length < allFavoriteThings.length) {
      setFavorite(prevFavThings => [...prevFavThings, allFavoriteThings[prevFavThings.length]])
    }
  }
  
  const thingsElements = favorite.map((thing, index) => <p key={index}>{thing}</p>)

  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}