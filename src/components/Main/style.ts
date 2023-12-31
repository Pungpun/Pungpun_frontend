import styled from "styled-components";
import Box from "../../assets/box.png";

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 3% 25%;
  align-items: center;
`;

export const MainDate = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const NowTime = styled.div`
  font-size: 25px;
`;

export const Time = styled.div`
  font-size: 100px;
  font-weight: lighter;
`;

export const DateTime = styled.div`
  font-size: 25px;
`;

export const MainSearch = styled.div`
  display: flex;
  width: 100%;
  padding-top: 5%;
`;

export const Search = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  font-family: "Pretendard-Regular";
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 15px;
  }
`;

export const line = styled.div`
  width: 100%;
  border-bottom: 2px solid #bdbdbd;
`;

export const MainResult = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 9%;
  gap: 25px;
`;

export const ResultTitle = styled.div`
  display: flex;
  gap: 4px;
  font-size: 20px;
`;

export const ResultData = styled.div``;

export const Result = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  justify-content: center;
`;

export const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  width: 28%;
  height: 230px;
  background-image: url(${Box});
  border-radius: 20px;
  align-items: center;
  padding-top: 5%;
`;

export const ResultTem = styled.div`
  display: flex;
  padding-top: 8%;
`;

export const Situation = styled.div`
  font-weight: lighter;
  font-size: 40px;

  &.small {
    font-size: 30px;
  }
`;

export const Sign = styled.div`
  font-size: 20px;
`;

export const ResultRegion = styled.div`
  padding-top: 13%;
`;
