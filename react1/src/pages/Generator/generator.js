// import React, { useEffect, useState, useCallback } from 'react'
// import './generator.css'
// import { getRandomPalette } from '../../shared/colorPaletteGenerator'

// // Захаркоджені назви кольорів (можна змінити)
// const COLOR_NAMES = ['Crimson', 'Coral', 'Violet', 'Azure', 'Cyan', 'Lime', 'Amber']

// export const Generator = () => {
//   const MIN_COLS = 2
//   const MAX_COLS = 7
//   const INITIAL = 5

//   const [colors, setColors] = useState(() => getRandomPalette(INITIAL))
//   const [saved, setSaved] = useState(() => new Array(INITIAL).fill(false))

//   // Генерація нової палітри тієї ж довжини
//   const regenerate = useCallback(() => {
//     const newPalette = getRandomPalette(colors.length)
//     setColors(newPalette)
//     // залишаємо saved масив та його значення (серця залишаться чорними якщо вже збережено)
//     if (saved.length < newPalette.length) {
//       setSaved((s) => [...s, ...new Array(newPalette.length - s.length).fill(false)])
//     } else if (saved.length > newPalette.length) {
//       setSaved((s) => s.slice(0, newPalette.length))
//     }
//   }, [colors.length, saved.length])

//   // Обробник клавіші пробіл — змінюємо палітру
//   useEffect(() => {
//     const onKey = (e) => {
//       // Якщо фокус у input/textarea — не обробляємо
//       const tag = (document.activeElement && document.activeElement.tagName) || ''
//       if (tag === 'INPUT' || tag === 'TEXTAREA') return

//       if (e.code === 'Space' || e.key === ' ') {
//         e.preventDefault()
//         regenerate()
//       }
//     }
//     window.addEventListener('keydown', onKey)
//     return () => window.removeEventListener('keydown', onKey)
//   }, [regenerate])

//   // Save (серце) — фарбуємо у чорний, повторний клік нічого не робить
//   const handleSave = (index) => {
//     setSaved((prev) => {
//       if (prev[index]) return prev // якщо вже збережено — нічого не міняємо
//       const copy = [...prev]
//       copy[index] = true
//       return copy
//     })
//   }

//   // Додаємо колір після позиції index (викликається при натисканні на "+")
//   const handleAddBetween = (indexAfter) => {
//     if (colors.length >= MAX_COLS) return
//     // додаємо один випадковий колір
//     const newColor = getRandomPalette(1)[0]
//     const newColors = [...colors.slice(0, indexAfter + 1), newColor, ...colors.slice(indexAfter + 1)]
//     setColors(newColors)
//     // додати false в saved відповідно
//     setSaved((prev) => {
//       const copy = [...prev.slice(0, indexAfter + 1), false, ...prev.slice(indexAfter + 1)]
//       if (copy.length > MAX_COLS) return copy.slice(0, MAX_COLS)
//       return copy
//     })
//   }

//   // Класичний рендер іконок на hover між кольорами і на кольорі
//   return (
//     <div className="generatorPage">
//       <header className="generatorHeader">
//         <h2>Color Generator</h2>
//         <p>Press <kbd>Space</kbd> to regenerate</p>
//       </header>

//       <div className="generatorPaletteWrapper">
//         <div className="generatorPalette" role="list">
//           {colors.map((hex, i) => (
//             <React.Fragment key={hex + i}>
//               <div
//                 className="colorItem"
//                 role="listitem"
//                 style={{ backgroundColor: hex }}
//                 title={COLOR_NAMES[i] || `Color ${i + 1}`}
//               >
//                 <div className="colorTop">
//                   <div className="colorName">{COLOR_NAMES[i] || `Color ${i + 1}`}</div>
//                   <div className="colorHex">{hex}</div>
//                 </div>

//                 {/* Іконки які з'являються при наведенні (не несуть функціоналу, окрім save) */}
//                 <div className="colorIcons">
//                   <button
//                     className={`iconBtn heart ${saved[i] ? 'saved' : ''}`}
//                     onClick={(e) => {
//                       e.stopPropagation()
//                       handleSave(i)
//                     }}
//                     aria-label="save color"
//                     title={saved[i] ? 'Saved' : 'Save'}
//                   >
//                     {/* просте SVG серця */}
//                     <svg viewBox="0 0 24 24" width="18" height="18" fill={saved[i] ? '#000' : 'transparent'} stroke={saved[i] ? '#000' : '#fff'} strokeWidth="1.5">
//                       <path d="M12 21s-7-4.9-9.2-7.2C-0.6 9.9 3 5 7 6.6 9 7.6 12 10 12 10s3-2.4 5-3.4c4-1.6 7.6 3.3 4.2 7.8C19 16.1 12 21 12 21z" />
//                     </svg>
//                   </button>

//                   <button className="iconBtn" title="copy (no-op)">
//                     <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="1.5">
//                       <rect x="9" y="9" width="9" height="11" rx="2" ry="2" />
//                       <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
//                     </svg>
//                   </button>

