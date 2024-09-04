import { Link } from "react-router-dom"
import s from "./Header.module.css"

export default function Header() {
  return (
    <header className={s.header}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category">Category</Link></li>
        <li><Link to="/recipe">Recipe</Link></li>
      </ul>
    </header>
  )
}
