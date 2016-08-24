import _ from 'lodash';
import FuturePlanList from '../components/FuturePlanList';
import FuturePlanArticle from '../components/FuturePlanArticle';

export const isPresent = (variable) => {
  if (_.isNull(variable) || _.isUndefined(variable)) {
    return false;
  } else {

    try {

      if (variable.length == 0) {
        return false;
      } 
    } catch(e){
      return false;
    }
  }

  return true;

}


export var customRouter = {
  FuturePlanList,
  FuturePlanArticle
};