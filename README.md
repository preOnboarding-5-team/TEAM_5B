# 휴먼스케이프 프론트엔드 팀 과제 - Team 5B

사용 기술: Create React App, TypeScript, Sass(SCSS), React Router, React Query, React Redux, Redux Toolkit, Redux Logger, Axios, lodash, ESLint, Stylelint, Prettier

팀 구성원: 문재석, 이선아, 장재혁, 정성두

## 1. 구현된 과제 확인 방법

### 1) Netlify로 배포된 페이지

🔗 [링크]()

전반적인 기능을 모두 사용해볼 수 있도록 Netlify로 배포하였습니다.

### 2) 레포지토리 클론

```
git clone https://github.com/preOnboarding-5-team/TEAM_5B.git
cd TEAM_5B
npm install
npm start
```

코드를 더 면밀하게 살펴보기 위해 로컬 환경에서 실행해볼 수 있습니다.

## 2. 폴더 구조

```
📁 TEAM_5B
├─ .env.copy
├─ .eslintrc.json
├─ .gitignore
├─ .prettierrc.yml
├─ .stylelintrc.json
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ src
│  ├─ assets
│  │  ├─ images
│  │  │  └─ kids-logo.webp
│  │  ├─ index.ts
│  │  └─ svgs
│  │     ├─ hamburger-button-icon.svg
│  │     ├─ left-arrow-icon.svg
│  │     ├─ magnifier-icon.svg
│  │     ├─ main-logo.svg
│  │     ├─ subscription-image-sm.svg
│  │     └─ subscription-image.svg
│  ├─ components
│  │  ├─ Footer
│  │  │  ├─ footer.module.scss
│  │  │  └─ index.tsx
│  │  ├─ FuzzySearchInput
│  │  │  ├─ DesktopSearchInput.tsx
│  │  │  ├─ MobileSearchInput.tsx
│  │  │  ├─ fuzzy-search-input.module.scss
│  │  │  └─ index.tsx
│  │  ├─ FuzzySearchList
│  │  │  ├─ Match.tsx
│  │  │  ├─ fuzzy-search-list.module.scss
│  │  │  └─ index.tsx
│  │  ├─ Header
│  │  │  ├─ DesktopNav.tsx
│  │  │  ├─ MobileNav.tsx
│  │  │  ├─ header.module.scss
│  │  │  └─ index.tsx
│  │  ├─ SearchInput
│  │  │  ├─ DesktopSearchInput.tsx
│  │  │  ├─ MobileSearchInput.tsx
│  │  │  ├─ index.tsx
│  │  │  └─ search-input.module.scss
│  │  └─ SearchList
│  │     ├─ Match.tsx
│  │     ├─ index.tsx
│  │     └─ search-list.module.scss
│  ├─ hooks
│  │  ├─ index.tsx
│  │  ├─ useAppDispatch.tsx
│  │  ├─ useAppSelector.tsx
│  │  ├─ useFuzzyStringMatching.ts
│  │  ├─ useQueryDebounce.tsx
│  │  └─ useShouldFetch.tsx
│  ├─ index.tsx
│  ├─ logo.svg
│  ├─ pages
│  │  ├─ FuzzyString
│  │  │  ├─ fuzzy-string.module.scss
│  │  │  └─ index.tsx
│  │  ├─ Main
│  │  │  ├─ index.tsx
│  │  │  └─ main.module.scss
│  │  ├─ app.module.scss
│  │  └─ index.tsx
│  ├─ react-app-env.d.ts
│  ├─ reportWebVitals.ts
│  ├─ setupTests.ts
│  ├─ store
│  │  ├─ fetchCount.ts
│  │  ├─ filteredList.ts
│  │  ├─ index.ts
│  │  ├─ localList.ts
│  │  ├─ queryList.ts
│  │  └─ searchString.ts
│  ├─ styles
│  │  ├─ base
│  │  │  ├─ _fonts.scss
│  │  │  ├─ _more.scss
│  │  │  └─ _reset.scss
│  │  ├─ constants
│  │  │  └─ _colors.scss
│  │  ├─ index.scss
│  │  └─ mixins
│  │     └─ _responsive.scss
│  ├─ types
│  │  └─ search.d.ts
│  └─ utils
│     ├─ data
│     │  └─ data.js
│     ├─ fetcher.ts
│     ├─ fuzzystringmatching
│     │  └─ createFuzzyMatcher.ts
│     └─ index.ts
└─ tsconfig.json
```

