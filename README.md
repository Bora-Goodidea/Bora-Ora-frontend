<div align="center">
<div style="text-align: center;"><h4>📚 STACKS</h4></div>

<div style="text-align: center;">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="...">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="...">
<img src="https://img.shields.io/badge/typescript-1572B6?style=for-the-badge&logo=typescript&logoColor=black" alt="...">
<img src="https://img.shields.io/badge/tailwindcss-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="...">
<br>
</div>
<br />

<div style="text-align: center;">
    <h1 style="text-align: center;">BoraOra Front-End</h1>
</div>

</div>
## BorOra Project

> 풋살 대관 개발 스터디

## 개발 환경

> env.* 파일 생성

```sh
# cp .config/env.sample .config/env.local
# cp .config/env.sample .config/env.dev

# yarn start
```

> Docker 환경

* 개발 환경시(Ex. node module 설치) docker:shell 로 접근후에 docker 안에서 하길 추천함 docker 환경 버전과 로컬 환경 버전이 다를수 있기 떄문에 그외에는 기존과 동일.
* run 명령어로 띄웠을경우에 최초 접근은 직접 접근해야 합니다. ( http://localhost:3000 )
* port 를 변경 핤경우 docker-compose.yml 에서 직접 변경 하세요.
* node 버전 변경해야 하는경우는 Dockerfile 에서 직접 수정해서 다시 빌드 해야 합니다.


* build
```sh
# yarn docker:build
```

* 로컬 개발환경 시작 ( yarn start )
```sh
# yarn docker:run
```

* damon up
```sh
# yarn docker:up
```

* damon down
```sh
# yarn docker:down
```

* docker container 로그인
 - 도커로 개발 할경우 되로록 container 안에서 yarn install 등 사용하는걸 추천.
```sh
# yarn docker:shell
```

* node_module 삭제하고 다시 설치
```sh
# yarn docker:module
```


## 참고 문서

ESLint and
Prettier - [Set Up ESLint and Prettier in a React TypeScript App (2023)](https://javascript.plainenglish.io/set-up-eslint-and-prettier-in-a-react-typescript-app-2022-7d9a5f40b634)

## Contact

* 박성민 - [@psmever](https://github.com/psmever) - psmever@gmail.com
* 진하영 - [@Jin-composition](https://github.com/Jin-composition) - jinhy921207@naver.com
* 서보문 - [@gloriogo](https://github.com/gloriogo_aa) - gloriogo@gmail.com
* 우의명 - [@wem519](https://github.com/wem519) - wem519@gmail.com

Project Link: [https://localhost:3000](https://localhost:3000)

## License

[MIT](https://choosealicense.com/licenses/mit/)
