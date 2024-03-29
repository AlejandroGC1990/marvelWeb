import { CharacterDataWrapper } from "@/app/types/marvels";
import md5 from "md5";

const API_BASE_URL= "https://gateway.marvel.com/v1/public";
const API_PUBLIC_KEY= "0ee26b225be6bedd2aac61ca2aef9300"
const API_PRIVATE_KEY= "5f9fddadedf1c7c984b25318f6b4bce58e8c0b44"
// const API_PUBLIC_KEY = process.env.API_PUBLIC_KEY;
// const API_PRIVATE_KEY = process.env.API_PRIVATE_KEY;
// console.log("API_PUBLIC_KEY:", API_PUBLIC_KEY);
// console.log("API_PRIVATE_KEY:", API_PRIVATE_KEY);

const getTimeStamp = () => Date.now().toString();
const getHash = (timeStamp: string) => md5(timeStamp + API_PRIVATE_KEY + API_PUBLIC_KEY);
const timeStamp = getTimeStamp();
const hash = getHash(timeStamp);
const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;

const handleResponse = async <T>(response: Response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Response not OK: ${response.status} - ${errorText}`);
  }
  const data = await response.json();
  return data.data as T;
};

export const getSuper = async (offset: number): Promise<CharacterDataWrapper> => {
  const url = `${API_BASE_URL}/characters?${query}&offset=${offset}&limit=20`;
  const response = await fetch(url);
  return handleResponse<CharacterDataWrapper>(response);
};

export const getDetailSuper = async (
  characterId: string
): Promise<CharacterDataWrapper> => {
  const url = `${API_BASE_URL}/characters/${characterId}?${query}`;
  const response = await fetch(url);

  return handleResponse<CharacterDataWrapper>(response);
};

export const searchSuperCharacter = async (querySearch: string | null): Promise<CharacterDataWrapper> => {
  const url = `${API_BASE_URL}/characters?nameStartsWith=${querySearch}&limit=99&${query}`;
  const response = await fetch(url);

  return handleResponse<CharacterDataWrapper>(response);
};

