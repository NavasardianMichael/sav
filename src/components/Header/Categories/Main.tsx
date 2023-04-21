import { hasObjAnyKey } from 'helpers/functions/commons'
import { useSelector } from 'react-redux'
import { selectCategories } from 'store/categories/selectors'
import { selectSubCategories } from 'store/subCategories/selectors'
import styles from './styles.module.scss'

export const Categories = () => {
    const categories = useSelector(selectCategories)
    const subCategories = useSelector(selectSubCategories)

    if(!categories.allIds.length || !hasObjAnyKey(subCategories.byId)) return null;

    return (
        <div className={styles.categories}>
            {
                categories.allIds.map(categoryId => {
                    const category = categories.byId[categoryId]
                    return (
                        <div key={categoryId} className={styles.categoryBlock}>
                            <a href={`#${categoryId}`} className={styles.category}>{category?.name}</a>
                            <div className={styles.subCategories}>
                                {
                                    category.subCategoryIds.map(subCategoryId => {
                                        const subCategory = subCategories.byId[subCategoryId]
                                        return (
                                            <a 
                                                key={subCategoryId} 
                                                href={`#${subCategoryId}`}
                                                className={styles.subCategory}
                                            >
                                                {subCategory?.name}
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}