import { useDispatch } from "react-redux";
import cx from "classnames";

import { logoutUser } from "../../redux/auth/authOperations";

import Button from '../shared/Button/Button';
import styles from './Logout.module.css';
import { Navigate, useNavigate } from "react-router-dom";

export const Logout = ({ setModalLogoutOpen }) => {
    const dispatch = useDispatch()

    const handleLogout = async () => {
        dispatch(logoutUser());
        setModalLogoutOpen(false);
    };

    return (
        <>
            <form
                className={cx(styles.container, styles["logout-form"])}
                onSubmit={handleLogout}
            >
                <h2 className={styles["logout-title"]}>LOG OUT</h2>
                <p className={styles.text}>
                    You can always log back in at any time.
                </p>
                <ul className={styles.list}>
                    <Button
                        type="submit"
                        text="Log out"
                        variant={'log_follow'}
                    />
                    <Button
                        type="button"
                        text="Cancel"
                        variant={'log_cancel'}
                        onClick={() => setModalLogoutOpen(false)}
                        classname={styles["cancel-button"]}
                    />
                </ul>
            </form>
        </>

    )
}

export default Logout;