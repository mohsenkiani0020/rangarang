export interface ParamsModel {
    params : Promise<{productGroupId : string , workTypeId : string}>
    searchParams ?: Promise<object>
}