# eeFunction Documentation

Astro Starlight 기반의 eeFunction 공식 기술 문서 사이트입니다. eeFunction은 Microsoft Excel에서 유체·열역학·엔지니어링 계산 함수를 사용할 수 있도록 제공하는 Office Add-in입니다.

- Documentation: https://eefunction-doc.brbrsoft.com
- Product site: https://eefunction.brbrsoft.com
- Repository: https://github.com/tobony/eefunction-doc

## 저장소 역할

이 저장소는 다음 공개 문서를 관리합니다.

- 설치 및 시작 안내
- Free 및 Pro 함수 레퍼런스
- 계산 모델과 단위 참고자료
- Excel 플랫폼 호환성 정보
- 지원 안내와 릴리스 노트

제품의 계산 엔진, 라이선스 처리, 배포 서명 정보 및 비공개 테스트 코드는 이 저장소에 포함하지 않습니다.

## 주요 구조

```text
.
├── .github/workflows/      # 문서 진단 및 빌드 검증
├── src/
│   ├── assets/             # 문서 이미지와 아이콘
│   ├── components/         # Starlight 커스텀 컴포넌트
│   ├── content/
│   │   ├── docs/           # 영문 문서
│   │   └── docs/ko/        # 한국어 문서
│   └── styles/             # 표 및 eeFunction 브랜드 스타일
├── astro.config.mjs        # Starlight 사이트 설정
├── package.json
└── package-lock.json
```

## 개발 명령어

| Command | Action |
| :-- | :-- |
| `npm ci` | 잠금 파일을 기준으로 의존성 설치 |
| `npm run dev` | 로컬 개발 서버 실행 (`0.0.0.0:4321`) |
| `npm run build` | 정적 사이트 빌드 (`dist/`) |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run astro -- --help` | Astro CLI 도움말 |

## 문서 작성 규칙

- 기본 영문 문서는 `src/content/docs/` 아래에 작성합니다.
- 한국어 문서는 같은 상대 경로로 `src/content/docs/ko/` 아래에 작성합니다.
- 새 문서 파일명은 소문자 kebab-case를 사용합니다.
- 한국어 문서의 내부 링크는 한국어 경로(`/ko/...`)로 연결합니다.
- 함수명, 매개변수 순서, 입력·출력 단위는 제품의 공개 API로 취급합니다.
- 출시된 기능과 준비 중인 기능을 구분하고 Free·Pro 상태를 명시합니다.
- 계산 범위, 모델 및 기술적 주장은 제품 코드나 검증된 참고자료와 일치해야 합니다.
- 고객 데이터, 라이선스 키, 비공개 저장소 링크와 제품 내부 코드를 문서에 포함하지 않습니다.

## 검증

`main` 브랜치와 Pull Request에서 GitHub Actions가 다음 검사를 실행합니다.

1. `package-lock.json`을 기준으로 의존성 설치
2. Astro 문서 및 TypeScript 진단
3. 정적 문서 사이트 빌드

## 배포

Cloudflare Pages가 GitHub 저장소의 `main` 브랜치를 연결해 배포합니다.

- Build command: `npm run build`
- Output directory: `dist`
- Production URL: `https://eefunction-doc.brbrsoft.com`

기존 `pages.dev` 주소는 Cloudflare의 기본 프로젝트 주소로 남을 수 있지만, 문서 내 canonical URL과 공개 안내에는 커스텀 도메인을 사용합니다.

## 로컬 개발 점검

- 개발 서버는 `0.0.0.0:4321`에서 수신해야 합니다.
- 접속 확인: `curl http://127.0.0.1:4321/`
- VS Code Ports 패널에서 4321 포트가 `Forwarded` 상태인지 확인합니다.
