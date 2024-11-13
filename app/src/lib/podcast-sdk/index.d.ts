import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';
export const connectorConfig: ConnectorConfig;

export type TimestampString = string;

export type UUIDString = string;

export type Int64String = string;

export type DateString = string;



export interface AddEpisodeToPlaylistData {
  playlistEpisode_insert: PlaylistEpisode_Key;
}

export interface AddEpisodeToPlaylistVariables {
  playlistId: UUIDString;
  episodeId: UUIDString;
  position: number;
}

export interface CreatePlaylistData {
  playlist_insert: Playlist_Key;
}

export interface CreatePlaylistVariables {
  title: string;
  description?: string | null;
  isPublic: boolean;
}

export interface DeletePlaylistData {
  playlist_delete?: Playlist_Key | null;
}

export interface DeletePlaylistVariables {
  playlistId: UUIDString;
}

export interface Episode_Key {
  id: UUIDString;
  __typename?: 'Episode_Key';
}

export interface GetDiscoveryFeedData {
  episodes: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    author?: string | null;
    imageUrl?: string | null;
    duration: number;
    category?: string | null;
    tags?: string[] | null;
    publishedAt: TimestampString;
  } & Episode_Key)[];
}

export interface GetDiscoveryFeedVariables {
  category?: string | null;
  searchQuery?: string | null;
  limit?: number | null;
  offset?: number | null;
}

export interface GetPlaylistData {
  playlist?: {
    title: string;
    description?: string | null;
    isPublic: boolean;
    user: {
      username?: string | null;
    };
      playlistEpisodes_on_playlist: ({
        episode: {
          id: UUIDString;
          title: string;
          author?: string | null;
          duration: number;
          imageUrl?: string | null;
        } & Episode_Key;
          position: number;
          addedAt: TimestampString;
      })[];
  };
}

export interface GetPlaylistVariables {
  playlistId: UUIDString;
}

export interface GetUserLibraryData {
  userEpisodeInteractions: ({
    episode: {
      id: UUIDString;
      title: string;
      author?: string | null;
      imageUrl?: string | null;
      duration: number;
      category?: string | null;
    } & Episode_Key;
      isLiked?: boolean | null;
      isFavorite?: boolean | null;
      playbackPosition?: number | null;
      lastPlayedAt?: TimestampString | null;
  })[];
}

export interface GetUserPlaylistsData {
  playlists: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    isPublic: boolean;
    createdAt: TimestampString;
  } & Playlist_Key)[];
}

export interface PlaylistEpisode_Key {
  playlistId: UUIDString;
  episodeId: UUIDString;
  __typename?: 'PlaylistEpisode_Key';
}

export interface Playlist_Key {
  id: UUIDString;
  __typename?: 'Playlist_Key';
}

export interface RemoveEpisodeFromPlaylistData {
  playlistEpisode_delete?: PlaylistEpisode_Key | null;
}

export interface RemoveEpisodeFromPlaylistVariables {
  playlistId: UUIDString;
  episodeId: UUIDString;
}

export interface UpdateEpisodeInteractionData {
  userEpisodeInteraction_upsert: UserEpisodeInteraction_Key;
}

export interface UpdateEpisodeInteractionVariables {
  episodeId: UUIDString;
  isLiked?: boolean | null;
  isFavorite?: boolean | null;
  playbackPosition?: number | null;
  isCompleted?: boolean | null;
  addedToLibrary?: boolean | null;
}

export interface UserEpisodeInteraction_Key {
  userAuth: string;
  episodeId: UUIDString;
  __typename?: 'UserEpisodeInteraction_Key';
}

export interface User_Key {
  auth: string;
  __typename?: 'User_Key';
}



/* Allow users to create refs without passing in DataConnect */
export function getDiscoveryFeedRef(vars?: GetDiscoveryFeedVariables): QueryRef<GetDiscoveryFeedData, GetDiscoveryFeedVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getDiscoveryFeedRef(dc: DataConnect, vars?: GetDiscoveryFeedVariables): QueryRef<GetDiscoveryFeedData,GetDiscoveryFeedVariables>;

export function getDiscoveryFeed(vars?: GetDiscoveryFeedVariables): QueryPromise<GetDiscoveryFeedData, GetDiscoveryFeedVariables>;
export function getDiscoveryFeed(dc: DataConnect, vars?: GetDiscoveryFeedVariables): QueryPromise<GetDiscoveryFeedData,GetDiscoveryFeedVariables>;


/* Allow users to create refs without passing in DataConnect */
export function getUserLibraryRef(): QueryRef<GetUserLibraryData, undefined>;/* Allow users to pass in custom DataConnect instances */
export function getUserLibraryRef(dc: DataConnect): QueryRef<GetUserLibraryData,undefined>;

export function getUserLibrary(): QueryPromise<GetUserLibraryData, undefined>;
export function getUserLibrary(dc: DataConnect): QueryPromise<GetUserLibraryData,undefined>;


/* Allow users to create refs without passing in DataConnect */
export function getUserPlaylistsRef(): QueryRef<GetUserPlaylistsData, undefined>;/* Allow users to pass in custom DataConnect instances */
export function getUserPlaylistsRef(dc: DataConnect): QueryRef<GetUserPlaylistsData,undefined>;

