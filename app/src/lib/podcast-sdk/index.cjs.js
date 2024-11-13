const { getDataConnect, queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'connector',
  service: 'podcast-service',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

function getDiscoveryFeedRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetDiscoveryFeed', inputVars);
}
exports.getDiscoveryFeedRef = getDiscoveryFeedRef;
exports.getDiscoveryFeed = function getDiscoveryFeed(dcOrVars, vars) {
  return executeQuery(getDiscoveryFeedRef(dcOrVars, vars));
};

function getUserLibraryRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetUserLibrary');
}
exports.getUserLibraryRef = getUserLibraryRef;
exports.getUserLibrary = function getUserLibrary(dc) {
  return executeQuery(getUserLibraryRef(dc));
};

function getUserPlaylistsRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetUserPlaylists');
}
exports.getUserPlaylistsRef = getUserPlaylistsRef;
exports.getUserPlaylists = function getUserPlaylists(dc) {
  return executeQuery(getUserPlaylistsRef(dc));
};

function getPlaylistRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return queryRef(dcInstance, 'GetPlaylist', inputVars);
}
exports.getPlaylistRef = getPlaylistRef;
exports.getPlaylist = function getPlaylist(dcOrVars, vars) {
  return executeQuery(getPlaylistRef(dcOrVars, vars));
};

function updateEpisodeInteractionRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'UpdateEpisodeInteraction', inputVars);
}
exports.updateEpisodeInteractionRef = updateEpisodeInteractionRef;
exports.updateEpisodeInteraction = function updateEpisodeInteraction(dcOrVars, vars) {
  return executeMutation(updateEpisodeInteractionRef(dcOrVars, vars));
};

function createPlaylistRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'CreatePlaylist', inputVars);
}
exports.createPlaylistRef = createPlaylistRef;
exports.createPlaylist = function createPlaylist(dcOrVars, vars) {
  return executeMutation(createPlaylistRef(dcOrVars, vars));
};

function addEpisodeToPlaylistRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'AddEpisodeToPlaylist', inputVars);
}
exports.addEpisodeToPlaylistRef = addEpisodeToPlaylistRef;
exports.addEpisodeToPlaylist = function addEpisodeToPlaylist(dcOrVars, vars) {
  return executeMutation(addEpisodeToPlaylistRef(dcOrVars, vars));
};

function removeEpisodeFromPlaylistRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'RemoveEpisodeFromPlaylist', inputVars);
}
exports.removeEpisodeFromPlaylistRef = removeEpisodeFromPlaylistRef;
exports.removeEpisodeFromPlaylist = function removeEpisodeFromPlaylist(dcOrVars, vars) {
  return executeMutation(removeEpisodeFromPlaylistRef(dcOrVars, vars));
};

function deletePlaylistRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'DeletePlaylist', inputVars);
}
exports.deletePlaylistRef = deletePlaylistRef;
exports.deletePlaylist = function deletePlaylist(dcOrVars, vars) {
  return executeMutation(deletePlaylistRef(dcOrVars, vars));
};

