import style from "./Error.module.css"

export default function Error({ error }) {
    return <p className={style.error}>{error}</p>;
}
