with python as (
    select ID
    from DEVELOPERS, SKILLCODES
    where NAME = "Python" and SKILL_CODE & CODE = CODE
),
front_end as (
    select ID
    from DEVELOPERS, SKILLCODES
    where CATEGORY = "Front End" and SKILL_CODE & CODE = CODE
),
a as (
    select "A" GRADE, ID, EMAIL
    from DEVELOPERS
    where ID in (select ID from front_end) and ID in (select ID from python)
),
b as (
    select "B" GRADE, ID, EMAIL
    from DEVELOPERS, SKILLCODES
    where NAME = "C#" and SKILL_CODE & CODE = CODE and ID not in (select ID from a)
),
c as (
    select "C" GRADE, ID, EMAIL
    from DEVELOPERS
    where ID in (select ID from front_end) and ID not in (select ID from python) and ID not in (select ID from b)
)

select GRADE, ID, EMAIL
from a
union
select GRADE, ID, EMAIL
from b
union
select GRADE, ID, EMAIL
from c
order by 1, 2