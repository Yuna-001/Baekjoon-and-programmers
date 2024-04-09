-- 코드를 입력하세요
select outs.ANIMAL_ID, outs.NAME
from ANIMAL_INS ins join ANIMAL_OUTS outs using(ANIMAL_ID)
order by datediff(outs.datetime,ins.datetime) desc
limit 2