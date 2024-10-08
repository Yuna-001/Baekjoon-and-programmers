select ID, GENOTYPE, PARENT_GENOTYPE
from ECOLI_DATA join 
    (select ID as PARENT_ID, GENOTYPE as PARENT_GENOTYPE
    from ECOLI_DATA
    ) as parent
using(PARENT_ID)
where GENOTYPE & PARENT_GENOTYPE = PARENT_GENOTYPE
order by ID
