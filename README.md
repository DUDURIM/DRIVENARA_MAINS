<div align="center">
<h1>DRIVENARA_MAINS</h1>
<img width="750" alt="banner7" src="https://user-images.githubusercontent.com/87938427/198837819-15f7ab99-ec8f-4c31-b2a9-26107ade1329.png">
</div>

## DRIVENARA_MAINS
- 개인 프로젝트
- 220301~ 220401
- Use: HTML, CSS, JavaScript, JQuery, Bootstrap, React.js

## 프로젝트 소개
- DRIVENARA_MAINS 서비스란?
- DRIVE NARA 삼국지 프로젝트의 Main 웹페이지
- 카카오 오픈 API를 이용해 드라이브 장소 즐겨찾기 기능 제공


<div align="center">
<h1>실행 및 오류 발생 해결법</h1>
</div>
</br>
<div>
웹사이트 주소 : https://dudurim.github.io/DRIVENARA_MAINS/
</div>
</br>
<div>
** 클론 실행시 오류 
$ react-scripts start 'react-scripts'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다. error Command failed with exit code 1.
발생시 터미널에 npm update 입력 후 npm start 또는 yarn start 입력
업데이트 하고도 실행이 안되면 npm install -g react-scripts 입력
</div>
</br>
➜ test git:(master) git push -u origin master To https://github.com/donggu1105/test.git ! [rejected] master -> master (fetch first) error: failed to push some refs to 'https://github.com/donggu1105/test.git' hint: Updates were rejected because the remote contains work that you do hint: not have locally. This is usually caused by another repository pushing hint: to the same ref. You may want to first integrate the remote changes hint: (e.g., 'git pull ...') before pushing again. hint: See the 'Note about fast-forwards' in 'git push --help' for details.

다음과 같은 오류가 뜨면 기존데이터가 손실될수있어서 푸쉬를 막은것이다.
git push origin +master 입력으로 강제 푸쉬를 진행하면 된다.
