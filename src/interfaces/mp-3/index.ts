import { RatingInterface } from 'interfaces/rating';
import { LibraryInterface } from 'interfaces/library';
import { GetQueryInterface } from 'interfaces';

export interface Mp3Interface {
  id?: string;
  title: string;
  genre: string;
  file_path: string;
  library_id: string;
  created_at?: any;
  updated_at?: any;
  rating?: RatingInterface[];
  library?: LibraryInterface;
  _count?: {
    rating?: number;
  };
}

export interface Mp3GetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  genre?: string;
  file_path?: string;
  library_id?: string;
}
