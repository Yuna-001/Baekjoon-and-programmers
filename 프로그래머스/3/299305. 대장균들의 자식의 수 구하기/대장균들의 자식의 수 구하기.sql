select ID, ifnull(CHILD_COUNT,0) CHILD_COUNT
from ECOLI_DATA a left join 
(select PARENT_ID, count(ID) CHILD_COUNT
from ECOLI_DATA
group by PARENT_ID
having PARENT_ID is not null) as b
on a.ID = b.PARENT_ID
order by 1