export function getUserPlaylists(): QueryPromise<GetUserPlaylistsData, undefined>;
export function getUserPlaylists(dc: DataConnect): QueryPromise<GetUserPlaylistsData,undefined>;


/* Allow users to create refs without passing in DataConnect */
export function getPlaylistRef(vars: GetPlaylistVariables): QueryRef<GetPlaylistData, GetPlaylistVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getPlaylistRef(dc: DataConnect, vars: GetPlaylistVariables): QueryRef<GetPlaylistData,GetPlaylistVariables>;

export function getPlaylist(vars: GetPlaylistVariables): QueryPromise<GetPlaylistData, GetPlaylistVariables>;
export function getPlaylist(dc: DataConnect, vars: GetPlaylistVariables): QueryPromise<GetPlaylistData,GetPlaylistVariables>;


/* Allow users to create refs without passing in DataConnect */
export function updateEpisodeInteractionRef(vars: UpdateEpisodeInteractionVariables): MutationRef<UpdateEpisodeInteractionData, UpdateEpisodeInteractionVariables>;
/* Allow users to pass in custom DataConnect instances */
export function updateEpisodeInteractionRef(dc: DataConnect, vars: UpdateEpisodeInteractionVariables): MutationRef<UpdateEpisodeInteractionData,UpdateEpisodeInteractionVariables>;

export function updateEpisodeInteraction(vars: UpdateEpisodeInteractionVariables): MutationPromise<UpdateEpisodeInteractionData, UpdateEpisodeInteractionVariables>;
export function updateEpisodeInteraction(dc: DataConnect, vars: UpdateEpisodeInteractionVariables): MutationPromise<UpdateEpisodeInteractionData,UpdateEpisodeInteractionVariables>;


/* Allow users to create refs without passing in DataConnect */
export function createPlaylistRef(vars: CreatePlaylistVariables): MutationRef<CreatePlaylistData, CreatePlaylistVariables>;
/* Allow users to pass in custom DataConnect instances */
export function createPlaylistRef(dc: DataConnect, vars: CreatePlaylistVariables): MutationRef<CreatePlaylistData,CreatePlaylistVariables>;

export function createPlaylist(vars: CreatePlaylistVariables): MutationPromise<CreatePlaylistData, CreatePlaylistVariables>;
export function createPlaylist(dc: DataConnect, vars: CreatePlaylistVariables): MutationPromise<CreatePlaylistData,CreatePlaylistVariables>;


/* Allow users to create refs without passing in DataConnect */
export function addEpisodeToPlaylistRef(vars: AddEpisodeToPlaylistVariables): MutationRef<AddEpisodeToPlaylistData, AddEpisodeToPlaylistVariables>;
/* Allow users to pass in custom DataConnect instances */
export function addEpisodeToPlaylistRef(dc: DataConnect, vars: AddEpisodeToPlaylistVariables): MutationRef<AddEpisodeToPlaylistData,AddEpisodeToPlaylistVariables>;

export function addEpisodeToPlaylist(vars: AddEpisodeToPlaylistVariables): MutationPromise<AddEpisodeToPlaylistData, AddEpisodeToPlaylistVariables>;
export function addEpisodeToPlaylist(dc: DataConnect, vars: AddEpisodeToPlaylistVariables): MutationPromise<AddEpisodeToPlaylistData,AddEpisodeToPlaylistVariables>;


/* Allow users to create refs without passing in DataConnect */
export function removeEpisodeFromPlaylistRef(vars: RemoveEpisodeFromPlaylistVariables): MutationRef<RemoveEpisodeFromPlaylistData, RemoveEpisodeFromPlaylistVariables>;
/* Allow users to pass in custom DataConnect instances */
export function removeEpisodeFromPlaylistRef(dc: DataConnect, vars: RemoveEpisodeFromPlaylistVariables): MutationRef<RemoveEpisodeFromPlaylistData,RemoveEpisodeFromPlaylistVariables>;

export function removeEpisodeFromPlaylist(vars: RemoveEpisodeFromPlaylistVariables): MutationPromise<RemoveEpisodeFromPlaylistData, RemoveEpisodeFromPlaylistVariables>;
export function removeEpisodeFromPlaylist(dc: DataConnect, vars: RemoveEpisodeFromPlaylistVariables): MutationPromise<RemoveEpisodeFromPlaylistData,RemoveEpisodeFromPlaylistVariables>;


/* Allow users to create refs without passing in DataConnect */
export function deletePlaylistRef(vars: DeletePlaylistVariables): MutationRef<DeletePlaylistData, DeletePlaylistVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deletePlaylistRef(dc: DataConnect, vars: DeletePlaylistVariables): MutationRef<DeletePlaylistData,DeletePlaylistVariables>;

export function deletePlaylist(vars: DeletePlaylistVariables): MutationPromise<DeletePlaylistData, DeletePlaylistVariables>;
export function deletePlaylist(dc: DataConnect, vars: DeletePlaylistVariables): MutationPromise<DeletePlaylistData,DeletePlaylistVariables>;


