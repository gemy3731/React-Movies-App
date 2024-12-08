export interface movieDetailsI{
    homepage:string,
    origin_country:string[],
    original_language:string,
    original_title:string,
    overview:string,
    poster_path:string,
    release_date:string,
    status:string,
    vote_average:number,
    genres:{name:string,id:string}[],
}