- 📁assets

  - 이미지나 아이콘과 같은 파일들을 모아둔 폴더입니다.
  - 이 프로젝트에선 `svgs`와 `images`에 SVG와 non-SVG를 구분해 놓았습니다.

- 📁components

  - 화면을 구성하는데에 있어 필요한 컴포넌트들을 모아둔 폴더입니다.

- 📁hooks

  - Custom hooks를 모아둔 폴더입니다.

- 📁pages

  - 라우터를 기준으로 각각의 페이지를 모아둔 폴더입니다.

- 📁store

  - Redux와 관련된 파일들을 모아둔 폴더입니다.
  - `createSlice` 별로 하나의 파일을 생성하였습니다.

- 📁styles

  - 전역 스타일링, 변수, mixins 등 전역에서 사용되는 스타일링 관련 파일들을 모아둔 폴더입니다.

- 📁types

  - 전역적으로 사용되는 타입을 모아둔 폴더입니다.

- 📁utils

  - Axios, fuzzy string matching, mockdata 등 다양한 활용 요소들을 모아둔 폴더입니다.

## 3. 구현 방향성

- '클론 코딩'이라는 주제에 입각하여 (제시된 예시)[https://clinicaltrialskorea.com/]와 최대한 똑같게 구현하였습니다.
- Airbnb 설정을 기반으로 한 기본적인 ESLint 설정을 하고, 추후 논의를 통해 제약을 점점 강하게 걸어가며 코드 오류를 최소화 했습니다.
- 전역 상태를 최대한 재사용하여 불필요한 상태 선언을 최소화 했습니다.
- Custom hook과 전역 함수 선언 등을 통해 코드 재사용을 시도하였습니다.
- 필요한 라이브러리가 있다면 최대한 활용하되 작동 방식을 이해 하지 못한 상태로 무작정 사용하는 것은 지양하였습니다.
- HTML을 최대한 semantic하게 작성하였습니다.
- 불필요한 렌더링 최소화, 불필요한 코드 삭제 등 코드 개선을 위한 지속적인 리팩토링을 진행하였습니다.
- API 호출을 최소화 하기 위해 다양한 시도를 하였습니다.
- 1040px 기준 반응형으로 구현하였습니다.

## 4. 구현 사항

기본 구현 및 추가 구현 모두 완료하였으나 Fuzzy String Matching 추가 구현의 경우 API 통신 기반이 아닌 로컬 JSON 파일 기반으로 구현하였습니다.

### 0) ESlint와 Prettier

`eslint-config-react-app`를 기반으로 하여 `eslint-config-airbnb`및 관련 peer dependency를 적용하여 기본적인 코드 스타일을 설정하였습니다. 이후 `eslint-plugin-react`, `eslint-plugin-prettier`를 적용해줌으로써 강한 강도의 제약을 걸었고, 각각의 설정들이 어떤 역할을 하는지 공부하고 그에 맞춰 확장 순서를 정해 `.eslintrc`의 `extends`에 추가하였습니다.

### 1) 주요 패키지

대부분의 코드들은 `index.ts`에서 일괄적으로 import 후 export하여 사용하였습니다.

### React Redux & Redux Toolkit

전역 상태 관리 라이브러리입니다.

#### store

전역으로 관리할 Redux 상태는 모두 `store` 폴더에 넣어두었습니다. 모든 상태는 `createSlice()`로 생성되었습니다.

- fetchCount: API가 호출된 횟수를 저장하는 number입니다.
- filteredList: 사용자의 검색어에 따른 추천 검색어 array입니다.
- localList: API 호출을 통해 받은 정보들을 로컬에 저장하기 위한 array입니다.
- queryList: 중복 및 유사 호출을 방지하기 위해 API 호출 시 사용된 검색어를 저장하는 array입니다.
- searchString: 사용자가 입력하는 내용이 실시간으로 저장되는 string입니다.

#### useAppDispatch & useAppSelector

리덕스와 툴킷을 타입스크립트와 사용할 때, 매번 타입 선언을 하는 번거로움을 덜기 위한 커스텀 훅입니다.

### Redux Logger

리덕스에서 상태와 액션이 어떻게 처리되는지 확인하기 위한 미들웨어입니다. 중복적으로 처리되거나 잘못 처리되는 액션이 없도록 항상 체크하며 구현을 진행하였습니다.

### React Query

API 통신을 위한 라이브러리입니다.

#### useQueryDebounce

API에 쿼리로 통신을 요청할 때, 자음과 모음이 하나 입력될 때마다 통신이 이루어지면 큰 성능 저하와 비용이 들기 때문에 디바운싱(Debouncing)을 활용하기 위한 커스텀 훅을 만들었습니다. 기본 200ms를 기준으로 따로 설정을 해줄 수 있으며, 이 타이머 내에 입력하는 내용은 통신이 이루어지지 않고 타이머가 완료된 시점에 통신이 진행됩니다.

#### useShouldFetch

통신 횟수를 줄이기 위해 만든 API 통신 필요 여부에 대해 판별하는 커스텀 훅입니다. 검색하고자 하는 내용 `searchValue`와 이미 검색한 적이 있는 단어의 배열인 `queryList`를 기반으로 하여 `searchValue`에 대한 검색 결과가 로컬에 저장된 것으로 충분한지 판단하고, 충분하다면 false를, 부족하다면 true를 반환합니다.

### \_lodash

객체로 이루어진 배열의 중복제거을 제거하고 퍼지 문자열 탐색 시 사용할 정규식을 생성할 때 사용하였습니다.

### React Router

간단하게 `<Main />` 페이지와 `<FuzzyString />` 페이지를 설정하였습니다. 잘못된 주소가 입력될 경우를 생각하여 `'*'`에 대한 페이지도 설정하였습니다.

### Axios

React Query에 사용할 페칭 함수인 `fetcher`를 생성하는데에 사용하였습니다.

### 2) 페이지

#### 메인 페이지

API 통신을 통한 추천 검색어 기능을 담고 있는 페이지입니다.

- 첫 진입 시 (제시된 예시)[https://clinicaltrialskorea.com/]와 똑같은 레이아웃을 가진 화면이 나옵니다.
- 상단에는 API 통신 검색 페이지와 퍼지 문자열 검색 페이지를 오갈 수 있는 내비게이션이 있습니다.
- 1040px 이상(데스크탑) 기준, 검색창에 검색어를 입력하면 API 통신이 이루어지는 동안에는 '검색 중..'이 나오고 통신이 끝나면 추천 검색어가 보여집니다. 만약 검색어에 대한 추천 검색어가 없다면 '검색어 없음'이 출력됩니다.
- 1040px 미만(모바일) 기준, 검색창을 클릭하면 검색창이 전체 화면으로 확장됩니다.
- 입력한 검색어에 대해 추천 검색어에 `<mark>`를 통한 볼드처리가 되어 있습니다.
- 모든 검색은 디바운싱을 통해 이루어집니다.
- 만약 통신이 필요하지 않은 상황이라고 판단되면 로컬에 저장된 정보로 추천 검색어를 대신 출력합니다.

#### 퍼지 문자열 검색 페이지

로컬 json 파일을 활용한 퍼지 문자열 검색 기능을 담고 있는 페이지입니다.

- 진입 시 메인 페이지와 똑같은 레이아웃을 가진 화면이 나옵니다.
- 검색창에 검색어를 입력하면 자음과 모음이 하나씩 입력될 때 마다 추천 검색어 창이 갱신됩니다.
- 자음만 입력하여도 검색이 가능하며, 띄어쓰기 및 비연속 단어도 검색이 가능합니다.
- 로컬의 json 데이터를 활용하기 때문에 통신 상태를 나타내는 '검색 중..'은 출력되지 않습니다.

## 5. 구현 상세 설명

과제의 핵심 컴포넌트라고 할 수 있는 `(Fuzzy)SearchInput`은 Desktop 버전과 Mobile 버전이 존재합니다. 이는 (제시된 예시)[https://clinicaltrialskorea.com/]에 따른 구현을 의도했기 때문이며, 두 가지 버전이 존재하는 만큼 상호 간에 상태가 공유되고 작동 시 간섭이 없도록 하는 것이 중요했습니다.

### SearchInput

사용자가 검색어를 입력하여 API 통신을 통해 추천 검색어를 확인할 수 있는 검색창 컴포넌트입니다.

#### DesktopSearchInput & MobileSearchInput

- 검색창에 입력되는 값은 disaptch를 통하여 전역 상태인 `searchString`에 입력됩니다.
- `onKeyDown` 함수는 키보드 화살표 아래 버튼을 누르면 추천 검색어 창으로 포커스가 넘어가 키보드 조작이 가능하게 합니다.
- 각각의 컴포넌트는 `searchString`의 값을 공유하기 때문에 화면크기가 변하여 컴포넌트가 변화하더라도 값은 유지됩니다.

#### index.tsx

- `searchString`에 입력된 값은 `useQueryDebounce`로 인해 디바운싱이 일어나고 이후 `useQuery`와 `useShouldFetch`를 기반으로 하여 API 통신이 이루어집니다.
- `useQuery`의 메서드인 `onSuccess`에는 데이터가 성공적으로 불러와졌다면 전역 상태인 `localList`에 저장하고, 검색했던 검색어가 `queryList`에 저장하도록 하는 함수가 할당되어 있습니다.
- `localList`에 저장된 데이터에 `filter` 메서드를 사용하여 검색어를 포함한 정보들만 가져와 전역 상태인 `filteredList`에 할당합니다.
- `localList`에 저장된 정보들은 `useShouldFetch` 커스텀 훅에 영향을 주며, 이에 따라 API 요청 여부가 결정됩니다.

### SearchList

검색어에 따른 추천 검색어가 출력되는 리스트입니다.

#### index.tsx

- `whileSearching` 함수는 `useQuery`의 `isFetching` 값을 활용하여 통신 중인 경우 '검색 중..'을, 값이 없는 경우 '검색어 없음'을 출력해주는 함수입니다.
- 상술한 검색창에서 키보드 화살표 아래 버튼을 눌러 포커스가 첫번쨰 요소로 넘어오면 이후 아래와 위 버튼으로 이동을 할 수 있습니다. 이는 `Element.focus()`기능을 활용한 것이며, 모든 검색어들이 포커스 가능한 대상이 되도록 `tabIndex`를 할당해주었습니다.
- 검색어를 클릭하거나 검색어에 포커스된 상태로 엔터키를 누르면 dataset의 name 값을 가져와 `searchString` 상태에 저장합니다. 이 때, dataset의 name 값은 질병명입니다.

### Fuzzy String Matching (퍼지 문자열 검색)

퍼지 문자열 검색을 위한 페이지를 따로 나눈 만큼 컴포넌트들도 따로 존재합니다. 그러나 상술한 컴포넌트들과 틀 자체는 유사하며, 가장 큰 차이로는 `useFuzzyStringMatching` 커스텀 훅을 사용하여 로컬 json 파일로부터 추천 검색어를 받아온다는 차이가 있습니다.

#### useFuzzyStringMatching

한국어의 경우 초성, 중성, 종성이 합쳐져 하나의 온전한 문자를 완성하기 때문에 다른 언어에서 사용되는 방식을 그대로 적용할 수 없습니다.

- API 통신의 경우 자음만 요청을 보낼 시 인식 자체를 하지 못하기 때문에 모든 정보를 통신으로 불러와 저장한 후 그것을 활용하지 않는 이상 구현이 불가능하다고 생각하여 로컬 json 파일을 사용하였습니다.
- 자음의 갯수, 모음의 갯수, 종성의 갯수 등을 종합하여 그것을 기준으로 각 자음에 대한 글자 매칭을 구현하였습니다.

### API 통신 횟수를 줄이기 위한 노력

글자 한번 한번을 입력할 때, 혹은 큰 범위 검색 후 작은 범위를 검색하더라도 통신이 이루어지는 것은 굉장한 비효율이라고 생각했습니다. 따라서 API 통신 횟수를 줄이기 위해 전역 상태 `localList`를 활용하였습니다. 만약 사용자가 '가'라고 검색을 했고, 요청에 따른 결과가 총 40개가 왔다면 이후 사용자가 '가나'라고 검색을 하면 결과 40개 안에는 '가나'에 해당하는 통신 결과값이 무조건 들어있습니다. 즉, 사용자가 만약 '가'라고 검색한 적이 있으면 '가'로 시작하는 모든 API 통신은 불필요하다고 볼 수 있습니다. 이 논리에 따라 사용자가 검색하는 검색어들을 전역 상태에 저장해 놓고, 만약 사용자가 그 검색어를 다시 검색하거나 그 검색어를 기준으로 하여 더 좁은 범위의 검색어를 입력하였을 때는 API통신을 하지 않고 localList로부터 filter를 하여 출력하는 방식을 택하였습니다.  
정리하자면 사용자가 '가나다라'를 검색하게 되면 이를 '가', '나', '다', '라', '가나', '가나다', '가나다라'로 쪼개어 이 중 한 단어라도 검색한 적이 있으면 API 통신을 하지 않고 로컬에 있는 정보를 호출하는 방식을 적용하였습니다.

## 5. 느낀 점
