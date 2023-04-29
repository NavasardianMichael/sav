import { FC } from 'react';
import { useSelector } from 'react-redux';

import sharedStyles from 'assets/styles/_shared.module.scss';
import { combineClassNames } from 'helpers/functions/commons';
import { selectCategories } from 'store/categories/selectors';

import { SubCategories } from '../SubCategories/Main';
import styles from './styles.module.scss';

export const Categories: FC = () => {

    const categories = useSelector(selectCategories)

    return (
        <div className={styles.categories}>
            {
                categories.allIds.map(categoryId => {
                    const category = categories.byId[categoryId]
                    return (
                        <div id={category.id} key={category.id} className={styles.category}>
                            <h2 className={combineClassNames(sharedStyles['h-lg'], sharedStyles['mb-0'])}>{category.name}</h2>
                            <SubCategories ids={category.subCategoryIds} />
                        </div>
                    )
                })
            }
        </div>
    )
}