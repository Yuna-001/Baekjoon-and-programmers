with recursive cte as (
    select 0 as hour
    union all
    select hour+1 from cte where hour<23
)

select hour, count(ANIMAL_ID)
from ANIMAL_OUTS outs right join cte on HOUR(outs.DATETIME) = cte.hour
group by hour
order by hour