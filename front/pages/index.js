import React from 'react'; // 생략 가능하다 왜냐면, Next는 "Pages"폴더를 인식해서 여기 안에 있는 파일들을 다 개별적인 페이지로 만들어준다 (페이지 컴포넌트)
// 따라서 무족건 폴더의 이름은 "Pages"로 되있어야만 코드 스플리팅을 한다.
import AppLayout from '../components/AppLayout';


const Home = () => {
    return (
        <AppLayout>
            <div >Hello. Next!</div>
        </AppLayout>
    );
}

export default Home;