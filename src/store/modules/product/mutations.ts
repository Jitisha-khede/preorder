import { MutationTree } from 'vuex'
import ProductState from './ProductState'
import * as types from './mutation-types'

const mutations: MutationTree <ProductState> = {
    [types.PRODUCT_ADD_TO_CACHED] (state, payload) {
        state.cached[payload.product.productId] = payload.product
    },
    [types.PRODUCT_ADD_TO_CACHED_MULTIPLE] (state, payload) {
        // TODO
        if (payload.products) {
            payload.products.forEach((product: any) => {
                state.cached[product.productId] = product
            });
        }
    },
    [types.PRODUCT_CACHED_UPDATED] (state, payload) {
        state.cached = payload.cached
    },
    [types.PRODUCT_LIST_UPDATED] (state, payload) {
        state.list.items = payload.items
        state.list.total = payload.total
    },
    [types.PRODUCT_CURRENT_UPDATED] (state, payload) {
        state.current = payload.current
    },
    [types.PRODUCT_CURRENT_LIST_UPDATED] (state, payload) {
        state.current.list.items = payload.products.groups
        state.current.list.total = payload.products.ngroups
    },
    [types.PRODUCT_CURRENT_TOTAL_PRE_ORDERS_UPDATED] (state, payload) {
        state.current.totalPreOrders = payload.totalPreOrders
    },
    [types.PRODUCT_CATALOG_UPDATED] (state, payload) {
        state.catalogProducts.items = payload.items
        state.catalogProducts.total = payload.total
    },
    [types.PRODUCT_CURRENT_CTLGPRDCT_UPDATED] (state, payload) {
        state.currentCatalogProduct = payload
    },
    [types.PRODUCT_STR_CAT_UPDATED] (state, payload) {
        state.productStoreCategory = payload
    }
}
export default mutations;