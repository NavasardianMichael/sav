import { FC, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';

import { combineClassNames } from 'helpers/functions/commons';

import styles from './styles.module.scss';

type T_Props = {
    opened: boolean
    children: JSX.Element | JSX.Element[]
    className?: string
    setOrderDetailsOpened: React.Dispatch<React.SetStateAction<boolean>>
}

export const Portal: FC<T_Props> = ({ opened, children, className, setOrderDetailsOpened }) => {

    const ContentRef = useRef<HTMLDivElement>(null)
    const Container = useMemo(() => {
        const node = document.getElementById('portal')
        if(node) return node;
        const containerNode = document.createElement('div') as HTMLDivElement
        containerNode.id = 'portal'
        document.getElementById('root')?.appendChild(containerNode)
        return containerNode
    }, [])

    useEffect(() => {
        document.getElementsByTagName('html')[0].style.overflow = opened ? 'hidden' : 'auto'
        
        const hidePortal = (e: any) => {
            e.stopPropagation()
            if (ContentRef.current && !ContentRef.current.contains(e.target)) {
                setOrderDetailsOpened(false);
            }
        }
        
        if(opened) {
            document.addEventListener('click', hidePortal)
        }
        
        return () => document.removeEventListener('click', hidePortal)
    }, [opened])

    return (
        createPortal(
            <div className={combineClassNames(styles.portal, opened ? styles.opened : styles.closed)}>
                <div className={styles.overlay} />
                <div ref={ContentRef} className={combineClassNames(styles.content, className ?? undefined)}>
                    {children}
                </div>
            </div>,
            Container
        )
    )
}