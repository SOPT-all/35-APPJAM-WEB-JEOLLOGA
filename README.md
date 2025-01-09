# 🪷절로가🪷 (Jeolloga)
	“내 마음에 딱 맞는 템플스테이를 찾아주는 힐링 추천 서비스”
`절`(사찰)로 떠나고 싶다는 마음이 `절로` 들게 만드는 서비스, **'절로가'**입니다.

<br />

## 🪷 프로젝트 소개
템플스테이를 (처음) 가보려 하면…
- 위치가 어디인지,
- 어떤 프로그램들이 있는지,
- 후기는 어떠한지,
- 예약은 어떻게 해야 하는지…

등등 필요한 정보가 한데 모여 있지 않아, 여기저기 플랫폼을 옮겨다니며 수많은 과정을 거쳐야만 했습니다.

<br />

절로가는 **나만의 템플스테이를 쉽고 빠르게 찾을** 수 있도록 돕는 추천 서비스로,

```
•	**원하는 조건에 맞게 사찰·프로그램을 탐색**하고,
•	**한눈에 후기**와 참여 정보를 확인하며,
•	지도 기반으로 위치 정보를 얻어
```

한 번의 접속만으로도 나에게 딱 맞는 템플스테이를 찾을 수 있습니다!

<br />

## 👶 OUR TEAM
   <div align="center">
     
| <img src="https://avatars.githubusercontent.com/u/52481403?v=4" width="200" alt="프로필사진"> | <img src="https://avatars.githubusercontent.com/u/127061738?v=4" width="200" alt="프로필사진">  | <img src="https://avatars.githubusercontent.com/u/102952855?v=4" width="200" alt="프로필사진"> |  <img src="https://avatars.githubusercontent.com/u/113450966?v=4" width="200" alt="프로필사진">  |
| :-------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------:
|                            <div align = "center"><b>성희</b></div>                            |                            <div align = "center"><b>태욱</b></div>                            |                            <div align = "center"><b>영경</b></div>                            |                             <div align = "center"><b>가현</b></div>
|                            [@seong-hui](https://github.com/seong-hui)                            |                [@Taew00k](https://github.com/Taew00k)                                 |                       [@bykbyk0401](https://github.com/bykbyk0401)                        |                        [@maylh](https://github.com/maylh)   | 

</div>
<br />

## 🪷 기술 스택 및 선정 이유 (Tech Stack)

| 역할                 | 기술                                                                                                                                                                                                                                                                              | 선정 이유                                                                                                                                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Library**          | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                                                                                | 컴포넌트 기반 아키텍처로 재사용성과 유지보수성이 뛰어남.<br> 풍부한 생태계로 다양한 라이브러리와 쉽게 통합 가능.<br> 동적 UI 개발에 적합하고, 가상 DOM을 활용해 빠른 렌더링 성능 제공.                                                                                                                                                                                      |
| **Programming Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)                                                                                                                                                             | 안정적인 코드 작성과 협업 시 타입 보장이 가능, 유지보수성이 뛰어남                                                                                                                                                                                     |
| **Styling**          | ![Vanilla Extract CSS](https://img.shields.io/badge/Vanilla%20Extract%20CSS-FFDB4F?style=for-the-badge&logo=Vanilla%20Extract&logoColor=black)                                                                                                                                    | CSS-in-TypeScript 방식으로 타입 안전성을 제공하며, 런타임 오버헤드 없이 빌드 시 정적 CSS로 추출.<br> 동적 스타일링과 모듈화된 스타일 관리가 용이하고, 유지보수성과 협업 효율성을 높임.                                                                                                                                             |
| **Data Fetching**    | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)  ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=React%20Query&logoColor=white)                                                  | Axios: HTTP 요청을 처리하며 인터셉터 설정으로 요청/응답 관리가 용이<br>TanStack Query: 비동기 데이터 상태 관리에 특화, 캐싱 · 중복 요청 제거 · 자동 리페치 기능으로 효율적인 데이터 관리                                                                                                     |
| **UI Development**   | ![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=Storybook&logoColor=white)                                                                                                                                                                    | UI 컴포넌트 개발 및 테스트 편의성 제공, 디자이너와의 원활한 소통 가능                                                                                                                                                                                    |
| **Formatting**       | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) | 코드 일관성을 유지하고, 가독성을 높이며, 스타일 컨벤션을 통합적으로 관리                                                                                                                                                                                 |
| **Package Manager**  | ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)                                                                                                                                                                                   | 빠르고 효율적인 패키지 관리 및 의존성 설치                                                                                                                                                                                                               |
| **Version Control**  | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)                                                                 | 코드 버전 관리와 협업에 필수적인 도구                                                                                                                                                                                                                  |
| **Deployment**       | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)                                                                                                                                                                             | 초기 배포에 적합한 플랫폼으로, 간편한 설정과 빠른 배포 가능<br>추후 AWS로 확장 가능                                                                                                                                                                     |

<br />

## 🪷 협업 컨벤션 (Conventions)
https://erratic-strand-e9d.notion.site/bf259392cdc24de2a35aa2ce08df82b1?pvs=4
