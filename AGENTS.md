# Agent Roles

이 문서는 멀티 에이전트 오케스트레이션 대시보드 프로젝트에서 사용하는 에이전트 정의 파일과 OpenAgent 카테고리 구성을 정리한다.

## 설정 구조

프로젝트는 두 층으로 에이전트를 관리한다.

1. 실제 실행용 카테고리 정의는 `.opencode/oh-my-openagent.json`에서 관리한다.
2. 사람이 읽고 유지보수하는 역할 정의서는 `.opencode/agents/*.md`에 둔다.

즉, `oh-my-openagent.json`은 실행 설정의 소스이고, `.opencode/agents/`는 역할 설명의 소스다.

## 에이전트 파일 위치

```text
.opencode/oh-my-openagent.json
.opencode/agents/planner.md
.opencode/agents/senior-designer.md
.opencode/agents/code-reviewer.md
.opencode/agents/cynical-code-reviewer.md
.opencode/agents/tdd-agent.md
.opencode/agents/worker-holic-programmer.md
.opencode/agents/guru-programmer.md
.opencode/agents/code-snapshot-expert.md
.opencode/agents/orchestration-lead.md
.opencode/agents/backend-api-agent.md
.opencode/agents/product-analytics-agent.md
.opencode/agents/realtime-monitoring-agent.md
.opencode/agents/security-compliance-agent.md
.opencode/agents/qa-e2e-agent.md
.opencode/agents/operations-sre-agent.md
```

## 에이전트 목록

| 카테고리 | 역할 | 주요 산출물 | 수정 범위 | 정의 파일 |
| --- | --- | --- | --- | --- |
| `planner` | 기획자 | `spec-requirement.md` | 수정 불가 | `.opencode/agents/planner.md` |
| `senior-designer` | 시니어 디자이너 | `design.md` | 수정 불가 | `.opencode/agents/senior-designer.md` |
| `code-reviewer` | 코드 리뷰어 | 클린 코드 기반 리뷰 | 수정 불가 | `.opencode/agents/code-reviewer.md` |
| `cynical-code-reviewer` | 시니컬한 코드 리뷰어 | 직설적인 코드 리뷰 | 수정 불가 | `.opencode/agents/cynical-code-reviewer.md` |
| `tdd-agent` | TDD 에이전트 | 테스트 코드 | 프로젝트 전반, 원본 코드 수정 금지 | `.opencode/agents/tdd-agent.md` |
| `worker-holic-programmer` | Worker Holic Programmer | 프론트엔드 중심 구현 코드 | 프로젝트 전반 | `.opencode/agents/worker-holic-programmer.md` |
| `guru-programmer` | GURU Programmer | 풀스택 구현 코드, 구조 개선안 | 프로젝트 전반 | `.opencode/agents/guru-programmer.md` |
| `code-snapshot-expert` | Code-snapshot 전문가 | `Architecture.md`, `Project-Summary.md` | 프로젝트 전반의 문서 산출물 | `.opencode/agents/code-snapshot-expert.md` |
| `orchestration-lead` | 오케스트레이션 리드 | 실행 계획, 역할 배정, 핸드오프 기록 | 계획/운영 문서 | `.opencode/agents/orchestration-lead.md` |
| `backend-api-agent` | 백엔드/API 에이전트 | API 코드, 데이터 모델, API 명세 | 백엔드 코드, API 문서, 서버 테스트 | `.opencode/agents/backend-api-agent.md` |
| `product-analytics-agent` | 제품 분석 에이전트 | 지표 정의서, 이벤트 정의 | 분석 문서, 이벤트 명세 | `.opencode/agents/product-analytics-agent.md` |
| `realtime-monitoring-agent` | 실시간 모니터링 에이전트 | 알림 규칙, 상태 정의 | 모니터링 설정, 알림 문서 | `.opencode/agents/realtime-monitoring-agent.md` |
| `security-compliance-agent` | 보안/컴플라이언스 에이전트 | 보안 점검 결과, 권한 매트릭스 | 보안 문서, 권한/감사 관련 코드 | `.opencode/agents/security-compliance-agent.md` |
| `qa-e2e-agent` | QA/E2E 에이전트 | E2E 테스트, QA 체크리스트 | 테스트 코드, QA 문서 | `.opencode/agents/qa-e2e-agent.md` |
| `operations-sre-agent` | 운영/SRE 에이전트 | 운영 가이드, 배포 체크리스트, 복구 절차 | 운영 문서, 배포/관측 설정 | `.opencode/agents/operations-sre-agent.md` |

## 역할별 운영 기준

### `planner`

Stakeholder의 요구사항과 대시보드 목표를 받아 `spec-requirement.md`를 작성한다. 애매한 요구사항은 확인 필요 항목으로 남기고, 범위와 우선순위를 분리한다.

