![image](https://github.com/sjeroh/react_basic/assets/36749506/5afc8805-d062-433a-9c76-cdc08ab9470b)
https://www.npmjs.com/package/json-server

    npm i json-server

# db.json 파일 만들기
![image](https://github.com/sjeroh/react_basic/assets/36749506/cd20a970-1eb6-4591-a7c5-a5dc5a2a1130)
# db.json파일은 root에 만들어야한다.
![image](https://github.com/sjeroh/react_basic/assets/36749506/8fb7198e-ac1f-4239-b1f4-ef9288697e9e)

# db.json 실행하기.
![image](https://github.com/sjeroh/react_basic/assets/36749506/75f31455-238f-49a7-a496-0a97d1feedae)

# 위와 같이 실행하면 port 3000번을 사용하기 때문에 react와 중복이 되어버린다.
# 그래서 포트를 변경해줘야 한다.

        json-server --watch db.json --port 3004
       
# 혹시 실행이 안된다면 아래를 적용한다.

        npx json-server --watch db.json --port 3004



# 서버와 통신하기.
![image](https://github.com/sjeroh/react_basic/assets/36749506/9ea1c37b-50a4-4270-bd31-db5a33b25960)

        npm i axios
        
![image](https://github.com/sjeroh/react_basic/assets/36749506/34df04f3-80cb-4ed6-8f2c-dbbe8f179be5)
## 역할을 하고 있는 터미널에는 하면 안되고 새로 추가해야한다.

![image](https://github.com/sjeroh/react_basic/assets/36749506/13085d7b-2a05-41ae-adce-7170878edc28)
## app.js에 import 해주기.

##   const onSubmit = () => {
    axios.post("http://localhost:3004/posts", {
      title: title,
      body: body,
    });
  };
# 
