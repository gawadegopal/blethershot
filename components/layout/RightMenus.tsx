import { User } from '@prisma/client';
import ProfileInfo from '../domain/profile/ProfileInfo';
import ProfileMedia from '../domain/profile/ProfileMedia';
import Ad from '../domain/ad/Ad';
import FriendRequests from '../domain/follow/FriendRequests';

export default function RightMenus({ user }: {
  user?: User
}) {
  return (
    <div>
      {user ?
        <div className="p-4 bg-white/70 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col gap-4 mb-4">
          <ProfileInfo user={user} />
        </div> :
        null
      }

      {user ?
        <div className="p-4 bg-white/70 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col gap-4 mb-4">
          <ProfileMedia user={user} />
        </div> :
        null
      }

      <Ad />
      <FriendRequests />
    </div>
  )
}
