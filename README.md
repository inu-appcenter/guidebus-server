# INU Guide Bus (server)

## 🚌 Client Image View(시안)

|                                                                     홈                                                                     |                                                                정보 게시판                                                                 |
| :----------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="500" alt="demo 1" src="https://user-images.githubusercontent.com/48751435/120096350-e4d5b300-c165-11eb-88eb-12f574341d27.png"> | <img width="450" alt="demo 2" src="https://user-images.githubusercontent.com/48751435/120096461-a260a600-c166-11eb-8be8-a045b9dd8727.jpg"> |

### <br/>

###

## 🚌 인천대학교 가이드 버스란?

인천대학교 신입생을 대상으로, 학교의 전반적인 정보를 알려주는 웹 어플리케이션입니다.

### 특징

- 눈에 띄는 UI
- 학교에 대한 전반적인 정보 제공
- 관리자(admin) 로그인으로 게시판 관리

### <br/>

###

## 🚌 Stack

`JavscSript`, `Node.js`, `MYSQL`

### <br/>

###

## 🚌 Directory

```
├── src/
│   ├── api/                           - api 구현
│   │   ├── controllers/               - client와 소통하는 컨트롤러 구현
│   │   ├── middlewares/               - 라우터 미들웨어 구현
│   │   ├── models/                    - 데이터베이스 모델 구현
│   │   ├── routes/                    - api 라우터 구현
│   │   └── services/                  - 비즈니스 로직 구현
│   │
│   ├── config/                        - 환경 설정
│   ├── loaders/                       - loader 모듈 구현
│   ├── modules/                       - 간단한 로직을 위한 모듈 구현
│   └── index.js                       - entry point
│
├── README.md                          - 리드미
└── package.json                       - 사용 package 목록
```

### <br/>

###

## 🚌 Code Convention

### Getting Started

1️⃣ 패키지 설치

```
$ npm install
```

2️⃣ 개발 스크립트 실행

```
$ npm run dev
```

### Commit Emoji

|     emoji      |                   when to use it                   |
| :------------: | :------------------------------------------------: |
|   :sparkles:   |                  새로운 기능 추가                  |
|     :bug:      |                     버그 수정                      |
| :construction: |                 작업 진행 중 커밋                  |
|  :loud_sound:  |               로그 추가 및 업데이트                |
|   :pencil2:    |               간단한 코드/오타 수정                |
|   :recycle:    |                   코드 리팩터링                    |
|    :truck:     |               파일 이동 및 이름 변경               |
|   :package:    |              패키지 추가 및 업데이트               |
|    :books:     | 문서 추가 및 업데이트 (e.g. README, Code comments) |
