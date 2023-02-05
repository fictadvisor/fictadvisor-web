import React, { ReactNode } from "react";
import styles from "styles/v2/local/components/Navigation.module.scss";
import Button, { ButtonSize, ButtonType } from "./Button";
interface HeaderProps {
    buttons?: {
        text: string,
        reference?: string,
    }[],
    isLoggined: boolean,
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div className={styles["header-container"]}>
            <div className={styles["logo"]}>
                <img src={`/assets/logo.png`} alt="logo" />
            </div>
            <div className={styles["menu"]}>
                {props.buttons.map(tertiary => {
                    return (
                        <Button text={tertiary.text} onClick={() => { }} isDisabled={false} size={ButtonSize.LARGE} type={ButtonType.TERTIARY} />
                    )
                })}

            </div>
            {!props.isLoggined && <div className={styles["auth-container"]}>
                <div>
                    <Button text="Зареєструватись" onClick={() => { }} isDisabled={false} size={ButtonSize.SMALL} type={ButtonType.SECONDARY_RED} />
                </div>
                <div>
                    <Button text="Увійти" onClick={() => { }} isDisabled={false} size={ButtonSize.SMALL} type={ButtonType.PRIMARY_RED} />
                </div>
            </div>
            }
            {props.isLoggined && <div className={styles["user-container"]}>
                
            </div>
            }

        </div>
    )
}

export default Header;




