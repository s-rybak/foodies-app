import { useForm } from "react-hook-form";
import Button from '../shared/Button/Button';
import styles from './Logout.module.css';

export const Logout = ({ setModalLogoutOpen }) => {
    const { handleSubmit } = useForm();
    
    const onSubmit = async () => {
        setModalLogoutOpen(false);
    };
    return (
        <>
            <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles.logout_title}>LOG OUT</h2>
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
                        classname={styles.cancelButton}
                    />
                </ul>
            </form>
        </>

    )
}
export default Logout;