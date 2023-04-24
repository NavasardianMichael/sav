import sharedStyles from 'assets/styles/_shared.module.scss';
import { FC } from 'react';
import { useSelector } from 'react-redux';
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
                            <h2 className={sharedStyles['h-lg']}>{category.name}</h2>
                            <SubCategories ids={category.subCategoryIds} />
                        </div>
                    )
                })
            }
        </div>
    )
}