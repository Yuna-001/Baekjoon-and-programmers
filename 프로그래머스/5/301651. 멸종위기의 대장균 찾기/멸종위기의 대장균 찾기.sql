with recursive rc as(
    select ID, 1 as GENERATION
    from ECOLI_DATA
    where PARENT_ID is null
    union all
    select ed.ID, GENERATION + 1
    from ECOLI_DATA ed join rc on ed.PARENT_ID = rc.ID 
)

select count(ID) COUNT, GENERATION
from rc
where ID not in (
    select distinct PARENT_ID
    from ECOLI_DATA
    where PARENT_ID is not null
)
group by GENERATION
order by GENERATION