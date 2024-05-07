select SUM(SCORE) SCORE, EMP_NO, EMP_NAME, POSITION, EMAIL
from HR_EMPLOYEES join HR_GRADE using(EMP_NO)
group by EMP_NO
order by 1 desc
limit 1
