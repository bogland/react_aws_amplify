## amplify cli 설치
> npm install -g @aws-amplify/cli

## yarn 설치
> npm install -g yarn
- yarn 으로 설치해야 이상한 에러가 안떴다.

## amplify 설치
> yarn add @aws-amplify/ui-react aws-amplify

## 설정 파일 생성
/src/aws-exports.js

## 설정 방법
amplify 설정 페이지에 적혀있는 명령어 amplify pull 
> amplify pull xxx xxxx

## User Pool 세팅
- 회색으로 변경 불가는 다시 만들어야함

![](https://drive.google.com/uc?export=view&id=1FCMVI3fds9WbxJMfxC66vhbXKq5sAqnU) 
![](https://drive.google.com/uc?export=view&id=1BzVpxEN8wxHIb7eJGZjd4SWqlrgCUtB-)
![](https://drive.google.com/uc?export=view&id=1RuVBZKOD3lvb-1dLZQ3B1JzXateVIYt7) 
![](https://drive.google.com/uc?export=view&id=1O7W3cBsmqpQwFv4RurbLILtsM9qgic8j) 
![](https://drive.google.com/uc?export=view&id=1hhavs6lMdJUF4zbi341gwKJ5X7TV7a5e) 
![](https://drive.google.com/uc?export=view&id=1j1pQ0R7qrmLpPvS3tLu6l0MKuMD6RnsV) 

## User pool 받아오기
> amplify import Auth
> amplify push

## 실행
yarn start 

## 처음 시작할때 amplify 설정이 될수 있도록
> import awsconfig from './aws-exports';
> Amplify.configure(awsconfig);

## React Amplify Auth 함수 사용법
https://www.youtube.com/watch?v=9BSpY-fEbdM  

## SMS 한도 증가
https://blog.naver.com/PostView.naver?blogId=chandong83&logNo=222146746303&redirect=Dlog&widgetTypeCall=true&directAccess=false

## SMS 샌드박스 벗어나기
https://any-ting.tistory.com/96  
