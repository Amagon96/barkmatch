export interface Favorite {
  dogImage: string;
  dogDescription: string;
}

export interface FavoriteWithId extends Favorite{
  id: string;
}

export type Id = string;