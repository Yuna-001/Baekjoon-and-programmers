-- 코드를 입력하세요
select mid(PRODUCT_CODE,1,2) CATEGORY, count(PRODUCT_CODE) PRODUCTS
from PRODUCT
group by 1
order by 1