import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import MovieDetail from "./page/MovieDetail";
import Movies from "./page/Movies";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation";
import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Login from "./Components/Login";
import JoinUser from "./Components/JoinUser";

//1. main page , movie page , detail page 3개의 페이지
//2. 배너를 볼 수있다, 메뉴가 있다, 섹션별 상영작 리스트를 볼 수 있다(popular, top rated, upcoming)
//3. 각 영화의 마우스를 올려 놓으면 제목, 장르, 점수, 인기도 , 청불여부
//4. 영화를 슬라이드로 넘기면서 리스트를 더 확인 할 수 있다.
//5. 영화 디테일 페이지에서 영화에 대한 디테일한 정보를 볼 수 있다. (포스터, 제목 , 점수 , 인기도 , 청불 여부, 줄거리 ,등..)
//6. trailer를 누르면 예고편을 볼 수 있다.
//7. 영화 리뷰도 볼 수 있다.
//8. 관련된 영화도 볼 수 있다.
//9. 영화 검색도 가능하다.
//10. 영화 정렬도 가능하다.
//11. 영화를 필터링 할 수도 있다.

function App() {
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <div>
      <Navigation black={blackHeader} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<JoinUser />} />
      </Routes>
    </div>
  );
}

export default App;
