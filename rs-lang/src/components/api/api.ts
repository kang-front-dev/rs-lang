
export const base = 'https://rs-learn-word-21-group.herokuapp.com/'


export interface IWords{
      length: number;
      id:string,
      group:number,
      page:number,
      word:string,
      image: string,
      audio:string,
      audioMeaning:string,
      audioExample:string,
      textMeaning:string,
      textExample:string,
      transcription:string,
      wordTranslate:string,
      textMeaningTranslate:string,
      textExampleTranslate:string,
  }


export const getWords = async (group:number, page:number) => {
  try {
    const rawResponse = await fetch(`${base}words?group=${group}&page=${page}`)
    
    if (rawResponse.status === 200) {
       return <IWords> await rawResponse.json();
    }
    return null;
   
  } catch (err) {
    throw err as Error;
  }
}
export const getWord = async (id:string) => {
    return (await fetch(`${base}words/${id}`)).json()
}


export const loginUser = async (user:{email: string, password: string}) => {
  const rawResponse = await fetch(`${base}signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).catch()
  return rawResponse.status == 403 ? 'Incorrect e-mail password' : await rawResponse.json()
  
};

export const createUser = async (user:{name:string, 'email': string, 'password': string}) => {
  const rawResponse = await fetch(`${base}users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).catch()
  return rawResponse.status == 422 ? 'Incorrect e-mail password' : await rawResponse.json()
};

export const getUser = async (id:string) => (await fetch(`${base}users/${id}`)).json()

export const updateUser = async (id:number, user:{email:string, password:string}) => (await fetch(`${base}user/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })).json();

export const deleteUser = async (id:number) => (await fetch (`${base}/users/${id}`, {method: 'DELETE'})).json();

export const getUserToken = async (id:string) => (await fetch(`${base}users/${id}/tokens`)).json()

export const getUserWords = async (id:string) => (await fetch(`${base}users/${id}/words`)).json()

export const createUserWords = async (id:string, wordId:string, word:{difficulty:string, optional:[] }) => {
    const rawResponse = await fetch(`${base}users/${id}/words/${wordId}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(word)
    }).catch()
    return rawResponse.status == 404 ? 'Settings not found' : await rawResponse.json()
  };

export const getUserWordsById = async (id:string, wordId:string) => (await fetch(`${base}users/${id}/words/${wordId}`)).json()

export const updateUserWords = async (id:number, wordId:string, word:{difficulty:string, optional:[] }) => (await fetch(`${base}user/${id}/words/${wordId}`, {
    method: 'PUT',
    body: JSON.stringify(word),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })).json();

export const deleteUserWord = async (id:number, wordId:string) => (await fetch (`${base}/users/${id}/words/${wordId}`, {method: 'DELETE'})).json();


export const getUserStatistic = async (id:string) => (await fetch(`${base}users/${id}/statistics`)).json()

export const upsertsStatistics = async (id:number, stat:{learnedWords:number, optional:[] }) => (await fetch(`${base}user/${id}/statistics`, {
    method: 'PUT',
    body: JSON.stringify(stat),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })).json();
  
export const getUserSettings = async (id:string) => (await fetch(`${base}users/${id}/settings`)).json()

export const upsertsSettings = async (id:number, set:{wordsPerDay:number, optional:[] }) => (await fetch(`${base}user/${id}/settings`, {
    method: 'PUT',
    body: JSON.stringify(set),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })).json();

  export const baseUrl = "http://localhost:3000";
  export const getAllWords = async (
    page = 0,
    limit = 20,
    group = 0
  ): Promise<{ words: Array<IWords>; count: string }> | null => {
    try { 
      const dataWords = await fetch(
        `${base}words?page=${page}&group=${group}`
      );
      const res: IWords[] = await dataWords.json();
      if (dataWords.status === 200) {
        return {
          words: res,
          count: dataWords.headers.get("X-Total-Count") || "0",
        };
      }
      return null;
    } catch (err) {
      throw err as Error;
    }
  };

  export const deleteWord = async (wordId: string): Promise<void> => {
    try {
      await fetch(`${base}words/${wordId}`, {
        method: "DELETE",
      });
    } catch (err) {
      throw err as Error;
    }
  };
  export interface IConnection {
    name: string;
    component: () => void;
  }
  