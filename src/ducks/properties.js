const initialState = {
  userId: 0,
  userCurrentProps: [],
  propName: '',
  propDesc: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  imageurl: '',
  loanamount: '',
  monthlymorgage: '',
  desiredrent: '',
  recommendendrent: ''
}

const USERID = 'USERID';
const USERPROPS = 'USERPROPS';
const WIZARDONE = 'WIZARDONE';
const WIZARDTWO = 'WIZARDTWO';
const WIZARDTHREE = 'WIZARDTHREE';
const WIZARDFOUR = 'WIZARDFOUR';
const WIZARDFIVE = 'WIZARDFIVE';
const CLEARPROPS = 'CLEARPROPS';

export default function propteries(state = initialState, action) {
  switch (action.type) {
    case USERID:
      return {
        userId: action.payload,
      }
    case USERPROPS:
      return {
        userCurrentProps: action.payload
      }
    case WIZARDONE:
      return {
        propName: action.payload.propName,
        propDesc: action.payload.propDesc
      }
    case WIZARDTWO:
      return {
        address: action.payload.address,
        city: action.payload.city,
        state: action.payload.state,
        zip: action.payload.zip
      }
    case WIZARDTHREE:
      return {
        imageurl: action.payload
      }
    case WIZARDFOUR:
      return {
        loanamount: action.payload.loanamount,
        monthlymorgage: action.payload.monthlymorgage,
        recommendendrent: action.payload.recommendendrent
      }
    case WIZARDFIVE:
      return {
        desiredrent: action.payload.desiredrent
      }
    case CLEARPROPS:
      return {
        state: initialState
      }
    default:
      return state;
  }
}

export function addUserId (userId) {
  return {payload: userId, type: USERID};
}

export function addUserProps (userCurrentProps) {
  return {payload: userCurrentProps, type: USERPROPS};
}

export function addWizardOneInfo (propName, propDesc) {
  return {payload: {propName: propName, propDesc: propDesc}, type: WIZARDONE};
}

export function addWizardTwoInfo (address, city, state, zip) {
  return {payload: {address: address, city: city, state: state, zip: zip}, type: WIZARDTWO};
}

export function addWizardThreeInfo (imageurl) {
  return {payload: imageurl, type: WIZARDTHREE};
}

export function addWizardFourInfo (loanamount, monthlymorgage, recommendendrent) {
  return {payload: {loanamount: loanamount, monthlymorgage: monthlymorgage, recommendendrent: recommendendrent}, type: WIZARDFOUR};
}

export function addWizardFiveInfo (desiredrent) {
  return {payload: desiredrent, type: WIZARDFIVE};
}

export function clearProps () {
  return {type: CLEARPROPS};
}
