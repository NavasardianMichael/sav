import { useSelector } from 'react-redux'
import styles from './styles.module.scss'
import { selectCategories } from 'store/categories/selectors'
import { selectSubCategories } from 'store/subCategories/selectors'

export const Categories = () => {
    const categories = useSelector(selectCategories)
    const subCategories = useSelector(selectSubCategories)

    return (
        <div className={styles.categories}>
            {
                categories.allIds.map(categoryId => {
                    const category = categories.byId[categoryId]
                    return (
                        <div key={categoryId} className={styles.category}>
                            <a href={`#${categoryId}`}>{category.name}</a>
                            <div className={styles.subCategories}>
                                {
                                    category.subCategoryIds.map(subCategoryId => {
                                        const subCategory = subCategories.byId[subCategoryId]
                                        return (
                                            <a key={subCategoryId} href={`#${subCategoryId}`}>{subCategory.name}</a>
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