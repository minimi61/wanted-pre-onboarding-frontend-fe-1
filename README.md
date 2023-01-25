# 🥝 wanted-pre-onboarding-frontend
- 원티드 프리온보딩  프론트엔드 선발과제

##### [폴더구조](#폴더구조)
##### [기술스택](#⚙️기술스택)


## 🍎설치
- npm install --save typescript @types/node @types/react @types/react-dom @types/jest
- npm i --save-dev @types/styled-components
- npm install react-router-dom @types/react-router-dom
- npm install axios

## 👷TodoList 기능소개
### 회원가입 및 로그인 구현
![wanted-test-1](https://user-images.githubusercontent.com/85866328/207896453-e7363a9f-b540-409e-b215-9459c8588c54.gif)
- 회원가입 창 구현(emali은 @포함, password는 8자리 이상되는 조건)
- 유효성 검사를 통과하지 않으면 버튼 비활성화
- 조건과 맞지 않으면 아래에 에러 출력

### CRUD 구현
![wanted-test-2](https://user-images.githubusercontent.com/85866328/207896494-c44b11cd-6911-4ec3-bd2d-3fd8dbfb98df.gif)
- contextAPI버전 CRUD 구현
- React-Query버전 CRUD 구현(리팩토링)

### Redirect 구현
![wanted-test-3](https://user-images.githubusercontent.com/85866328/207896537-177caee3-d03f-4a5b-84ac-c179dbb41990.gif)
- 과제 요구사항에 맞게 localStorage로 토큰을 저장
- 토큰이 있다면 로그인넘어가고 바로 Todo 메인 페이지로 이동


## 📁폴더구조
<<<<<<< HEAD
```
📦src
 ┣ 📂api            //api와 통신하는 계층 폴더
 ┃ ┣ 📜apiLogin.ts
 ┃ ┣ 📜apis.ts
 ┃ ┣ 📜apiSignUp.ts
 ┃ ┗ 📜TodoContext.tsx
 ┣ 📂contextAPI     //contextAPI 폴더
 ┃ ┣ 📜contextType.ts
 ┃ ┗ 📜TodoContext.tsx
 ┣ 📂components     //페이지를 구성하는 폴더
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜Login.tsx
 ┃ ┃ ┗ 📜SingUp.tsx
 ┃ ┣ 📂common
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┗ 📂main
 ┃ ┃ ┣ 📜TodoItem.tsx
 ┃ ┃ ┗ 📜TodoMain.tsx
 ┣ 📂Routes         //로그인유무
 ┃ ┗ 📜PrivateRoute.tsx
 ┣ 📂styles         //전역 스타일 파일
 ┃ ┗ 📜Global.tsx
 ┣ 📂type           //타입선언 폴더
 ┃ ┗ 📜types.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```
=======
![image](https://user-images.githubusercontent.com/85866328/214479814-60fd6400-e0ac-4b10-aa4d-a6d6f2d3ccee.png)

>>>>>>> 97316deb8310f630ed478d7541e51cf8a30c6cad

## ⚙️기술스택

#### Typescript
- 정적타입을 지원하므로 코드 안정성을 위하여 사용

#### React, Styled-component
- 컴포넌트의 재사용성과 유지보수성을 위하여 사용

#### React-Query
-  캐싱처리와 보일러플레이트 단점을 커버하기에 사용

#### contextAPI
- 과제 초기에 props drilling 문제를 해결하기 위해 사용하였으나 React-Query로 리팩토링


## 리팩토링

- contextAPI는 children을 다 리렌더링 시켜주는 문제가 있는데 redux나 redux-toolkit말고 다른 좋은 툴이 있을까?
-> [React-Query사용](https://github.com/minimi61/wanted-pre-onboarding-frontend-fe-1/commit/63a1d71050504aa180278de6c6155407eb044b3a#diff-780e32d9169d98349bce8353cfce4ed953b7db730df4b0a7d096208bb2a1bb6d), 보일러플레이트가 적고, 캐싱을 통해 네트워크 요청량도 줄일 수 있었다

- state 모든 입력값들을 받고 수정해야 할까? 
-> [파생변수의 사용](https://github.com/minimi61/wanted-pre-onboarding-frontend-fe-1/commit/f6c3cc13ee4574f62f42a5382608f4e63e6f1df4)

- pages폴더와 components 폴더 구분을 하나로 편하게 할 수는 없을까? 
-> [폴더구조 pages(홈,로그인,회원가입) -> components 내부로 페이지를 세분화](https://github.com/minimi61/wanted-pre-onboarding-frontend-fe-1/commit/503dee742c0daae2a6eddfd88c224a6490d4d458#diff-06a1a354e4932fd5786bae87b40540b3b8d69944e6977b35debd848c010b1282)

- 코드가 많은 컴포넌트를 더 쪼갤 수 있을까? 
-> [api호출폴더에-수집](https://github.com/minimi61/wanted-pre-onboarding-frontend-fe-1/commit/503dee742c0daae2a6eddfd88c224a6490d4d458#diff-09ad8059b6160219ceef8c0ca1f5c5a4b9ec592c5e611eef0267475b04a79cb1)

- contextAPI에 쓰이는 것들만 따로 분리하면 공간적 지역성이 좋아질 것 같은데 -> contextAPI 폴더 생성하여 파일들을 합침

## 배포사이트
https://wanted-pre-on.netlify.app/
