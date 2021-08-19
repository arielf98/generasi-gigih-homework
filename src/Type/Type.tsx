export type stateType = {
  userData : {
    token: string,
    isLogin: boolean,
    userProfile: {
      id: string
    }
  }
}
 type imagesType = {
  url: string,
}
 type artistsType = {
  name: string,
}
export type albumType = {
    images: Array<imagesType>,
    name: string,
}
export type songType = {
  id: string,
  uri: string,
  album: albumType,
  artists: Array<artistsType>,
  name: string,
}
export type trackListType = {
  url: string,
  name: string,
  artist: string,
  album: string,
  uri: string,
  setSelected: any,
  selected: any
}
export type searchType = {
    setTracks: any,
    selected: any,
    setShowModal: any,
  }