### `senior-designer`

사용자 흐름과 정보 구조를 바탕으로 `design.md`를 작성한다. 구현 파일은 수정하지 않고, 핵심 화면과 상태 표현, 상호작용 원칙을 구체적으로 정리한다.

### `code-reviewer`

관련 코드와 테스트, 문서를 읽고 클린 코드 관점의 리뷰를 남긴다. 문제점은 근거와 함께 적고, 애매한 부분은 단정하지 않는다.

### `cynical-code-reviewer`

관련 코드를 읽고 숨김없는 직설적 리뷰를 남긴다. 비판은 코드와 설계에만 집중하며, 다른 리뷰어와 감정적으로 충돌하지 않는다.

### `tdd-agent`

신규 코드와 API 명세를 바탕으로 테스트를 작성한다. 테스트를 통과시키기 위해 원본 코드를 수정하지 않는다.

### `worker-holic-programmer`

`design.md`, `Architecture.md`, `Project-Summary.md`를 입력으로 받아 프론트엔드 중심 구현을 맡는다. 다른 역할의 산출물을 대신 만들지 않는다.

### `guru-programmer`

어려운 구현과 구조 결정을 맡는 풀스택 역할이다. 설계 문서와 기존 코드를 함께 보고 구조와 품질을 끌어올린다.

### `code-snapshot-expert`

현재 코드와 문서를 읽고 `Architecture.md`, `Project-Summary.md`를 갱신한다. 문서 차이가 크면 버전 전략도 함께 남긴다.

### `orchestration-lead`

역할 간 작업 순서, 의존성, 승인 흐름을 조율한다. 직접 구현 대신 병목 해소, 역할 배정, 핸드오프 기준 정리에 집중한다.

### `backend-api-agent`

대시보드용 API, 데이터 모델, 권한 경계, 연동 테스트를 맡는다. 화면 편의를 이유로 권한과 감사 기록을 약화시키지 않는다.

### `product-analytics-agent`

사용자가 어떤 상태와 지표를 보고 판단하는지 정의한다. 화면별 이벤트와 KPI를 실제 의사결정 기준으로 연결한다.

### `realtime-monitoring-agent`

에이전트 실행 상태, 지연, 실패, 복구를 대시보드에서 관찰할 기준을 만든다. 알림은 행동이 필요한 사건 위주로 설계한다.

### `security-compliance-agent`

권한, 비밀값, 감사 로그, 데이터 보존 기준을 점검한다. 과도한 권한, 민감 정보 노출, 감사 불가능 상태를 허용하지 않는다.

### `qa-e2e-agent`

핵심 사용자 흐름과 실패 흐름을 종단간으로 검증한다. 단순 렌더링 확인이 아니라 실제 작업 완료 여부를 본다.

### `operations-sre-agent`

배포, 롤백, 장애 감지, 복구 절차를 정리한다. 특정 벤더 기능보다 운영 원칙과 실행 가능한 절차를 우선한다.

## 권장 작업 흐름

1. `planner`가 요구사항과 우선순위를 `spec-requirement.md`로 정리한다.
2. `product-analytics-agent`가 핵심 지표, 이벤트, 의사결정 흐름을 정의한다.
3. `senior-designer`가 화면 구조와 상태 표현을 `design.md`로 정리한다.
4. `code-snapshot-expert`가 현재 코드와 문서를 읽고 `Architecture.md`, `Project-Summary.md`를 갱신한다.
5. `orchestration-lead`가 역할별 작업 순서, 입력, 출력, 승인 지점을 연결한다.
6. `backend-api-agent`, `worker-holic-programmer`, `guru-programmer`가 정해진 범위 안에서 구현한다.
7. `tdd-agent`와 `qa-e2e-agent`가 API, 화면, 핵심 사용자 흐름을 검증한다.
8. `security-compliance-agent`가 권한, 감사 로그, 민감 정보 처리를 점검한다.
9. `realtime-monitoring-agent`와 `operations-sre-agent`가 운영 기준과 장애 대응 절차를 준비한다.
10. `code-reviewer`와 `cynical-code-reviewer`가 구현을 수정하지 않고 리뷰 결과를 남긴다.

## 사용 예시

Oh My OpenAgent에서 작업을 위임할 때는 설정된 카테고리 이름을 사용한다.

```text
category="planner"
category="orchestration-lead"
category="backend-api-agent"
category="qa-e2e-agent"
category="operations-sre-agent"
```

카테고리 정의는 `.opencode/oh-my-openagent.json`에서 관리하고, 역할별 설명 원문은 `.opencode/agents/`와 `agent-team.md`에서 관리한다.
