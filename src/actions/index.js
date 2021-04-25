//Action creator
export const selectedAnnounce = (announce) => {
  // return an action
  return {
    type: "ANNOUNCE_SELECTED",
    payload: announce,
  };
};

