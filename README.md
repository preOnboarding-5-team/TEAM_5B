# 휴먼스케이프 프론트엔드 팀 과제 - Team 5B

사용 기술: Create React App, TypeScript, Sass(SCSS), React Router, React Query, React Redux, Redux Toolkit, Redux Logger, Axios, lodash, classnames, ESLint, Stylelint, Prettier

팀 구성원: 문재석, 이선아, 장재혁, 정성두

## 1. 구현된 과제 확인 방법

### 1) Netlify로 배포된 페이지

🔗 [링크](https://coruscating-jalebi-c67d21.netlify.app/)

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
├─ netlify.toml
├─ package-lock.json
├─ package.json
├─ 📁public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ 📁src
│  ├─ 📁assets
│  │  ├─ 📁images
│  │  │  └─ kids-logo.webp
│  │  ├─ index.ts
│  │  └─ 📁svgs
│  │     ├─ hamburger-button-icon.svg
│  │     ├─ left-arrow-icon.svg
│  │     ├─ magnifier-icon.svg
│  │     ├─ main-logo.svg
│  │     ├─ subscription-image-sm.svg
│  │     └─ subscription-image.svg
│  ├─ 📁components
│  │  ├─ 📁Footer
│  │  │  ├─ footer.module.scss
│  │  │  └─ index.tsx
│  │  ├─ 📁FuzzySearchInput
│  │  │  ├─ DesktopSearchInput.tsx
│  │  │  ├─ MobileSearchInput.tsx
│  │  │  ├─ fuzzy-search-input.module.scss
│  │  │  └─ index.tsx
│  │  ├─ 📁FuzzySearchList
│  │  │  ├─ Match.tsx
│  │  │  ├─ fuzzy-search-list.module.scss
│  │  │  └─ index.tsx
│  │  ├─ 📁Header
│  │  │  ├─ DesktopNav.tsx
│  │  │  ├─ MobileNav.tsx
│  │  │  ├─ header.module.scss
│  │  │  └─ index.tsx
│  │  ├─ 📁SearchInput
│  │  │  ├─ DesktopSearchInput.tsx
│  │  │  ├─ MobileSearchInput.tsx
│  │  │  ├─ index.tsx
│  │  │  └─ search-input.module.scss
│  │  └─ 📁SearchList
│  │     ├─ Match.tsx
│  │     ├─ index.tsx
│  │     └─ search-list.module.scss
│  ├─ 📁hooks
│  │  ├─ index.tsx
│  │  ├─ useAppDispatch.tsx
│  │  ├─ useAppSelector.tsx
│  │  ├─ useFuzzyStringMatching.ts
│  │  ├─ useQueryDebounce.tsx
│  │  └─ useShouldFetch.tsx
│  ├─ index.tsx
│  ├─ logo.svg
│  ├─ 📁pages
│  │  ├─ 📁FuzzyString
│  │  │  ├─ fuzzy-string.module.scss
│  │  │  └─ index.tsx
│  │  ├─ 📁Main
│  │  │  ├─ index.tsx
│  │  │  └─ main.module.scss
│  │  ├─ app.module.scss
│  │  └─ index.tsx
│  ├─ react-app-env.d.ts
│  ├─ reportWebVitals.ts
│  ├─ setupTests.ts
│  ├─ 📁store
│  │  ├─ fetchCount.ts
│  │  ├─ filteredList.ts
│  │  ├─ index.ts
│  │  ├─ localList.ts
│  │  ├─ queryList.ts
│  │  └─ searchString.ts
│  ├─ 📁styles
│  │  ├─ base
│  │  │  ├─ _fonts.scss
│  │  │  ├─ _more.scss
│  │  │  └─ _reset.scss
│  │  ├─ constants
│  │  │  └─ _colors.scss
│  │  ├─ index.scss
│  │  └─ mixins
│  │     └─ _responsive.scss
│  ├─ 📁types
│  │  └─ search.d.ts
│  └─ 📁utils
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

## 6. 어려웠던 점, 배운 점, 그리고 느낀 점

### 문재석

#### useQuery

useQuery와 유사한 다른 라이브러리들도 많이 써봤지만 기능적으로 다양하기도 하고 문서 자체가 친절하지 않다 보니 사용하는데에 꽤 애를 먹었다. 하지만 그런만큼 공식 문서를 오래 읽게 되고, 오래 읽고 있자니 그 많은 문서도 한번 쯤은 다 들여다보게 되었기에 다음에 이 라이브러리를 쓰게 된다면 상황에 맞춰 필요한 기능을 가져다가 무리 없이 사용할 수 있을 것 같다.

#### Redux Toolkit

공식 문서에선 Toolkit이 불편한 Redux를 개선하기 위해서 나왔고 굉장히 편리하다고는 하지만 Recoil이나 Jotai와 같은 라이브러리에 비하면 한 없이 복잡하다고 느꼈다. 물론 복잡한 만큼 상황에 따라 대처하기도 좋고 범용성이 넓다고도 생각할 수 있지만 규모가 크지 않고 복잡한 전역 상태 관리와 미들웨어 활용이 필요한 환경이 아니라면 큰 이점을 갖고 있다고 느끼진 못했다. 이 말인 즉슨 전역 상태 관리 라이브러리도 상황과 규모에 맞게 사용하여야 한다는 뜻이고, 그러기 위해선 Recoil이든 Jotai든 Redux든 뭐든 전부 다 능숙하게 다룰 수 있는 상태가 되는 것이 중요할 것 같다.

#### 어려웠던 점과 느낀점

협업을 많이 해보지 않았기 때문에 협업이라는 것 자체가 어려웠다. 사람들과 코드 컨벤션을 통일 하는 것도 쉽지 않았고, 초기 템플릿을 잡아 나가는 것부터 어려움을 느꼈다. 하지만 누구나 경험이 적으면 어렵다고 느끼는 것은 당연하다고 생각하기 때문에 이번 기회에 많은 것을 배워가면 되겠다고 생각했다.  
추가로, 내가 혼자서 코드를 짜는 것도 굉장히 어렵지만 다른 사람이 짠 코드를 이해하고 리팩토링하는 것 또한 쉬운 일이 아니라는 것을 느꼈다. 그 사람이 의도한 로직과 흐름을 이해하고 코드를 이해해야만 리팩토링을 할 수 있고 의견도 제시할 수 있기 때문이다. 밤을 새면서 공식 문서를 들여다 보고 코드를 들여다 보며 수정을 거듭했지만 더 잘할 수 있었을텐데라는 아쉬움이 남는 것은 어쩔 수 없다. 협업을 겪으면서 경험치를 계속 쌓는 것이 답이라고 생각이 드는가 하면, 한편으로는 내 자신이 엄청나게 성장하는 것이 협업에 도움이 되는 것일 수도 있겠다는 생각도 든다.

### 이선아

#### data fetching

API 호출 최적화를 위해 두 가지 방법 사용했습니다.

1. React Query
   과제에서 주어진 데이터는 정적으로 변하지 않는 특성을 갖고, 또한 같은 검색어를 입력했을 때 refetching이 발생하는 것을 막기 위해서 staleTime과 cacheTime 둘 다 Infinity를 줌으로써 데이터를 항상 fresh하게 유지하고, 언제든 이전에 검색한 결과를 재입력 하는 경우 refetching 이 일어나지 않도록 구현했습니다. axios 리턴값 타입 지정하는 부분에서 에러가 계속해서 발생하여 타입스크립트에 관해 공부가 더 필요하다고 느꼈습니다.

2. debounce
   사용자가 검색어를 입력할 때마다 api 호출을 하면 서버에 부담이 되기 때문에 이를 줄이기 위해서 debounce를 사용했습니다. 사용자의 검색어가 변할 때마다 debounce hook 내부의 useEffect가 호출되고, 이때 지정한 delay가 지나야만 debounceValue가 바뀌도록 구현했습니다.

#### 상태관리

이전에 상태관리를 recoil과 redux를 사용해 보았는데 이번에는 redux-toolkit을 사용하게 되었습니다.
recoil보다는 복잡하지만 redux보다는 훨씬 간편하게 작성할 수 있었습니다.
redux의 경우 action, actionTypes, reducer, selector 등 다양한 파일이 생기는 반면 redux-toolkit은 createSlice를 이용하여
한 파일에 간단하게 요약해서 적을 수 있어 간편했습니다. 데이터의 변화와 action의 발생 여부를 쉽게 파악하기 위해서 redux-logger라는 미들웨어를 사용하였습니다.
toolkit을 처음 사용해 보았고, 한 파일에 action과 reducer가 들어가다 보니 한눈에 파악이 어렵다고 느껴지기도 했습니다.

#### CORS와 Proxy

사실 이전에 cors를 해결할 때는 백엔드 담당 분께 서버에서 Access-Control-Allow-Origin를 설정해 달라고 요청하는 방법으로 해결해 왔었습니다.
하지만 이번 과제는 공공 api로 프론트 쪽에서 해결을 해야 했었고, 이를 위해 heroku에 서버를 배포하기, http-proxy-middleware를 이용하기 등 다양한 방법을 시도해 보았지만 하루가 지나도 해결되지 않아 꽤 애를 먹었습니다. 그러던 중 Netlify를 통해 netlify.toml 파일 설정으로 해결한 방법을 공유해 주셔서 이 방법으로 해결하게 되었습니다.

#### 느낀점

기업 과제 중 첫 번째 팀 과제를 하면서 팀원 분들과 서로 모르는 점을 물어보고 찾아가는 과정에서 굉장히 뿌듯함을 느꼈습니다.
팀원 분들과 소통이 잘 되어서 서로 질문하고 맞춰가는데 어려움이 없었습니다. 자신이 맡은 부분의 코드를 작성하고, pr을 올려 코드 리뷰를 통해 리팩토링을 거치며 좀 더 효율적으로 코드를 짜는 방식도 배우게 되었습니다.

### 장재혁

#### Fuzzy String Matching

Fuzzy String Matching의 개념 자체를 처음 들어보는 것이라 이를 이해하는 것에 시간이 오래걸렸습니다.

한국어의 경우 초성, 중성, 종성이 합쳐져 하나의 온전한 문자를 완성하는 특징이 있어 이와 다른 언어에서 사용되는 방식을 그대로 적용할 수 없어 관련 자료를 찾아 다음 링크를 참고했습니다.

[https://taegon.kim/archives/9919](https://taegon.kim/archives/9919)

자바스크립트에서 온전한 한글 문자의 코드는 다음과 같이 정해집니다.

> _( 자음번호 _ 588 + 모음번호 _ 28 + 종성번호 ) + 44032_

여기에 종성에만 사용가능한 ‘ㄳ’ 같은 경우를 고려하고 정규식에 사용되는 특수문자 처리를 위해 Lodash의 escapeRegExp() Method를 사용해 정규식을 생성하여 fuzzy string을 구현하였습니다.  
그리고 split() 메소드와 mark 태그를 이용해 사용자가 입력한 질환명과 일치하는 부분을 볼드처리하였고, 입력된 검색어에 trim()과 replaceAll() 을 사용해 공백을 제거하여 띄어쓰기가 일치하지 않을 경우에도 검색 할 수 있게 구현하였습니다.

제공된 API 에서는 완성된 글자만을 이용해 검색하기 때문에 오랜 고민 끝에 이를 적용하기 어렵다고 판단해 json파일을 이용해 적용하고 구별해두었습니다.

#### Redux-Toolkit

상태 관리 라이브러리로 redux-toolkit을 사용하였습니다.

createSlice를 사용해 action과 reducer 비교적 간단하게 생성할 수 있었습니다.
state에 어떤 것을 저장할 것인지 고민을 많이 했고 우선은 검색어와 필터링 된 검색 결과를 searchString과 filteredList에 저장하여 컴포넌트에서 공유할 수 있게 하였습니다.
Typescript를 사용하여 state와 action의 타입을 지정하였는데 이에 맞추어 사용하는 것이 까다로웠습니다.

#### Proxy와 Netlify 배포

과제가 어느정도 구현되고 netlify를 통해 배포를 시도하며 많은 시행착오를 겪었습니다.

로컬 작업 시에도 cors에러로 인한 proxy 설정에 우여곡절이 있었으며, package.json 파일에 다음을 추가하여 해결하였습니다.

```tsx
"proxy": "http://apis.data.go.kr/"
```

위 방법은 개발 모드에서만 적용되기 때문에 배포시에는 netlify.toml 파일을 생성하여 redirects를 설정해두었습니다.

그런데 api 호출 response가 You need to enable JavaScript to run this app.로 나오는 현상이 있어 오랜 고민을 하였고 팀원의 도움으로 public 폴더의 \_redirects가 원인임을 알게 되었습니다.

#### 느낀 점

팀원분들에 비해 실력과 체력이 많이 부족함을 느꼈고 따라갈 수 있도록 많은 노력이 필요하다는 것을 실감하였습니다. 감사합니다.

### 정성두

#### keyboardNavigation

이번 프로젝트에서 제가 맡은 기능은 검색 결과를 키보드로 포커스를 이동하는 부분이었습니다. 처음에 useState를 이용하여 키보드를 입력할 때마다 state의 값이 증가하거나 감소하도록 만든 뒤 그 값과 결과를 출력하는 li 태그의 idx를 비교하여 같으면 focus CSS를 추가하도록 구현하였습니다. 이 과정 중에는 어려운 부분은 없었으나 useState의 상태를 관리하여 여러 컴포넌트에 props를 통해서 전달하니 작은 프로젝트임에도 props가 복잡해지는 걸 느껴 키보드 입력에 따라 변화하는 state는 Redux를 통해 관리하도록 만들었습니다.

Redux-Tookit으로 변경하는 과정에서 Redux를 이용하는 데 익숙하지 않아서 어려움을 겪었습니다. 하지만 useState처럼 props를 통해 전달하는 방식이 아닌 필요한 파일에서 가져와서 쓰는 방식이라 만들고 나서 사용할 때는 부담 없이 사용할 수 있었습니다.

이렇게 구현했었지만 한번 포커스가 이동하게 될 때마다 전역 상태 호출이 되어 그에따라 렌더가 자주 일어나는 상황이 발생하여 useRef를 이용하여 state를 따로 사용하지 않는 방법으로 리팩토링 되었습니다.

#### cors와 proxy 설정, 배포

공공데이터포털의 Api를 사용하면서 cors 에러가 발생하여 처음에 데이터를 가져오는 데에도 많은 시간을 사용하였습니다. 이를 해결하기 위해서는 node.js를 통해서 직접 서버를 구현하는 방법과 proxy서버를 이용하는 방법이 있었습니다. 서버를 직접 구현하는 방법보다는 proxy를 이용한 방법을 사용해 보았고 처음에 http-proxy-middleware를 이용하여 설정 파일을 만들어준 뒤에 데이터를 받아오는 데 성공하였습니다.

이 방법은 netlify에서 배포할 때 proxy를 위해 따로 설정 파일을 만들어서 사용하는 방식과 매우 유사했고 배포를 다른 프로젝트 파일을 이용하여 보았을 때는 성공적으로 되었습니다.

하지만 과제 프로젝트의 리퍼지토리를 배포하려고 했을 때 서버 요청은 200으로 성공으로 뜨지만, response의 내용이 public의 index.html 파일의 내용이 나오는 것까지 확인하였습니다. 이에 대한 문제의 해결책으로는 같은 public 파일에 \_redirects라는 파일 안의 설정으로 인한 문제로 삭제하여 해결되었습니다.

#### 느낀 점

새로운 내용들을 이용하는 데까지 너무 많은 시간이 드는 것 같고, 사용한 거지 이해한 부분은 아직 적기 때문에 팀원들을 따라가기에도 벅찼던 것 같습니다. 더 많은 코드를 보고 배워야 할 것 같습니다.
