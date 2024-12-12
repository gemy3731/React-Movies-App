export interface movieI {
    id:string,
    poster_path:string,
    backdrop_path:string,
    title:string,
    genre_ids:number[]
}
export interface moviesI{
    results:movieI[],
    total_pages:number
}