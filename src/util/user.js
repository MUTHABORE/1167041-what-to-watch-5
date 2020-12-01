import {extend} from '../util/utils.js';

export const adaptUserToClient = (userInfo) => {
  const adaptedUser = extend(
      userInfo,
      {
        avatarUrl: userInfo.avatar_url,
      }
  );

  delete adaptedUser.avatar_url;

  return adaptedUser;
};
