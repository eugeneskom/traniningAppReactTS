import { Repetition } from "../types/types"

export const saveTraining = (newRepetitions:Repetition):void => {
  console.log('newRepetitions: ',newRepetitions)
  localStorage.setItem('lolkek', 'lolkek1')
  let savedRepetitions = localStorage.getItem('repetitions')
  if(savedRepetitions !=  null){
    const savedRepetitionsParsed = JSON.parse(savedRepetitions)
    const totalRepetitions = [...savedRepetitionsParsed,newRepetitions];
    window.localStorage.setItem('repetitions', JSON.stringify(totalRepetitions))
  }else{
    window.localStorage.setItem('repetitions', JSON.stringify([newRepetitions]))
  }
}

export const getTrainings = (): Repetition[] | null  => {
  const savedRepetitions = window.localStorage.getItem('repetitions');
  if(savedRepetitions){
    return JSON.parse(savedRepetitions)
  }else {
    return null;
  }
}

export const getDate = ()=>{
  return
}