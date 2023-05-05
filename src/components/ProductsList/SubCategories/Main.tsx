import { FC } from 'react';
import { useSelector } from 'react-redux';

import { T_Category } from 'store/categories/types';
import { selectSubCategories } from 'store/subCategories/selectors';

import sharedStyles from 'assets/styles/_shared.module.scss';
import { combineClassNames, hasObjAnyKey } from 'helpers/functions/commons';
import { Products } from '../Products/Main';
import styles from './styles.module.scss';

type T_Props = {
    ids: T_Category['subCategoryIds']
}

export const SubCategories: FC<T_Props> = ({ ids }) => {

    const subCategories = useSelector(selectSubCategories)

    if(!hasObjAnyKey(subCategories.byId)) return null;

    return (
        <div className={styles.subCategories}>
            {
                ids.map(subCategoryId => {
                    const subCategory = subCategories.byId[subCategoryId]
                    return (
                        <div id={subCategoryId} key={subCategoryId} className={styles.subCategory}>
                            <h3 className={combineClassNames(sharedStyles['h-md'], styles.title)}>{subCategory.name}</h3>
                            <Products ids={subCategory.productIds} />
                        </div>
                    )
                })
            }
        </div>
    )
}