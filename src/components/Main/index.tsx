import * as S from "./style";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Search from "../../assets/search.svg";
import Sun from "../../assets/sun.svg";
import Water from "../../assets/water.svg";
import Mask from "../../assets/mask.svg";

const Main = () => {
  const [searchValueCity, setSearchValueCity] = useState("");
  const resultDataRef = useRef<HTMLDivElement>(null);
  const [con, setCon] = useState("");
  const [hum, setHum] = useState("");
  const [tem, setTem] = useState("");

  const handleSearch = () => {
    axios
      .get("https://j1w0n1209.pythonanywhere.com/api", {
        params: {
          country: searchValueCity,
        },
      })
      .then(function (response) {
        console.log(response["data"]);
        setCon(response["data"]["condition"]);
        setHum(response["data"]["humidity"]);
        setTem(response["data"]["temp_c"]);
      })
      .catch(function (error) {
        console.log(error);
        alert("다시 입력해주세요");
      });

    if (resultDataRef.current) {
      resultDataRef.current.innerText = searchValueCity;
    }
  };

  // 현재시각 구하는 코드
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  // 현재 날짜 구하는 코드
  const currentDate = `${time.getFullYear()}-${(time.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${time.getDate().toString().padStart(2, "0")}`;

  const result = [
    {
      id: 1,
      weather: Sun,
      situation: tem,
      sign: "°C",
      region: searchValueCity,
    },
    {
      id: 2,
      weather: Water,
      situation: hum,
      sign: "%",
      region: searchValueCity,
    },
    { id: 3, weather: Mask, situation: con, region: searchValueCity },
  ];

  return (
    <S.MainLayout>
      <S.MainDate>
        <S.NowTime>현재시각</S.NowTime>
        <S.Time>
          {time.getHours()}:{time.getMinutes()}
        </S.Time>
        <S.DateTime>{currentDate}</S.DateTime>
      </S.MainDate>
      <S.MainSearch>
        <S.Search>
          <img
            src={Search}
            style={{ cursor: "pointer" }}
            onClick={handleSearch}
          />
          <S.SearchInput
            id="region"
            type="text"
            placeholder="원하는 지역을 검색해주세요. ex) Busan, Ulsan"
            value={searchValueCity}
            onChange={(e) => setSearchValueCity(e.target.value)}
          ></S.SearchInput>
        </S.Search>
      </S.MainSearch>
      <S.line></S.line>
      <S.MainResult>
        <S.ResultTitle>
          <S.ResultData ref={resultDataRef}></S.ResultData> 검색결과
        </S.ResultTitle>
        <S.Result>
          {result.map((item) => (
            <S.ResultBox key={item.id}>
              {item.weather && (
                <img src={item.weather} style={{ width: "50px" }} />
              )}
              <S.ResultTem>
                <S.Situation className={item.id === 3 ? "small" : undefined}>
                  {item.situation}
                </S.Situation>
                <S.Sign>{item.sign}</S.Sign>
              </S.ResultTem>

              <S.ResultRegion>
                {resultDataRef.current?.innerText}
              </S.ResultRegion>
            </S.ResultBox>
          ))}
        </S.Result>
      </S.MainResult>
    </S.MainLayout>
  );
};

export default Main;
