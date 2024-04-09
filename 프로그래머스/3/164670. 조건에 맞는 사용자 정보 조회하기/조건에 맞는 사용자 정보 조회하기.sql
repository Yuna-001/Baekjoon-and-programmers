select USER_ID, NICKNAME, concat(CITY," ",STREET_ADDRESS1," ", STREET_ADDRESS2) 전체주소, concat(left(TLNO,3),"-",mid(TLNO,4,4),"-",mid(TLNO,8)) 전화번호
from USED_GOODS_BOARD join USED_GOODS_USER on WRITER_ID = USER_ID
group by USER_ID
having count(BOARD_ID) >= 3
order by 1 desc