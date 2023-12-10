import { createSelector } from 'reselect';
import { IApplicationState } from '../../shared/interfaces/application-state.interface';
import { CategoryEnum } from '../../shared';

const selectProductState = (state: IApplicationState) => state.productPackage;

export const selectProducts = createSelector([selectProductState], x => x.productList);
export const selectMensProducts = createSelector([selectProductState], x => x.productList.filter(p => p.category === CategoryEnum.MensClothingCategory));
export const selectWomenProducts = createSelector([selectProductState], x => x.productList.filter(p => p.category === CategoryEnum.WomenClothingCategory));
