select EMP_NO, EMP_NAME,
        case
            when SCORE >= 96 then "S"
            when SCORE >= 90 then "A"
            when SCORE >= 80 then "B"
            else "C"
        end GRADE,
        case
            when SCORE >= 96 then SAL * 0.2
            when SCORE >= 90 then SAL * 0.15
            when SCORE >= 80 then SAL * 0.1
            else 0
        end BONUS
from (select EMP_NO, EMP_NAME, avg(SCORE) SCORE, SAL
      from HR_EMPLOYEES join HR_GRADE using(EMP_NO)
      group by EMP_NO) A
order by 1