//                   <button className="iconBtn" title="more (no-op)">
//                     <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff">
//                       <circle cx="5" cy="12" r="1.5" />
//                       <circle cx="12" cy="12" r="1.5" />
//                       <circle cx="19" cy="12" r="1.5" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//               {/* Роздільник між кольорами з "+" який з'являється при наведенні */}
//               {i < colors.length - 1 && (
//                 <div
//                   className="between"
//                   onClick={(e) => {
//                     e.stopPropagation()
//                     handleAddBetween(i)
//                   }}
//                   title={colors.length >= MAX_COLS ? 'Max colors reached' : 'Add color'}
//                 >
//                   <div className="plus">+</div>
//                 </div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>

//       <footer className="generatorFooter">
//         <div>Colors: {colors.length} / {MAX_COLS}</div>
//         <div className="hint">Hover between colors to add (+). Hover a color to see icons. Press Space to regenerate.</div>
//       </footer>
//     </div>
//   )
// }

// export default Generator




import React, { useEffect, useState } from 'react'
import './generator.css'

// Константи
const MAX_COLORS = 7

// Початкові кольори (відповідають класам c1..c5 у CSS)
const INITIAL_COLORS = [
  { hex: '#00BFB2', name: 'Teal Spring', liked: false },
  { hex: '#1A5E63', name: 'Deep Teal', liked: false },
  { hex: '#028090', name: 'Sea Blue', liked: false },
  { hex: '#F0F3BD', name: 'Soft Lemon', liked: false },
  { hex: '#C64191', name: 'Fuchsia Plum', liked: false }
]

// Генерує випадковий HEX (великими буквами)
const randomHex = () =>
  '#' +
  Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')
    .toUpperCase()

export const Generator = () => {
  const [colors, setColors] = useState(() => INITIAL_COLORS.map(c => ({ ...c })))

  // Обробник натиснення пробілу: змінює всі не-лайкнуті кольори
  useEffect(() => {
    const onKey = (e) => {
      if (e.code === 'Space' || e.key === ' ') {
        // виключаємо, якщо фокус у input/textarea
        const tag = (document.activeElement && document.activeElement.tagName) || ''
        if (tag === 'INPUT' || tag === 'TEXTAREA') return

        e.preventDefault()
        setColors(prev =>
          prev.map(c => (c.liked ? c : { ...c, hex: randomHex(), name: 'Generated' }))
        )
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Видалити колір по індексу
  const handleDelete = (index) => {
    setColors(prev => {
      const next = prev.slice()
      next.splice(index, 1)
      return next
    })
  }

  // Лайк/анлайк (у наданому скрипті це toggle)
  const handleLikeToggle = (index) => {
    setColors(prev => {
      const next = prev.slice()
      next[index] = { ...next[index], liked: !next[index].liked }
      return next
    })
  }

  // Додати колір після заданого індексу
  const addOneColor = (indexAfter) => {
    setColors(prev => {
      if (prev.length >= MAX_COLORS) return prev
      const newColor = { hex: randomHex(), name: 'Generated', liked: false }
      const next = [...prev.slice(0, indexAfter + 1), newColor, ...prev.slice(indexAfter + 1)]
      return next
    })
  }

  return (
    <div className="generatorRoot">
      <div className="top-bar">
        <div>Generator</div>
        <div>Press Space to regenerate</div>
      </div>

      <div id="palette" className="palette" role="list">
        {colors.map((c, i) => (
          <div key={c.hex + i} className="color-wrapper" role="listitem">
            <div
              className={`color ${/* в оригіналі використовували light-text; лишаємо light-text за замовчуванням */ 'light-text'}`}
              style={{ background: c.hex }}
            >
              <div className="actions">
                <button
                  type="button"
                  className="actionBtn delete"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDelete(i)
                  }}
                  aria-label="delete"
                  title="Delete"
                >
                  {/* simple trash svg */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                  </svg>
                </button>

                <button
                  type="button"
                  className={`actionBtn like ${c.liked ? 'liked' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleLikeToggle(i)
                  }}
                  aria-label="like"
                  title={c.liked ? 'Unlike' : 'Like'}
                >
                  {/* heart svg; filled when liked */}
                  {c.liked ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#000" stroke="#000" strokeWidth="0">
                      <path d="M12 21s-7-4.9-9.2-7.2C-0.6 9.9 3 5 7 6.6 9 7.6 12 10 12 10s3-2.4 5-3.4c4-1.6 7.6 3.3 4.2 7.8C19 16.1 12 21 12 21z" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
                      <path d="M20.8 8.6c0-2.6-2.2-4.6-4.8-4.6-1.4 0-2.6.6-3.3 1.6-.7-1-1.9-1.6-3.3-1.6-2.6 0-4.8 2-4.8 4.6 0 5.3 8.1 9.6 8.1 9.6s8.1-4.3 8.1-9.6z" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="hex">{c.hex.replace('#', '')}</div>
              <div className="name">{c.name}</div>
            </div>

            {/* Plus: показуємо, але ховаємо якщо досягнуто максимум */}
            {i < colors.length && (
              <div
                className="plus"
                onClick={(e) => {
                  e.stopPropagation()
                  if (colors.length < MAX_COLORS) addOneColor(i)
                }}
                title={colors.length >= MAX_COLORS ? 'Max colors reached' : 'Add color'}
                style={{ display: colors.length >= MAX_COLORS ? 'none' : 'flex' }}
              >
                <span className="plusSign">+</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Generator