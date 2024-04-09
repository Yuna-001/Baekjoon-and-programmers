select ORDER_ID, PRODUCT_ID, date_format(OUT_DATE,"%Y-%m-%d") OUT_DATE,
    case
        when OUT_DATE is null then "출고미정"
        when date_format(OUT_DATE,"%m-%d") < "05-02" then "출고완료"
        else "출고대기"
    end 출고여부
from FOOD_ORDER
order by 1