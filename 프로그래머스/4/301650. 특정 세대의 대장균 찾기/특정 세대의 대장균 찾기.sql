with recursive rc as(
    select ID, 1 as GEN
    from ECOLI_DATA
    where PARENT_ID is null
    union all
    select ECOLI_DATA.ID, GEN+1 GEN
    from ECOLI_DATA join rc on ECOLI_DATA.PARENT_ID = rc.ID
)

select ID
from rc
where GEN = 3
order by ID