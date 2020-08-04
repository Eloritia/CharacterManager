import * as types from './types';
import { iDependencies } from 'mathjs';

import { Guid } from "guid-typescript";
import { Trait } from 'src/Data/Trait';

export const UpdateCurrentHealth = (ch:number) => ({
  type: types.UPDATE_CURRENT_HEALTH,
  payload: ch,
})
export const UpdateTempHealth = (temp:number) => ({
    type: types.UPDATE_TEMP_HEALTH,
    payload: temp,
  })
  export const UpdateCurrentHitDice = (id:Guid,newHD:number) => ({
    type: types.UPDATE_CLASS_CURRENT_HIT_DICE,
    id:id,
    payload: newHD,
  })
  export const ModifyTraits = (newTraits:Trait,category:string) => ({
    type: types.MODIFY_TRAITS,
    payload: newTraits,
    location:category
  })
  export const UpdateClassTrait = (newTraits:Trait,id:Guid) => ({
    type: types.UPDATE_CLASS_TRAIT,
    payload: newTraits,
    id:id
  })
  export const UdateSubclassTrait = (newTraits:Trait,id:Guid) => ({
    type: types.UPDATE_SUBCLASS_TRAIT,
    payload: newTraits,
    id:id
  })
  export const UpdateTrait = (newTrait:Trait,id:Guid) => ({
    type: types.UPDATE_TRAIT,
    payload: newTrait,
    id:id
  })