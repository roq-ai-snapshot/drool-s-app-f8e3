import { Mp3Interface } from 'interfaces/mp-3';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RatingInterface {
  id?: string;
  rating: number;
  mp3_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  mp3?: Mp3Interface;
  user?: UserInterface;
  _count?: {};
}

export interface RatingGetQueryInterface extends GetQueryInterface {
  id?: string;
  mp3_id?: string;
  user_id?: string;
}
