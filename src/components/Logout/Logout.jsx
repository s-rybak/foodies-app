import { useForm } from "react-hook-form";
import cx from "classnames";

import Button from '../shared/Button/Button';
import styles from './Logout.module.css';

export const Logout = ({ setModalLogoutOpen }) => {
    const { handleSubmit } = useForm();
    
    const onSubmit = async () => {
        setModalLogoutOpen(false);
    };
    return (
        <>
            <form className={cx(styles.container, styles["logout-form"])} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles["logout-title"]}>LOG OUT</h2>
                <p className={styles.text}>
                    You can always log back in at any time.
                </p>
                <ul className={styles.list}>
                    <Button
                        type="submit"
                        text="Log out"
                        variant={'log_follow'}
                        classname={styles["logout-button"]}
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