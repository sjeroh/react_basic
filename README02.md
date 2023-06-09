# components 만들기 == 폴더 #react2 참조


![image](https://github.com/sjeroh/react_basic/assets/36749506/36e1687d-6dd1-4b28-a1d0-690643075516)


# JSX문법에서 javascript를 사용할때는 {}를 사용한다.
# html의 class를 react에서 만들때는 className='' 형식으로 만든다.
![image](https://github.com/sjeroh/react_basic/assets/36749506/7cb2c115-b499-4a37-a40e-20b559c17ef9)

# return문은 반드시 하나의 태그로 되어 있어야한다.
![image](https://github.com/sjeroh/react_basic/assets/36749506/beb581ef-bd21-4db0-9696-6e5defaf5dc6)
![image](https://github.com/sjeroh/react_basic/assets/36749506/06bff78a-46ce-4297-8a30-5bac8fa062f0)

# 해결방법 부모 태그로 싸줘야한다. (<div>)또는 Fragment로 싸줘야한다.
![image](https://github.com/sjeroh/react_basic/assets/36749506/e4e574f9-3d45-4d5d-b93d-84fcb3617d9b)
플래그먼트로 처리해도 된다. 꼭 div를 만들 필요는 없다.
  
# 함수만들기
  ![image](https://github.com/sjeroh/react_basic/assets/36749506/b2ba3eb0-dce2-41e5-b9f7-ae35ae7f38dd)
  
# 화살표함수
![image](https://github.com/sjeroh/react_basic/assets/36749506/4c1985d4-0308-442a-b27d-a1e154813a41)


# 함수를 밖으로 뺴기
![image](https://github.com/sjeroh/react_basic/assets/36749506/bdb5fe13-14c4-411c-a617-6f2609ff1706)

  
# 클릭하면 함수실행(이벤트 핸들러 event handler)
  ![image](https://github.com/sjeroh/react_basic/assets/36749506/25494b09-ee2a-40dc-94c5-08e442583f41)
==> 화살표 함수로 바뀜
  
# 함수 밖으로 빼기
![image](https://github.com/sjeroh/react_basic/assets/36749506/6527685c-b47e-4b70-bd97-56efdce2153f)
![image](https://github.com/sjeroh/react_basic/assets/36749506/a5687587-d9f9-4233-95b2-1dcf057e70bb)

  
# 콘솔에는 숫자가 바뀌어지는데 화면에는 바뀌지 않는다.
  ![image](https://github.com/sjeroh/react_basic/assets/36749506/64852695-0b03-4fce-8c97-dd0a118c723b)

 - react에서는 변수가 바뀐다고해서 리렌더링이 일어나지 않는다.
  ==>해결책) 리렌더링이 일어나게 하려면 useState(react Hook)를 사용해야한다.
  ![image](https://github.com/sjeroh/react_basic/assets/36749506/a49bdb91-7247-4746-992c-8dbef2d42c81)
