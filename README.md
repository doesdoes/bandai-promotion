# 반다이 프로모션 리액트 프로젝트

간단한 설문을 통해 맞춤 링크를 제공하는 이벤트 페이지의 로직 부분.

## 설치 및 실행

```
npm i // 모듈 설치
npm run start // 로컬 실행
```
- - -

## 배포
```
npm run build
```

```jsp
<div id="root"></div>
...
<script type="text/javascript" src="/jscript/sub/promotion/mbti/static/js/787.aae5c128.chunk.js"></script>
<script type="text/javascript" src="/jscript/sub/promotion/mbti/static/js/main.441eb0ad.js"></script>
```
npm 스크립트를 통해 배포 버전을 만듭니다.

jsp에 root 엘리먼트를 만들어 리액트가 렌더링 될 공간을 마련합니다.
빌드된 static 폴더를 반다이 프로젝트로 옮긴 뒤 jsp 스크립트 단에서 로드될 수 있도록 스크립트 경로를 설정합니다. 파일 이름은 랜덤하게 생성되기 때문에 빌드때마다 경로를 바꿔줘야 합니다.
