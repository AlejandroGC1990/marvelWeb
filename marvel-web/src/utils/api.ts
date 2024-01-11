import { CharacterDataWrapper } from "@/app/types/marvels";
import md5 from "md5";

const API_BASE_URL = "https://gateway.marvel.com/v1/public";
const API_PUBLIC_KEY = "0ee26b225be6bedd2aac61ca2aef9300";
const API_PRIVATE_KEY = "5f9fddadedf1c7c984b25318f6b4bce58e8c0b44";

const getTimeStamp = () => Date.now().toString();
const getHash = (timeStamp: string) => md5(timeStamp + API_PRIVATE_KEY + API_PUBLIC_KEY);

const timeStamp = getTimeStamp();
const hash = getHash(timeStamp);
const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;

const handleResponse = async <T>(response: Response) => {
    if(!response.ok) {
        throw new Error(response.statusText)
    }
    const data = await response.json();
    return data.data as T;
}

export const getCharacters = async (): Promise<CharacterDataWrapper> => {
  const url = `${API_BASE_URL}/characters?${query}`;
  const response = await fetch(url);

  return handleResponse<CharacterDataWrapper>(response);
};

//MIN 29:37