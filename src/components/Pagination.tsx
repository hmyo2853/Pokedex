import { useState, useEffect } from "react";

interface PaginationType {
  totalPage : number;
  limit : number;
  page : number;
  setPage : number;
}

export default function Pagination({ totalPage, limit, page, setPage }:PaginationType) {
  // 총 페이지 갯수에 따라 Pagination 갯수 정하기, limit 단위로 페이지 리스트 넘기기
  
  /** 총 페이지수 : Math.ceil(모든 전체 갯수 / 보여줄 갯수)
  화면에 보여질 페이지 한 줄 :  Math.ceil(현재 페이지 / 한 줄에 보여지는 페이지 수)
  화면에 그릴 첫 페이지 : 화면에 그릴 막 페이지 - ( 화면에 보여질 페이지 한 줄 - 1)
  화면에 그릴 막 페이지 : 현재 페이지 그룹 * 화면에 보여질 페이지 한 줄
  */
  const [currentPageArray, setCurrentPageArray] = useState([]);
  const [totalPageArray, setToatalPageArray] = useState([]);

  useEffect(() => {
    if (page % limit === 1) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit)])
    } else if (page % limit === 0) {
      setCurrentPageArray(totalPageArray)
    }
  })
  
  return <div></div>;
}
