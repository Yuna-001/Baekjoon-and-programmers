-- 코드를 입력하세요
SELECT PRODUCT_CODE, SUM(PRICE*SALES_AMOUNT) SALES
FROM PRODUCT p join OFFLINE_SALE o USING(PRODUCT_ID)
GROUP BY PRODUCT_CODE
ORDER BY SALES DESC,PRODUCT_CODE