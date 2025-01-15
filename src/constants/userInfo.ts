export interface UserInfoType {
  nickname: string;
  email: string;
  ageRange: string;
  gender: string;
  religion: string;
}

const USER_INFO: UserInfoType = {
  nickname: '김태욱',
  email: 'taewook@naver.com',
  ageRange: '20대',
  gender: 'female',
  religion: '무교',
} as const;

export default USER_INFO;
