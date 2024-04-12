select year(SALES_DATE) YEAR, month(SALES_DATE) MONTH, count(distinct USER_ID) 	PUCHASED_USERS, round(count(distinct USER_ID)/(
    select count(USER_ID)
    from USER_INFO
    where year(JOINED) = 2021
),1) PUCHASED_RATIO
from USER_INFO join ONLINE_SALE using(USER_ID)
where year(JOINED) = 2021
group by 1, 2
order by 1, 2