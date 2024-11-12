import { getDataConnect, queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'connector',
  service: 'podcast-service',
  location: 'us-east4'
};

export function updateEpisodeInteractionRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'UpdateEpisodeInteraction', inputVars);
}
export function updateEpisodeInteraction(dcOrVars, vars) {
  return executeMutation(updateEpisodeInteractionRef(dcOrVars, vars));
}
export function createPlaylistRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'CreatePlaylist', inputVars);
}
export function createPlaylist(dcOrVars, vars) {
  return executeMutation(createPlaylistRef(dcOrVars, vars));
}
export function addEpisodeToPlaylistRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'AddEpisodeToPlaylist', inputVars);
}
export function addEpisodeToPlaylist(dcOrVars, vars) {
  return executeMutation(addEpisodeToPlaylistRef(dcOrVars, vars));
}
export function removeEpisodeFromPlaylistRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'RemoveEpisodeFromPlaylist', inputVars);
}
export function removeEpisodeFromPlaylist(dcOrVars, vars) {
  return executeMutation(removeEpisodeFromPlaylistRef(dcOrVars, vars));
}
export function deletePlaylistRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'DeletePlaylist', inputVars);
}
export function deletePlaylist(dcOrVars, vars) {
  return executeMutation(deletePlaylistRef(dcOrVars, vars));
}
export function getDiscoveryFeedRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetDiscoveryFeed', inputVars);
}
export function getDiscoveryFeed(dcOrVars, vars) {
  return executeQuery(getDiscoveryFeedRef(dcOrVars, vars));
}
export function getUserLibraryRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetUserLibrary');
}
export function getUserLibrary(dc) {
  return executeQuery(getUserLibraryRef(dc));
}
export function getUserPlaylistsRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetUserPlaylists');
}
export function getUserPlaylists(dc) {
  return executeQuery(getUserPlaylistsRef(dc));
}
export function getPlaylistRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetPlaylist', inputVars);
}
export function getPlaylist(dcOrVars, vars) {
  return executeQuery(getPlaylistRef(dcOrVars, vars));
}
