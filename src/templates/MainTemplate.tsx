import { ReactElement } from 'react';
import styles from '../styles/MainTemplate.module.css';

interface Props {
    children: ReactElement;
}

export default function MainTemplate({children}: Props) {
    return (
        <div className={styles.wrapper}>
            <nav>
                <ul>
                    <li>ICON 1</li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )

}