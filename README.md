# 🚍 INU Guide Bus (server)

인천대학교 신입생을 대상으로, 학교의 전반적인 정보를 알려주는 웹 어플리케이션입니다.

## 🚌 Client Image View(시안)

|                                                                     홈                                                                     |                                                                정보 게시판                                                                 |
| :----------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="500" alt="demo 1" src="https://user-images.githubusercontent.com/48751435/120096350-e4d5b300-c165-11eb-88eb-12f574341d27.png"> | <img width="450" alt="demo 2" src="https://user-images.githubusercontent.com/48751435/120096461-a260a600-c166-11eb-8be8-a045b9dd8727.jpg"> |

## 🚌 Directory

```
├── src/                               -
│   ├── api/                           -
│   │   ├── controllers/               -
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
│   │
│   ├── config/                        -
│   ├── loaders/                       -
│   ├── modules/                       -
│   └── index.js                       -
│
├── README.md                          - 리드미
└── package.json                       - 사용한 모듈 목록
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
