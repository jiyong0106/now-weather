# now-weather


---

## 🚀 실행 방법

1. **레포지토리 클론**

   ```bash
   git clone https://github.com/jiyong0106/realteeth-teset.git
   ```

2. **패키지 설치**

   ```bash
   npm install
   ```

3. **env생성**
- 프로젝트 루트에 .env 생성

   ```bash
   VITE_API_URL = 공공 데이터 포탈 Api End Point
   VITE_API_KEY = 공공 데이터 포탈 개인 API인증키(Decoding key)
   VITE_KAKAO_REST_API_KEY = 카카오 디벨로퍼스 REST API key
   ```

4. **개발 서버 실행**

   ```bash
   npm run dev
   ```

   - 기본적으로 [http://localhost:5173](http://localhost:5173)에서 확인할 수 있습니다.

---

## 🛠️ 기술 스택

### 언어 & 프레임워크

- **React**
- **vite** : 빠른 개발서버와 빌드환경 제공, 공식문서 추천
- **TypeScript** : 런타임 에러를 사전에 방지

### 스타일링

- **tailwindcss** : 모바일 퍼스트, 반응형 데스크탑 min-width(1024)
- **clsx** : 조건부 스타일링

### 주요 라이브러리

- **react-query** : 서버 상태 관리 및 데이터 패칭
- **react-router-dom** : React에서의 라우팅 구현
- **date-fns** : 날짜 처리
- **axios** : HTTP 통신
- **zustand** : 전역 상태 관리
- **lodash** : debounce

---

## 📁 폴더 구조

폴더 구조는 FSD 아키텍처를 사용했으며, 각 기능별로 구분되어 최대한 직관적으로 프로젝트 구조를 파악할 수 있도록 설계했습니다.

- **App** : 전체적인 프레임과 설정을 담당
- **pages** : router 관련된 페이지 파일들
- **widgets** : 페이지를 구성하는 큰 ui들
- **features** : 사용자의 행동 + 로직
- **entities** : 비지니스 로직 중심
- **shared** : 공통적으로 사용되는 컴포넌트

```
realteeth-test/
  ├─ public/
  ├─ src/
  │  ├─ app/
  │  │  ├─ providers/   # 전역 프로바이더 (QueryClient)
  │  │  ├─ routes/      # 페이지 라우팅 설정
  │  │  ├─ styles/      # 전역 스타일 (Tailwind CSS)
  │  │  └─ App.tsx      # 앱 진입점
  │  ├─ entities/
  │  │  ├─ location/
  │  │  │  ├─ lib/      # 주소 포맷팅 유틸리티
  │  │  │  ├─ model/    # 주소 변환 API (카카오)
  │  │  │  └─ ui/       # 지역 카드 컴포넌트
  │  │  └─ weather/
  │  │     ├─ lib/      # 날씨 데이터 변환, 포맷팅
  │  │     ├─ model/    # 기상청 API, 격자 변환
  │  │     └─ ui/       # 날씨 카드
  │  ├─ features/
  │  │  ├─ edit-location/      # 즐겨찾기 수정
  │  │  ├─ search/             # 지역 검색
  │  │  └─ toggle-favorite/    # 즐겨찾기 토글
  │  ├─ pages/
  │  │  ├─ home/               # 홈 페이지
  │  │  ├─ location/           # 지역 상세 페이지
  │  │  └─ not-found-page/     # 404 페이지
  │  ├─ shared/
  │  │  ├─ api/                # Axios 설정, 공통 데이터
  │  │  ├─ assets/             # 이미지, 아이콘
  │  │  └─ ui/                 # 공통 UI 컴포넌트
  │  ├─ widgets/
  │  │  ├─ header/             # 헤더
  │  │  ├─ layout/             # 레이아웃
  │  │  ├─ location/           # 지역 보드
  │  │  ├─ location-detail/    # 지역 상세 위젯
  │  │  └─ sidebar/            # 사이드바 (현재 날씨)
  │  └─ main.tsx               # React 앱 마운트
  ├─ index.html
  ├─ package.json
  └─ ...
```

---

## 💡 주요 내용

### 1. Zustand

- 가벼운 상태관리 라이브러리, 별도의 설정 없이 적용 가능, Persist 미들웨어 사용
- 즐겨찾기 데이터는 새로고침 후에도 유지되어야 함
- LocalStorage 연동을 자동화하여 수동 저장/불러오기 로직 불필요
- 상태 변경 시 자동으로 LocalStorage에 동기화

### 2. Intersection Observer API를 활용한 대량 데이터 렌더링

- 전국 지역 데이터를 한 번에 렌더링하면 성능상 문제가 발생,
- `limit` state를 사용하여 초기 100개만 렌더링
- Intersection Observer로 스크롤 끝 감지 시 50개씩 추가 로딩

### 3. 위도/경도 처리 및 좌표 변환

#### 기상청 격자 좌표 시스템 선택

- 기상청 API는 위경도가 아닌 격자 좌표(nx, ny) 기반으로 동작
- 5km 단위 격자로 전국을 나누어 정확한 날씨 정보 제공
- 공공 데이터로 무료이며 신뢰도가 높음

#### 좌표 변환 프로세스

1. **현재 위치 날씨 조회**:
   - Geolocation API로 현재 위치의 위경도를 획득
   - 격자 변환 함수를 사용해 nx, ny를 계산
   - 기상청 API에 격자 좌표를 전달하여 날씨 데이터 조회
   - 카카오 주소 변환 API로 현재 위치의 위경도를 주소명으로 변환 (UI 표시용)

2. **지역 검색 날씨 조회**:
   - 사용자가 선택한 지역명을 카카오 로컬 API에 전달
   - 응답받은 주소를 카카오 주소 변환 API로 위경도로 변환
   - 응답받은 위경도를 격자 변환 함수를 사용해 nx, ny로 변환
   - 변환된 격자 좌표로 기상청 API를 호출하여 날씨 데이터 조회

### 4. 기상청 API 시간 계산 로직

#### 초단기 실황 (현재 날씨)

- 매시간 정각 기준 발표되나, 실제 데이터가 지연되어 조회가 안됨
- → 현재 시각이 40분 이전이면 이전 정각 데이터를 baseTime으로 사용

#### 단기예보 (시간대별 예보)

- 1일 8회만 발표 (02, 05, 08, 11, 14, 17, 20, 23시)
- 현재 시간보다 이전인 가장 가까운 발표 시각 자동 계산
- 예시:
  - 현재 15:30 → `baseTime: "1400"` 사용
  - 현재 02:05 → `baseTime: "2300"` (전날) 사용

#### 일일 최고/최저 기온

- 일일 최고/최저 기온은 하루 1회 생성, 단기예보 02:00 발표 데이터에만 포함됨
- 02:00 발표 데이터는 실제로 02:10 이후부터 조회 가능
- 따라서 02:10 이전에는 전날 23:00 발표 데이터를 사용

---

## ✨ 주요 기능 설명

### 1. 현재 위치 기반 날씨 정보

- **Geolocation API**를 사용하여 사용자의 현재 위치 자동 감지
- 카카오 주소 변환 API로 위경도 → 주소 변환
- 기상청 격자 좌표 변환 후 실시간 날씨 데이터 표시
- 현재 기온, 최저/최고 기온, 시간대별 예보 제공

### 2. 지역별 날씨 검색

- 전국 지역 데이터 검색 지원
- **Debounce** 적용으로 검색 성능 최적화
- Intersection Observer로 무한 스크롤 구현

### 3. 즐겨찾기 관리

- 자주 보는 지역을 즐겨찾기로 저장
- LocalStorage 연동으로 데이터 영구 저장
- 즐겨찾기 수정 기능 (별칭 설정)
- 즐겨찾기 탭에서 빠른 접근

### 4. 반응형 디자인

- 모바일 퍼스트 설계 (Tailwind CSS)
- 데스크톱(1024px 이상)에서 사이드바 레이아웃 자동 전환

---

## 미리보기

- 현재날씨 및 메인페이지

  <img width="700" height="370" alt="Image" src="https://github.com/user-attachments/assets/4cc51501-ceac-4bec-b51b-2ea22437acaf" />

- 지역 검색

  <img width="700" height="370" alt="Image" src="https://github.com/user-attachments/assets/e46241e0-fd19-41d7-907a-02e8468b7b66" />

- 지역 상세페이지

  <img width="700" height="370" alt="Image" src="https://github.com/user-attachments/assets/da6e82d4-8476-4133-b199-53d37bbe599c" />

- 즐겨찾기 탭

  <img width="700" height="370" alt="Image" src="https://github.com/user-attachments/assets/ce9f181f-253c-440a-b427-89831149412c" />

---
