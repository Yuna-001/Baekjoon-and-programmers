with cte as(
    select ID, percent_rank() over(order by SIZE_OF_COLONY desc) *100 SIZE_PERCENT_RANK
    from ECOLI_DATA
)

select ID,
    case
        when SIZE_PERCENT_RANK <= 25 then "CRITICAL"
        when SIZE_PERCENT_RANK <= 50 then "HIGH"
        when SIZE_PERCENT_RANK <= 75 then "MEDIUM"
        else "LOW"
    end COLONY_NAME
from cte
order by ID
