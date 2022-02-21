
export const base = 'https://rs-learn-word-21-group.herokuapp.com/'


export interface IWords{
      id?:string,
      _id?:string,
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
    const rawResponse = await fetch(`${base}words?group=${group}&page=${page}`)
    return  await rawResponse.json() 
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
export const getNewToken = async ()=> {
  const userId = JSON.parse(localStorage.SignInUser).userId;
  let refToken:string
  if (localStorage.NewToken == undefined){
    refToken = JSON.parse(localStorage.SignInUser).refreshToken;
  }else{
    refToken = JSON.parse(localStorage.NewToken).refreshToken;
  }
  const rawResponse = await fetch(`${base}users/${userId}/tokens`,{
    method: 'GET',
    headers: {
    'Authorization': `Bearer ${refToken}`,
    'Accept': 'application/json',
  }
  })
  return await rawResponse.json()
}
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

export const getUserWord = async (id:string, wordId:string) => {
  const token:string = JSON.parse(localStorage.NewToken).token
  const rawResponse = await fetch(`${base}users/${id}/words/${wordId}`,
{
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/json',
  }
});
const content = await rawResponse.json();
return content
}

export const updateUserWords = async (id:string, wordId:string, word:{difficulty:string, optional:{repeat:boolean} }) => {
  const token:string = JSON.parse(localStorage.NewToken).token 
  const rawResponse = await fetch(`${base}users/${id}/words/${wordId}`, {
    method: 'PUT',
    body: JSON.stringify(word),
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  const content = await rawResponse.json();
  return content
}

export const createUserWords = async (id:string, wordId:string, word:{difficulty:string, optional:{repeat:boolean}}) => { 
  const token:string = JSON.parse(localStorage.NewToken).token
  const rawResponse = await fetch(`${base}users/${id}/words/${wordId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(word)
    });
    const content = await rawResponse.json().catch(async (error) =>{
      if (error){
        const response = await getUserWord(id, wordId);
        const existingDifficulty = response.difficulty;
        
        const newBody = {
          difficulty: existingDifficulty,
          optional:{'repeat': false}
        }
        await updateUserWords(id, wordId, newBody)
      }
      throw error
      })
      return content;
    }



// export getHardWords = async 

export const deleteUserWord = async (id:number, wordId:string) => {
  const token:string = JSON.parse(localStorage.NewToken).token 
  const rawResponse = await fetch(`${base}user/${id}/words/${wordId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
  const content = await rawResponse.json();
  return content
}


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
export const generateHardWords = async (userId:string, group:number, page:number) => {
  const token:string = JSON.parse(localStorage.NewToken).token 
  // const filter = {"$or":[{"$and":[{"group":${group}},{"page":${page}},{"userWord.difficulty":"easy", "userWord.optional.repeat":true}]},{"userWord":null},{"userWord.difficulty":"hard"}]}
  // const filter = {"$and":[{"group":`${group}`},{"page":`${page}`},{"userWord":null}]}
  // {"$and":[{"group":1},{"page":1},{"userWord.difficulty":"hard"}]}`
  const rawResponse = await fetch(`${base}users/${userId}/aggregatedWords?filter=
  {"$or":[{"$and":[{"group":${group}},{"page":${page}},{"userWord":null}]},{"$and":[{"group":${group}},{"page":${page}},{"userWord.difficulty":"hard"}]}]}`,{
    headers:{
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    }
  })
  return await rawResponse.json();
}

export const generateEasyWords = async (userId:string, group:number, page:number) => {
  const token:string = JSON.parse(localStorage.NewToken).token 
  const rawResponse = await fetch(`${base}users/${userId}/aggregatedWords?filter=
  {"$and":[{"group":${group}},{"page":${page}},{"userWord.difficulty":"easy", "userWord.optional.repeat":true}]}`,{
    headers:{
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    }
  })
  return await rawResponse.json();
}
export const generateWordsForAudio = async (userId:string, group:number, page:number) => {
  const token:string = JSON.parse(localStorage.NewToken).token 
  // const filter = {"$or":[{"$and":[{"group":${group}},{"page":${page}},{"userWord.difficulty":"easy", "userWord.optional.repeat":true}]},{"userWord":null},{"userWord.difficulty":"hard"}]}
  // const filter = {"$and":[{"group":`${group}`},{"page":`${page}`},{"userWord":null}]}
  // {"$and":[{"group":1},{"page":1},{"userWord.difficulty":"hard"}]}`
  const rawResponse = await fetch(`${base}users/${userId}/aggregatedWords?wordsPerPage=20&filter=
  {"$or":[{"$and":[{"group":${group}},{"page":${page}},{"userWord":null}]},{"$and":[{"group":${group}},{"page":${page}},{"userWord.difficulty":"hard"}]},{"$and":[{"group":${group}},{"page":${page}},{"userWord.difficulty":"easy", "userWord.optional.repeat":true}]}]}`,{
    headers:{
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    }
  })
  return await rawResponse.json();
}
