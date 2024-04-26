select id, 
    case 
        when SIZE_OF_COLONY <= 100 then "LOW" 
        when SIZE_OF_COLONY <= 1000 then "MEDIUM"
        when SIZE_OF_COLONY > 1000 then "HIGH"
    end SIZE
from ECOLI_DATA
order by 1