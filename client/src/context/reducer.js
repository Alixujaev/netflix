export const initialState = {
  originals: [],
  filteredMovie: [],
  user: [],
  trailer: '',
  regName: '',
  regEmail: '',
  regPassword: '',
  logEmail: '',
  logPassword: '',
  info: '',
  error: false
}

export const reducer = (state = initialState, {type, payload}) => {
  if(type === "CHANGE_ORIGINALS"){
    return {
      ...state,
      originals: payload
    }
  }
  if(type === "USER"){
    return {
      ...state,
      user: [...payload]
    }
  }
  if(type === "CLEAR"){
    return null
  }
  if(type === "CLEAR_INPUT"){
    return {
      ...state,
      logEmail: '',
      logPassword: '',
      regName: '',
      regEmail: '',
      regPassword: '',
    }
  }
  if(type === "CHANGE_REG_NAME"){
    return {
      ...state,
      regName: payload
    }
  }
  if(type === "CHANGE_REG_EMAIL"){
    return {
      ...state,
      regEmail: payload
    }
  }
  if(type === "CHANGE_REG_PASSWORD"){
    return {
      ...state,
      regPassword: payload
    }
  }
  if(type === "CHANGE_LOG_EMAIL"){
    return {
      ...state,
      logEmail: payload
    }
  }
  if(type === "CHANGE_LOG_PASSWORD"){
    return {
      ...state,
      logPassword: payload
    }
  }
  if(type === "FILTERED_MOVIE"){
    return {
      ...state,
      filteredMovie: payload
    }
  }
  if(type === "TRAILER"){
    return {
      ...state,
      trailer: payload
    }
  }
  if(type === "SET_INFO"){
    return{
      ...state,
      info: payload
    }
  }
  if(type === "SET_ERROR"){
    return{
      ...state,
      error: true
    }
  }
  return state
}

