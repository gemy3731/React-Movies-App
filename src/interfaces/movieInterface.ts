export interface movieI {
    id:string,
    poster_path:string,
    backdrop_path:string,
    title:string,
}
export interface moviesI{
    results:movieI[],
    total_pages:number
}