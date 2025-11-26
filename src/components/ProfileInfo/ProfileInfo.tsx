import UserProfile from '../../assets/images/avatar-jessica.jpeg'

export function ProfileInfo() {
  const userInfo = {
    userImage: UserProfile,
    userName: 'Jessica Randall',
    userLocation: 'London, United Kingdom',
    userDec: '"Front-end developer and avid reader."',
  }

  return (
    <div className='flex flex-col items-center justify-between mb-5'>
      <div className='flex flex-col items-center mb-5'>
        <img src={userInfo.userImage} className='rounded-[50%] w-25 mb-5' alt="User Image" />
        <h1 className='text-white text-2xl font-[InterSemiBold]'>{userInfo.userName}</h1>
        <p className='text-[#c4f82a] font-[InterSemiBold] text-sm'>{userInfo.userLocation}</p>
      </div>
      <p className='text-gray-300 font-[InterRegular] text-sm'>{userInfo.userDec}</p>
    </div>
  )
}